import { useState } from "react";
import { X } from "lucide-react";

const AnnouncementBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="w-full text-white text-center relative"
      style={{ backgroundColor: "#2C2621", fontSize: "14px", padding: "12px 40px" }}
    >
      <span>
        現在Googleマップの店舗情報が一時的に表示されません。当ジムは通常通り営業しております。無料体験のご予約は
        <a
          href="https://kyoto-salute.lovable.app/trial"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
          style={{ color: "#0ABAB5" }}
        >
          こちら
        </a>
      </span>
      <button
        onClick={() => setVisible(false)}
        aria-label="閉じる"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default AnnouncementBanner;