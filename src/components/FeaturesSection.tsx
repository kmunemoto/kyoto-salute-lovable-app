import { Shirt, Smartphone, Salad } from "lucide-react";
import featureTraining from "@/assets/feature-training.jpg";
import featureNutrition from "@/assets/feature-nutrition.jpg";
import featureApp from "@/assets/feature-app.jpg";
import gymInterior from "@/assets/gym-interior.jpg";

const mainFeatures = [
  {
    number: "01",
    icon: Shirt,
    title: "あなただけの空間で、集中できる",
    description:
      "他のお客様と顔を合わせることはありません。周りの目を気にせず、トレーナーと二人だけの空間でトレーニングに集中できます。初心者の方も、人目を気にせず安心して取り組めます。",
    image: featureTraining,
    isApp: false,
  },
  {
    number: "02",
    icon: Smartphone,
    title: "体の変化が「見える」から、続けられる",
    description:
      "専用アプリでトレーニング記録や体の変化を自動で記録。数字やグラフで成長を実感できるから、モチベーションが続きます。毎月届くレポートで振り返りも簡単です。",
    image: featureApp,
    isApp: true,
  },
  {
    number: "03",
    icon: Salad,
    title: "食事の悩みも、一緒に解決できる",
    description:
      "栄養士資格を持つトレーナーが、トレーニングだけでなく食事面もサポート。コンビニ食や外食が多い方でも、無理なく続けられる食事改善を一緒に考えます。極端な食事制限は行いません。",
    image: featureNutrition,
    isApp: false,
  },
  {
    number: "04",
    icon: Shirt,
    title: "続けられる価格だから、体が変わる",
    description:
      "1回¥4,000〜、入会金¥0。ウェア・シューズ・タオル・お水もすべて無料です。パーソナルジムの「高い」というイメージを覆す、続けやすい料金設定にしています。",
    image: gymInterior,
    isApp: false,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Features</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            Salute御所南が選ばれる理由
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
                {feature.isApp ? (
                  <div className="relative flex justify-center items-center py-8">
                    {/* iPhone mockup frame */}
                    <div className="relative w-[240px] md:w-[280px] rounded-[2.5rem] border-[6px] border-foreground/80 bg-foreground/80 shadow-2xl overflow-hidden">
                      {/* Screen */}
                      <div className="rounded-[2rem] overflow-hidden">
                        <img
                          src={feature.image}
                          alt="丸太町駅近く・Salute御所南 専用アプリの画面"
                          loading="lazy"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 gold-gradient text-white px-3 py-1 text-xs font-medium rounded-sm font-body">
                      Feature.{feature.number}
                    </div>
                  </div>
                ) : (
                  <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
                    <img
                      src={feature.image}
                      alt={
                        feature.number === "01"
                          ? "無料レンタルのウェアとシューズ 手ぶらで通えるパーソナルジム"
                          : feature.number === "04"
                            ? "丸太町駅近く・京都で安いパーソナルジムSalute御所南の月額¥20,000からの料金プラン"
                            : "栄養士資格を持つトレーナーによる食事アドバイス"
                      }
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 gold-gradient text-white px-3 py-1 text-xs font-medium rounded-sm font-body">
                      Feature.{feature.number}
                    </div>
                  </div>
                )}
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

        {/* Supplementary note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground font-body text-base leading-relaxed max-w-2xl mx-auto">
            すべてのプランで、完全マンツーマンの指導と、お客様一人ひとりに合わせたオーダーメイドのトレーニングメニューをご提供しています。
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://kyoto-salute.lovable.app/trial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gold-gradient px-10 py-4 text-white font-medium rounded-sm transition-opacity"
          >
            まずは体験してみる
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
