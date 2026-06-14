"use client";

import { useLang } from "./LangProvider";

export function Origins() {
  const { t } = useLang();
  const { specLabels, lots } = t.origins;

  const rows = (lot: (typeof lots)[number]) => [
    [specLabels.variety, lot.variety],
    [specLabels.process, lot.process],
    [specLabels.screen, lot.screen],
    [specLabels.score, lot.score],
    [specLabels.price, lot.price],
    [specLabels.availability, lot.availability],
  ];

  return (
    <section id="origins" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-green-900 sm:text-4xl">
          {t.origins.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-stone-600">
          {t.origins.intro}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {lots.map((lot) => (
            <div
              key={lot.origin}
              className="rounded-2xl border border-stone-200 bg-stone-50 p-6"
            >
              <h3 className="text-lg font-semibold text-green-900">
                {lot.origin}
              </h3>
              <dl className="mt-4 space-y-2 text-sm">
                {rows(lot).map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between gap-4 border-b border-stone-200/70 pb-2 last:border-0"
                  >
                    <dt className="text-stone-500">{label}</dt>
                    <dd className="text-right font-medium text-stone-800">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-stone-400">
          {t.origins.disclaimer}
        </p>
      </div>
    </section>
  );
}
