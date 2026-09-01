import { useState } from "react";
import { Check, Copy, MessageCircle } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";
import { trackCtaClick } from "@/lib/analytics";

/**
 * トレーナー募集セクション。日本語ページのみ掲載する（en/zh/zhTW/ko は観光客向けの
 * ドロップイン導線であり、応募受付は日本語のLINE運用のため）。
 *
 * 掲載言語の切り替えは translations.ja にだけ recruit を持たせることで行う。
 * 募集終了時は translations.ja から recruit キーを削除すれば、本セクションと
 * フッターのリンクが同時に消える。
 */
const RecruitSection = () => {
  const { lang, t } = useT();
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const r = t.recruit;
  // tsconfig.app.json は strict:false、tsconfig.json は strictNullChecks:false のため、
  // r.title と直接書いても型検査を通ってしまう。このガードが唯一の実行時防御線で、
  // 外すと日本語以外の4ページが実行時に白画面になる。src/test/recruit-section.test.tsx で固定。
  if (!r) return null;

  const lineUrl = "https://lin.ee/UMVDzWF";

  // 応募も予約も同じLINEアカウントに届くため、受信箱の切り分けは応募者が冒頭に
  // 「トレーナー募集の件」と書いてくれるかどうかに依存する。定型文をそのまま
  // コピーできるようにして、その一手間を確実に踏んでもらう。
  // clipboard API は非セキュアコンテキストや古い端末で使えないため、失敗時は
  // 手動コピーを促す文言に切り替える（黙って何も起きない状態にしない）。
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(r.template);
      setCopyFailed(false);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopyFailed(true);
    }
  };

  return (
    <section
      id="recruit"
      aria-labelledby="recruit-heading"
      className="px-6 py-14 md:px-12 lg:px-20 lg:py-16 bg-white border-t border-border scroll-mt-28"
    >
      <div className="max-w-3xl mx-auto">
        <p lang="en" className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-3 font-body">{r.kicker}</p>
        <h2 id="recruit-heading" className="font-heading text-2xl md:text-3xl text-foreground mb-5">{r.title}</h2>
        <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed mb-8">{r.lead}</p>

        <h3 className="text-foreground font-body font-semibold text-sm mb-3">{r.pointsLabel}</h3>
        <ul className="text-muted-foreground font-body text-sm leading-relaxed mb-8 space-y-1.5 list-disc list-inside">
          {r.points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>

        <h3 className="text-foreground font-body font-semibold text-sm mb-3">{r.howToApplyLabel}</h3>
        <div className="text-muted-foreground font-body text-sm leading-relaxed mb-6 space-y-4">
          {r.howToApply.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <div className="border border-border bg-secondary rounded-sm px-4 py-3 mb-2">
          <p className="text-muted-foreground font-body text-xs mb-1.5">{r.templateLabel}</p>
          <p className="text-foreground font-body text-sm mb-3">{r.template}</p>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 border border-border bg-white px-3 py-2 text-foreground font-body text-xs rounded-sm hover:bg-background transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-[#06C755]" aria-hidden="true" />
            ) : (
              <Copy className="w-3.5 h-3.5" aria-hidden="true" />
            )}
            {copied ? r.copiedLabel : r.copyBtn}
          </button>
          <span role="status" aria-live="polite" className="sr-only">
            {copied ? r.copiedLabel : ""}
          </span>
          {copyFailed && (
            <p className="text-muted-foreground font-body text-xs mt-2">{r.copyFallback}</p>
          )}
        </div>
        <p className="text-muted-foreground font-body text-xs leading-relaxed mb-8">{r.templateNote}</p>

        <div className="flex flex-col gap-3 mb-8">
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={r.lineAria}
            onClick={() => trackCtaClick({ type: "recruit", location: "recruit_section", label: r.lineBtn, url: lineUrl, language: lang })}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto sm:self-start border-2 border-[#06C755] bg-white px-8 py-3.5 text-foreground font-medium rounded-sm font-body hover:bg-[#06C755]/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <MessageCircle className="w-4 h-4 text-[#06C755]" aria-hidden="true" />
            {r.lineBtn}
          </a>
          <div className="text-muted-foreground font-body text-xs leading-relaxed space-y-1">
            {r.notes.map((n, i) => <p key={i}>{n}</p>)}
          </div>
        </div>

        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">
          {r.trainerLinkPrefix}
          <a href="#trainer" className="text-primary underline underline-offset-2">{r.trainerLinkLabel}</a>
          {r.trainerLinkSuffix}
        </p>

        <p className="pt-5 border-t border-border text-muted-foreground font-body text-sm">
          {r.customerNotePrefix}
          <a href="#consultation" className="text-primary underline underline-offset-2">{r.customerNoteLink}</a>
          {r.customerNoteSuffix}
        </p>
      </div>
    </section>
  );
};

export default RecruitSection;
