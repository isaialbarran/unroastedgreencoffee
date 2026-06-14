import { ImageResponse } from "next/og";
import { config } from "@/content/site";

export const alt = `${config.brand} — Specialty & commercial green coffee supplier`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #166534 0%, #052e16 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 32,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#bbf7d0",
          }}
        >
          Green coffee supplier
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
          Specialty &amp; commercial green coffee, sourced with care
        </div>
        <div style={{ fontSize: 34, color: "#dcfce7" }}>{config.brand}</div>
      </div>
    ),
    { ...size }
  );
}
