import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">This page went offline.</h1>
      <p className="mt-3 text-muted">Unlike the POS, there&apos;s no outbox to recover it from.</p>
      <Link href="/" className="mt-8 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg hover:bg-accent-strong">
        Back home
      </Link>
    </Container>
  );
}
