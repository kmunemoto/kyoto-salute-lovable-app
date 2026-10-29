import { Fragment } from "react";
import pilatesImage from "@/assets/pilates-reformer.webp";
import { useT } from "@/i18n/LanguageContext";

// "\n\n" はいつも改行、"\n" はスマホでだけ改行する（言葉の途中で折り返さないように）
const withBreaks = (text: string) =>
  text.split("\n\n").map((para, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {para.split("\n").map((part, j) => (
        <Fragment key={j}>
          {j > 0 && <br className="md:hidden" />}
          {part}
        </Fragment>
      ))}
    </Fragment>
  ));

// マシンピラティス（リフォーマー）。パーソナルトレーニングに加えて選べることを紹介する。
const PilatesSection = () => {
  const { lang, t } = useT();
  const p = t.pilates;
  // 韓国語は単語の途中で改行しないようにする（日本語・中国語は空白がないので対象外）
  const keep = lang === "ko" ? " break-keep" : "";
  return (
    <section id="pilates" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">{p.kicker}</p>
          <h2 className={`font-heading text-3xl md:text-5xl text-foreground${keep}`}>{withBreaks(p.title)}</h2>
          <p className={`text-muted-foreground font-body text-base leading-relaxed max-w-2xl mx-auto mt-6 text-pretty${keep}`}>{withBreaks(p.lead)}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <img src={pilatesImage} alt={p.imageAlt} width={1520} height={1140} loading="lazy" className="w-full h-auto rounded-sm" />
          <ol className="space-y-8">
            {p.points.map((point, i) => (
              <li key={point.title} className="flex gap-5">
                <span className="font-heading text-4xl text-gold/40 leading-none shrink-0" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className={`font-heading text-xl md:text-2xl text-foreground mb-2${keep}`}>{point.title}</h3>
                  <p className={`text-muted-foreground font-body text-base leading-relaxed text-pretty${keep}`}>{point.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default PilatesSection;
