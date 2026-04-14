import { Star } from "lucide-react";

const testimonials = [
  {
    gender: "30代女性",
    period: "3ヶ月",
    comment: "運動経験ゼロでしたが、丁寧に教えていただき楽しく続けられています。",
    rating: 5,
  },
  {
    gender: "40代男性",
    period: "6ヶ月",
    comment: "仕事帰りに手ぶらで通えるのが本当に便利。体重も-5kg達成しました。",
    rating: 5,
  },
  {
    gender: "20代女性",
    period: "2ヶ月",
    comment: "食事のアドバイスが的確で、無理なく食生活が改善できました。",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="voice" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Voice</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            お客様の声
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-sm border border-border bg-card p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-foreground/80 font-body text-sm leading-relaxed mb-6">
                「{t.comment}」
              </p>

              {/* Meta */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground font-body text-sm font-medium">{t.gender}</span>
                  <span className="text-muted-foreground font-body text-xs">
                    通った期間：{t.period}
                  </span>
                </div>
                <p className="text-muted-foreground/60 font-body text-xs">Google口コミより</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
