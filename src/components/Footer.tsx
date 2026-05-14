import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground border-t border-gold/10 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        <div>
          <span className="font-heading text-2xl text-footer-foreground"><span className="text-gold">Salute</span>御所南</span>
          <p className="text-footer-foreground/50 text-xs mt-2 font-body">
            京都市中京区毘沙門町533-1 プラザ御所南 2階
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-5">
          {/* 1段目：機能リンク */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <Link
              to="/blog"
              className="text-footer-foreground/70 hover:text-gold text-sm transition-colors font-body"
            >
              ブログ
            </Link>
            <a
              href="https://kyoto-salute.lovable.app/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-footer-foreground/70 hover:text-gold text-sm transition-colors font-body"
            >
              公式アプリ
            </a>
            <a
              href="https://page.line.me/393blgip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-footer-foreground/70 hover:text-gold text-sm transition-colors font-body"
            >
              LINE
            </a>
          </div>

          {/* 区切り線 */}
          <div className="w-12 h-px bg-gold/10" />

          {/* 2段目：法的ページリンク */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              to="/terms"
              className="text-footer-foreground/45 hover:text-gold text-xs transition-colors font-body"
            >
              利用規約
            </Link>
            <Link
              to="/privacy-policy"
              className="text-footer-foreground/45 hover:text-gold text-xs transition-colors font-body"
            >
              プライバシーポリシー
            </Link>
            <Link
              to="/tokusho"
              className="text-footer-foreground/45 hover:text-gold text-xs transition-colors font-body"
            >
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>

        <p className="text-footer-foreground/40 text-xs font-body">
          © {new Date().getFullYear()} パーソナルジム Salute御所南
        </p>

        <p className="text-footer-foreground/35 text-[11px] font-body leading-relaxed px-4">
          関連事業：
          <a
            href="https://kantaapplab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors underline-offset-2 hover:underline"
          >
            KantaAppLab｜小規模店舗向けWeb制作・アプリ開発
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
