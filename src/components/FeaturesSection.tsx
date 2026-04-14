import { Shirt, Smartphone, Salad, Users, ClipboardList } from "lucide-react";
import featureTraining from "@/assets/feature-training.jpg";
import featureNutrition from "@/assets/feature-nutrition.jpg";
import featureApp from "@/assets/feature-app.jpg";

const mainFeatures = [
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
];

const subFeatures = [
  {
    icon: Users,
    title: "マンツーマン指導",
    description: "プロとの1対1だから楽しく続けられ、怪我も防げます。",
  },
  {
    icon: ClipboardList,
    title: "あなた専用のトレーニングプラン",
    description: "目的や体質に合わせた専用メニューで安全に目標へ導きます。",
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
            Salute御所南の特徴
          </h2>
        </div>

        {/* Main feature cards */}
        <div className="space-y-20">
          {mainFeatures.map((feature, index) => (
            <div
              key={feature.number}
              className={`flex flex-col gap-8 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center`}
            >
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

        {/* Sub features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {subFeatures.map((sf) => (
            <div
              key={sf.title}
              className="flex items-start gap-4 p-6 rounded-sm border border-border bg-card"
            >
              <sf.icon className="w-6 h-6 text-gold shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h4 className="font-body font-semibold text-foreground mb-1">{sf.title}</h4>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {sf.description}
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
