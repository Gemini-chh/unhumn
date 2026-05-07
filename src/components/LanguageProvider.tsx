"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { copy, type Language } from "@/content/unhumn";

type LanguageContextValue = {
  language: Language;
  isSwitching: boolean;
  setLanguage: (language: Language) => void;
  text: (typeof copy)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [isSwitching, setIsSwitching] = useState(false);

  const changeLanguage = useCallback((nextLanguage: Language) => {
    if (nextLanguage === language) {
      return;
    }

    setIsSwitching(true);
    window.setTimeout(() => setLanguage(nextLanguage), 160);
    window.setTimeout(() => setIsSwitching(false), 520);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      isSwitching,
      setLanguage: changeLanguage,
      text: copy[language],
    }),
    [changeLanguage, isSwitching, language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
