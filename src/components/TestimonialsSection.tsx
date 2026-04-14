import { Star } from "lucide-react";

const testimonials = [
  {
    gender: "30代女性",
    period: "3ヶ月",
    comment: "運動が苦手でしたが、トレーナーさんが丁寧に教えてくれるので楽しく通えています。体重も落ちてきて嬉しいです！",
    rating: 5,
  },
  {
    gender: "40代男性",
    period: "6ヶ月",
    comment: "仕事帰りに手ぶらで通えるのが最高です。食事指導も的確で、健康診断の数値が改善しました。",
    rating: 5,
  },
  {
    gender: "20代女性",
    period: "2ヶ月",
    comment: "アプリで記録が残るので、自分の成長が目に見えてモチベーションが続きます。ジムの雰囲気もおしゃれで気に入っています。",
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
              <div className="border-t border-border pt-4 flex items-center justify-between">
                <span className="text-foreground font-body text-sm font-medium">{t.gender}</span>
                <span className="text-muted-foreground font-body text-xs">
                  通った期間：{t.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
