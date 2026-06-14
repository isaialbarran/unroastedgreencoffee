"use client";

import { useLang } from "./LangProvider";

export function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label={lang === "es" ? "Idioma" : "Language"}
      className="inline-flex items-center rounded-full border border-white/30 text-xs font-medium"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-3 py-1 transition ${
          lang === "en" ? "bg-white text-green-900" : "text-white/80"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`rounded-full px-3 py-1 transition ${
          lang === "es" ? "bg-white text-green-900" : "text-white/80"
        }`}
      >
        ES
      </button>
    </div>
  );
}
