import { Dumbbell, HelpCircle, UtensilsCrossed, Users } from "lucide-react";

const concerns = [
  { icon: Dumbbell, text: "ジムに通ったけど続かなかった" },
  { icon: HelpCircle, text: "何をすればいいかわからない" },
  { icon: UtensilsCrossed, text: "食事制限がつらくて挫折した" },
  { icon: Users, text: "大手ジムは人目が気になる" },
];

const ConcernSection = () => {
  return (
    <section id="concern" className="section-padding bg-white" style={{ color: "#2C2621" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">Concern</p>
          <h2 className="font-heading text-3xl md:text-5xl">こんなお悩みありませんか？</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {concerns.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="rounded-sm border border-border bg-white p-8 text-center flex flex-col items-center gap-4"
              >
                <Icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                <p className="font-body text-base leading-relaxed">{c.text}</p>
              </div>
            );
          })}
        </div>

        <p className="text-center font-body mt-10 leading-relaxed">
          Salute御所南は、こうしたお悩みを解決するために生まれたパーソナルジムです。
        </p>
      </div>
    </section>
  );
};

export default ConcernSection;