import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { translations } from "@/i18n/translations";

// The料金 copy is duplicated in a lot of places: the plan cards, the "numbers"
// strip, the hero, the meta descriptions and the JSON-LD in index.html. Whenever a
// plan is added or removed, the cheapest per-session price and the plan count move
// with it, and stale copy is a 景表法（有利誤認）problem, not just a typo. These
// tests pin the derived claims to the plan table so drift fails the build.

const LANGS = Object.keys(translations) as (keyof typeof translations)[];

/** "1回あたり ¥4,500" / "¥4,500 / session" / "每次 ¥4,500" / "1회 ¥4,500" -> 4500 */
function yen(s: string): number {
  const m = s.match(/¥([\d,]+)/);
  if (!m) throw new Error(`no ¥ amount in ${JSON.stringify(s)}`);
  return Number(m[1].replace(/,/g, ""));
}

const format = (n: number) => `¥${n.toLocaleString("en-US")}`;

const readIndexHtml = () =>
  fs.readFileSync(path.resolve(__dirname, "../../index.html"), "utf-8");

function healthClubJsonLd() {
  const blocks = readIndexHtml().matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  );
  for (const [, body] of blocks) {
    const parsed = JSON.parse(body);
    if (parsed.hasOfferCatalog) return parsed;
  }
  throw new Error("no JSON-LD block with hasOfferCatalog in index.html");
}

/** Monthly plan offers only — the catalog also carries the trial session. */
const monthlyOffers = () =>
  healthClubJsonLd().hasOfferCatalog.itemListElement.filter(
    (o: { name: string }) => /^月\d+回プラン/.test(o.name),
  );

describe("per-session price advertised in the numbers strip", () => {
  it.each(LANGS)("%s quotes the cheapest plan's real per-session price", (lang) => {
    const { plans } = translations[lang].pricing;
    const cheapest = Math.min(...plans.map((p) => yen(p.perSession)));

    // The per-session tile is the one written as a "from" price, e.g. "¥4,500〜".
    const tiles = translations[lang].numbers.items.filter((i) =>
      /^¥[\d,]+[〜~]$/.test(i.value),
    );
    expect(tiles).toHaveLength(1);
    expect(yen(tiles[0].value)).toBe(cheapest);
  });
});

describe("plan count stated in the pricing copy", () => {
  it.each(LANGS)("%s states how many plans there actually are", (lang) => {
    const { plans, description } = translations[lang].pricing;
    expect(description).toContain(String(plans.length));
  });

  it("the Japanese sub-heading states the same count", () => {
    const { plans, sub } = translations.ja.pricing;
    expect(sub).toContain(String(plans.length));
  });
});

describe("index.html structured data mirrors the plan table", () => {
  it("lists exactly the Japanese monthly plans, at the same prices", () => {
    const plans = translations.ja.pricing.plans;
    // index.html marks the recommended plan as "月8回プラン（おすすめ）".
    const offers = monthlyOffers().map((o: { name: string; price: string }) => ({
      name: o.name.replace("（おすすめ）", ""),
      price: format(Number(o.price)),
    }));
    expect(offers).toEqual(plans.map((p) => ({ name: p.name, price: p.price })));
  });

  it("quotes a priceRange spanning the cheapest and dearest plan", () => {
    const monthly = translations.ja.pricing.plans.map((p) => yen(p.price));
    const { priceRange } = healthClubJsonLd();
    expect(priceRange).toBe(
      `${format(Math.min(...monthly))}〜${format(Math.max(...monthly))}/月`,
    );
  });

  it("quotes the real per-session range in the 料金 FAQ answer", () => {
    const perSession = translations.ja.pricing.plans.map((p) => yen(p.perSession));
    const faq = readIndexHtml().match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)!
      .map((b) => JSON.parse(b.replace(/<\/?script[^>]*>/g, "")))
      .find((d) => d["@type"] === "FAQPage");
    const answer = faq.mainEntity.find(
      (q: { name: string }) => q.name === "料金はいくらですか？",
    ).acceptedAnswer.text;

    expect(answer).toContain(`${String(perSession.length)}つのプラン`);
    expect(answer).toContain(
      `1回あたり${format(Math.min(...perSession))}〜${format(Math.max(...perSession))}`,
    );
    for (const plan of translations.ja.pricing.plans) {
      expect(answer).toContain(`${plan.name}（${plan.price}/月）`);
    }
  });

  it("quotes the cheapest plan in every headline 1回¥N〜 claim", () => {
    const cheapest = Math.min(
      ...translations.ja.pricing.plans.map((p) => yen(p.perSession)),
    );
    const claims = [...readIndexHtml().matchAll(/1回¥([\d,]+)[〜～]/g)];
    expect(claims.length).toBeGreaterThan(0);
    for (const [, amount] of claims) {
      expect(Number(amount.replace(/,/g, ""))).toBe(cheapest);
    }
  });
});
