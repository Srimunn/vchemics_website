import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { STATIC_PAGES, pageFingerprints } from "./page-sources.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const ORIGIN = "https://www.vchemicsindia.com";

// <lastmod> per URL = the date that page's own content last changed (see page-sources.js).
// sitemap-lastmod.json remembers each page's content fingerprint and date: a page keeps its
// date until its fingerprint changes, then it gets today's date. Commit the file with the build.
const manifestPath = path.join(__dirname, "sitemap-lastmod.json");
const manifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, "utf-8")) : {};

const read = (rel) => {
  const file = path.join(rootDir, rel);
  return fs.existsSync(file) ? fs.readFileSync(file, "utf-8") : null;
};
const fingerprints = pageFingerprints(read);
const today = new Date().toISOString().split("T")[0];

// Order: static pages, then products, solutions, blog (as in the data files).
const staticPaths = new Set(STATIC_PAGES.map((p) => p.path));
const paths = [
  ...STATIC_PAGES.map((p) => p.path).filter((p) => fingerprints.has(p)),
  ...[...fingerprints.keys()].filter((p) => !staticPaths.has(p)),
];

const nextManifest = {};
let changed = 0;
for (const p of paths) {
  const hash = fingerprints.get(p);
  const known = manifest[p];
  if (known && known.hash === hash) {
    nextManifest[p] = known;
  } else {
    nextManifest[p] = { hash, lastmod: today };
    changed++;
  }
}

const urls = paths.map(
  (p) => `  <url>
    <loc>${ORIGIN}${p}</loc>
    <lastmod>${nextManifest[p].lastmod}</lastmod>
  </url>`,
);

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(rootDir, "public", "sitemap.xml"), sitemapXml, "utf-8");
if (JSON.stringify(nextManifest) !== JSON.stringify(manifest)) {
  fs.writeFileSync(manifestPath, JSON.stringify(nextManifest, null, 2) + "\n", "utf-8");
}

const count = (prefix) => paths.filter((p) => p.startsWith(prefix)).length;
console.log(
  `[Sitemap] Generated ${paths.length} URLs in public/sitemap.xml (Products: ${count("/products/")}, ` +
    `Solutions: ${count("/solutions/")}, Blog: ${count("/blog/")}; ${changed} with a new lastmod)`,
);
