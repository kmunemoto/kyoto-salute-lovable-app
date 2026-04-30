import trainerPhoto from "@/assets/trainer.jpg";

const TrainerSection = () => {
  return (
    <section id="trainer" className="section-padding section-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Trainer</p>
          <h2 className="font-heading text-3xl md:text-5xl text-gym-dark-foreground">
            京都市中京区・御所南のパーソナルジムを支える専属トレーナー
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-4xl mx-auto">
          <div className="lg:w-2/5 w-full">
            <div className="rounded-sm overflow-hidden">
              <img
                src={trainerPhoto}
                alt="Salute御所南 代表トレーナー 宗本寛太"
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:w-3/5 w-full">
            <h3 className="font-heading text-2xl md:text-3xl text-gym-dark-foreground mb-2">
              宗本 寛太
            </h3>
            <p className="text-gym-dark-foreground/50 text-sm font-body mb-1">Munemoto Kanta</p>
            <p className="text-gold text-sm font-body tracking-wide mb-6">
              Salute御所南 代表トレーナー
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-gold/80 text-xs tracking-[0.2em] uppercase font-body mb-2">保有資格</h4>
                <p className="text-gym-dark-foreground/70 font-body text-sm">
                  栄養士
                </p>
              </div>

              <div>
                <h4 className="text-gold/80 text-xs tracking-[0.2em] uppercase font-body mb-2">経歴</h4>
                <p className="text-gym-dark-foreground/70 font-body text-sm leading-relaxed">
                  四条烏丸のパーソナルジムにて店長として勤務。月140組以上の指導経験を積み、2024年11月より「パーソナルジムSalute御所南」のトレーナーに就任。
                </p>
              </div>

              <div>
                <h4 className="text-gold/80 text-xs tracking-[0.2em] uppercase font-body mb-2">メッセージ</h4>
                <p className="text-gym-dark-foreground/70 font-body text-sm leading-relaxed italic">
                  「運動が苦手な方、ジムが初めての方もご安心ください。皆様の目標に向けて全力でサポートさせていただきます！」
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
