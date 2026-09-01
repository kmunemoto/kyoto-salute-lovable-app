import { Link } from "react-router-dom";
import { useT } from "@/i18n/LanguageContext";
import { trackCtaClick } from "@/lib/analytics";
import { AREA_PAGES } from "@/data/area-pages";

const Footer = () => {
  const { lang, t } = useT();
  const f = t.footer;
  return (
    <footer className="bg-footer text-footer-foreground border-t border-gold/10 px-6 py-12 pb-32 md:pb-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        <div>
          <span className="font-heading text-2xl text-footer-foreground"><span className="text-gold">Salute</span>{lang === "ja" ? "御所南" : " Goshominami"}</span>
          <p className="text-footer-foreground/50 text-xs mt-2 font-body">{f.address}</p>
        </div>
        <div className="w-full flex flex-col items-center gap-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <Link to="/blog" className="text-footer-foreground/70 hover:text-gold text-sm transition-colors font-body">{f.blog}</Link>
            {lang !== "ja" && (
              <Link to="/drop-in" className="text-footer-foreground/70 hover:text-gold text-sm transition-colors font-body">Drop-in for travelers</Link>
            )}
            <a href="https://app.kyoto-salute.com/auth" target="_blank" rel="noopener noreferrer" className="text-footer-foreground/70 hover:text-gold text-sm transition-colors font-body">{f.app}</a>
            <a href="https://lin.ee/UMVDzWF" target="_blank" rel="noopener noreferrer" onClick={() => trackCtaClick({ type: "line", location: "footer", label: f.line, url: "https://lin.ee/UMVDzWF", language: lang })} className="text-footer-foreground/70 hover:text-gold text-sm transition-colors font-body">{f.line}</a>
            <a href="https://www.instagram.com/salute_goshominami/" target="_blank" rel="noopener noreferrer" aria-label="パーソナルジムSalute御所南の公式Instagram（新しいタブで開く）" className="text-footer-foreground/70 hover:text-gold text-sm transition-colors font-body">{f.instagram}</a>
            {t.recruit && (
              <a href="/#recruit" onClick={() => trackCtaClick({ type: "recruit", location: "footer_recruit", label: t.recruit.footerLink, url: "/#recruit", language: lang })} className="text-footer-foreground/70 hover:text-gold text-sm transition-colors font-body">{t.recruit.footerLink}</a>
            )}
          </div>
          {lang === "ja" && (
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {AREA_PAGES.map((a) => (
                <Link key={a.slug} to={`/area/${a.slug}`} className="text-footer-foreground/60 hover:text-gold text-xs transition-colors font-body">
                  {a.station}のパーソナルジム
                </Link>
              ))}
            </div>
          )}
          <div className="w-12 h-px bg-gold/10" />
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/terms" className="text-footer-foreground/45 hover:text-gold text-xs transition-colors font-body">{f.terms}</Link>
            <Link to="/privacy-policy" className="text-footer-foreground/45 hover:text-gold text-xs transition-colors font-body">{f.privacy}</Link>
            <Link to="/tokusho" className="text-footer-foreground/45 hover:text-gold text-xs transition-colors font-body">{f.tokusho}</Link>
          </div>
        </div>
        <p className="text-footer-foreground/40 text-xs font-body">© {new Date().getFullYear()} {f.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
