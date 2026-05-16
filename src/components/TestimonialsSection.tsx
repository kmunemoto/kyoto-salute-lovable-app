import { Star } from "lucide-react";
import dietChart from "@/assets/testimonials/diet-30f.png";
import bodymakeChart from "@/assets/testimonials/bodymake-40m.png";

const testimonials = [
  {
    label: "30代女性・会社員",
    comment: "的確にトレーナーさんに指導していただけるところがパーソナルトレーニングならではの良いところで、続けやすい料金と回数設定なので初心者でも始めやすいです。ジムへ通っていた時よりも短期間で効果も感じられ、毎回楽しみながらトレーニングさせてもらっています。",
    rating: 5,
  },
  {
    label: "40代男性・デスクワーク",
    comment: "通い始めて4か月ほどになります。普通の月額制のジムも通っていましたが続かず、パーソナルトレーニングは強制力があり自分には合っているようです。毎回同じトレーニングではなく少しずつ変えて調整してもらえるので毎回効果を感じています。自分では気づきにくい正しいフォームも教えてもらいながらたくさん褒めてもらえるのでモチベーションも上がり、筋トレの意欲が高まります！",
    rating: 5,
  },
  {
    label: "",
    comment: "筋トレ初心者ですが、楽しく通っています。トレーナーは、優しく感じのいい方です。筋トレだけでなく食事のアドバイスもしてくれるので、食事内容も意識するようになりました。ウェア、シューズ等無料レンタルなので手ぶらで通え、前後の予定があっても通いやすいです。内装はおしゃれで窓からは御所の緑が見え雰囲気もいいです。",
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
          <div className="flex flex-col items-center justify-center mt-6">
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-6 h-6 fill-current" style={{ color: "#0ABAB5" }} />
                ))}
              </div>
              <span className="font-body" style={{ fontSize: "36px", fontWeight: 800 }}>5.0</span>
            </div>
            <p className="font-body mt-2" style={{ fontSize: "14px", color: "#9b8e82" }}>
              Google口コミ 17件
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3
            className="font-body text-center"
            style={{ fontSize: "20px", fontWeight: 700, color: "#2C2621", marginBottom: "24px" }}
          >
            お客様の変化
          </h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {[
              { src: dietChart, alt: "30代女性・ダイエットの変化グラフ" },
              { src: bodymakeChart, alt: "40代男性・ボディメイクの変化グラフ" },
            ].map((img, i) => (
              <div key={i} className="w-full" style={{ maxWidth: "480px" }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  }}
                  loading="lazy"
                />
                <p
                  className="font-body text-center mt-2"
                  style={{ fontSize: "11px", color: "#c4b8ab" }}
                >
                  ※効果には個人差があります
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-sm border border-border bg-white p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              {t.label && (
                <p
                  className="font-body mb-2"
                  style={{ fontSize: "13px", color: "#9b8e82", fontWeight: 500 }}
                >
                  {t.label}
                </p>
              )}
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

              {/* Source */}
              <div className="border-t border-border pt-4">
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
