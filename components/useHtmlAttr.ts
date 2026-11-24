"use client";

import { useSyncExternalStore } from "react";

function subscribe(cb: () => void) {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme", "data-accent"],
  });
  return () => obs.disconnect();
}

/** Reads a data-* attribute on <html>, re-rendering when it changes. */
export function useHtmlAttr(name: "theme" | "accent", serverValue: string) {
  return useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset[name] ?? serverValue,
    () => serverValue,
  );
}

export function setHtmlAttr(name: "theme" | "accent", value: string) {
  document.documentElement.dataset[name] = value;
  try {
    localStorage.setItem(name, value);
  } catch {}
}
