import { ImageResponse } from "next/og";

// Apple touch icon generado como PNG (iOS no usa de forma fiable el favicon SVG).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Mismo grano de café del favicon (app/icon.svg), embebido como data URI.
const bean = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 32 32"><g transform="rotate(35 16 16)"><ellipse cx="16" cy="16" rx="7.5" ry="11" fill="#86efac"/><path d="M16 5.5 C 12 11, 20 21, 16 26.5" stroke="#14532d" stroke-width="2.2" fill="none" stroke-linecap="round"/></g></svg>`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14532d",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          width={120}
          height={120}
          src={`data:image/svg+xml,${encodeURIComponent(bean)}`}
          alt=""
        />
      </div>
    ),
    { ...size }
  );
}
