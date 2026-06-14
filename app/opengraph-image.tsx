import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { config } from "@/content/site";

export const alt = `${config.brand} — Specialty & commercial green coffee supplier`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/hero.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Foto principal de fondo */}
        <img
          src={photoSrc}
          width={size.width}
          height={size.height}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* Overlay verde para legibilidad del texto */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(135deg, rgba(20,83,45,0.85) 0%, rgba(5,46,22,0.92) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            fontSize: 32,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#bbf7d0",
          }}
        >
          Green coffee supplier
        </div>
        <div
          style={{
            position: "relative",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Specialty &amp; commercial green coffee, sourced with care
        </div>
        <div style={{ position: "relative", fontSize: 34, color: "#dcfce7" }}>
          {config.brand}
        </div>
      </div>
    ),
    { ...size }
  );
}
