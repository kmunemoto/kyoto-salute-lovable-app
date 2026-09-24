import { useT } from "@/i18n/LanguageContext";

const NumbersSection = () => {
  const { t } = useT();
  return (
    <section id="numbers" className="section-padding text-white" style={{ backgroundColor: "#0ABAB5" }}>
      <div className="max-w-6xl mx-auto">
        {/*
          見出し書体（Playfair Display）は日本語を持たず、「組」「〜」や見出しの日本語だけ端末の明朝体になって
          書体が混ざるため、この欄は見出し・数字とも本文と同じ Noto Sans JP でそろえる。
        */}
        <div className="text-center mb-12">
          <p className="text-white text-sm tracking-[0.3em] uppercase mb-3 font-body">{t.numbers.kicker}</p>
          <h2 className="font-body font-medium text-3xl md:text-5xl text-white">{t.numbers.title}</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {t.numbers.items.map((n, i) => (
            <div key={i} className="text-center">
              <p className="font-body font-bold text-white leading-none mb-3" style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}>{n.value}</p>
              <p className="font-body text-sm md:text-base text-white/90">{n.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
