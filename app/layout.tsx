import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SITE_URL, profile } from "@/content/profile";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PurpleClickSpark, SiteParticles } from "@/components/reactbits/themed";
import { RevealObserver } from "@/components/RevealObserver";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const description = `${profile.role} · ${profile.headline}. ${profile.summaryShort}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — ${profile.headline}`,
    template: `%s · ${profile.name}`,
  },
  description,
  authors: [{ name: profile.name, url: SITE_URL }],
  keywords: [
    "Akash Jayakumar",
    "React Native architect",
    "Mobile architect",
    "Staff Software Engineer",
    "Full-stack developer",
    "Node.js",
    "Express",
    "Next.js",
    "Offline-first",
    "Local-first",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: profile.name,
    title: `${profile.name} — ${profile.headline}`,
    description,
    firstName: "Akash",
    lastName: "Jayakumar",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.headline}`,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

// Sets theme before paint (no flash) and opts into scroll animations.
const initScript = `(function(){try{var d=document.documentElement,s=localStorage;var p=new URLSearchParams(location.search);var t=p.get('theme')||s.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}d.dataset.theme=t;if(!matchMedia('(prefers-reduced-motion: reduce)').matches)d.classList.add('js-motion')}catch(e){}})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: SITE_URL,
  image: `${SITE_URL}/images/akash-square.jpg`,
  jobTitle: profile.role,
  description: profile.summaryShort,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
  worksFor: { "@type": "Organization", name: "Foodhub" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Sathyabama Institute of Science and Technology" },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: ["React Native", "TypeScript", "Node.js", "Express", "Next.js", "Offline-first architecture", "AWS AppSync", "Firebase", "SQLite", "GraphQL"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-accent="purple"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <SiteParticles />
        <main id="main" className="flex-1">
          <PurpleClickSpark>{children}</PurpleClickSpark>
        </main>
        <SiteFooter />
        <RevealObserver />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
