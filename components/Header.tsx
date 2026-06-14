"use client";

import { useEffect, useRef, useState } from "react";
import { config } from "@/content/site";
import { useLang } from "./LangProvider";
import { LangToggle } from "./LangToggle";

export function Header() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: "#about", label: t.nav.about },
    { href: "#offer", label: t.nav.offer },
    { href: "#locations", label: t.nav.locations },
    { href: "#contact", label: t.nav.contact },
  ];

  const labels = {
    open: lang === "es" ? "Abrir menú" : "Open menu",
    close: lang === "es" ? "Cerrar menú" : "Close menu",
  };

  // Cerrar con Escape y devolver el foco al botón.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Al abrir, mover el foco al primer enlace del panel.
  useEffect(() => {
    if (open) panelRef.current?.querySelector("a")?.focus();
  }, [open]);

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
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <LangToggle />
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? labels.close : labels.open}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex items-center justify-center rounded-md p-1 text-white sm:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={`${open ? "block" : "hidden"} sm:hidden`}
      >
        <ul className="mx-4 mb-2 rounded-2xl bg-green-950/95 px-6 py-4 text-white shadow-lg backdrop-blur">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-base text-white/90 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
