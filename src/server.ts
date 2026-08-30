import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

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

const HSTS_HEADER_VALUE = "max-age=31536000; includeSubDomains";

function applySecurityHeaders(response: Response): Response {
  if (response.headers.get("strict-transport-security")) {
    return response;
  }
  const headers = new Headers(response.headers);
  headers.set("strict-transport-security", HSTS_HEADER_VALUE);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const url = new URL(request.url);
    const hostHeader =
      request.headers.get("x-forwarded-host") || request.headers.get("host") || url.hostname;
    const hostname = hostHeader.split(":")[0].toLowerCase();

    if (hostname === "vchemicsindia.com") {
      url.hostname = "www.vchemicsindia.com";
      url.protocol = "https:";
      url.port = "";
      return new Response(null, {
        status: 301,
        headers: {
          location: url.toString(),
          "strict-transport-security": HSTS_HEADER_VALUE,
        },
      });
    }

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
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
