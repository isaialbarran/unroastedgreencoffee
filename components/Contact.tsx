"use client";

import { config } from "@/content/site";
import { useLang } from "./LangProvider";

export function Contact() {
  const { t } = useLang();
  const waLink = `https://wa.me/${config.whatsapp.number}`;

  return (
    <section id="contact" className="bg-green-900 py-24 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">{t.contact.title}</h2>
        <p className="mt-4 text-green-100">{t.contact.body}</p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${config.email}`}
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-green-900 transition hover:bg-green-50"
          >
            {t.contact.emailLabel}
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {t.contact.whatsappLabel}
          </a>
        </div>

        <div className="mt-8 text-sm text-green-200">
          <a href={`mailto:${config.email}`} className="hover:text-white">
            {config.email}
          </a>
          <span className="mx-3 text-green-400">·</span>
          <a href={waLink} className="hover:text-white">
            {config.whatsapp.display}
          </a>
        </div>
      </div>
    </section>
  );
}
