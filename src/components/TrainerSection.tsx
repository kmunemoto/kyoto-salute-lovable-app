import trainerPhoto from "@/assets/trainer.jpg";

const TrainerSection = () => {
  return (
    <section id="trainer" className="section-padding section-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Trainer</p>
          <h2 className="font-heading text-3xl md:text-5xl text-gym-dark-foreground">
            トレーナー紹介
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-16 space-y-5 text-gym-dark-foreground/80 font-body text-base leading-relaxed">
          <p>これまで多くのお客様の体づくりをサポートする中で、繰り返し耳にしてきた2つの悩みがあります。</p>
          <p>「自分に合ったやり方がわからない」、そして「続けられない」という声です。</p>
          <p>自己流のダイエットで一時的に体重を落とせても、無理な食事制限や間違った運動で代謝が落ち、停滞期に入り、やがてリバウンド。以前より体重が増えてしまう——そんな悪循環を経験された方を、私はたくさん見てきました。</p>
          <p>「体重は減ったのに、見た目がなかなか変わらない」という声も少なくありません。</p>
          <p>Salute御所南では、こうした悩みを根本から解決するために、お客様一人ひとりの生活スタイルに合わせた「続けられるトレーニング」と「無理のない食事改善」をご提案しています。</p>
          <p>健康的に、そしてしっかりと体を変えるための第一歩を、一緒に踏み出しましょう。</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-4xl mx-auto">
          <div className="lg:w-2/5 w-full">
            <div className="rounded-sm overflow-hidden">
              <img
                src={trainerPhoto}
                alt="丸太町駅近く・Salute御所南 代表トレーナー 宗本寛太"
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
