import { Fragment } from "react";
import { Link } from "react-router-dom";
import pilatesImage from "@/assets/pilates-reformer.webp";
import { useT } from "@/i18n/LanguageContext";
import { trackCtaClick } from "@/lib/analytics";
import { PILATES_TRIAL_PAGE, PILATES_TRIAL_URL, isBeforePilatesTrialStart } from "@/lib/booking";

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
  // 言葉の途中で改行しないようにする。韓国語は空白のところで、日本語は文節のところで改行する
  // （日本語の auto-phrase は Chrome などの対応ブラウザだけで効き、ほかではいつもどおり。中国語は対象外）
  const keep = lang === "ko" ? " break-keep" : lang === "ja" ? " [word-break:auto-phrase]" : "";
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
                  <h3 className={`font-heading text-xl md:text-2xl text-foreground mb-2 text-balance${keep}`}>{point.title}</h3>
                  <p className={`text-muted-foreground font-body text-base leading-relaxed text-pretty${keep}`}>{point.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        {/* マシンピラティス体験の予約（曜日・時間は先生のシフトで変わるので書かず、空き状況は予約ページで見てもらう） */}
        <div className="mt-12 md:mt-16 text-center">
          {isBeforePilatesTrialStart() && (
            <p className="inline-block mb-4 px-4 py-1 rounded-full border border-gold/40 text-gold text-sm font-body">{p.trialStart}</p>
          )}
          <p className={`text-muted-foreground font-body text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-6 text-pretty${keep}`}>{p.trialNote}</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
            <a
              href={PILATES_TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick({ type: "trial", location: "pilates_section", label: p.trialBtn, url: PILATES_TRIAL_URL, language: lang })}
              className="gold-gradient inline-block px-10 py-4 text-white font-medium rounded-sm font-body"
            >
              {p.trialBtn}
            </a>
            {/* 体験の案内ページは日本語だけ */}
            {lang === "ja" && (
              <Link to={PILATES_TRIAL_PAGE} className="font-body text-sm text-gold hover:underline">
                体験の詳細を見る →
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilatesSection;
