import trialImage from "@/assets/trial-gym.jpg";
import { useT } from "@/i18n/LanguageContext";

const CTASection = () => {
  const { lang, t } = useT();
  const c = t.cta;
  const trialUrl = lang === "ja" ? "https://kyoto-salute.lovable.app/trial" : "https://salute-kyoto.lovable.app/visitor";
  const lineUrl = lang === "ja" ? "https://lin.ee/UMVDzWF" : "https://salute-kyoto.lovable.app/visitor";
  return (
    <section id="consultation" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">{c.kicker}</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">{c.title}</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative rounded-sm overflow-hidden group">
            <img src={trialImage} alt={c.title} loading="lazy" className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="text-center lg:text-left">
            <div className="text-muted-foreground font-body leading-relaxed mb-6 space-y-4">
              <p>{c.paragraphs[0]}</p>
              <ul className="list-disc list-inside space-y-1">
                {c.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              {c.paragraphs.slice(1).map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={trialUrl} target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 px-10 py-4 text-primary-foreground font-medium rounded-sm transition-colors font-body text-center">{c.webBtn}</a>
              <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="border border-primary bg-white px-10 py-4 text-primary font-medium rounded-sm hover:bg-primary/5 transition-colors font-body text-center">{c.lineBtn}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
