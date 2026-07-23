import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useT } from "@/i18n/LanguageContext";

const FAQSection = () => {
  const { t } = useT();
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">{t.faq.kicker}</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">{t.faq.title}</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {t.faq.items.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-sm px-6 bg-white data-[state=open]:border-gold/30">
              <AccordionTrigger className="text-left font-body text-foreground hover:text-gold hover:no-underline py-5">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
