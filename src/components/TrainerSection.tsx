import trainerPhoto from "@/assets/trainer.jpg";
import { useT } from "@/i18n/LanguageContext";

const TrainerSection = () => {
  const { t } = useT();
  const tr = t.trainer;
  return (
    <section id="trainer" className="section-padding section-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">{tr.kicker}</p>
          <h2 className="font-heading text-3xl md:text-5xl text-gym-dark-foreground">{tr.title}</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-4xl mx-auto">
          <div className="lg:w-2/5 w-full">
            <div className="rounded-sm overflow-hidden">
              <img src={trainerPhoto} alt={tr.name} loading="lazy" className="w-full h-auto object-contain" />
            </div>
          </div>
          <div className="lg:w-3/5 w-full">
            <h3 className="font-heading text-2xl md:text-3xl text-gym-dark-foreground mb-2">{tr.name}</h3>
            <p className="text-gym-dark-foreground/50 text-sm font-body mb-1">{tr.nameRoman}</p>
            <p className="text-gold text-sm font-body tracking-wide mb-6">{tr.role}</p>
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-gold/80 text-xs tracking-[0.2em] uppercase font-body mb-2">{tr.qualLabel}</h4>
                <p className="text-gym-dark-foreground/70 font-body text-sm">{tr.qual}</p>
              </div>
              <div>
                <h4 className="text-gold/80 text-xs tracking-[0.2em] uppercase font-body mb-2">{tr.careerLabel}</h4>
                <p className="text-gym-dark-foreground/70 font-body text-sm leading-relaxed">{tr.career}</p>
              </div>
              <div>
                <h4 className="text-gold/80 text-xs tracking-[0.2em] uppercase font-body mb-2">{tr.messageLabel}</h4>
                <p className="text-gym-dark-foreground/70 font-body text-sm leading-relaxed italic">{tr.message}</p>
              </div>
              <div>
                <h4 className="text-gold/80 text-xs tracking-[0.2em] uppercase font-body mb-2">{tr.greetingLabel}</h4>
                <div className="text-gym-dark-foreground/70 font-body text-sm leading-relaxed space-y-3">
                  {tr.greetingParagraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
