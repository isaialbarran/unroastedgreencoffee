"use client";

import { useLang } from "./LangProvider";

export function Terms() {
  const { t } = useLang();

  return (
    <section id="terms" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold text-green-900 sm:text-4xl">
          {t.terms.title}
        </h2>
        <p className="mt-4 text-stone-600">{t.terms.intro}</p>

        <dl className="mx-auto mt-10 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 text-left sm:grid-cols-2">
          {t.terms.items.map((item) => (
            <div key={item.label} className="bg-white p-6">
              <dt className="text-xs font-semibold uppercase tracking-wider text-green-700">
                {item.label}
              </dt>
              <dd className="mt-1 text-stone-700">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
