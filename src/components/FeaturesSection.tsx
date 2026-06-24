import { Shirt, Smartphone, Salad } from "lucide-react";
import featureTraining from "@/assets/feature-training.jpg";
import featureNutrition from "@/assets/feature-nutrition.jpg";
import featureApp from "@/assets/feature-app.jpg";
import gymInterior from "@/assets/gym-interior.jpg";
import { useT } from "@/i18n/LanguageContext";
import { trackCtaClick } from "@/lib/analytics";

const meta = [
  { number: "01", icon: Shirt, image: featureTraining, isApp: false },
  { number: "02", icon: Smartphone, image: featureApp, isApp: true },
  { number: "03", icon: Salad, image: featureNutrition, isApp: false },
  { number: "04", icon: Shirt, image: gymInterior, isApp: false },
];

const FeaturesSection = () => {
  const { lang, t } = useT();
  return (
    <section id="features" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">{t.features.kicker}</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">{t.features.title}</h2>
        </div>
        <div className="space-y-20">
          {t.features.items.map((feature, index) => {
            const m = meta[index];
            return (
              <div key={m.number} className={`flex flex-col gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center`}>
                <div className="lg:w-1/2 w-full">
                  {m.isApp ? (
                    <div className="relative flex justify-center items-center py-8">
                      <div className="relative w-[240px] md:w-[280px] rounded-[2.5rem] border-[6px] border-foreground/80 bg-foreground/80 shadow-2xl overflow-hidden">
                        <div className="rounded-[2rem] overflow-hidden">
                          <img src={m.image} alt={feature.title} loading="lazy" className="w-full h-auto object-cover" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4 gold-gradient text-white px-3 py-1 text-xs font-medium rounded-sm font-body">Feature.{m.number}</div>
                    </div>
                  ) : (
                    <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
                      <img src={m.image} alt={feature.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 gold-gradient text-white px-3 py-1 text-xs font-medium rounded-sm font-body z-10">Feature.{m.number}</div>
                      {index === 0 && t.features.wearRentalTag && (
                        <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 gold-gradient text-white px-2.5 py-1 text-[10px] md:text-xs font-medium rounded-sm font-body z-10 shadow-md">
                          {t.features.wearRentalTag}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="lg:w-1/2 w-full">
                  <span className="font-heading text-6xl text-gold/15 block mb-2">{m.number}</span>
                  <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4 leading-snug">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-body text-base">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <p className="text-muted-foreground font-body text-base leading-relaxed max-w-2xl mx-auto">{t.features.note}</p>
        </div>
        <div className="text-center mt-12">
          <a href="https://app.kyoto-salute.com/trial" target="_blank" rel="noopener noreferrer" onClick={() => trackCtaClick({ type: "trial", location: "features", label: t.features.cta, url: "https://app.kyoto-salute.com/trial", language: lang })} className="inline-block gold-gradient px-10 py-4 text-white font-medium rounded-sm transition-opacity">{t.features.cta}</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
