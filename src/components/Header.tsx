import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useT } from "@/i18n/LanguageContext";

const Header = () => {
  const { lang, t } = useT();
  const [isOpen, setIsOpen] = useState(false);
  const prefix = lang === "ja" ? "" : `/${lang}`;
  const navItems = [
    { label: t.nav.features, href: `${prefix || ""}/#features` },
    { label: t.nav.trainer, href: `${prefix || ""}/#trainer` },
    { label: t.nav.voice, href: `${prefix || ""}/#voice` },
    { label: t.nav.plan, href: `${prefix || ""}/#plan` },
    { label: t.nav.faq, href: `${prefix || ""}/#faq` },
    { label: t.nav.access, href: `${prefix || ""}/#access` },
    { label: t.nav.consultation, href: `${prefix || ""}/#consultation` },
  ];
  const mobileNavItems = [...navItems, { label: t.nav.blog, href: "/blog" }];

  return (
    <header className="fixed left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border" style={{ top: "var(--banner-offset, 0px)" }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href={prefix || "/"} className="font-heading text-xl text-foreground">
          <span className="text-gold">Salute</span>{lang === "ja" ? "御所南" : " Goshonan"}
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {mobileNavItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-foreground/80 hover:text-gold transition-colors font-body">{item.label}</a>
          ))}
          {lang !== "ja" && (
            <Link to="/" className="text-sm text-foreground/80 hover:text-gold transition-colors font-body">日本語サイトへ</Link>
          )}
          <LanguageSwitcher />
          <a href="https://kyoto-salute.lovable.app/trial" target="_blank" rel="noopener noreferrer" className="gold-gradient px-5 py-2.5 text-sm font-medium text-white rounded-sm transition-opacity">{t.header.ctaBtn}</a>
        </nav>

        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground" aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block text-foreground/80 hover:text-gold transition-colors font-body">{item.label}</a>
          ))}
          {lang !== "ja" && (
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-foreground/80 hover:text-gold transition-colors font-body">日本語サイトへ</Link>
          )}
          <a href="https://kyoto-salute.lovable.app/trial" target="_blank" rel="noopener noreferrer" className="block text-center gold-gradient px-5 py-2.5 text-sm font-medium text-white rounded-sm">{t.header.ctaBtn}</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
