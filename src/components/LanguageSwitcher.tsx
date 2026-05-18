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

const LanguageSwitcher = () => {
  const { lang } = useT();
  const navigate = useNavigate();
  const location = useLocation();

  const switchTo = (target: Lang) => {
    // Strip current lang prefix from pathname
    let path = location.pathname;
    const m = path.match(/^\/(en|zh|ko)(\/.*)?$/);
    if (m) path = m[2] || "/";
    const base = target === "ja" ? "" : `/${target}`;
    const newPath = (base + (path === "/" ? "" : path)) || "/";
    navigate(newPath + location.hash);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Language"
        className="flex items-center gap-1 text-foreground/80 hover:text-gold transition-colors p-1"
      >
        <Globe size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px] bg-background z-[60]">
        {LANGS.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => switchTo(l.code)}
            className={`cursor-pointer font-body text-sm ${
              l.code === lang ? "text-[#0ABAB5] font-semibold" : "text-foreground/80"
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
