import { BicepsFlexed, PersonStanding, Scale } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

// トレーニングの目的。並びは translations の goals.items（ダイエット・ボディメイク・姿勢改善）と同じ。
const icons = [Scale, BicepsFlexed, PersonStanding];

const GoalsSection = () => {
  const { lang, t } = useT();
  const g = t.goals;
  // 韓国語は単語の途中で改行しないようにする（日本語・中国語は空白がないので対象外）
  const keep = lang === "ko" ? " break-keep" : "";
  return (
    <section id="goals" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">{g.kicker}</p>
          <h2 className={`font-heading text-3xl md:text-5xl text-foreground${keep}`}>{g.title}</h2>
          <p className={`text-muted-foreground font-body text-base leading-relaxed max-w-2xl mx-auto mt-6 text-pretty${keep}`}>{g.sub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {g.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="rounded-sm border border-border bg-white p-8 text-center flex flex-col items-center gap-4">
                <Icon className="w-12 h-12 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <h3 className={`font-heading text-2xl text-foreground${keep}`}>{item.title}</h3>
                <p className={`text-muted-foreground font-body text-base leading-relaxed text-pretty${keep}`}>{item.description}</p>
              </div>
            );
          })}
        </div>
        <p className={`text-center text-muted-foreground font-body mt-10 leading-relaxed text-pretty${keep}`}>{g.note}</p>
      </div>
    </section>
  );
};

export default GoalsSection;
