// Canonical-URL rules shared by the Nitro apex plugin (runs before static files) and
// src/server.ts (runs before page rendering), so every old or non-canonical URL reaches
// its final https://www address in a single 301.

export const CANONICAL_ORIGIN = "https://www.vchemicsindia.com";
export const APEX_HOST = "vchemicsindia.com";
export const HSTS_HEADER_VALUE = "max-age=31536000; includeSubDomains";

// Old public URLs → canonical paths (301). Keys are lowercase, without a trailing slash.
// Every slug change must add the old path here in the same commit.
export const LEGACY_REDIRECTS: Record<string, string> = {
  // Old static site (confirmed in Search Console: Pages report / Not found (404))
  "/terms.html": "/terms",
  "/product.html": "/products",
  "/service.html": "/services",
  "/about.html": "/about",
  // Old static site (standard page names; safe because each has a matching new page)
  "/index.html": "/",
  "/products.html": "/products",
  "/services.html": "/services",
  "/contact.html": "/contact",
  "/privacy.html": "/privacy",
  // Legal page aliases (were 307 temporary redirects in the router)
  "/terms-and-conditions": "/terms",
  "/privacy-policy": "/privacy",
  // Retired blog slugs
  "/blog/machine-foundation-epoxy-grouting-standards":
    "/blog/precision-grouting-heavy-equipment-guide",
  "/blog/hot-weather-concreting-pce-retarders": "/blog/preventing-cold-joints-tropical-concrete",
};

// Page paths only: skip built assets, files with an extension and server endpoints.
export function isPagePath(pathname: string): boolean {
  if (pathname.startsWith("/assets/") || pathname.startsWith("/_") || pathname.startsWith("/api")) {
    return false;
  }
  const lastSegment = pathname.split("/").pop() ?? "";
  return !lastSegment.includes(".");
}

/** Lowercase hostname of the request, as seen through Railway's proxy. */
export function requestHostname(headers: Headers, fallback: string): string {
  const hostHeader = headers.get("x-forwarded-host") || headers.get("host") || fallback;
  return (hostHeader.split(",")[0] ?? "").trim().split(":")[0]?.toLowerCase() ?? "";
}

/**
 * Where a request must be permanently redirected, or null to serve it as is.
 * Order: legacy path → trailing slash → bare domain. All three end on the canonical origin,
 * so even an old URL on the bare domain needs only one hop.
 */
export function canonicalRedirectTarget(url: URL, hostname: string): string | null {
  const trimmedPath = url.pathname.replace(/\/+$/, "") || "/";
  const legacyTarget = LEGACY_REDIRECTS[trimmedPath.toLowerCase()];
  if (legacyTarget) return `${CANONICAL_ORIGIN}${legacyTarget}${url.search}`;

  // "/products/" → "/products" in one permanent hop (the router would answer 307).
  if (trimmedPath !== url.pathname && isPagePath(trimmedPath)) {
    return `${CANONICAL_ORIGIN}${trimmedPath}${url.search}`;
  }

  // Bare domain → www for every path, files in public/ included (sitemap.xml, robots.txt, images).
  if (hostname === APEX_HOST) return `${CANONICAL_ORIGIN}${url.pathname}${url.search}`;
  return null;
}

export function permanentRedirect(location: string): Response {
  return new Response(null, {
    status: 301,
    headers: { location, "strict-transport-security": HSTS_HEADER_VALUE },
  });
}
