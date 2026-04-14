import { Shirt, Smartphone, Salad, Users, ClipboardList } from "lucide-react";
import featureTraining from "@/assets/feature-training.jpg";
import featureNutrition from "@/assets/feature-nutrition.jpg";
import featureApp from "@/assets/feature-app.jpg";

const features = [
  {
    number: "01",
    icon: Shirt,
    title: "完全手ぶらで通えるパーソナルジム",
    description:
      "ウェア、シューズ、タオル、お水、ヘアゴム、ボディシートなど、すべて無料でご用意。お仕事帰りでも荷物は一切不要です。",
    image: featureTraining,
  },
  {
    number: "02",
    icon: Smartphone,
    title: "「変わった」を数字で実感。Salute独自開発の専用アプリ",
    description:
      "トレーニング記録、体の変化、食事のPFCバランスをAIが自動解析。毎月届くレポートで成長を振り返れます。",
    image: featureApp,
  },
  {
    number: "03",
    icon: Salad,
    title: "栄養士の資格を持つトレーナーが食生活もサポート",
    description:
      "コンビニ食や外食が多い方でも無理なく続けられる「一生モノの知識」をお伝えします。",
    image: featureNutrition,
  },
  {
    number: "04",
    icon: Users,
    title: "マンツーマン指導でモチベーション維持",
    description:
      "プロとのマンツーマンなら楽しみながら続けられます。怪我を防ぎ、目標に着実に近づけます。",
  },
  {
    number: "05",
    icon: ClipboardList,
    title: "一人ひとりに合わせたトレーニングプラン",
    description:
      "あなたの目的や体にぴったりの専用メニューを作成。安全に運動を楽しめるようサポートします。",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Features</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            パーソナルジムSalute御所南の特徴
          </h2>
        </div>

        {/* Feature cards */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={`flex flex-col gap-8 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center`}
            >
              {/* Image or icon placeholder */}
              {feature.image ? (
                <div className="lg:w-1/2 w-full">
                  <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 gold-gradient text-gym-dark px-3 py-1 text-xs font-medium rounded-sm font-body">
                      Feature.{feature.number}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="lg:w-1/2 w-full">
                  <div className="relative overflow-hidden rounded-sm aspect-[4/3] bg-secondary flex items-center justify-center">
                    <feature.icon className="w-24 h-24 text-gold/40" strokeWidth={1} />
                    <div className="absolute top-4 left-4 gold-gradient text-gym-dark px-3 py-1 text-xs font-medium rounded-sm font-body">
                      Feature.{feature.number}
                    </div>
                  </div>
                </div>
              )}

              {/* Text */}
              <div className="lg:w-1/2 w-full">
                <span className="font-heading text-6xl text-gold/15 block mb-2">
                  {feature.number}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-body text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://kyoto-salute.lovable.app/trial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gold-gradient px-10 py-4 text-gym-dark font-medium rounded-sm hover:opacity-90 transition-opacity"
          >
            無料体験予約はこちら
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
