import { MapPin, Clock, Train, Phone } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

const AccessSection = () => {
  const { t } = useT();
  const a = t.access;
  return (
    <section id="access" className="section-padding section-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">{a.kicker}</p>
          <h2 className="font-heading text-3xl md:text-5xl text-gym-dark-foreground">{a.title}</h2>
          <p className="text-gym-dark-foreground/70 font-body text-sm md:text-base leading-relaxed mt-6 max-w-2xl mx-auto text-left md:text-center">{a.intro}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-sm overflow-hidden aspect-[4/3]">
            <iframe
              src="https://maps.google.com/maps?q=%E3%83%91%E3%83%BC%E3%82%BD%E3%83%8A%E3%83%AB%E3%82%B8%E3%83%A0Salute%E5%BE%A1%E6%89%80%E5%8D%97&output=embed&hl=ja&z=17"
              width="100%" height="100%" style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Salute Goshonan map"
            />
          </div>
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="text-gym-dark-foreground font-body font-semibold mb-1">{a.addressLabel}</h3>
                <p className="text-gym-dark-foreground/70 font-body">
                  {a.addressLines.map((l, i) => <span key={i}>{l}{i < a.addressLines.length - 1 && <br />}</span>)}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Train className="w-5 h-5 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="text-gym-dark-foreground font-body font-semibold mb-1">{a.stationLabel}</h3>
                <ul className="text-gym-dark-foreground/70 font-body space-y-1 text-sm">
                  {a.stations.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="text-gym-dark-foreground font-body font-semibold mb-1">{a.hoursLabel}</h3>
                <p className="text-gym-dark-foreground/70 font-body">{a.hoursText}</p>
                <p className="text-gym-dark-foreground/50 font-body text-sm mt-1">{a.hoursSub}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="text-gym-dark-foreground font-body font-semibold mb-1">{a.contactLabel}</h3>
                <p className="text-gym-dark-foreground/70 font-body text-sm">{a.contactText}</p>
              </div>
            </div>
            <p className="text-gym-dark-foreground/50 font-body text-sm whitespace-pre-line">{a.note}</p>
          </div>
        </div>
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-sm tracking-[0.2em] uppercase mb-6 font-body text-muted-foreground">{a.sponsorsLabel}</h3>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <a href="https://kawakatsu-sangyo.co.jp" target="_blank" rel="noopener noreferrer" className="text-[#0ABAB5] hover:opacity-70 transition-opacity text-sm font-body flex items-center gap-2">
              <span>■</span><span>有限会社川勝産業</span>
            </a>
            <a href="https://fas-ao.co.jp" target="_blank" rel="noopener noreferrer" className="text-[#0ABAB5] hover:opacity-70 transition-opacity text-sm font-body flex items-center gap-2">
              <span>■</span><span>株式会社FAS会計事務所</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
