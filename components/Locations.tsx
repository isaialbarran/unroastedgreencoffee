"use client";

import { config } from "@/content/site";
import { useLang } from "./LangProvider";

export function Locations() {
  const { t } = useLang();
  const { office } = config;

  return (
    <section id="locations" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold text-green-900 sm:text-4xl">
          {t.locations.title}
        </h2>
        <p className="mt-4 text-stone-600">{t.locations.intro}</p>

        <div className="mt-10 inline-block rounded-2xl border border-stone-200 bg-white px-10 py-8 text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
            {t.locations.officeLabel}
          </p>
          <address className="mt-2 not-italic leading-relaxed text-stone-700">
            {office.street}
            <br />
            {office.city}, {office.state} {office.postalCode}
            <br />
            {office.country}
          </address>
        </div>
      </div>
    </section>
  );
}
