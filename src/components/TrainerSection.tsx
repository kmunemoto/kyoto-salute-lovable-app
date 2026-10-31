import type { ReactNode } from "react";
import trainerPhoto from "@/assets/trainer.jpg";
import { useT } from "@/i18n/LanguageContext";
import type { TrainerProfile } from "@/i18n/translations";
import { HIDDEN_TRAINERS } from "@/data/trainers";

// 写真は translations の trainer.members の並び順で当てる。写真がまだない人は、文章だけで表示する。
const photos: (string | undefined)[] = [trainerPhoto];

// いったん非表示にしたいトレーナーは、src/data/trainers.ts の HIDDEN_TRAINERS に入れる

const Field = ({ label, children }: { label: string; children: ReactNode }) => (
  <div>
    <h4 className="text-gold/80 text-xs tracking-[0.2em] uppercase font-body mb-2">{label}</h4>
    {children}
  </div>
);

const TrainerSection = () => {
  const { lang, t } = useT();
  const tr = t.trainer;
  // 言葉の途中で改行しないようにする。韓国語は空白のところで、日本語は文節のところで改行する
  // （日本語の auto-phrase は Chrome などの対応ブラウザだけで効き、ほかではいつもどおり。中国語は対象外）
  const keep = lang === "ko" ? " break-keep" : lang === "ja" ? " [word-break:auto-phrase]" : "";

  const header = (m: TrainerProfile) => (
    <>
      <h3 className="font-heading text-2xl md:text-3xl text-gym-dark-foreground mb-2">{m.name}</h3>
      <p className="text-gym-dark-foreground/50 text-sm font-body mb-1">{m.nameRoman}</p>
      <p className="text-gold text-sm font-body tracking-wide mb-6">{m.role}</p>
    </>
  );
  const qual = (m: TrainerProfile) => (
    <Field label={tr.qualLabel}>
      {/* 資格が複数あるときは "\n" で区切って、1行に1つずつ並べる */}
      <p className="text-gym-dark-foreground/70 font-body text-sm whitespace-pre-line">{m.qual}</p>
    </Field>
  );
  const details = (m: TrainerProfile) => (
    <>
      <Field label={tr.careerLabel}>
        <p className="text-gym-dark-foreground/70 font-body text-sm leading-relaxed">{m.career}</p>
      </Field>
      <Field label={tr.messageLabel}>
        <p className="text-gym-dark-foreground/70 font-body text-sm leading-relaxed italic">{m.message}</p>
      </Field>
      <Field label={tr.greetingLabel}>
        <div className="text-gym-dark-foreground/70 font-body text-sm leading-relaxed space-y-3">
          {m.greetingParagraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </Field>
    </>
  );

  return (
    <section id="trainer" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">{tr.kicker}</p>
          <h2 className="font-heading text-3xl md:text-5xl text-gym-dark-foreground">{tr.title}</h2>
        </div>
        <div className={`max-w-4xl mx-auto${keep}`}>
          {tr.members
            .map((m, i) => ({ m, photo: photos[i] }))
            .filter(({ m }) => !HIDDEN_TRAINERS.has(m.nameRoman))
            .map(({ m, photo }, i) => (
              <div key={m.name} className={i > 0 ? "mt-8 pt-12 lg:pt-16 border-t border-gym-dark-foreground/10" : ""}>
                {photo ? (
                  <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-2/5 w-full">
                      <div className="rounded-sm overflow-hidden">
                        <img src={photo} alt={m.name} loading="lazy" className="w-full h-auto object-contain" />
                      </div>
                    </div>
                    <div className="lg:w-3/5 w-full">
                      {header(m)}
                      <div className="space-y-4 mb-8">
                        {qual(m)}
                        {details(m)}
                      </div>
                    </div>
                  </div>
                ) : (
                  // 写真がない人：PC では左に名前と資格、右に経歴やメッセージ（写真がある人の文章の列とそろえる）
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
                    <div className="lg:w-2/5 w-full">
                      {header(m)}
                      {qual(m)}
                    </div>
                    <div className="lg:w-3/5 w-full space-y-4">{details(m)}</div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
