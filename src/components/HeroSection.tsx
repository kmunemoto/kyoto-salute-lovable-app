import heroImage from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="パーソナルジムSalute御所南のトレーニング設備"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="animate-fade-up text-gold text-sm md:text-base font-body tracking-wider mb-4 font-normal">
            京都市中京区・御所南のパーソナルジム Salute御所南
          </h1>

          <p className="animate-fade-up animate-delay-100 font-heading font-bold text-white leading-[1.2] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            過去の自分を超える、
            <br />
            <span className="text-gold">史上最高のカラダ</span>で
            <br />
            充実した人生を
          </p>

          <p className="animate-fade-up animate-delay-200 text-white/90 text-base md:text-lg font-body leading-relaxed mb-6 max-w-xl">
            あなたの"なりたい"をカタチにします。
            <br />
            1回あたり¥4,000〜。京都市中京区・御所南エリアで
            <br />
            <span className="text-gold font-bold text-[1.15em] whitespace-nowrap">通いやすい価格</span>
            のパーソナルジム。
          </p>

          <p className="animate-fade-up animate-delay-200 font-body mb-10 max-w-xl" style={{ fontSize: "12px", color: "#8B7F70" }}>
            京都市中京区・御所南エリアの完全個室・マンツーマンパーソナルトレーニングジム
          </p>

          <div className="animate-fade-up animate-delay-300 flex flex-col sm:flex-row gap-4 max-w-xl">
            <a
              href="https://kyoto-salute.lovable.app/trial"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient px-8 py-4 text-white font-medium rounded-sm text-center text-base flex-1"
            >
              無料体験を予約する
            </a>
            <a
              href="#features"
              className="border border-white/70 text-white hover:bg-white/10 transition-colors px-8 py-4 rounded-sm text-center font-medium bg-transparent flex-1"
            >
              Saluteの特徴を見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
