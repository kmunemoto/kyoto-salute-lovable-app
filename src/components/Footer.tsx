const Footer = () => {
  return (
    <footer className="bg-gym-dark border-t border-gold/10 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <img src={logo} alt="パーソナルジムSalute御所南" className="h-12 w-auto" />
          <p className="text-gym-dark-foreground/40 text-xs mt-2 font-body">
            京都市中京区毘沙門町533-1 プラザ御所南 2階
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://airrsv.net/personalgymsalute/calendar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gym-dark-foreground/50 hover:text-gold text-sm transition-colors font-body"
          >
            ご予約
          </a>
          <a
            href="https://page.line.me/393blgip"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gym-dark-foreground/50 hover:text-gold text-sm transition-colors font-body"
          >
            LINE
          </a>
        </div>

        <p className="text-gym-dark-foreground/30 text-xs font-body">
          © {new Date().getFullYear()} パーソナルジム Salute御所南
        </p>
      </div>
    </footer>
  );
};

export default Footer;
