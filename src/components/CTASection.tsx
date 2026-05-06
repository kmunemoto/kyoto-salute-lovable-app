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
              初めての方も安心の無料体験トレーニング。実際のトレーニング内容・ジムの雰囲気・トレーナーとの相性を体感してから、ご入会をご検討いただけます。無理な勧誘は一切ございません。
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              ・運動が苦手で不安…
              <br />
              ・トレーナーはどんな人だろう…
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-10">
              ご入会前の様々な不安は、無料体験で解消できます。
              <br />
              ジムの雰囲気やトレーニングの内容を、ぜひ一度ご体感ください！
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://kyoto-salute.lovable.app/trial"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient px-10 py-4 text-white font-medium rounded-sm transition-opacity font-body text-center"
              >
                WEBから予約
              </a>
              <a
                href="https://page.line.me/393blgip"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[hsl(140,60%,40%)] bg-[hsl(140,60%,40%)] px-10 py-4 text-primary-foreground font-medium rounded-sm hover:opacity-90 transition-opacity font-body text-center"
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
