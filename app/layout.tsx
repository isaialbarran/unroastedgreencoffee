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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LangProvider>{children}</LangProvider>
        <Analytics />
      </body>
    </html>
  );
}
