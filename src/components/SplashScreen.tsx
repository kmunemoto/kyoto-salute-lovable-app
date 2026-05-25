import { useEffect, useState } from "react";
import salutLogo from "@/assets/salute-logo.png";

const STORAGE_KEY = "salute_splash_shown";
const SPLASH_BG = "#FDFCFA";

const safeGetShown = (): boolean => {
  try {
    return typeof window !== "undefined" && window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};

const safeSetShown = () => {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* noop */
  }
};

const prefersReducedMotion = () => {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
};

const SplashScreen = () => {
  const [mounted, setMounted] = useState<boolean>(() => !safeGetShown());
  const [visible, setVisible] = useState<boolean>(() => !safeGetShown());
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (!mounted) return;
    const r = prefersReducedMotion();
    setReduced(r);

    // lock scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const holdMs = r ? 200 : 1600;
    const fadeMs = r ? 0 : 500;

    const hideTimer = window.setTimeout(() => setVisible(false), holdMs);
    const unmountTimer = window.setTimeout(() => {
      setMounted(false);
      safeSetShown();
    }, holdMs + fadeMs);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(unmountTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) {
      document.body.style.overflow = "";
    }
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      role="presentation"
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
      style={{
        backgroundColor: SPLASH_BG,
        opacity: visible ? 1 : 0,
        transition: reduced ? "none" : "opacity 500ms ease",
      }}
    >
      <div className="flex flex-col items-center">
        <img
          src={salutLogo}
          alt="パーソナルジムSalute御所南"
          width={260}
          height={260}
          className="w-[200px] md:w-[260px] h-auto select-none"
          style={{
            transform: visible ? "scale(1)" : "scale(0.96)",
            opacity: visible ? 1 : 0,
            transition: reduced ? "none" : "transform 600ms ease, opacity 600ms ease",
          }}
          draggable={false}
        />
        <div
          className="mt-6 flex flex-col items-center gap-3"
          style={{
            opacity: visible ? 1 : 0,
            transition: reduced ? "none" : "opacity 600ms ease 150ms",
          }}
        >
          <span
            aria-hidden="true"
            className="block h-px w-12"
            style={{ backgroundColor: "#0ABAB5" }}
          />
          <span
            className="text-[10px] md:text-xs tracking-[0.3em] font-medium"
            style={{ color: "#0ABAB5" }}
          >
            PERSONAL GYM
          </span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;