"use client";

import { useLang } from "./LangProvider";

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold text-green-900 sm:text-4xl">
          {t.about.title}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-stone-600">
          {t.about.body}
        </p>
      </div>
    </section>
  );
}
