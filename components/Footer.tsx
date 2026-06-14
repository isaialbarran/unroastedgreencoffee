"use client";

import { config } from "@/content/site";
import { useLang } from "./LangProvider";

export function Footer() {
  const { t } = useLang();
  // Año fijo para mantener el render estable; actualízalo aquí cuando toque.
  const year = 2026;

  return (
    <footer className="bg-green-950 py-8 text-center text-sm text-green-200">
      <p>
        © {year} {config.brand}. {t.footer.rights}
      </p>
    </footer>
  );
}
