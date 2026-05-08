const numbers = [
  { value: "¥0", label: "入会金・事務手数料" },
  { value: "¥4,000〜", label: "1回あたりの料金" },
  { value: "5.0", label: "Google口コミ評価" },
  { value: "140組+", label: "月間指導実績" },
];

const NumbersSection = () => {
  return (
    <section id="numbers" className="section-padding text-white" style={{ backgroundColor: "#0ABAB5" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-white text-sm tracking-[0.3em] uppercase mb-3 font-body">Numbers</p>
          <h2 className="font-heading text-3xl md:text-5xl text-white">数字で見るSalute御所南</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {numbers.map((n, i) => (
            <div key={i} className="text-center">
              <p
                className="font-heading text-white leading-none mb-3"
                style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)", fontWeight: 900 }}
              >
                {n.value}
              </p>
              <p className="font-body text-sm md:text-base text-white/90">{n.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;