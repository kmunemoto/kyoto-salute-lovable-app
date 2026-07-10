import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useT } from "@/i18n/LanguageContext";
import { trackCtaClick } from "@/lib/analytics";

const Header = () => {
  const { lang, t } = useT();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const location = useLocation();
  // Only the immersive homepage (localized home routes) gets the Summer Sonic-style
  // floating frosted-glass bar with white text. Every other page (blog, area, legal)
  // keeps the solid cream bar so white text never disappears on a light background.
  const isHome = /^\/(en|zh-tw|zh|ko)?\/?$/.test(location.pathname);
  const glassTextShadow = { textShadow: "0 1px 4px rgba(0,0,0,0.45)" };

  const prefix = lang === "ja" ? "" : `/${lang === "zhTW" ? "zh-tw" : lang}`;
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

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Mount when opening
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
    } else if (mounted) {
      setAnimateIn(false);
      const ms = reduceMotion ? 0 : 400;
      const t = window.setTimeout(() => setMounted(false), ms);
      return () => window.clearTimeout(t);
    }
  }, [isOpen, mounted, reduceMotion]);

  // After mount paints with initial (closed) state, trigger transition on next frames
  useEffect(() => {
    if (!mounted || !isOpen) return;
    let r2 = 0;
    const r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() => setAnimateIn(true));
    });
    return () => {
      cancelAnimationFrame(r1);
      if (r2) cancelAnimationFrame(r2);
    };
  }, [mounted, isOpen]);

  // Body scroll lock + Esc + focus management
  useEffect(() => {
    if (!mounted) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "Tab" && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    // Focus close button when opened
    const focusTimer = window.setTimeout(() => closeBtnRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(focusTimer);
    };
  }, [mounted]);

  // Restore focus to burger when closing
  const prevOpen = useRef(false);
  useEffect(() => {
    if (prevOpen.current && !isOpen) {
      burgerRef.current?.focus();
    }
    prevOpen.current = isOpen;
  }, [isOpen]);

  const closeDrawer = () => setIsOpen(false);
  const itemTransition = reduceMotion ? "none" : "opacity 300ms ease, transform 300ms ease";
  const drawerDuration = reduceMotion ? "0ms" : "400ms";
  const drawerEasing = "cubic-bezier(.4,0,.2,1)";

  return (
    <>
    <header
      className={isHome
        ? "fixed left-0 right-0 z-50 px-3 pt-3"
        : "fixed left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"}
      style={{ top: "var(--banner-offset, 0px)" }}
    >
      <div
        className={isHome
          ? "max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl shadow-lg"
          : "max-w-7xl mx-auto flex items-center justify-between px-6 py-4"}
        style={isHome ? {
          backgroundColor: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.35)",
        } : undefined}
      >
        <a
          href={prefix || "/"}
          className={`font-heading text-xl ${isHome ? "text-white" : "text-foreground"}`}
          style={isHome ? glassTextShadow : undefined}
        >
          <span className={isHome ? "text-white" : "text-gold"}>Salute</span>
          {lang === "ja" ? "御所南" : " Goshominami"}
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {mobileNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors font-body ${isHome ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-gold"}`}
              style={isHome ? glassTextShadow : undefined}
            >
              {item.label}
            </a>
          ))}
          {lang !== "ja" && (
            <Link
              to="/"
              className={`text-sm transition-colors font-body ${isHome ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-gold"}`}
              style={isHome ? glassTextShadow : undefined}
            >
              日本語サイトへ
            </Link>
          )}
          <LanguageSwitcher />
          <a
            href="https://app.kyoto-salute.com/trial"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCtaClick({ type: "trial", location: "header_desktop", label: t.header.ctaBtn, url: "https://app.kyoto-salute.com/trial", language: lang })}
            className="gold-gradient px-5 py-2.5 text-sm font-medium text-white rounded-sm transition-opacity"
          >
            {t.header.ctaBtn}
          </a>
        </nav>

        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            ref={burgerRef}
            onClick={() => setIsOpen((v) => !v)}
            className={`relative w-6 h-6 flex flex-col justify-center items-center ${isHome ? "text-white" : "text-foreground"}`}
            style={isHome ? { filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.4))" } : undefined}
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
          >
            <span
              className="absolute block h-[2px] w-6 bg-current"
              style={{
                transition: reduceMotion ? "none" : "transform 300ms ease, top 300ms ease",
                top: isOpen ? "11px" : "7px",
                transform: isOpen ? "rotate(45deg)" : "rotate(0)",
              }}
            />
            <span
              className="absolute block h-[2px] w-6 bg-current"
              style={{
                top: "11px",
                transition: reduceMotion ? "none" : "opacity 200ms ease",
                opacity: isOpen ? 0 : 1,
              }}
            />
            <span
              className="absolute block h-[2px] w-6 bg-current"
              style={{
                transition: reduceMotion ? "none" : "transform 300ms ease, top 300ms ease",
                top: isOpen ? "11px" : "15px",
                transform: isOpen ? "rotate(-45deg)" : "rotate(0)",
              }}
            />
          </button>
        </div>
      </div>
    </header>

    {mounted && (
      <div className="md:hidden fixed inset-0 z-[60]" aria-hidden={!isOpen}>
          {/* Overlay */}
          <div
            onClick={closeDrawer}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(20,20,18,0.38)",
              opacity: animateIn ? 1 : 0,
              transition: reduceMotion ? "none" : `opacity 400ms ${drawerEasing}`,
            }}
          />
          {/* Drawer */}
          <div
            id="mobile-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="メニュー"
            className="absolute top-0 right-0 h-full flex flex-col border-l border-border shadow-lg"
            style={{
              width: "78%",
              maxWidth: "280px",
              backgroundColor: "#FDFCFA",
              transform: animateIn ? "translateX(0)" : "translateX(100%)",
              transition: reduceMotion ? "none" : `transform ${drawerDuration} ${drawerEasing}`,
            }}
          >
            <div className="flex justify-end p-4">
              <button
                ref={closeBtnRef}
                onClick={closeDrawer}
                aria-label="メニューを閉じる"
                className="relative w-8 h-8 flex items-center justify-center text-foreground hover:text-gold transition-colors"
              >
                <span className="absolute block h-[2px] w-6 bg-current" style={{ transform: "rotate(45deg)" }} />
                <span className="absolute block h-[2px] w-6 bg-current" style={{ transform: "rotate(-45deg)" }} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 pb-4">
              {mobileNavItems.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeDrawer}
                  className="block font-heading text-base text-foreground hover:text-gold py-3 border-b border-border/40"
                  style={{
                    opacity: animateIn ? 1 : 0,
                    transform: animateIn ? "translateX(0)" : "translateX(12px)",
                    transition: itemTransition,
                    transitionDelay: reduceMotion || !animateIn ? "0ms" : `${120 + i * 55}ms`,
                  }}
                >
                  {item.label}
                </a>
              ))}
              {lang !== "ja" && (
                <Link
                  to="/"
                  onClick={closeDrawer}
                  className="block font-heading text-base text-foreground hover:text-gold py-3 border-b border-border/40"
                  style={{
                    opacity: animateIn ? 1 : 0,
                    transform: animateIn ? "translateX(0)" : "translateX(12px)",
                    transition: itemTransition,
                    transitionDelay: reduceMotion || !animateIn ? "0ms" : `${120 + mobileNavItems.length * 55}ms`,
                  }}
                >
                  日本語サイトへ
                </Link>
              )}
            </nav>

            <div className="p-6 border-t border-border">
              <a
                href="https://app.kyoto-salute.com/trial"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { trackCtaClick({ type: "trial", location: "header_mobile", label: t.header.ctaBtn, url: "https://app.kyoto-salute.com/trial", language: lang }); closeDrawer(); }}
                className="block text-center gold-gradient px-5 py-3 text-sm font-medium text-white rounded-sm"
              >
                {t.header.ctaBtn}
              </a>
            </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Header;
