// Content fingerprints for every sitemap URL, so each <lastmod> changes only when that page's
// own content changes (Google ignores lastmod when every URL always carries the same date).
// Used by generate-sitemap.js. `read(relativePath)` returns a file's text, or null if missing,
// so the same code can also read older versions of the files (from git) to seed the dates.
import crypto from "node:crypto";

const DATA = "src/components/site/data.ts";
const BLOG = "src/lib/blog.ts";
const DETAILS = "src/lib/product-details.ts";
const ANSWERS = "src/components/site/quick-answers.ts";

// Static pages: path → route file (+ the data lists the page renders).
export const STATIC_PAGES = [
  { path: "/", files: ["src/routes/index.tsx"] },
  { path: "/about", files: ["src/routes/about.tsx"] },
  { path: "/products", files: ["src/routes/products.tsx"] },
  { path: "/solutions", files: ["src/routes/solutions.tsx"] },
  { path: "/services", files: ["src/routes/services.tsx"] },
  { path: "/locations", files: ["src/routes/locations.tsx"], lists: ["allLocations"] },
  { path: "/projects", files: ["src/routes/projects.tsx"], lists: ["allProjects"] },
  { path: "/blog", files: ["src/routes/blog.tsx"], lists: ["allBlogPosts"] },
  { path: "/contact", files: ["src/routes/contact.tsx"] },
  { path: "/terms", files: ["src/routes/terms.tsx"] },
  { path: "/privacy", files: ["src/routes/privacy.tsx"] },
];

// Index just past the bracket/brace that closes the one at `open`, skipping string literals.
function matchClose(src, open) {
  let depth = 0;
  for (let i = open; i < src.length; i++) {
    const c = src[i];
    if (c === '"' || c === "'" || c === "`") {
      for (i++; i < src.length && src[i] !== c; i++) if (src[i] === "\\") i++;
      continue;
    }
    if (c === "/" && src[i + 1] === "/") {
      while (i < src.length && src[i] !== "\n") i++;
      continue;
    }
    if (c === "{" || c === "[") depth++;
    else if (c === "}" || c === "]") {
      depth--;
      if (depth === 0) return i + 1;
    }
  }
  return src.length;
}

// Text of `export const <name> ... = [ ... ]` (or `= { ... }`).
function exportBlock(src, name) {
  if (!src) return "";
  const m = new RegExp(`export const ${name}\\b[^=]*=\\s*([\\[{])`).exec(src);
  if (!m) return "";
  const open = m.index + m[0].length - 1;
  return src.slice(open, matchClose(src, open));
}

// Top-level `{ ... }` objects of an array literal.
function arrayItems(block) {
  const items = [];
  for (let i = 1; i < block.length - 1; i++) {
    const c = block[i];
    if (c === '"' || c === "'" || c === "`") {
      for (i++; i < block.length && block[i] !== c; i++) if (block[i] === "\\") i++;
      continue;
    }
    if (c === "{") {
      const end = matchClose(block, i);
      items.push(block.slice(i, end));
      i = end - 1;
    }
  }
  return items;
}

function field(item, name) {
  const m = new RegExp(`\\b${name}:\\s*["']([^"']+)["']`).exec(item);
  return m ? m[1] : null;
}

// Value of `"key": { ... }` / `key: { ... }` inside a Record literal.
function recordEntry(block, key) {
  if (!block) return "";
  const esc = key.replace(/[-]/g, "\\-");
  const m = new RegExp(`(?:^|[\\s,{])["']?${esc}["']?\\s*:\\s*([{\\[\`"'])`, "m").exec(block);
  if (!m) return "";
  const open = m.index + m[0].length - 1;
  const ch = block[open];
  if (ch === "{" || ch === "[") return block.slice(open, matchClose(block, open));
  let i = open + 1;
  while (i < block.length && block[i] !== ch) i += block[i] === "\\" ? 2 : 1;
  return block.slice(open, i + 1);
}

const hash = (parts) =>
  crypto
    .createHash("sha1")
    .update(parts.map((p) => (p ?? "").replace(/\s+/g, " ").trim()).join("\u0000"))
    .digest("hex")
    .slice(0, 16);

/** Map of sitemap path → fingerprint of that page's own content. */
export function pageFingerprints(read) {
  const data = read(DATA) ?? "";
  const blog = read(BLOG) ?? "";
  const details = read(DETAILS) ?? "";
  const answers = read(ANSWERS) ?? "";
  const out = new Map();

  for (const page of STATIC_PAGES) {
    const parts = page.files.map((f) => read(f));
    if (parts.every((p) => p == null)) continue; // page did not exist in this version
    for (const list of page.lists ?? []) parts.push(exportBlock(data, list));
    out.set(page.path, hash(parts));
  }

  const productAnswers = exportBlock(answers, "productAnswers");
  for (const item of arrayItems(exportBlock(data, "allProducts"))) {
    const id = field(item, "id");
    if (id) out.set(`/products/${id}`, hash([item, recordEntry(details, id), recordEntry(productAnswers, id)]));
  }

  const solutionAnswers = exportBlock(answers, "solutionAnswers");
  for (const item of arrayItems(exportBlock(data, "allSolutions"))) {
    const id = field(item, "id");
    if (id) out.set(`/solutions/${id}`, hash([item, recordEntry(solutionAnswers, id)]));
  }

  const bodies = exportBlock(blog, "blogPostMarkdownData");
  for (const item of arrayItems(exportBlock(data, "allBlogPosts"))) {
    const slug = field(item, "slug") ?? field(item, "id");
    const id = field(item, "id") ?? slug;
    if (!slug) continue;
    out.set(`/blog/${slug}`, hash([item, recordEntry(bodies, id), read(`content/blog/${slug}.md`)]));
  }
  return out;
}
