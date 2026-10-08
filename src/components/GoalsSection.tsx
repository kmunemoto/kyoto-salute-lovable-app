import type { SVGProps } from "react";
import { BicepsFlexed, Scale } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

// 姿勢改善のアイコン（後ろ姿の上半身＋背骨）。lucide に合うものがないので、同じ 24×24・線のアイコンとして描いた。
const PostureIcon = ({ strokeWidth = 2, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="5" r="3.2" />
    <path d="M10.2 9.2v2c0 .5-.3 1-.8 1.2l-2.6.9A4.8 4.8 0 0 0 3.4 18v4" />
    <path d="M13.8 9.2v2c0 .5.3 1 .8 1.2l2.6.9a4.8 4.8 0 0 1 3.4 4.7v4" />
    {[13.2, 15.9, 18.6, 21.3].map((cy) => (
      <circle key={cy} cx="12" cy={cy} r="1" fill="currentColor" stroke="none" />
    ))}
  </svg>
);

// トレーニングの目的。並びは translations の goals.items（ダイエット・ボディメイク・姿勢改善）と同じ。
const icons = [Scale, BicepsFlexed, PostureIcon];

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
