import { CalendarCheck, ClipboardCheck } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";
import { trackCtaClick } from "@/lib/analytics";
import flowBooking from "@/assets/flow/booking-smartphone.webp";
import flowCounseling from "@/assets/flow/counseling.webp";

const icons = [CalendarCheck, ClipboardCheck];

// 手順ごとのイメージ画像（01 WEBで予約 / 02 カウンセリング＋トレーニング）。
// true でカード上部に写真を表示し、false にするとアイコン表示に戻る
// （代替テキストは translations の flow.steps[].imageAlt）。
const SHOW_STEP_IMAGES = true;
const images = [flowBooking, flowCounseling];

const FlowSection = () => {
  const { lang, t } = useT();
  const bookUrl = "https://app.kyoto-salute.com/trial";
  return (
    <section id="flow" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">{t.flow.kicker}</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">{t.flow.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.flow.steps.map((s, i) => {
            const Icon = icons[i];
            const num = String(i + 1).padStart(2, "0");
            return (
              <div key={num} className="rounded-sm border border-border bg-white p-8 text-center flex flex-col items-center">
                {SHOW_STEP_IMAGES && (
                  <img
                    src={images[i]}
                    alt={s.imageAlt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/3] object-cover rounded-2xl mb-6"
                  />
                )}
                <p className="font-heading text-primary text-2xl mb-3">{num}</p>
                {!SHOW_STEP_IMAGES && <Icon className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />}
                <h3 className="font-heading text-xl text-foreground mb-3">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {i === 0 ? (
                    <>
                      {t.flow.bookText}
                      <a href={bookUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackCtaClick({ type: "trial", location: "flow", label: t.flow.bookLinkLabel, url: bookUrl, language: lang })} className="text-primary underline">{t.flow.bookLinkLabel}</a>
                      {s.description}
                    </>
                  ) : s.description}
                </p>
              </div>
            );
          })}
        </div>
        <p className="text-center font-body text-muted-foreground mt-10 leading-relaxed">{t.flow.footer}</p>
      </div>
    </section>
  );
};

export default FlowSection;
