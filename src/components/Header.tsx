import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "特徴", href: "/#features" },
  { label: "トレーナー", href: "/#trainer" },
  { label: "お客様の声", href: "/#voice" },
  { label: "料金プラン", href: "/#plan" },
  { label: "よくあるご質問", href: "/#faq" },
  { label: "アクセス", href: "/#access" },
  { label: "無料カウンセリング", href: "/#consultation" },
];

const mobileNavItems = [...navItems, { label: "ブログ", href: "/blog" }];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="font-heading text-xl text-foreground">
          <span className="text-gold">Salute</span>御所南
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {mobileNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-gold transition-colors font-body"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://kyoto-salute.lovable.app/trial"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient px-5 py-2.5 text-sm font-medium text-white rounded-sm transition-opacity"
          >
            無料体験実施中
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="メニュー"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-foreground/80 hover:text-gold transition-colors font-body"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://kyoto-salute.lovable.app/trial"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center gold-gradient px-5 py-2.5 text-sm font-medium text-white rounded-sm"
          >
            無料体験実施中
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
