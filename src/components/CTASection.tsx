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
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              まずは気軽に体験してみてください。あなたに合ったトレーニングを、実際に体感していただけます。無理な勧誘は一切ございません。
            </p>

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
