import heroImage from "@/assets/hero-gym.jpg";
import { useT } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { lang, t } = useT();
  const h = t.hero;
  const trialUrl = lang === "ja" ? "https://kyoto-salute.lovable.app/trial" : "https://app.kyoto-salute.com/visitor";
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Salute Goshonan personal gym Kyoto" fetchPriority="high" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="animate-fade-up text-gold text-sm md:text-base font-body tracking-wider mb-4 font-normal">{h.kicker}</h1>
          <p className="animate-fade-up animate-delay-100 font-heading font-bold text-white leading-[1.25] mb-4 text-[28px] md:text-[44px]">
            {h.title1}<br />
            <span className="text-gold">{h.titleAccent}</span>
          </p>
          <p className="animate-fade-up animate-delay-150 font-body mb-6 text-[14px] md:text-[18px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            {h.sub}
          </p>
          <p className="animate-fade-up animate-delay-200 text-white/90 text-base md:text-lg font-body leading-relaxed mb-6 max-w-xl">{h.desc}</p>
          {h.seoNote && (
            <p className="animate-fade-up animate-delay-200 font-body mb-10 max-w-xl" style={{ fontSize: "12px", color: "#8B7F70" }}>{h.seoNote}</p>
          )}
          <div className="animate-fade-up animate-delay-300 flex flex-col sm:flex-row gap-4 max-w-xl">
            <a href={trialUrl} target="_blank" rel="noopener noreferrer" className="gold-gradient px-8 py-4 text-white font-medium rounded-sm text-center text-base flex-1">{h.cta1}</a>
            <a href="#features" className="border border-white/70 text-white hover:bg-white/10 transition-colors px-8 py-4 rounded-sm text-center font-medium bg-transparent flex-1">{h.cta2}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
