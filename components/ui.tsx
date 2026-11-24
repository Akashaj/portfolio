import type { ReactNode } from "react";
import type { AppLinks } from "@/content/apps";
import { AppleIcon, GlobeIcon, PlayStoreIcon } from "./icons";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-pretty text-muted">{lead}</p>}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}

export function StoreLinks({ links, name }: { links: AppLinks; name: string }) {
  const items = [
    links.play && { href: links.play, label: "Google Play", Icon: PlayStoreIcon },
    links.ios && { href: links.ios, label: "App Store", Icon: AppleIcon },
    links.web && { href: links.web, label: "Website", Icon: GlobeIcon },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof GlobeIcon }[];

  return (
    <div className="flex flex-wrap gap-2">
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on ${label}`}
          className="inline-flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <Icon className="size-3.5" />
          {label}
        </a>
      ))}
    </div>
  );
}
