"use client";

import Image from "next/image";
import { config } from "@/content/site";
import { useLang } from "./LangProvider";

export function Hero() {
  const { t } = useLang();
  const waLink = `https://wa.me/${config.whatsapp.number}`;

  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden"
    >
      {/* Fondo: foto principal (public/hero.jpg) con overlay para legibilidad del texto. */}
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-green-900/70 to-green-950/90" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-32 text-white">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-100">
          {t.hero.eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          {t.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-green-50/90">
          {t.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${config.email}`}
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-green-900 transition hover:bg-green-50"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
