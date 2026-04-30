import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "無料体験ではどんなことをしますか？",
    answer:
      "カウンセリングで目標やお悩みをお聞きした後、実際の60分間のパーソナルトレーニングを体験していただきます。トレーニングの進め方や食事のアドバイスも含まれます。ウェアとシューズは無料レンタルがありますので、手ぶらでお越しください。",
  },
  {
    question: "無料体験後にしつこい勧誘はありますか？",
    answer:
      "一切ございません。体験後にプランのご案内はいたしますが、その場でのご決断を強制することはありません。ご自宅でゆっくりご検討ください。",
  },
  {
    question: "なぜ御所南のSaluteはこんなに安いのですか？",
    answer:
      "大規模な広告費や過剰な内装費をかけず、トレーニングの質と通いやすい価格の両立に集中しているためです。京都市中京区の相場と比べて1回あたり¥4,000～と、続けやすい価格設定を実現しています。",
  },
  {
    question: "運動経験がないのですが、大丈夫でしょうか？",
    answer:
      "もちろん大丈夫です！来店されるほとんどの方が初めての方ばかりです。一人一人の運動経験や体力・目的にあったトレーニングをトレーナーが丁寧に指導いたしますので、安心して挑戦してみてください。",
  },
  {
    question: "持ち物はありますか？",
    answer:
      "ウェアや靴に加えてお水もご用意しておりますので、手ぶらでお気軽にお越しいただけます。もちろん、トレーニングウェアなどをご持参いただいても構いません。更衣室もご利用いただけます。",
  },
  {
    question: "どのような方が通っていますか？",
    answer:
      "30代〜40代のお客様を中心に、幅広い年代の方にお越しいただいています。男女比も半々くらいで、運動が初めての方や、これから始めたいという方がほとんどです。",
  },
  {
    question: "体験トレーニングはできますか？",
    answer:
      "はい、無料の体験トレーニングをご用意しております。ジムの雰囲気やトレーニングを確かめる良い機会ですので、お気軽にご利用ください。",
  },
  {
    question: "プランの有効期限はどうなっていますか？",
    answer:
      "プランの有効期間は、その月の1回目のトレーニング日から起算して1ヶ月間となります。例えば、10月15日が1回目のトレーニング日の場合、翌11月14日までが有効期間となります。有効期間内に消化できなかった未消化分のセッションは、翌期間に繰り越されず消滅しますのでご了承ください。",
  },
  {
    question: "最低契約期間はありますか？",
    answer:
      "契約期間に縛りはございません。最低1ヶ月から始められますので、ご安心ください。",
  },
  {
    question: "支払日はいつですか？",
    answer:
      "ご利用料金は、毎回最初のトレーニング日にお支払いいただいております。",
  },
  {
    question: "利用できる支払い方法は何がありますか？",
    answer:
      "現金、各種カード、各種QRコードでのお支払いが可能です。",
  },
  {
    question: "京都のパーソナルジムの料金相場はどのくらいですか？",
    answer:
      "京都のパーソナルジムの料金相場は、2ヶ月コースで約20万円前後（1回あたり¥12,000～¥15,000）が一般的です。Salute御所南は月額¥20,000～（1回あたり¥4,000～）の月額制で、入会金も無料。京都市内のパーソナルジムの中でも通いやすい価格帯です。",
  },
  {
    question: "料金以外にかかる費用はありますか？",
    answer:
      "一切ありません。入会金・事務手数料は¥0、ウェア・シューズ・タオル・お水もすべて無料レンタルです。月額プランの料金のみで、追加費用なくパーソナルトレーニングを受けられます。",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Q&A</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            御所南のパーソナルジムSalute よくある質問
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-sm px-6 data-[state=open]:border-gold/30"
            >
              <AccordionTrigger className="text-left font-body text-foreground hover:text-gold hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
