import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LangProvider } from "@/components/LangProvider";
import { config } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: `${config.brand} — Specialty & commercial green coffee supplier`,
  description:
    "Unroasted Green Coffee — green coffee supplier of specialty and commercial unroasted beans for roasters and buyers.",
  keywords: [
    "green coffee",
    "unroasted coffee",
    "specialty coffee",
    "commercial coffee",
    "coffee supplier",
    "green coffee beans",
    "café verde",
  ],
  openGraph: {
    title: `${config.brand} — Green coffee supplier`,
    description:
      "Specialty and commercial unroasted green coffee for roasters and buyers.",
    url: config.siteUrl,
    siteName: config.brand,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${config.brand} — Green coffee supplier`,
    description:
      "Specialty and commercial unroasted green coffee for roasters and buyers.",
  },
  alternates: {
    canonical: config.siteUrl,
  },
};

const SITE_URL = "https://www.unroastedgreencoffee.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: config.brand,
      url: SITE_URL,
      email: config.email,
      description:
        "Green coffee supplier of specialty and commercial unroasted beans for roasters and buyers.",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: config.brand,
      url: SITE_URL,
      email: config.email,
      telephone: config.whatsapp.display,
      address: {
        "@type": "PostalAddress",
        streetAddress: config.office.street,
        addressLocality: config.office.city,
        postalCode: config.office.postalCode,
        addressCountry: config.office.country,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LangProvider>{children}</LangProvider>
        <Analytics />
      </body>
    </html>
  );
}
