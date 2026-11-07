import { definePlugin } from "nitro";
import { canonicalRedirectTarget, permanentRedirect, requestHostname } from "../lib/canonical-redirects";

// Nitro serves files in public/ (sitemap.xml, robots.txt, images, video) from its static
// middleware, which runs before src/server.ts. Without this, https://vchemicsindia.com/sitemap.xml
// answered 200 instead of redirecting to www. Put the canonical redirect in front of it.
// Uses h3's "~middleware" list (H3Core internal); if it ever disappears, src/server.ts still
// redirects every page, only public files on the bare domain would be served directly again.
export default definePlugin((nitroApp) => {
  const middleware = (nitroApp.h3 as unknown as { "~middleware"?: unknown[] } | undefined)?.["~middleware"];
  if (!Array.isArray(middleware)) return;
  middleware.unshift((event: { req: Request; url: URL }) => {
    const target = canonicalRedirectTarget(event.url, requestHostname(event.req.headers, event.url.hostname));
    return target ? permanentRedirect(target) : undefined;
  });
});
