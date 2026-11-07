import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import {
  HSTS_HEADER_VALUE,
  canonicalRedirectTarget,
  isPagePath,
  permanentRedirect,
  requestHostname,
} from "./lib/canonical-redirects";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

function compressResponseIfNeeded(request: Request, response: Response): Response {
  if (!response.body || response.status === 204 || response.status === 304) {
    return response;
  }

  const existingEncoding = response.headers.get("content-encoding");
  if (existingEncoding && existingEncoding !== "identity") {
    return response;
  }

  const acceptEncoding = request.headers.get("accept-encoding") || "";
  const contentType = response.headers.get("content-type") || "";

  const isCompressible =
    contentType.includes("text/") ||
    contentType.includes("application/json") ||
    contentType.includes("application/javascript") ||
    contentType.includes("application/xml") ||
    contentType.includes("image/svg+xml");

  if (!isCompressible) {
    return response;
  }

  let format: "gzip" | "deflate" | null = null;
  if (typeof CompressionStream !== "undefined") {
    if (acceptEncoding.includes("gzip")) {
      format = "gzip";
    } else if (acceptEncoding.includes("deflate")) {
      format = "deflate";
    }
  }

  if (!format) {
    return response;
  }

  const headers = new Headers(response.headers);
  headers.set("content-encoding", format);
  headers.set("vary", "accept-encoding");
  headers.delete("content-length");

  const compressedBody = response.body.pipeThrough(new CompressionStream(format));

  return new Response(compressedBody, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

// Legacy URLs, trailing slashes and the bare domain: see src/lib/canonical-redirects.ts.
// The same rules also run earlier, in src/nitro/apex-redirect.ts, for files in public/.

// Baseline security headers. The CSP only limits framing, <base> and plugins, so it
// can't block Google Tag Manager, fonts or any other script/style the site loads.
const SECURITY_HEADERS: Record<string, string> = {
  "strict-transport-security": HSTS_HEADER_VALUE,
  "x-content-type-options": "nosniff",
  "x-frame-options": "SAMEORIGIN",
  "referrer-policy": "strict-origin-when-cross-origin",
  "permissions-policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "content-security-policy": "frame-ancestors 'self'; base-uri 'self'; object-src 'none'",
};

function applySecurityHeaders(response: Response): Response {
  const missing = Object.keys(SECURITY_HEADERS).filter((name) => !response.headers.has(name));
  if (missing.length === 0) {
    return response;
  }
  const headers = new Headers(response.headers);
  for (const name of missing) {
    headers.set(name, SECURITY_HEADERS[name] as string);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

// TanStack Start answers page requests that don't accept HTML (e.g. "Accept: text/markdown",
// used by some AI agents) with a 500. Serve the normal HTML page instead.
function asHtmlPageRequest(request: Request, url: URL): Request {
  if (request.method !== "GET" && request.method !== "HEAD") return request;
  if (!isPagePath(url.pathname)) return request;
  const accept = request.headers.get("accept") ?? "";
  if (!accept || /text\/html|\*\/\*/.test(accept)) return request;
  const htmlAccept = "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8";
  try {
    // The node server's request object can't be cloned with `new Request(request)`.
    request.headers.set("accept", htmlAccept);
    return request;
  } catch {
    const headers = new Headers(request.headers);
    headers.set("accept", htmlAccept);
    return new Request(request.url, { method: request.method, headers, signal: request.signal });
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const url = new URL(request.url);
    const redirectTarget = canonicalRedirectTarget(
      url,
      requestHostname(request.headers, url.hostname),
    );
    if (redirectTarget) {
      return permanentRedirect(redirectTarget);
    }

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(asHtmlPageRequest(request, url), env, ctx);
      const normalizedResponse = await normalizeCatastrophicSsrResponse(response);
      const securedResponse = applySecurityHeaders(normalizedResponse);
      return compressResponseIfNeeded(request, securedResponse);
    } catch (error) {
      console.error(error);
      const errorResponse = new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
      const securedErrorResponse = applySecurityHeaders(errorResponse);
      return compressResponseIfNeeded(request, securedErrorResponse);
    }
  },
};
