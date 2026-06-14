import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LangProvider } from "@/components/LangProvider";
import { config } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.unroastedgreencoffee.com"),
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
    url: "https://www.unroastedgreencoffee.com",
    siteName: config.brand,
    type: "website",
  },
  alternates: {
    canonical: "https://www.unroastedgreencoffee.com",
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
