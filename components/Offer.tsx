"use client";

import { useLang } from "./LangProvider";

export function Offer() {
  const { t } = useLang();

  const cards = [t.offer.specialty, t.offer.commercial];

  return (
    <section id="offer" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-green-900 sm:text-4xl">
          {t.offer.title}
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-stone-200 bg-stone-50 p-8 transition hover:border-green-300 hover:shadow-sm"
            >
              {/* Espacio para foto del café verde según el tipo de semilla. */}
              <div className="mb-6 h-40 w-full rounded-xl bg-gradient-to-br from-green-200 to-green-400" />
              <h3 className="text-xl font-semibold text-green-900">
                {card.title}
              </h3>
              <p className="mt-3 leading-relaxed text-stone-600">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
