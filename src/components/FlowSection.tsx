import { MessageCircle, ClipboardCheck, Smile } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "LINEで予約",
    description:
      "LINEで友だち追加して「無料体験希望」とメッセージ。ご希望の日時を調整します。",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "カウンセリング＋トレーニング",
    description:
      "目標やお悩みをヒアリング後、60分間のパーソナルトレーニングを体験。手ぶらでOKです。",
  },
  {
    number: "03",
    icon: Smile,
    title: "プランのご案内",
    description:
      "体験後にプランをご案内します。その場で決める必要はありません。ご自宅でゆっくりご検討ください。",
  },
];

const FlowSection = () => {
  return (
    <section id="flow" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">Flow</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">無料体験の流れ</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.number}
                className="rounded-sm border border-border bg-white p-8 text-center flex flex-col items-center"
              >
                <p className="font-heading text-primary text-2xl mb-3">{s.number}</p>
                <Icon className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-heading text-xl text-foreground mb-3">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center font-body text-muted-foreground mt-10 leading-relaxed">
          所要時間は約75分。ウェア・シューズ・タオル・お水は無料でご用意しています。
        </p>
      </div>
    </section>
  );
};

export default FlowSection;