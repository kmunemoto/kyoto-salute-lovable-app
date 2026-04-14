import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
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
    question: "プランの有効期限は月の初日〜末日までですか？",
    answer:
      "プランの有効期間は、月の初日から末日までではなく、初回のトレーニング日から1ヶ月間です。ご都合の良いタイミングでいつでもスタートできます。",
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
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Q&A</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            よくあるご質問
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
