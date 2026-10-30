import { ImageResponse } from "next/og";
import { brand, quote } from "@/config/site";

export const alt = `${brand.name} — ${brand.promise}`;
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
          background: "#060f1e",
          color: "white",
          padding: "72px 80px",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: "sans-serif" }}>
          <div style={{ width: 18, height: 18, borderRadius: 9, background: "#5bbab1" }} />
          <div style={{ fontSize: 28, letterSpacing: 4, fontWeight: 600 }}>{brand.name}</div>
          <div style={{ fontSize: 22, color: "#95a1b3", marginLeft: 8 }}>{brand.descriptor}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 68, lineHeight: 1.08 }}>
          <div>Your AI Roadmap Moves Fast.</div>
          <div style={{ color: "#8fd3cc", fontStyle: "italic" }}>Your Data Sourcing Should Too.</div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#c3cad5", fontFamily: "sans-serif" }}>
          Custom imaging, EHR & multimodal clinical datasets · Preliminary quotes in {quote.turnaroundHours} hours
        </div>
      </div>
    ),
    size,
  );
}
