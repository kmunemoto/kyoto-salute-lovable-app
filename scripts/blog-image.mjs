// Generates an original header image for a blog post.
//
// Primary: Cloudflare Workers AI (free tier) generates a photo from a
// topic-based prompt when CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN are
// set (e.g. as GitHub Action secrets).
//
// Fallback: a brand "design card" rendered from pure SVG to webp with sharp.
// The design (palette, composition, decorative shapes) is derived
// deterministically from the slug, so each post gets a visually distinct image.
// The fallback is used when no credentials are present or the AI call fails, so
// the weekly job never breaks on image generation.

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const W = 1200;
const H = 750;

const PALETTES = [
  { bg0: "#0F2E3D", bg1: "#0ABAB5", accent: "#C9A86A", sub: "#0ABAB5", ink: "#F5EDE0", inkSoft: "#DCEFEC" },
  { bg0: "#0ABAB5", bg1: "#0E5E58", accent: "#F3E7CE", sub: "#0F2E3D", ink: "#FFFFFF", inkSoft: "#EAF6F4" },
  { bg0: "#F5EDE0", bg1: "#E2D4BC", accent: "#0ABAB5", sub: "#C9A86A", ink: "#0F2E3D", inkSoft: "#3A5560" },
  { bg0: "#0E6E68", bg1: "#0F2E3D", accent: "#E9C893", sub: "#0ABAB5", ink: "#F5EDE0", inkSoft: "#CFE6E2" },
  { bg0: "#123A44", bg1: "#0ABAB5", accent: "#E9C893", sub: "#F5EDE0", ink: "#F8F3E8", inkSoft: "#E7F4F1" },
  { bg0: "#0B2230", bg1: "#155A55", accent: "#0ABAB5", sub: "#C9A86A", ink: "#F5EDE0", inkSoft: "#BFD9D6" },
];

// Map known Japanese categories to a short Latin label (avoids font issues).
const CATEGORY_LABEL = {
  "ダイエット": "DIET",
  "ボディメイク": "BODY MAKE",
  "女性向け": "FOR WOMEN",
  "健康・姿勢改善": "POSTURE & HEALTH",
  "初心者向け": "FOR BEGINNERS",
  "料金・プラン": "PRICING",
  "エリアガイド": "AREA GUIDE",
  "比較・検討": "COMPARE",
  "無料体験": "FREE TRIAL",
  "食事アドバイス": "NUTRITION",
  "ジム選び": "CHOOSING A GYM",
  "For Visitors": "FOR VISITORS",
};

function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const round = (n) => Math.round(n * 100) / 100;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function decoration(variant, rng, p) {
  const r = (min, max) => round(min + rng() * (max - min));
  const frags = [];
  switch (variant) {
    case 0: {
      // Big soft circle top-right + small accent circle.
      frags.push(`<circle cx="${r(880, 1080)}" cy="${r(120, 240)}" r="${r(180, 260)}" fill="${p.sub}" fill-opacity="0.22"/>`);
      frags.push(`<circle cx="${r(120, 320)}" cy="${r(520, 660)}" r="${r(50, 110)}" fill="${p.accent}" fill-opacity="0.25"/>`);
      break;
    }
    case 1: {
      // Large ring (stroke) + dot.
      const cx = r(820, 1040), cy = r(140, 320), rad = r(170, 250);
      frags.push(`<circle cx="${cx}" cy="${cy}" r="${rad}" fill="none" stroke="${p.accent}" stroke-opacity="0.45" stroke-width="${r(6, 14)}"/>`);
      frags.push(`<circle cx="${cx}" cy="${cy}" r="${r(30, 70)}" fill="${p.sub}" fill-opacity="0.30"/>`);
      break;
    }
    case 2: {
      // Diagonal band + circle.
      const y = r(-60, 120);
      frags.push(`<rect x="-200" y="${y}" width="1700" height="${r(90, 150)}" fill="${p.accent}" fill-opacity="0.16" transform="rotate(${r(-18, -8)} 600 375)"/>`);
      frags.push(`<circle cx="${r(900, 1080)}" cy="${r(480, 640)}" r="${r(140, 220)}" fill="${p.sub}" fill-opacity="0.20"/>`);
      break;
    }
    case 3: {
      // Concentric rings cluster.
      const cx = r(860, 1060), cy = r(160, 360);
      for (let i = 0; i < 4; i++) {
        frags.push(`<circle cx="${cx}" cy="${cy}" r="${round(70 + i * (r(40, 60)))}" fill="none" stroke="${i % 2 ? p.accent : p.sub}" stroke-opacity="0.30" stroke-width="${r(4, 8)}"/>`);
      }
      break;
    }
    default: {
      // Scattered dots + one big soft circle.
      frags.push(`<circle cx="${r(840, 1060)}" cy="${r(200, 380)}" r="${r(180, 250)}" fill="${p.sub}" fill-opacity="0.18"/>`);
      const cols = 6, rows = 4;
      for (let i = 0; i < cols * rows; i++) {
        if (rng() > 0.55) continue;
        const gx = 120 + (i % cols) * 170 + r(-20, 20);
        const gy = 120 + Math.floor(i / cols) * 150 + r(-20, 20);
        frags.push(`<circle cx="${round(gx)}" cy="${round(gy)}" r="${r(4, 9)}" fill="${p.accent}" fill-opacity="0.35"/>`);
      }
      break;
    }
  }
  return frags.join("\n  ");
}

export function buildSvg(slug, category = "") {
  const seed = hashStr(slug);
  const rng = mulberry32(seed);
  const p = PALETTES[Math.floor(rng() * PALETTES.length)];
  const variant = Math.floor(rng() * 5);
  const angle = Math.floor(rng() * 4); // gradient direction
  const dirs = [
    { x1: 0, y1: 0, x2: 1, y2: 1 },
    { x1: 0, y1: 1, x2: 1, y2: 0 },
    { x1: 0, y1: 0, x2: 1, y2: 0 },
    { x1: 0, y1: 0, x2: 0, y2: 1 },
  ];
  const d = dirs[angle];
  const label = (CATEGORY_LABEL[category] || "BLOG").toUpperCase();

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="${d.x1}" y1="${d.y1}" x2="${d.x2}" y2="${d.y2}">
      <stop offset="0" stop-color="${p.bg0}"/>
      <stop offset="1" stop-color="${p.bg1}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${decoration(variant, rng, p)}
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="80" y="120" font-family="Arial, Helvetica, sans-serif" font-size="22" letter-spacing="5" fill="${p.accent}" font-weight="700">${esc(label)}</text>
    <rect x="80" y="610" width="56" height="3" fill="${p.accent}"/>
    <text x="80" y="672" font-size="46" font-weight="700" fill="${p.ink}">Salute Goshominami</text>
    <text x="80" y="706" font-family="Arial, Helvetica, sans-serif" font-size="20" letter-spacing="4" fill="${p.inkSoft}">KYOTO   PERSONAL TRAINING GYM</text>
  </g>
</svg>`;
}

// --- Design-card fallback (no external service, always available) ---

export async function generateDesignCard(slug, category, assetsDir) {
  const svg = buildSvg(slug, category);
  const outPath = path.join(assetsDir, `${slug}.webp`);
  fs.mkdirSync(assetsDir, { recursive: true });
  await sharp(Buffer.from(svg)).webp({ quality: 86 }).toFile(outPath);
  return { path: outPath, source: "design-card" };
}

// --- Cloudflare Workers AI (free tier) photo generation ---

// Scene hint per category, kept brand-appropriate (no people/faces to avoid
// uncanny or misleading "fake" photos of the actual gym/staff).
const SCENE = {
  "ダイエット": "a fresh, healthy balanced meal with colorful vegetables and lean protein on a clean light table",
  "食事アドバイス": "a beautifully arranged healthy Japanese meal with vegetables, fish and rice on a minimalist table",
  "ボディメイク": "a modern minimalist private gym interior with dumbbells and a bench, soft natural light",
  "女性向け": "a bright, airy minimalist fitness studio with a yoga mat and indoor plants",
  "健康・姿勢改善": "a calm minimalist wellness studio with a stretching mat and soft daylight through large windows",
  "初心者向け": "a welcoming, clean and bright personal training studio interior",
  "料金・プラン": "a modern, tidy private gym interior with neat equipment, soft light",
  "比較・検討": "a modern, tidy private gym interior with neat equipment, soft light",
  "ジム選び": "a modern, tidy private gym interior with neat equipment, soft light",
  "エリアガイド": "a serene Kyoto townscape with traditional machiya houses and a quiet street",
  "無料体験": "a bright, welcoming reception area of a boutique fitness studio",
  "For Visitors": "a stylish boutique gym interior with a subtle Kyoto aesthetic, soft natural light",
};

const DEFAULT_SCENE = "a modern minimalist private personal training gym interior with soft natural light";

function aiPrompt(title, category) {
  const scene = SCENE[category] || DEFAULT_SCENE;
  return `Professional editorial photograph: ${scene}. Bright and airy, premium wellness brand aesthetic, soft natural lighting, shallow depth of field, calm muted teal and cream color tones, clean composition, high quality. No people, no faces, no text, no words, no letters, no logos, no watermark.`;
}

async function generateAiImage(slug, title, category, assetsDir) {
  const account = process.env.CLOUDFLARE_ACCOUNT_ID;
  const token = process.env.CLOUDFLARE_API_TOKEN;
  const model = process.env.CLOUDFLARE_IMAGE_MODEL || "@cf/black-forest-labs/flux-1-schnell";

  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${account}/ai/run/${model}`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: aiPrompt(title, category), steps: 4 }),
    },
  );

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Cloudflare AI ${res.status}: ${detail.slice(0, 200)}`);
  }

  const json = await res.json();
  const b64 = json?.result?.image;
  if (!b64) throw new Error("Cloudflare AI response had no image");

  const outPath = path.join(assetsDir, `${slug}.webp`);
  fs.mkdirSync(assetsDir, { recursive: true });
  await sharp(Buffer.from(b64, "base64"))
    .resize(W, H, { fit: "cover" })
    .webp({ quality: 86 })
    .toFile(outPath);
  return { path: outPath, source: "cloudflare-ai" };
}

// Generates a header image for a post. Uses Cloudflare Workers AI when
// credentials are present, and falls back to the design card otherwise (or if
// the AI call fails), so the weekly job never breaks on image generation.
export async function generateBlogImage(slug, category, assetsDir, opts = {}) {
  const { title = "" } = opts;
  if (process.env.CLOUDFLARE_ACCOUNT_ID && process.env.CLOUDFLARE_API_TOKEN) {
    try {
      const r = await generateAiImage(slug, title, category, assetsDir);
      console.log(`Image: Cloudflare AI photo for ${slug}`);
      return r;
    } catch (err) {
      console.warn(`AI image failed, using design card instead: ${err.message}`);
    }
  }
  const r = await generateDesignCard(slug, category, assetsDir);
  console.log(`Image: design card for ${slug}`);
  return r;
}
