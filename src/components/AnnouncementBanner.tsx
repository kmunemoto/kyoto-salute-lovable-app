import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const AnnouncementBanner = () => {
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateOffset = () => {
      const h = visible && ref.current ? ref.current.offsetHeight : 0;
      document.documentElement.style.setProperty("--banner-offset", `${h}px`);
    };
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => {
      window.removeEventListener("resize", updateOffset);
      document.documentElement.style.setProperty("--banner-offset", "0px");
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 right-0 text-white text-center z-[60]"
      style={{
        backgroundColor: "#0ABAB5",
        fontSize: "13px",
        padding: "10px 44px 10px 16px",
        lineHeight: 1.5,
        wordBreak: "break-word",
      }}
    >
      <span>
        現在Googleマップの店舗情報が一時的に表示されません。当ジムは通常通り営業中です。無料体験のご予約は
        <a
          href="https://kyoto-salute.lovable.app/trial"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold text-white"
        >
          こちら
        </a>
      </span>
      <button
        onClick={() => setVisible(false)}
        aria-label="閉じる"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:opacity-80"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default AnnouncementBanner;