"use client";

import { useEffect, useRef } from "react";

/**
 * Animates the numeric part of a value like "10M+", "30,000+" or "~200 ms"
 * from 0 when it scrolls into view. The server-rendered text is the final value,
 * so crawlers, no-JS and reduced-motion users always see the real number.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !document.documentElement.classList.contains("js-motion")) return;
    const m = value.match(/^(\D*)([\d,]+)(.*)$/);
    // Only animate plain quantities ("10M+", "~200 ms"), not dates like "Dec 2019".
    if (!m || !/^~?$/.test(m[1])) return;
    const [, prefix, num, suffix] = m;
    const target = Number(num.replace(/,/g, ""));
    const commas = num.includes(",");
    const fmt = (n: number) => (commas ? n.toLocaleString("en-US") : String(n));

    let raf = 0;
    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      const t0 = performance.now();
      const dur = 1400;
      const tick = (t: number) => {
        const p = Math.min(1, Math.max(0, (t - t0) / dur));
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = `${prefix}${fmt(Math.round(target * eased))}${suffix}`;
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      el.textContent = `${prefix}0${suffix}`;
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      el.textContent = value;
    };
  }, [value]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {value}
    </span>
  );
}
