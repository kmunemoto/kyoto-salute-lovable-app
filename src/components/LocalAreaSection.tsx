import { MapPin } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

const LocalAreaSection = () => {
  const { lang } = useT();
  if (lang !== "ja") return null;

  return (
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-5 h-5 text-gold shrink-0" />
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-body">Area</p>
        </div>
        <h2 className="font-heading text-2xl md:text-4xl text-foreground leading-snug">
          御所南・丸太町エリアで通いやすいパーソナルジム
        </h2>
        <div className="mt-8 space-y-6 font-body text-sm md:text-base leading-relaxed text-foreground/80">
          <p>
            Salute御所南は、京都市中京区・御所南エリアにある完全予約制のパーソナルジムです。地下鉄「丸太町」駅、京阪「神宮丸太町」駅から徒歩圏内で、烏丸丸太町・河原町丸太町周辺にお住まいの方や、お仕事帰りに通いたい方にもご利用いただいています。
          </p>
          <p>
            運動初心者の方、ジムが続かなかった方、食事管理に不安がある方でも、栄養士資格を持つトレーナーが一人ひとりのペースに合わせてサポートします。
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocalAreaSection;