import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWork, work } from "@/content/work";
import { profile } from "@/content/profile";
import { Container, Tag } from "@/components/ui";
import { Diagram } from "@/components/Diagrams";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/icons";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const w = getWork(slug);
  if (!w) return {};
  return {
    title: w.title,
    description: w.summary,
    alternates: { canonical: `/work/${w.slug}` },
    openGraph: { type: "article", title: w.title, description: w.summary, url: `/work/${w.slug}` },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const w = getWork(slug);
  if (!w) notFound();

  const idx = work.findIndex((x) => x.slug === w.slug);
  const next = work[(idx + 1) % work.length];

  return (
    <article>
      <header className="relative overflow-hidden border-b border-line">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
        <Container className="relative py-14 sm:py-20">
          <Link href="/#work" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg">
            <ArrowLeft className="size-4" /> All work
          </Link>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-accent">{w.kicker}</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{w.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-pretty text-muted">{w.summary}</p>

          <dl className="mt-10 grid gap-6 rounded-2xl border border-line bg-surface p-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs text-subtle">Client</dt>
              <dd className="mt-1 text-sm font-medium">{w.client}</dd>
            </div>
            <div>
              <dt className="text-xs text-subtle">Role</dt>
              <dd className="mt-1 text-sm font-medium">{w.role}</dd>
            </div>
            <div>
              <dt className="text-xs text-subtle">Timeline</dt>
              <dd className="mt-1 text-sm font-medium">{w.period}</dd>
            </div>
            <div className="sm:col-span-3">
              <dt className="sr-only">Stack</dt>
              <dd className="flex flex-wrap gap-1.5">
                {w.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {w.metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-line bg-surface p-4">
                <p className="font-mono text-xl font-semibold text-accent sm:text-2xl">{m.value}</p>
                <p className="mt-1 text-xs text-subtle">{m.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </header>

      <Container className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-14">
          {w.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-2xl font-semibold tracking-tight">{s.heading}</h2>
              {s.body?.map((p) => (
                <p key={p} className="mt-4 leading-relaxed text-pretty text-muted">
                  {p}
                </p>
              ))}
              {s.diagram && (
                <figure className="-mx-4 mt-8 sm:-mx-16">
                  <Diagram id={s.diagram} />
                  {s.diagramCaption && (
                    <figcaption className="mt-3 text-center text-xs text-subtle">{s.diagramCaption}</figcaption>
                  )}
                </figure>
              )}
              {s.bullets && (
                <ul className="mt-6 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 leading-relaxed text-muted">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {w.links && (
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">Links</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {w.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {l.label} <ArrowUpRight className="size-3.5" />
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="mx-auto mt-20 flex max-w-3xl flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a href={`mailto:${profile.email}`} className="text-sm text-muted hover:text-fg">
            Questions about this project? {profile.email}
          </a>
          <Link
            href={`/work/${next.slug}`}
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent"
          >
            Next: {next.client.split(" · ")[0]}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </article>
  );
}
