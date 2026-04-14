import { useState, useEffect } from "react";

const MobileCTABar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setVisible(window.scrollY > heroHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="gold-gradient flex items-center justify-center h-[60px] px-4">
        <a
          href="https://kyoto-salute.lovable.app/trial"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gym-dark font-medium font-body text-sm flex items-center gap-2"
        >
          初回無料体験を予約 →
        </a>
      </div>
    </div>
  );
};

export default MobileCTABar;
