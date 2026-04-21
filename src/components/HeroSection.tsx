import heroImage from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section className="bg-background pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        {/* Text block */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <span className="block w-12 h-px bg-gold" aria-hidden="true" />
            <p className="text-gold text-xs md:text-sm tracking-[0.2em] font-body font-medium">
              京都市中京区・御所南のパーソナルジム
            </p>
          </div>
          <h1 className="font-heading font-bold text-foreground leading-[1.2] mb-8 animate-fade-up animate-delay-100 text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            運動が初めても、
            <br />
            安心して通える
            <br />
            パーソナルジム。
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-10 animate-fade-up animate-delay-200 font-body leading-relaxed">
            栄養士資格を持つトレーナーが、あなたのペースに合わせて丁寧にサポートします。
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

        {/* Stats */}
        <div className="mt-14 md:mt-16 animate-fade-up animate-delay-400">
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

        {/* Cinematic image */}
        <div className="mt-14 md:mt-20 animate-fade-up animate-delay-400">
          <div className="relative overflow-hidden rounded-xl shadow-xl aspect-[16/9] md:aspect-[21/9]">
            <img
              src={heroImage}
              alt="パーソナルジムSalute御所南のトレーニング空間"
              width={2100}
              height={900}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
