"use client";

import { useSyncExternalStore, type ComponentProps } from "react";
import { useHtmlAttr } from "../useHtmlAttr";
import ProfileCard from "./ProfileCard";
import RotatingText from "./RotatingText";
import GradientText from "./GradientText";
import SpotlightCard from "./SpotlightCard";

/** Purple palette per theme, shared by the React Bits wrappers. */
const PURPLE = {
  light: { accent: "#6d28d9", soft: "#a78bfa", backdrop: "#4c1d95", glow: "#7c3aed" },
  dark: { accent: "#a78bfa", soft: "#c4b5fd", backdrop: "#2e1065", glow: "#a78bfa" },
};

function useTheme() {
  return useHtmlAttr("theme", "light") === "dark" ? "dark" : "light";
}

export function HeroProfileCard(props: ComponentProps<typeof ProfileCard>) {
  const theme = useTheme();
  return <ProfileCard theme={theme} backdropColor={PURPLE[theme].backdrop} {...props} />;
}

const REDUCE = "(prefers-reduced-motion: reduce)";
function useReducedMotion() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(REDUCE);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(REDUCE).matches,
    () => false,
  );
}

/** Rotates through the words; holds on the first one when the visitor prefers reduced motion. */
export function HeroRotatingText(props: ComponentProps<typeof RotatingText>) {
  const reduce = useReducedMotion();
  return <RotatingText {...props} auto={!reduce && props.auto !== false} />;
}

export function AccentGradientText(props: ComponentProps<typeof GradientText>) {
  const theme = useTheme();
  const c = PURPLE[theme];
  return <GradientText colors={[c.accent, c.soft, "#ec4899", c.accent]} {...props} />;
}

export function ThemedSpotlightCard({ style, ...props }: ComponentProps<typeof SpotlightCard>) {
  const theme = useTheme();
  return (
    <SpotlightCard
      theme={theme}
      spotlightColor={PURPLE[theme].glow}
      style={{
        "--spotlight-card-surface": "var(--surface)",
        "--spotlight-card-border": "var(--border)",
        ...style,
      } as React.CSSProperties}
      {...props}
    />
  );
}
