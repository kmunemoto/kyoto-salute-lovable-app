import { useState, useEffect } from "react";
import { useT } from "@/i18n/LanguageContext";
import { trackCtaClick } from "@/lib/analytics";

// 左のボタンは、ふだんは体験トレーニングの予約。ページによって予約先を変えたいときは url・label・location を渡す
// （例：マシンピラティス体験のページでは、ピラティス体験の予約ページにする）。
type Props = { url?: string; label?: string; location?: string };

const MobileCTABar = ({ url, label, location = "mobile_sticky_bar" }: Props = {}) => {
  const { lang, t } = useT();
  const ctaUrl = url ?? "https://app.kyoto-salute.com/trial";
  const lineUrl = "https://lin.ee/UMVDzWF";
  const ctaText = label ?? (lang === "ja" ? "体験を予約" : t.mobileCta);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setVisible(window.scrollY > heroHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}>
      <div className="flex h-[60px]">
        <a href={ctaUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackCtaClick({ type: "trial", location, label: ctaText, url: ctaUrl, language: lang })} className="gold-gradient flex-1 flex items-center justify-center text-white font-medium font-body text-sm">
          {ctaText}
        </a>
        <a href={lineUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackCtaClick({ type: "line", location, label: t.cta.lineBtn, url: lineUrl, language: lang })} className="flex-1 flex items-center justify-center text-white font-medium font-body text-sm" style={{ backgroundColor: "#06C755" }}>
          {t.cta.lineBtn}
        </a>
      </div>
    </div>
  );
};

export default MobileCTABar;
