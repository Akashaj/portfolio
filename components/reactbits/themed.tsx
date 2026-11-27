"use client";

import { useSyncExternalStore, type ComponentProps } from "react";
import { useHtmlAttr } from "../useHtmlAttr";
import ProfileCard from "./ProfileCard";
import RotatingText from "./RotatingText";
import GradientText from "./GradientText";
import SpotlightCard from "./SpotlightCard";
import Particles from "./Particles";
import MagicRings from "./MagicRings";
import ClickSpark from "./ClickSpark";

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

/**
 * Site-wide particle field, fixed behind every section. Faint purple nodes with
 * short links read as a network, a quiet nod to the sync/P2P work.
 */
export function SiteParticles() {
  const theme = useTheme();
  const dark = theme === "dark";
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <Particles
        key={theme}
        particleCount={dark ? 170 : 150}
        particleSpread={11}
        speed={0.05}
        particleColors={dark ? ["#a78bfa", "#c4b5fd", "#e9d5ff"] : ["#7c3aed", "#8b5cf6", "#a78bfa"]}
        particleBaseSize={70}
        sizeRandomness={0.8}
        alphaParticles
        glow={dark ? 0.6 : 0.2}
        twinkle={0.25}
        connections
        connectionDistance={95}
        hoverEffect="parallax"
        particleHoverFactor={0.6}
        clickBurst={false}
        opacity={dark ? 0.75 : 0.55}
        lightMode={!dark}
      />
    </div>
  );
}

/** Soft pulsing rings that sit behind the profile card. */
export function HeroRings() {
  const theme = useTheme();
  const c = PURPLE[theme];
  return (
    <MagicRings
      key={theme}
      theme={theme}
      color={c.glow}
      colorTwo="#ec4899"
      ringCount={5}
      motion="breathe"
      speed={0.6}
      lineThickness={1.5}
      glow={theme === "dark" ? 0.9 : 0.5}
      baseRadius={0.3}
      radiusStep={0.075}
      opacity={theme === "dark" ? 0.85 : 0.6}
      followMouse
      mouseInfluence={0.12}
      clickBurst={false}
    />
  );
}

export function CardRings() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-[42%] -z-10 aspect-square w-[175%] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,#000_72%,transparent)]" aria-hidden>
      <HeroRings />
    </div>
  );
}

export function PurpleClickSpark({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const c = PURPLE[theme];
  return (
    <ClickSpark sparkColor={[c.accent, c.soft, "#ec4899"]} sparkSize={9} sparkRadius={22} sparkCount={9} duration={450}>
      {children}
    </ClickSpark>
  );
}
