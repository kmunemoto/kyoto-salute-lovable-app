import { CalendarCheck, ClipboardCheck } from "lucide-react";
import type { ReactNode } from "react";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "WEBで予約",
    description: (
      <>
        <a
          href="https://kyoto-salute.lovable.app/trial"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          予約フォーム
        </a>
        からご希望の日時を選んで送信。最短30秒で予約完了です。
      </>
    ),
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "カウンセリング＋トレーニング",
    description:
      "カウンセリングで目標やお悩みをヒアリングした後、パーソナルトレーニングを体験。カウンセリングからトレーニングまで合計60分です。手ぶらでOK。",
  },
] as { number: string; icon: typeof CalendarCheck; title: string; description: ReactNode }[];

const FlowSection = () => {
  return (
    <section id="flow" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">Flow</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">無料体験の流れ</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          ウェア・シューズ・タオル・お水は無料でご用意しています。
        </p>
      </div>
    </section>
  );
};

export default FlowSection;