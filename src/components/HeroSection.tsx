import heroImage from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="丸太町駅近く・御所南のパーソナルジムSalute御所南のトレーニング設備"
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
            京都市中京区・御所南で安いパーソナルジム Salute御所南｜無料体験実施中
          </h1>

          <p className="animate-fade-up animate-delay-100 font-heading font-bold text-white leading-[1.25] mb-4 text-[28px] md:text-[44px]">
            運動が続かなかったあなたへ。
            <br />
            <span className="text-gold">御所南の完全マンツーマンジム。</span>
          </p>
          <p
            className="animate-fade-up animate-delay-150 font-body mb-6 text-[14px] md:text-[18px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            過去の自分を超える、史上最高のカラダで充実した人生を
          </p>

          <p className="animate-fade-up animate-delay-200 text-white/90 text-base md:text-lg font-body leading-relaxed mb-6 max-w-xl">
            栄養士資格を持つトレーナーが、あなたのペースに合わせて丁寧にサポート。¥4,000～の通いやすい価格で、入会金・レンタル費用もすべて無料です。
          </p>

          <p className="animate-fade-up animate-delay-200 font-body mb-10 max-w-xl" style={{ fontSize: "12px", color: "#8B7F70" }}>
            烏丸丸太町・御所南エリアで安いパーソナルジムをお探しの方へ。Salute御所南は丸太町駅から徒歩8分、1回¥4,000～・入会金¥0で通えるパーソナルジムです。無料体験トレーニングを実施中。入会前にトレーニング内容やトレーナーとの相性をお試しいただけます。京都市中京区・丸太町・御所南の落ち着いた環境で、栄養士資格を持つ専属トレーナーがマンツーマンで指導します。
          </p>

          <div className="animate-fade-up animate-delay-300 flex flex-col sm:flex-row gap-4 max-w-xl">
            <a
              href="https://kyoto-salute.lovable.app/trial"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient px-8 py-4 text-white font-medium rounded-sm text-center text-base flex-1"
            >
              まずは体験してみる
            </a>
            <a
              href="#features"
              className="border border-white/70 text-white hover:bg-white/10 transition-colors px-8 py-4 rounded-sm text-center font-medium bg-transparent flex-1"
            >
              Salute御所南の特徴を見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
