const SITE = "https://www.vchemicsindia.com";

export const FALLBACK_IMAGE = `${SITE}/image.png`;

/**
 * Absolute URL for an imported image or a site path, for og:image and schema.
 * Imported assets are site-relative ("/assets/..."), so they need the domain added.
 * Inline data URIs can't be shared, so they fall back to the site image.
 */
export function absUrl(src: unknown): string {
  if (typeof src !== "string" || !src || src.startsWith("data:")) return FALLBACK_IMAGE;
  if (/^https?:\/\//.test(src)) return src;
  return new URL(src, SITE).href;
}
