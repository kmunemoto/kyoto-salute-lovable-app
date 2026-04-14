import heroImage from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 md:items-center md:pb-0">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="パーソナルジムSalute御所南のトレーニング風景"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gym-dark via-gym-dark/60 to-gym-dark/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <p className="text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-up font-body">
          京都・御所南のパーソナルジム
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-gym-dark-foreground leading-tight mb-6 animate-fade-up animate-delay-100">
          過去の自分を超える、
          <br />
          <span className="gold-text">史上最高のカラダ</span>で
          <br />
          充実した人生を
        </h1>
        <p className="text-gym-dark-foreground/70 text-base md:text-lg max-w-xl mb-4 animate-fade-up animate-delay-200 font-body leading-relaxed">
          あなたの"なりたい"をカタチにします。
        </p>
        <p className="animate-fade-up animate-delay-200 mb-10">
          <span className="inline-block gold-gradient text-gym-dark font-heading text-xl md:text-2xl px-5 py-2 rounded-sm tracking-wide">
            京都最安値・コスパ最強のパーソナルジム
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-300">
          <a
            href="https://kyoto-salute.lovable.app/trial"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient px-8 py-4 text-gym-dark font-medium rounded-sm hover:opacity-90 transition-opacity text-center"
          >
            無料体験を予約する
          </a>
          <a
            href="#features"
            className="border border-gym-dark-foreground/30 px-8 py-4 text-gym-dark-foreground hover:border-gold hover:text-gold transition-colors rounded-sm text-center"
          >
            Saluteの特徴を見る
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-px h-16 bg-gradient-to-b from-gold/0 via-gold to-gold/0 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
