// Builds public/llms.txt from src/components/site/data.ts so it stays in sync with the
// site. Runs in "prebuild" after generate-sitemap.js and fails if any listed URL is not
// in public/sitemap.xml.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const BASE = "https://www.vchemicsindia.com";

const dataContent = fs.readFileSync(
  path.join(rootDir, "src", "components", "site", "data.ts"),
  "utf-8",
).replace(/\r\n/g, "\n");
const sitemap = fs.readFileSync(path.join(rootDir, "public", "sitemap.xml"), "utf-8");
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));

// Split an exported array into its top-level object blocks (items are indented 2 spaces).
function extractItems(arrayName) {
  const regex = new RegExp(`export const ${arrayName}:[\\s\\S]*?=\\s*\\[([\\s\\S]*?)\\n\\];`, "m");
  const match = dataContent.match(regex);
  if (!match) throw new Error(`generate-llms: could not find ${arrayName} in data.ts`);
  return match[1].split(/\n  \{\n/).slice(1);
}

// Read the first top-level string field (handles values wrapped onto the next line).
function field(block, name) {
  const m = block.match(new RegExp(`\\n?    ${name}:\\s*\\n?\\s*(["'\`])((?:\\\\.|(?!\\1)[\\s\\S])*)\\1`));
  return m ? m[2].replace(/\\(["'`])/g, "$1").replace(/\s+/g, " ").trim() : undefined;
}

function oneSentence(text) {
  if (!text) return "";
  const s = text.match(/^.*?[.!?](\s|$)/);
  return (s ? s[0] : text).trim();
}

function entries(arrayName, urlPrefix, descField) {
  return extractItems(arrayName).map((block) => {
    const slug = field(block, "slug") ?? field(block, "id");
    return {
      title: field(block, "title"),
      url: `${BASE}${urlPrefix}${slug}`,
      desc: oneSentence(field(block, descField)),
    };
  });
}

const products = entries("allProducts", "/products/", "description");
const solutions = entries("allSolutions", "/solutions/", "subtitle");
const guides = entries("allBlogPosts", "/blog/", "excerpt");
const company = [
  {
    title: "About Us",
    url: `${BASE}/about`,
    desc: "Company background, founder profile, quality standards and 15+ years of construction chemicals experience in Tamil Nadu.",
  },
  {
    title: "Technical Services",
    url: `${BASE}/services`,
    desc: "Mix design calibration, on-site trial batches, application support and troubleshooting.",
  },
  {
    title: "Projects",
    url: `${BASE}/projects`,
    desc: "Completed industrial, commercial and infrastructure projects across South India.",
  },
  {
    title: "Branch Locations",
    url: `${BASE}/locations`,
    desc: "Supply hubs in Chennai (Padi), Coimbatore, Erode (Modakurichi) and Krishnagiri.",
  },
  {
    title: "Contact & Technical Consultation",
    url: `${BASE}/contact`,
    desc: "Request technical data sheets, on-site diagnostics and quotations.",
  },
];

const all = [...products, ...solutions, ...guides, ...company];
const missing = all.filter((e) => !e.title || !sitemapUrls.has(e.url));
if (missing.length) {
  throw new Error(
    `generate-llms: entries missing a title or not in sitemap.xml:\n${missing
      .map((e) => `  ${e.url} (title: ${e.title ?? "none"})`)
      .join("\n")}`,
  );
}

const list = (items) =>
  items.map((e) => `- [${e.title}](${e.url})${e.desc ? `: ${e.desc}` : ""}`).join("\n");

const output = `# Vchemics India Solutions
> Manufacturer and supplier of construction chemicals, precision grouts, crystalline waterproofing systems and structural repair products across Tamil Nadu, with hubs in Chennai, Coimbatore, Erode and Krishnagiri.

Vchemics India Solutions brings 15+ years of experience supplying IS, ASTM and EN standard construction chemical formulations, with technical site support for infrastructure, commercial and residential projects throughout South India.

## Products

${list(products)}

## Solutions

${list(solutions)}

## Technical Guides

${list(guides)}

## Company

${list(company)}
`;

fs.writeFileSync(path.join(rootDir, "public", "llms.txt"), output, "utf-8");
console.log(`llms.txt generated with ${all.length} links.`);
