import trialImage from "@/assets/trial-gym.jpg";

const CTASection = () => {
  return (
    <section id="consultation" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Consultation</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            無料体験のご案内
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div className="relative rounded-sm overflow-hidden group">
            <img
              src={trialImage}
              alt="丸太町駅近く・京都市中京区のパーソナルジムSalute御所南の体験トレーニング"
              loading="lazy"
              className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Text + CTAs */}
          <div className="text-center lg:text-left">
            <div className="text-muted-foreground font-body leading-relaxed mb-6 space-y-4">
              <p>無料体験で、まずはお試しください。</p>
              <ul className="list-disc list-inside space-y-1">
                <li>運動が苦手で不安…</li>
                <li>トレーナーはどんな人だろう…</li>
              </ul>
              <p>ご入会前の様々な不安は、無料体験で解消できます。</p>
              <p>ジムの雰囲気やトレーニングの内容を、ぜひ一度ご体感ください。</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://kyoto-salute.lovable.app/trial"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 px-10 py-4 text-primary-foreground font-medium rounded-sm transition-colors font-body text-center"
              >
                WEBから無料体験を予約
              </a>
              <a
                href="https://lin.ee/UMVDzWF"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary bg-white px-10 py-4 text-primary font-medium rounded-sm hover:bg-primary/5 transition-colors font-body text-center"
              >
                LINEから予約
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
