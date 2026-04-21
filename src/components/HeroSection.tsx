import heroImage from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section className="bg-background pt-24 pb-12 md:pt-28 md:pb-20 lg:min-h-screen lg:flex lg:items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-1">
            <p className="text-gold text-xs md:text-sm tracking-[0.25em] uppercase mb-5 animate-fade-up font-body font-medium">
              京都市中京区・御所南のパーソナルジム
            </p>
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground leading-[1.3] mb-6 animate-fade-up animate-delay-100">
              運動が初めての方も、
              <br />
              安心して通えるジム。
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-10 animate-fade-up animate-delay-200 font-body leading-relaxed">
              栄養士資格を持つトレーナーが、あなたのペースに合わせて丁寧にサポート。
              <br className="hidden md:block" />
              1回あたり¥4,000〜、入会金無料で手ぶらで通えます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-300">
              <a
                href="https://kyoto-salute.lovable.app/trial"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient px-8 py-4 text-white font-medium rounded-sm text-center text-base"
              >
                まずは無料カウンセリングから
              </a>
              <a
                href="#features"
                className="border border-gold text-gold hover:bg-gold hover:text-white transition-colors px-8 py-4 rounded-sm text-center font-medium bg-transparent"
              >
                Saluteの特徴を見る
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-2 animate-fade-up animate-delay-200">
            <div className="relative rounded-sm overflow-hidden shadow-lg aspect-[4/5] md:aspect-[5/4] lg:aspect-[4/5]">
              <img
                src={heroImage}
                alt="パーソナルジムSalute御所南のトレーニング空間"
                width={1200}
                height={1500}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
