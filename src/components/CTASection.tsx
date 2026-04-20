import trialImage from "@/assets/trial-gym.jpg";

const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Consultation</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            本気で始めたい方へ、無料カウンセリング。
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div className="relative rounded-sm overflow-hidden group">
            <img
              src={trialImage}
              alt="Salute御所南の店内・トレーニング設備"
              loading="lazy"
              className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Text + CTAs */}
          <div className="text-center lg:text-left">
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              「本気で変わりたい」と思っている方、お待ちしています。
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              60分のカウンセリングと体験トレーニングで、現在の体の状態と目標に応じたあなた専用プランをご提案します。
            </p>

            {/* カウンセリング内容 */}
            <div className="mb-6 text-left">
              <h3 className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">【カウンセリング内容】</h3>
              <ul className="space-y-2 text-muted-foreground font-body leading-relaxed">
                <li>・お客様の目標に合わせたオーダーメイドプラン作成</li>
                <li>・体験トレーニング（マンツーマン指導）</li>
                <li>・食事面のアドバイス</li>
              </ul>
            </div>

            {/* こんな方におすすめ */}
            <div className="mb-6 text-left">
              <h3 className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">【こんな方におすすめ】</h3>
              <ul className="space-y-2 text-muted-foreground font-body leading-relaxed">
                <li>◇ 今度こそ本気でダイエットに成功したい方</li>
                <li>◇ 運動習慣を定着させたい方</li>
                <li>◇ 正しいトレーニング・食事管理の知識を身につけたい方</li>
              </ul>
            </div>

            {/* 希少性テキスト */}
            <p className="text-xs font-body leading-relaxed mb-8 text-left">
              <span className="text-gold">※</span>{" "}
              <span className="text-muted-foreground">内容の濃いセッションのため、</span>
              <span className="text-gold">完全予約制で1日2名様限定</span>
              <span className="text-muted-foreground">でご案内しております。</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://page.line.me/393blgip"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[hsl(140,60%,40%)] bg-[hsl(140,60%,40%)] px-10 py-4 text-primary-foreground font-medium rounded-sm hover:opacity-90 transition-opacity font-body text-center"
              >
                LINEで申し込む
              </a>
              <a
                href="https://kyoto-salute.lovable.app/trial"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient px-10 py-4 text-gym-dark font-medium rounded-sm hover:opacity-90 transition-opacity font-body text-center"
              >
                WEBで申し込む
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
