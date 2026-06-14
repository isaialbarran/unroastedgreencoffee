"use client";

import { config } from "@/content/site";
import { useLang } from "./LangProvider";
import { LangToggle } from "./LangToggle";

export function Header() {
  const { t, lang } = useLang();

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav
        aria-label={lang === "es" ? "Principal" : "Primary"}
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-white"
      >
        <a href="#top" className="text-sm font-semibold tracking-wide">
          {config.brand}
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 text-sm text-white/90 sm:flex">
            <li>
              <a href="#about" className="hover:text-white">
                {t.nav.about}
              </a>
            </li>
            <li>
              <a href="#offer" className="hover:text-white">
                {t.nav.offer}
              </a>
            </li>
            <li>
              <a href="#locations" className="hover:text-white">
                {t.nav.locations}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                {t.nav.contact}
              </a>
            </li>
          </ul>
          <LangToggle />
        </div>
      </nav>
    </header>
  );
}
