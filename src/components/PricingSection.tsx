import { Check } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";
import { trackCtaClick } from "@/lib/analytics";

const PricingSection = () => {
  const { lang, t } = useT();
  const p = t.pricing;
  const jaDropInOverride = {
    name: "Drop-in Plan",
    price: "¥8,000",
    perSession: "tax incl. / session",
    description: "No membership required",
    features: [
      "60-min personal training",
      "Sportswear & shoes provided",
      "Just walk in",
    ],
  };
  const dropInPlan = lang === "ja" ? jaDropInOverride : p.dropIn;
  const allPlans = [...p.plans, dropInPlan];
  return (
    <section id="plan" className="section-padding section-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">{p.kicker}</p>
          <h2 className="font-heading text-3xl md:text-5xl text-gym-dark-foreground">{p.title}</h2>
          <p className="text-gym-dark-foreground/60 mt-4 max-w-lg mx-auto font-body">{p.freeNote}</p>
          <div className="mt-6 mb-2 max-w-3xl mx-auto text-center">
            <p className="text-sm leading-relaxed text-seo-muted font-body">{p.description}</p>
          </div>
          <p className="text-gym-dark-foreground/50 mt-2 text-sm font-body">{p.sub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {allPlans.map((plan, idx) => {
            const popular = idx === 2;
            const isDropIn = idx === allPlans.length - 1;
            const ctaLabel = isDropIn && lang === "ja" ? "Book Now" : p.cta;
            const ctaHref = isDropIn
              ? "https://app.kyoto-salute.com/visitor"
              : "https://app.kyoto-salute.com/trial";
            const unitLabel = isDropIn && lang === "ja" ? " / session" : p.perMonth;
            return (
              <div key={plan.name} className={`relative rounded-sm p-6 border transition-all hover:-translate-y-1 duration-300 ${popular ? "border-gold bg-white shadow-md" : "border-border bg-white"}`}>
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 gold-gradient text-white text-xs font-medium px-4 py-1 rounded-full">{p.popular}</div>
                )}
                <h3 className="text-gym-dark-foreground font-body font-semibold text-lg mb-1">{plan.name}</h3>
                <p className="text-gym-dark-foreground/50 text-sm mb-4 font-body">{plan.description}</p>
                <div className="mb-1">
                  <span className="text-3xl font-body font-bold text-gold">{plan.price}</span>
                  <span className="text-gym-dark-foreground/50 text-sm font-body">{unitLabel}</span>
                </div>
                <p className="text-gold/70 text-xs mb-6 font-body font-bold">{plan.perSession}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gym-dark-foreground/70 font-body">
                      <Check className="w-4 h-4 text-gold shrink-0" />{feature}
                    </li>
                  ))}
                </ul>
                <a href={ctaHref} target="_blank" rel="noopener noreferrer" onClick={() => trackCtaClick({ type: isDropIn ? "dropin" : "trial", location: `pricing_${plan.name}`, label: ctaLabel, url: ctaHref, language: lang })} className={`block text-center py-3 rounded-sm text-sm font-medium transition-all font-body ${popular ? "gold-gradient text-white" : "border border-gold/40 text-gold hover:bg-gold/10"}`}>
                  {ctaLabel}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
