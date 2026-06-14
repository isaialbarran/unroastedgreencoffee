"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { content, type Lang } from "@/content/site";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof content)["en"];
};

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "ugc-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restaurar idioma guardado o detectar del navegador (solo en cliente).
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved === "en" || saved === "es") {
      setLangState(saved);
    } else if (navigator.language.toLowerCase().startsWith("es")) {
      setLangState("es");
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
