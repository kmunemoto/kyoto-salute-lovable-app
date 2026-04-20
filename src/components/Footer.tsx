import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gym-dark border-t border-gold/10 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        <div>
          <span className="font-heading text-2xl text-white"><span className="text-gold">Salute</span>御所南</span>
          <p className="text-gym-dark-foreground/40 text-xs mt-2 font-body">
            京都市中京区毘沙門町533-1 プラザ御所南 2階
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <a
            href="https://kyoto-salute.lovable.app/auth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gym-dark-foreground/50 hover:text-gold text-sm transition-colors font-body"
          >
            公式アプリ
          </a>
          <a
            href="https://page.line.me/393blgip"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gym-dark-foreground/50 hover:text-gold text-sm transition-colors font-body"
          >
            LINE
          </a>
          <Link
            to="/privacy-policy"
            className="text-gym-dark-foreground/50 hover:text-gold text-sm transition-colors font-body"
          >
            プライバシーポリシー
          </Link>
          <Link
            to="/tokusho"
            className="text-gym-dark-foreground/50 hover:text-gold text-sm transition-colors font-body"
          >
            特定商取引法に基づく表記
          </Link>
        </div>

        <p className="text-gym-dark-foreground/30 text-xs font-body">
          © {new Date().getFullYear()} パーソナルジム Salute御所南
        </p>
      </div>
    </footer>
  );
};

export default Footer;
