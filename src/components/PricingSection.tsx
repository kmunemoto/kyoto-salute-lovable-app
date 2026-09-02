import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useT } from "@/i18n/LanguageContext";
import { trackCtaClick } from "@/lib/analytics";

const PricingSection = () => {
  const { lang, t } = useT();
  const p = t.pricing;
  const showDropIn = lang !== "ja";
  const dropInLinkLabel =
    lang === "en" ? "Book a drop-in session →"
    : lang === "zh" ? "预约单次训练 →"
    : lang === "zhTW" ? "預約單次訓練 →"
    : lang === "ko" ? "드롭인 예약하기 →"
    : "→";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {p.plans.map((plan, idx) => {
            const popular = idx === 2;
            const ctaHref = "https://app.kyoto-salute.com/trial";
            return (
              <div key={plan.name} className={`relative rounded-sm p-6 border transition-all hover:-translate-y-1 duration-300 ${popular ? "border-gold bg-white shadow-md" : "border-border bg-white"}`}>
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 gold-gradient text-white text-xs font-medium px-4 py-1 rounded-full">{p.popular}</div>
                )}
                <h3 className="text-gym-dark-foreground font-body font-semibold text-lg mb-1">{plan.name}</h3>
                <p className="text-gym-dark-foreground/50 text-sm mb-4 font-body">{plan.description}</p>
                <div className="mb-1">
                  <span className="text-3xl font-body font-bold text-gold">{plan.price}</span>
                  <span className="text-gym-dark-foreground/50 text-sm font-body">{p.perMonth}</span>
                </div>
                <p className="text-gold/70 text-xs mb-6 font-body font-bold">{plan.perSession}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gym-dark-foreground/70 font-body">
                      <Check className="w-4 h-4 text-gold shrink-0" />{feature}
                    </li>
                  ))}
                </ul>
                <a href={ctaHref} target="_blank" rel="noopener noreferrer" onClick={() => trackCtaClick({ type: "trial", location: `pricing_plan${idx + 1}`, label: p.cta, url: ctaHref, language: lang })} className={`block text-center py-3 rounded-sm text-sm font-medium transition-all font-body ${popular ? "gold-gradient text-white" : "border border-gold/40 text-gold hover:bg-gold/10"}`}>
                  {p.cta}
                </a>
              </div>
            );
          })}
        </div>
        {showDropIn && (
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="relative rounded-sm p-6 bg-white border border-gold/30">
              <h3 className="text-gym-dark-foreground font-body font-semibold text-lg mb-1">{p.dropIn.name}</h3>
              <p className="text-gym-dark-foreground/50 text-sm mb-4 font-body">{p.dropIn.description}</p>
              <div className="mb-4">
                <span className="text-3xl font-body font-bold text-gold">{p.dropIn.price}</span>
                <span className="text-gym-dark-foreground/50 text-sm font-body ml-2">{p.dropInUnit}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {p.dropIn.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gym-dark-foreground/70 font-body">
                    <Check className="w-4 h-4 text-gold shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link
                to="/drop-in"
                onClick={() => trackCtaClick({ type: "dropin", location: "pricing_dropin", label: dropInLinkLabel, url: "/drop-in", language: lang })}
                className="block text-center py-3 rounded-sm text-sm font-medium transition-all font-body gold-gradient text-white"
              >
                {dropInLinkLabel}
              </Link>
            </div>
          </div>
        )}
        {/*
          オプション（トレーニング後に追加するメニュー）。プランに追加する形なので、
          プランカードと同格に見せないよう、グリッドの外に一段控えめな帯として置く。
          予約の導線は各プランのCTAに集約されているため、ここには専用のボタンを置かない。
        */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="rounded-sm p-6 bg-white border border-border">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2 font-body">{p.option.label}</p>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <h3 className="text-gym-dark-foreground font-body font-semibold text-lg">{p.option.name}</h3>
              <span className="text-gym-dark-foreground/50 text-sm font-body">{p.option.duration}</span>
            </div>
            <div className="mb-3">
              <span className="text-2xl font-body font-bold text-gold">{p.option.price}</span>
              <span className="text-gym-dark-foreground/50 text-sm font-body ml-2">{p.option.unit}</span>
            </div>
            <p className="text-gym-dark-foreground/70 text-sm font-body leading-relaxed">{p.option.description}</p>
            <p className="text-gym-dark-foreground/70 text-sm font-body leading-relaxed mt-2">{p.option.benefit}</p>
            <p className="text-gym-dark-foreground/50 text-xs font-body mt-3">{p.option.booking}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
