import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { metrics, profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public/images/akash-square.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#09090b",
          color: "#f4f4f5",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, color: "#a78bfa", letterSpacing: 3, textTransform: "uppercase" }}>
              {profile.role}
            </div>
            <div style={{ fontSize: 72, fontWeight: 700, marginTop: 20, letterSpacing: -2 }}>{profile.name}</div>
            <div style={{ fontSize: 36, color: "#a1a1aa", marginTop: 8 }}>{profile.headline}</div>
            <div style={{ fontSize: 22, color: "#8b8b94", marginTop: 28 }}>{profile.stackLine}</div>
          </div>
          <div style={{ display: "flex", gap: 48 }}>
            {metrics.slice(0, 3).map((m) => (
              <div key={m.label} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 44, fontWeight: 700, color: "#a78bfa" }}>{m.value}</div>
                <div style={{ fontSize: 18, color: "#a1a1aa" }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={src}
            alt=""
            width={300}
            height={300}
            style={{ borderRadius: 32, border: "2px solid #27272a", objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
