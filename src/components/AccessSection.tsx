import { MapPin, Clock, Train, Phone } from "lucide-react";

const AccessSection = () => {
  return (
    <section id="access" className="section-padding section-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Access</p>
          <h2 className="font-heading text-3xl md:text-5xl text-gym-dark-foreground">
            アクセス
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-sm overflow-hidden aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.5!2d135.768!3d35.017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDAxJzAxLjIiTiAxMzXCsDQ2JzA0LjgiRQ!5e0!3m2!1sja!2sjp!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="パーソナルジムSalute御所南の地図"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="text-gym-dark-foreground font-body font-semibold mb-1">住所</h3>
                <p className="text-gym-dark-foreground/70 font-body">
                  〒604-0981
                  <br />
                  京都市中京区毘沙門町533-1 プラザ御所南 2階
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Train className="w-5 h-5 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="text-gym-dark-foreground font-body font-semibold mb-1">最寄駅</h3>
                <ul className="text-gym-dark-foreground/70 font-body space-y-1 text-sm">
                  <li>京都市バス「裁判所前」駅 徒歩3分</li>
                  <li>京都市営地下鉄「丸太町」駅 徒歩8分</li>
                  <li>京阪「神宮丸太町」駅 徒歩8分</li>
                  <li>京都市営地下鉄「京都市役所前」駅 徒歩10分</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="text-gym-dark-foreground font-body font-semibold mb-1">営業時間</h3>
                <p className="text-gym-dark-foreground/70 font-body">
                  10:00〜21:30（完全予約制）
                </p>
                <p className="text-gym-dark-foreground/50 font-body text-sm mt-1">
                  不定休 / 営業時間外もご予約を承れる場合がございます
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="text-gym-dark-foreground font-body font-semibold mb-1">お問い合わせ</h3>
                <p className="text-gym-dark-foreground/70 font-body text-sm">
                  ご質問やご相談は公式LINEまたはInstagramのDMよりお受けしております。
                </p>
              </div>
            </div>

            <p className="text-gym-dark-foreground/50 font-body text-sm">
              ※自転車でお越しの際は、ビル1階の階段横スペースにお停めください。
              <br />
              ※駐車場は周辺コインパーキングをご利用ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
