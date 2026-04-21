import { Check } from "lucide-react";

const plans = [
  {
    name: "月4回プラン",
    price: "¥20,000",
    perSession: "1回あたり ¥5,000",
    description: "健康維持や運動不足解消にオススメ",
    features: ["1セッション60分", "月4回まで利用可能", "完全手ぶらOK", "専用アプリ利用"],
    popular: false,
  },
  {
    name: "月6回プラン",
    price: "¥28,500",
    perSession: "1回あたり ¥4,750",
    description: "週1回以上トレーニングしたい方にオススメ",
    features: ["1セッション60分", "月6回まで利用可能", "完全手ぶらOK", "専用アプリ利用"],
    popular: false,
  },
  {
    name: "月8回プラン",
    price: "¥36,000",
    perSession: "1回あたり ¥4,500",
    description: "ダイエットやボディメイクにオススメ",
    features: ["1セッション60分", "月8回まで利用可能", "完全手ぶらOK", "専用アプリ利用", "食事アドバイス"],
    popular: true,
  },
  {
    name: "月15回プラン",
    price: "¥60,000",
    perSession: "1回あたり ¥4,000",
    description: "本格的なダイエット・ボディメイクに",
    features: ["1セッション60分", "月15回まで利用可能", "完全手ぶらOK", "専用アプリ利用", "食事アドバイス"],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding section-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Plan</p>
          <h2 className="font-heading text-3xl md:text-5xl text-gym-dark-foreground">
            料金プラン
          </h2>
          <p className="text-gym-dark-foreground/60 mt-4 max-w-lg mx-auto font-body">
            入会金・事務手数料 <span className="text-gold font-semibold text-lg">¥0</span>
          </p>
          <p className="text-gym-dark-foreground/50 mt-2 text-sm font-body">
            4つのプランからお客様の目標に合わせてお選びいただけます。
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-sm p-6 border transition-all hover:-translate-y-1 duration-300 ${
                plan.popular
                  ? "border-gold bg-background shadow-md"
                  : "border-border bg-background/70"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gold-gradient text-white text-xs font-medium px-4 py-1 rounded-full">
                  おすすめ
                </div>
              )}
              <h3 className="text-gym-dark-foreground font-body font-semibold text-lg mb-1">
                {plan.name}
              </h3>
              <p className="text-gym-dark-foreground/50 text-sm mb-4 font-body">
                {plan.description}
              </p>
              <div className="mb-1">
                <span className="text-3xl font-heading text-gold">{plan.price}</span>
                <span className="text-gym-dark-foreground/50 text-sm font-body">（税込）/月</span>
              </div>
              <p className="text-gold/70 text-xs mb-6 font-body">{plan.perSession}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gym-dark-foreground/70 font-body">
                    <Check className="w-4 h-4 text-gold shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://kyoto-salute.lovable.app/trial"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-sm text-sm font-medium transition-all font-body ${
                  plan.popular
                    ? "gold-gradient text-white"
                    : "border border-gold/40 text-gold hover:bg-gold/10"
                }`}
              >
                無料体験を申し込む
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
