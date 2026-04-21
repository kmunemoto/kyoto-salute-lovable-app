import heroImage from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section className="bg-background">
      {/* Diagonal photo block */}
      <div
        className="relative w-full pt-20 md:pt-24"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}
      >
        <div className="relative w-full h-[78vh] min-h-[520px] md:h-[82vh] md:min-h-[620px] overflow-hidden">
          <img
            src={heroImage}
            alt="パーソナルジムSalute御所南のトレーニング空間"
            width={2100}
            height={1200}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Subtle wash for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" aria-hidden="true" />

          {/* Text overlay */}
          <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center md:items-end pb-16 md:pb-28">
            <div className="max-w-2xl w-full">
              {/* Tagline pill */}
              <div className="animate-fade-up inline-block">
                <span className="inline-block bg-[hsl(var(--footer))] text-[hsl(var(--footer-foreground))] text-[12px] md:text-[13px] tracking-[0.15em] font-body font-medium px-[14px] py-[6px]">
                  京都市中京区・御所南のパーソナルジム
                </span>
              </div>

              {/* Main copy on translucent white */}
              <h1 className="animate-fade-up animate-delay-100 mt-2 inline-block bg-white/[0.92] text-foreground font-heading font-bold leading-[1.15] px-6 py-4 text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[3.75rem]">
                運動が初めても、
                <br />
                安心して通える
                <br />
                パーソナルジム。
              </h1>

              {/* Sub catch — terracotta, offset to right */}
              <div className="animate-fade-up animate-delay-200 mt-3 md:-mt-2 md:ml-16 inline-block">
                <span className="inline-block bg-gold text-white text-sm md:text-base font-body font-medium px-4 py-2">
                  栄養士資格を持つトレーナーが丁寧にサポート
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Below-the-fold block on cream background */}
      <div className="bg-background pt-10 md:pt-14 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <p className="animate-fade-up text-center md:text-left text-muted-foreground text-base md:text-lg font-body">
            あなたのペースに合わせて、一緒に始めませんか?
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-100">
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

          {/* Stats */}
          <div className="mt-12 md:mt-16 animate-fade-up animate-delay-200">
            <div className="grid grid-cols-3 divide-x divide-[hsl(var(--dark))]">
              {[
                { value: "140+", label: "月間指導実績(組)" },
                { value: "¥4,000〜", label: "1回あたりの料金" },
                { value: "¥0", label: "入会金・事務手数料" },
              ].map((stat) => (
                <div key={stat.label} className="px-3 md:px-6 first:pl-0 last:pr-0 text-center">
                  <div className="font-heading font-bold text-foreground text-2xl sm:text-3xl md:text-4xl leading-tight">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[11px] md:text-xs text-muted-foreground tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
