import { Globe } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LANGS, type Lang } from "@/i18n/translations";
import { useT } from "@/i18n/LanguageContext";

const SHORT_CODE: Record<string, string> = { ja: "JP", en: "EN", zh: "简", zhTW: "繁", ko: "KO" };

const LanguageSwitcher = () => {
  const { lang } = useT();
  const navigate = useNavigate();
  const location = useLocation();
  // On the immersive homepage, render a white rounded "JP"-style pill (Summer Sonic
  // look). Elsewhere keep the plain globe icon that suits the solid header.
  const isHome = /^\/(en|zh-tw|zh|ko)?\/?$/.test(location.pathname);
  const shortCode = SHORT_CODE[lang] || "JP";

  const switchTo = (target: Lang) => {
    // Strip current lang prefix from pathname
    let path = location.pathname;
    const m = path.match(/^\/(en|zh-tw|zh|ko)(\/.*)?$/);
    if (m) path = m[2] || "/";
    const prefix = target === "ja" ? "" : target === "zhTW" ? "/zh-tw" : `/${target}`;
    // Only the homepage is localized. On any other route (blog, legal, etc.),
    // switch to that language's home instead of a nonexistent localized URL.
    const isHome = path === "/";
    const newPath = prefix || "/";
    navigate(newPath + (isHome ? location.hash : ""));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Language"
        className={isHome
          ? "flex items-center gap-1 rounded-full bg-white text-[#0F2E3D] text-sm font-semibold px-3 py-1.5 hover:opacity-90 transition-opacity shadow-sm"
          : "flex items-center gap-1 text-foreground/80 hover:text-gold transition-colors p-1"}
      >
        {isHome ? (
          <>
            <Globe size={14} />
            <span>{shortCode}</span>
          </>
        ) : (
          <Globe size={20} />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px] bg-white rounded-xl shadow-xl border border-black/5 p-1.5 z-[60]">
        {LANGS.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => switchTo(l.code)}
            className={`cursor-pointer font-body text-sm rounded-lg px-3 py-2 ${
              l.code === lang ? "text-[#0ABAB5] font-semibold" : "text-[#0F2E3D]"
            }`}
          >
            {l.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
