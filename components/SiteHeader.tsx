import Link from "next/link";
import { profile } from "@/content/profile";
import { ThemeToggle } from "./ThemeToggle";
import { DownloadIcon } from "./icons";

const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/#apps", label: "Apps" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5" aria-label={`${profile.name}, home`}>
          <span className="flex size-8 items-center justify-center rounded-lg bg-fg font-mono text-xs font-semibold text-bg transition-colors group-hover:bg-accent group-hover:text-accent-fg">
            AJ
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">{profile.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-fg px-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            <DownloadIcon className="size-4" />
            Resume
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
