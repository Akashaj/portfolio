"use client";

import { setHtmlAttr, useHtmlAttr } from "./useHtmlAttr";
import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggle() {
  const theme = useHtmlAttr("theme", "light");
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={() => setHtmlAttr("theme", next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="inline-flex size-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
    >
      {theme === "dark" ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
    </button>
  );
}
