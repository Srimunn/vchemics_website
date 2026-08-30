import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const dataFilePath = path.join(rootDir, "src", "components", "site", "data.ts");
const dataContent = fs.readFileSync(dataFilePath, "utf-8");

function extractIds(arrayName) {
  const regex = new RegExp(`export const ${arrayName}:[\\s\\S]*?=\\s*\\[([\\s\\S]*?)\\];`, "m");
  const match = dataContent.match(regex);
  if (!match) return [];
  const block = match[1];
  const ids = [];
  const idRegex = /id:\s*["']([^"']+)["']/g;
  let idMatch;
  while ((idMatch = idRegex.exec(block)) !== null) {
    ids.push(idMatch[1]);
  }
  return ids;
}

function extractBlogSlugs() {
  const regex = /export const allBlogPosts:[\s\S]*?=\s*\[([\s\S]*?)\];/m;
  const match = dataContent.match(regex);
  if (!match) return [];
  const block = match[1];
  const slugs = [];
  const slugRegex = /slug:\s*["']([^"']+)["']/g;
  let slugMatch;
  while ((slugMatch = slugRegex.exec(block)) !== null) {
    slugs.push(slugMatch[1]);
  }
  return slugs;
}

const productIds = extractIds("allProducts");
const solutionIds = extractIds("allSolutions");
const blogSlugs = extractBlogSlugs();

const today = new Date().toISOString().split("T")[0];

const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/products", priority: "0.9", changefreq: "weekly" },
  { path: "/solutions", priority: "0.9", changefreq: "weekly" },
  { path: "/services", priority: "0.8", changefreq: "monthly" },
  { path: "/locations", priority: "0.8", changefreq: "monthly" },
  { path: "/projects", priority: "0.8", changefreq: "monthly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  { path: "/contact", priority: "0.9", changefreq: "monthly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" },
];

const urls = [];

// Static Pages
for (const route of staticRoutes) {
  urls.push(`  <url>
    <loc>https://www.vchemicsindia.com${route.path === "/" ? "/" : route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`);
}

// Product Pages
for (const id of productIds) {
  urls.push(`  <url>
    <loc>https://www.vchemicsindia.com/products/${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`);
}

// Solution Pages
for (const id of solutionIds) {
  urls.push(`  <url>
    <loc>https://www.vchemicsindia.com/solutions/${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`);
}

// Blog Posts
for (const slug of blogSlugs) {
  urls.push(`  <url>
    <loc>https://www.vchemicsindia.com/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
}

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

const publicSitemapPath = path.join(rootDir, "public", "sitemap.xml");
fs.writeFileSync(publicSitemapPath, sitemapXml, "utf-8");

console.log(
  `[Sitemap] Generated ${urls.length} URLs in public/sitemap.xml (Products: ${productIds.length}, Solutions: ${solutionIds.length}, Blog: ${blogSlugs.length})`,
);
