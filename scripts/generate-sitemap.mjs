// Generates public/sitemap.xml from the static routes + blog posts in
// src/data/blog-posts.ts, so the sitemap can never drift out of sync with the
// actual content. Runs as a build prebuild step and from the weekly generator.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const POSTS_FILE = path.join(ROOT, "src/data/blog-posts.ts");
const AREA_FILE = path.join(ROOT, "src/data/area-pages.ts");
const SITEMAP_FILE = path.join(ROOT, "public/sitemap.xml");
const BASE = "https://kyoto-salute.com";

// Post objects list `slug` then `date` (both quoted); the type declaration uses
// `slug: string;` / `date: string;` (no quotes) so it is not matched.
function extractPosts(src) {
  const slugs = [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
  const dates = [...src.matchAll(/date:\s*"([^"]+)"/g)].map((m) => m[1]);
  return slugs.map((slug, i) => ({ slug, date: dates[i] || dates[dates.length - 1] }));
}

function extractSlugs(src) {
  return [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
}

export function writeSitemap() {
  const src = fs.readFileSync(POSTS_FILE, "utf8");
  const posts = extractPosts(src);
  const areas = fs.existsSync(AREA_FILE) ? extractSlugs(fs.readFileSync(AREA_FILE, "utf8")) : [];
  const today = new Date().toISOString().slice(0, 10);
  const latest = posts.map((p) => p.date).sort().pop() || today;

  const urls = [];
  const push = (loc, lastmod, changefreq, priority) =>
    urls.push({ loc, lastmod, changefreq, priority });

  push(`${BASE}/`, latest, "weekly", "1.0");
  push(`${BASE}/en`, latest, "weekly", "0.9");
  push(`${BASE}/zh`, latest, "weekly", "0.9");
  push(`${BASE}/zh-tw`, latest, "weekly", "0.9");
  push(`${BASE}/ko`, latest, "weekly", "0.9");
  push(`${BASE}/blog`, latest, "weekly", "0.8");
  push(`${BASE}/drop-in`, today, "monthly", "0.7");
  for (const slug of areas) push(`${BASE}/area/${slug}`, today, "monthly", "0.8");
  for (const p of posts) push(`${BASE}/blog/${p.slug}`, p.date, "monthly", "0.7");
  push(`${BASE}/terms`, "2026-04-25", "monthly", "0.3");
  push(`${BASE}/privacy-policy`, "2026-04-25", "monthly", "0.3");
  push(`${BASE}/tokusho`, "2026-04-25", "monthly", "0.3");

  const body = urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
  fs.writeFileSync(SITEMAP_FILE, xml);
  return { count: urls.length, posts: posts.length };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const r = writeSitemap();
  console.log(`sitemap.xml written: ${r.count} URLs (${r.posts} blog posts)`);
}
