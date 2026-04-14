import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "特徴", href: "#features" },
  { label: "料金プラン", href: "#pricing" },
  { label: "よくあるご質問", href: "#faq" },
  { label: "アクセス", href: "#access" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gym-dark/90 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-heading text-xl tracking-wider text-gold">
          <span className="text-gym-dark-foreground/60 text-sm font-body font-light mr-1">パーソナルジム</span>
          Salute
          <span className="text-gym-dark-foreground text-sm ml-1 font-body font-light">御所南</span>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gym-dark-foreground/80 hover:text-gold transition-colors font-body"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://kyoto-salute.lovable.app/trial"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient px-5 py-2.5 text-sm font-medium text-gym-dark rounded-sm hover:opacity-90 transition-opacity"
          >
            無料体験実施中
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gym-dark-foreground"
          aria-label="メニュー"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-gym-dark/95 backdrop-blur-md border-t border-gold/10 px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-gym-dark-foreground/80 hover:text-gold transition-colors font-body"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://kyoto-salute.lovable.app/trial"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center gold-gradient px-5 py-2.5 text-sm font-medium text-gym-dark rounded-sm"
          >
            無料体験実施中
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
