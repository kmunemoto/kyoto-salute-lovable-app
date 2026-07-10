import { Star } from "lucide-react";
import dietChart from "@/assets/testimonials/diet-30f.png";
import bodymakeChart from "@/assets/testimonials/bodymake-40m.png";
import { useT } from "@/i18n/LanguageContext";
import { GOOGLE_MAPS_URL } from "@/config/google";

const TestimonialsSection = () => {
  const { t } = useT();
  const v = t.voice;
  return (
    <section id="voice" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">{v.kicker}</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">{v.title}</h2>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Googleマップの口コミを見る（新しいタブで開く）"
            className="flex flex-col items-center justify-center mt-6 group"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-6 h-6 fill-current" style={{ color: "#0ABAB5" }} />
                ))}
              </div>
              <span className="font-body" style={{ fontSize: "36px", fontWeight: 800 }}>5.0</span>
            </div>
            <p className="font-body mt-2 group-hover:text-gold transition-colors underline-offset-4 group-hover:underline" style={{ fontSize: "14px", color: "#6f6459" }}>{v.googleReviews} →</p>
          </a>
        </div>

        <div style={{ marginBottom: "80px" }}>
          <h3 className="font-body text-center" style={{ fontSize: "20px", fontWeight: 700, color: "#2C2621", marginBottom: "24px" }}>{v.changesTitle}</h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {[
              { src: dietChart, label: v.dietLabel },
              { src: bodymakeChart, label: v.bodymakeLabel },
            ].map((img, i) => (
              <div key={i} className="w-full" style={{ maxWidth: "480px" }}>
                <p className="font-body text-center" style={{ fontSize: "14px", fontWeight: 600, color: "#2C2621", marginBottom: "8px" }}>{img.label}</p>
                <p className="font-body text-center" style={{ fontSize: "20px", fontWeight: 700, color: "#0ABAB5", marginBottom: "16px" }}>
                  {i === 0 ? v.dietResult : v.bodymakeResult}
                </p>
                <div className="relative flex justify-center items-center py-4">
                  <div className="relative w-[200px] md:w-[260px] rounded-[2.5rem] border-[6px] border-foreground/80 bg-foreground/80 shadow-2xl overflow-hidden">
                    <div className="overflow-hidden" style={{ borderRadius: "16px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", backgroundColor: "#FFFFFF" }}>
                      <img src={img.src} alt={img.label} className="w-full" style={{ maxHeight: "500px", objectFit: "contain" }} loading="lazy" />
                    </div>
                  </div>
                </div>
                <p className="font-body text-center mt-2" style={{ fontSize: "11px", color: "#c4b8ab" }}>{v.disclaimer}</p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="font-body text-center" style={{ fontSize: "20px", fontWeight: 700, color: "#2C2621", marginBottom: "32px" }}>{v.voiceTitle}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {v.testimonials.map((tx, i) => (
            <div key={i} className="rounded-sm glass-card p-6 hover:-translate-y-1 transition-transform duration-300">
              <p className="font-body mb-2" style={{ fontSize: "13px", color: "#9b8e82", fontWeight: 500 }}>{tx.label}</p>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 font-body text-sm leading-relaxed mb-6">「{tx.comment}」</p>
              <div className="border-t border-border pt-4">
                <p className="text-muted-foreground/60 font-body text-xs">{v.fromGoogle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
