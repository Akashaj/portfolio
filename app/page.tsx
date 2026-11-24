import Image from "next/image";
import Link from "next/link";
import portrait from "@/public/images/akash-portrait.jpg";
import { capabilities, leadership, metrics, profile, skills } from "@/content/profile";
import { apps } from "@/content/apps";
import { experience, education } from "@/content/experience";
import { work } from "@/content/work";
import { Container, SectionHeading, StoreLinks, Tag } from "@/components/ui";
import {
  ArrowRight,
  ArrowUpRight,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/icons";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Capabilities />
      <SelectedWork />
      <Apps />
      <Leadership />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div>
          <p className="fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 text-xs text-muted backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {profile.role} · Foodhub
          </p>
          <h1 id="hero-title" className="fade-up delay-1 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {profile.name}
            <span className="mt-3 block text-2xl font-medium text-muted sm:text-3xl lg:text-[2.1rem]">
              <span className="text-accent">Mobile architect</span> & full-stack engineer.
            </span>
          </h1>
          <p className="fade-up delay-2 mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
            {profile.summaryShort}
          </p>
          <p className="fade-up delay-2 mt-4 font-mono text-xs text-subtle">{profile.stackLine}</p>

          <div className="fade-up delay-3 mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#work"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-medium text-accent-fg transition-colors hover:bg-accent-strong"
            >
              View my work <ArrowRight className="size-4" />
            </Link>
            <a
              href={profile.resume}
              download
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-line-strong bg-surface px-5 text-sm font-medium transition-colors hover:border-fg"
            >
              <DownloadIcon className="size-4" /> Resume
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-lg p-2.5 text-muted transition-colors hover:text-accent">
                <LinkedInIcon className="size-5" />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-lg p-2.5 text-muted transition-colors hover:text-accent">
                <GitHubIcon className="size-5" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-lg p-2.5 text-muted transition-colors hover:text-accent">
                <MailIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="fade-up delay-2 relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -inset-3 rounded-[28px] bg-accent/15 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface shadow-xl">
            <Image
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 420px, 90vw"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-black/55 p-4 text-white backdrop-blur-md">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/70">{profile.now.label}</p>
              <p className="mt-1 text-sm leading-snug">{profile.now.text}</p>
            </div>
          </div>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-subtle lg:justify-start">
            <MapPinIcon className="size-4" /> {profile.location}
          </p>
        </div>
      </Container>
    </section>
  );
}

function Metrics() {
  return (
    <section aria-label="Impact" className="border-y border-line bg-surface">
      <Container className="grid grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={`px-2 py-8 sm:px-6 ${i % 2 === 1 ? "border-l border-line" : ""} ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
          >
            <p className="font-mono text-3xl font-semibold tracking-tight text-accent sm:text-4xl">{m.value}</p>
            <p className="mt-2 text-sm font-medium">{m.label}</p>
            <p className="mt-1 text-xs text-subtle">{m.detail}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="cap-title">
      <Container>
        <div id="cap-title">
          <SectionHeading
            eyebrow="What I do"
            title="From the device to the database."
            lead="I design mobile systems that keep working when the network doesn't, and the backend services that keep them honest."
          />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {capabilities.map((c, i) => (
            <article key={c.title} className="flex flex-col rounded-2xl border border-line bg-surface p-6">
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{c.body}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="border-t border-line bg-surface/50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Case studies"
          lead="The problem, the architecture and the outcome. Proprietary work is described at the system level, without internal code."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {work.map((w, i) => (
            <Link
              key={w.slug}
              href={`/work/${w.slug}`}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg sm:p-8 ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{w.kicker}</p>
                  <p className="mt-1 text-xs text-subtle">
                    {w.client} · {w.period}
                  </p>
                </div>
                <ArrowUpRight className="size-5 shrink-0 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
              <h3 className={`mt-4 font-semibold tracking-tight text-balance ${i === 0 ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                {w.title}
              </h3>
              <p className={`mt-3 text-sm leading-relaxed text-muted ${i === 0 ? "max-w-3xl" : ""}`}>{w.summary}</p>
              <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-5">
                {w.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="sr-only">{m.label}</dt>
                    <dd className="font-mono text-lg font-semibold">{m.value}</dd>
                    <dd className="text-xs text-subtle">{m.label}</dd>
                  </div>
                ))}
              </dl>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Apps() {
  return (
    <section id="apps" className="border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Shipped apps"
          title="Apps in production"
          lead="Apps I've built, rebuilt or owned. Each card says what my role was."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((a) => (
            <article key={a.name} className="flex flex-col rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-line-strong">
              <div className="flex items-start gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft font-semibold text-accent-soft-fg">
                  {a.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold leading-tight">{a.name}</h3>
                  <p className="mt-0.5 truncate text-xs text-subtle" title={a.org}>{a.org}</p>
                </div>
                {a.highlight && (
                  <span className="ml-auto shrink-0 rounded-full bg-fg px-2 py-0.5 font-mono text-[11px] font-medium text-bg">
                    {a.highlight}
                  </span>
                )}
              </div>
              <p className="mt-4 text-xs font-medium text-accent">{a.role}</p>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{a.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {a.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between gap-2 border-t border-line pt-4">
                <StoreLinks links={a.links} name={a.name} />
              </div>
              <p className="mt-2 text-[11px] text-subtle">{a.platforms}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Leadership() {
  return (
    <section className="border-t border-line bg-surface/50 py-20 sm:py-28" aria-labelledby="lead-title">
      <Container>
        <div id="lead-title">
          <SectionHeading
            eyebrow="Beyond the code"
            title="Leadership & engineering quality"
            lead="Staff-level work is also about raising the floor for the whole team."
          />
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((l) => (
            <div key={l.title} className="bg-surface p-6">
              <h3 className="font-semibold">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{l.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Experience" title="8+ years, one through-line: reliable mobile systems." />
        <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8">
          {experience.map((r) => (
            <li key={`${r.title}-${r.period}`} className="relative">
              <span className="absolute -left-[31px] top-1.5 size-3 rounded-full border-2 border-accent bg-bg sm:-left-[39px]" aria-hidden />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold">
                  {r.title} <span className="text-muted">· {r.org}</span>
                  {r.orgNote && <span className="ml-2 text-sm font-normal text-subtle">({r.orgNote})</span>}
                </h3>
                <p className="shrink-0 font-mono text-xs text-subtle">{r.period}</p>
              </div>
              <p className="text-xs text-subtle">{r.location}</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {r.points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li className="relative">
            <span className="absolute -left-[31px] top-1.5 size-3 rounded-full border-2 border-line-strong bg-bg sm:-left-[39px]" aria-hidden />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">
                {education.degree} <span className="text-muted">· Education</span>
              </h3>
              <p className="font-mono text-xs text-subtle">{education.period}</p>
            </div>
            <p className="text-sm text-muted">{education.school}</p>
          </li>
        </ol>
      </Container>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-surface/50 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Toolbox" title="Skills" />
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => (
            <div key={g.group}>
              <h3 className="mb-3 text-sm font-semibold">{g.group}</h3>
              <ul className="flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 text-center sm:px-12">
          <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Contact</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Building something that has to work offline, in real time, at scale?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Get in touch about mobile architecture, offline-first systems or full-stack work.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-medium text-accent-fg transition-colors hover:bg-accent-strong"
              >
                <MailIcon className="size-4" /> {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-line-strong px-5 text-sm font-medium transition-colors hover:border-fg"
              >
                <LinkedInIcon className="size-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
