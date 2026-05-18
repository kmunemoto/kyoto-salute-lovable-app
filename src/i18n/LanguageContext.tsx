import { createContext, useContext, ReactNode } from "react";
import { translations, type Lang } from "./translations";

type Ctx = { lang: Lang; t: (typeof translations)[Lang] };

const LanguageContext = createContext<Ctx>({ lang: "ja", t: translations.ja });

export const LanguageProvider = ({ lang, children }: { lang: Lang; children: ReactNode }) => {
  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useT = () => useContext(LanguageContext);
