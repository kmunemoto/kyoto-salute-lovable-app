import { Dumbbell, HelpCircle, UtensilsCrossed, Users } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

const icons = [Dumbbell, HelpCircle, UtensilsCrossed, Users];

const ConcernSection = () => {
  const { t } = useT();
  return (
    <section id="concern" className="section-padding bg-white" style={{ color: "#2C2621" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">{t.concern.kicker}</p>
          <h2 className="font-heading text-3xl md:text-5xl">{t.concern.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.concern.items.map((text, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="rounded-sm border border-border bg-white p-8 text-center flex flex-col items-center gap-4">
                <Icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                <p className="font-body text-base leading-relaxed">{text}</p>
              </div>
            );
          })}
        </div>
        <p className="text-center font-body mt-10 leading-relaxed">{t.concern.footer}</p>
      </div>
    </section>
  );
};

export default ConcernSection;
