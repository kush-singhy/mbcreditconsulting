import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MB Credit Consulting — Sydney Mortgage Broker";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#F7F8FA",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 48,
            height: 3,
            backgroundColor: "#119DA4",
            marginBottom: 24,
          }}
        />
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#1C1C1E",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          MB Credit Consulting
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#119DA4",
            fontWeight: 700,
            marginTop: 16,
            letterSpacing: "0.05em",
            textTransform: "uppercase" as const,
          }}
        >
          Sydney Mortgage Broker
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#9CA3AF",
            marginTop: 24,
            lineHeight: 1.6,
            maxWidth: 700,
          }}
        >
          MFAA-accredited broker comparing 30+ lenders to find you the right
          home loan — at no cost to you.
        </div>
      </div>
    ),
    { ...size }
  );
}
