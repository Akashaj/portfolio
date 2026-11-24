"use client";

import { setHtmlAttr, useHtmlAttr } from "./useHtmlAttr";

/**
 * Preview-only control for choosing the accent colour.
 * Hide it by setting NEXT_PUBLIC_SHOW_VARIANTS=false once a colour is chosen.
 */
const VARIANTS = [
  { id: "teal", label: "Teal", swatch: "#14b8a6" },
  { id: "purple", label: "Purple", swatch: "#8b5cf6" },
] as const;

export function VariantSwitcher() {
  const accent = useHtmlAttr("accent", "teal");
  if (process.env.NEXT_PUBLIC_SHOW_VARIANTS === "false") return null;

  return (
    <div
      role="group"
      aria-label="Accent colour preview"
      className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border border-line bg-surface/90 p-1 pl-3 text-xs shadow-lg backdrop-blur"
    >
      <span className="mr-1 text-subtle">Variant</span>
      {VARIANTS.map((v) => {
        const active = accent === v.id;
        return (
          <button
            key={v.id}
            type="button"
            aria-pressed={active}
            onClick={() => setHtmlAttr("accent", v.id)}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 font-medium transition-colors ${
              active ? "bg-fg text-bg" : "text-muted hover:text-fg"
            }`}
          >
            <span className="size-2.5 rounded-full" style={{ background: v.swatch }} aria-hidden />
            {v.label}
          </button>
        );
      })}
    </div>
  );
}
