export type DiagramKey = "sync-engine" | "coordination" | "clockinmaster" | "joyride";

export type Section = {
  heading: string;
  body?: string[];
  bullets?: string[];
  diagram?: DiagramKey;
  diagramCaption?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  client: string;
  period: string;
  role: string;
  stack: string[];
  summary: string;
  metrics: { value: string; label: string }[];
  sections: Section[];
  links?: { label: string; href: string }[];
};

export const work: CaseStudy[] = [
  {
    slug: "local-first-sync-engine",
    title: "A local-first sync engine for a restaurant POS fleet",
    kicker: "Offline-first architecture",
    client: "Foodhub",
    period: "2026 – Present",
    role: "Staff Software Engineer · designed and built the core",
    stack: ["React Native", "TypeScript", "SQLite (op-sqlite via JSI)", "GraphQL", "AWS AppSync", "P2P TCP"],
    summary:
      "Foodhub's POS ran on AWS Amplify DataStore. I designed and built the core of an in-house TypeScript local-first engine to replace it, plus the multi-terminal coordination layer that keeps tills in the same restaurant consistent.",
    metrics: [
      { value: "40", label: "stores live" },
      { value: "~5/day", label: "rollout pace" },
      { value: "~200 ms", label: "distributed lock" },
    ],
    sections: [
      {
        heading: "Context",
        body: [
          "Foodhub is a UK-headquartered online ordering and POS platform with 30,000+ restaurant partners across the UK, Ireland, the US, Australia and New Zealand. Before this engine, I owned the front-end AppSync / Amplify DataStore architecture across the POS and merchant apps: offline order creation and editing, real-time subscriptions, reconnect strategy, and schema and SQLite migrations.",
          "Two lost-order incidents and DataStore stalls that blocked offline saves made the case for owning the sync layer end to end, rather than relying on a library we had to patch around.",
        ],
      },
      {
        heading: "Architecture",
        body: [
          "Every write lands in a local SQLite database first, accessed through JSI for speed. Changes are recorded in a durable outbox that survives restarts and connection loss. A sync worker drains the outbox with GraphQL, falls back to REST when needed, and pulls remote changes as deltas so tills download only what changed.",
        ],
        diagram: "sync-engine",
        diagramCaption: "Write path: local first, durable outbox, then cloud. Read path: GraphQL delta sync back into SQLite.",
        bullets: [
          "SQLite via JSI (op-sqlite) as the on-device source of truth.",
          "Durable outbox with REST fallback, so a failed request never means a lost order.",
          "GraphQL delta sync to keep tills current without full reloads.",
          "In-app order recovery for anything that fails along the way.",
        ],
      },
      {
        heading: "Multi-terminal coordination",
        body: [
          "A restaurant often runs several tills on the same local network. I built the coordinator RPC layer, with heartbeats and round-trip tracking, and a ~200 ms distributed lock channel over the peer-to-peer TCP link so two tills can't edit the same order or table at once.",
          "I also fixed a leader-election failover defect that had left a fleet without a coordinator for 42+ minutes, against a 10-second spec.",
        ],
        diagram: "coordination",
        diagramCaption: "One elected coordinator, followers on peer-to-peer TCP, heartbeats and a lock channel for orders and tables.",
      },
      {
        heading: "Order-loss prevention",
        bullets: [
          "Redesigned failure handling so a failed AppSync order creation falls back to the offline queue instead of being dropped.",
          "Root-caused the DataStore stalls that were blocking offline saves, and shipped fixes at both the app and library level.",
          "Replaced a single-endpoint internet check with a 7-provider connectivity probe to stop false switches to offline mode.",
        ],
      },
      {
        heading: "Rollout",
        body: [
          "I deployed the engine onsite at client restaurants in the UK for its major release (Aug–Oct 2026). In the field I retuned inter-terminal sync so state is sent only when it changes and heartbeats are relaxed, cutting background traffic. I also built a one-command store diagnostic report for QA and support.",
          "The engine is live in 40 stores and rolling out at about 5 stores a day.",
        ],
      },
    ],
  },
  {
    slug: "clockinmaster",
    title: "ClockInMaster: building a workforce SaaS as co-founder",
    kicker: "Full-stack · SaaS",
    client: "ClockInMaster · Pivotium Ltd, UK",
    period: "Sep 2023 – Present",
    role: "Co-founder & engineer (part-time)",
    stack: ["React Native", "Firebase (Firestore)", "Cloud Functions (Node.js)", "Web"],
    summary:
      "A workforce-management SaaS for restaurants (time and attendance, rota, wage reports and payroll export) on Android/iOS tablets and web, built in partnership with Foodhub. I wrote the wage engine, moved critical writes server-side and led the security hardening.",
    metrics: [
      { value: "10–15 s", label: "approval delay removed" },
      { value: "38", label: "audit findings authored" },
      { value: "21", label: "fixed, incl. 5 Critical" },
    ],
    sections: [
      {
        heading: "The wage engine",
        body: [
          "I wrote the original time-and-pay engine. It covers multi-week overtime, session wages, round-off, labour cost and automatic clock-out cut-offs, and it has since been reused for payroll export.",
        ],
      },
      {
        heading: "Moving writes server-side",
        body: [
          "Shift approvals were written straight to Firestore from the client and took 10–15 seconds to land. I moved them to Cloud Function callables with optimistic UI, so managers see the result immediately and the server stays the source of truth.",
          "I also built scheduled report delivery: cron Cloud Functions that generate PDF and CSV reports, including US payroll formats.",
        ],
        diagram: "clockinmaster",
        diagramCaption: "Clients call server functions with optimistic UI; scheduled functions produce reports.",
      },
      {
        heading: "Security hardening",
        body: [
          "Ahead of a payroll partner's penetration test, I led the hardening work. I authored a 38-finding audit (10 Critical, 16 High, 12 Medium) and fixed 21 findings, including 5 Critical and 12 High.",
        ],
      },
      {
        heading: "Keeping the platform current",
        bullets: [
          "Upgraded React Native 0.75 → 0.77.",
          "Moved to Android target SDK 35 to meet Google Play's 16 KB page-size requirement.",
          "Resolved the iOS 26 SDK build and the launch crashes behind an App Store rejection.",
        ],
      },
    ],
    links: [
      { label: "clockinmaster.com", href: "https://clockinmaster.com/" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.foodhub.shiftbuddy" },
      { label: "App Store", href: "https://apps.apple.com/us/app/clock-in-master/id6680192687" },
    ],
  },
  {
    slug: "joyride",
    title: "JoyRide: rider and driver apps for 10M+ downloads",
    kicker: "Real-time mobile · Freelance",
    client: "JoyRide · Philippines",
    period: "2019",
    role: "Built the rider and driver apps and backend functions from scratch",
    stack: ["React Native", "Redux", "Firebase", "Cloud Functions", "Google Maps"],
    summary:
      "A ride-hailing super app in the Philippines. I built the rider and driver apps and the Firebase Cloud Functions behind them from scratch, with Google Maps booking and real-time ride updates.",
    metrics: [
      { value: "10M+", label: "Google Play downloads" },
      { value: "2", label: "apps from scratch" },
      { value: "Dec 2019", label: "rider app launch" },
    ],
    sections: [
      {
        heading: "What I built",
        bullets: [
          "Rider app: Google Maps booking and real-time ride updates.",
          "Driver app, built alongside the rider app on the same real-time backend.",
          "Firebase Cloud Functions for the server side.",
        ],
        diagram: "joyride",
        diagramCaption: "Two React Native apps share one real-time Firebase backend.",
      },
      {
        heading: "Outcome",
        body: [
          "The rider app launched in December 2019 and has passed 10 million downloads on Google Play.",
        ],
      },
    ],
    links: [
      { label: "Rider · Google Play", href: "https://play.google.com/store/apps/details?id=com.joyride.rider" },
      { label: "Rider · App Store", href: "https://apps.apple.com/ph/app/joyride-book-moto-taxi-car/id1482083123" },
      { label: "Driver · Google Play", href: "https://play.google.com/store/apps/details?id=com.joyride.driverv3" },
    ],
  },
  {
    slug: "manar-abu-dhabi",
    title: "Manar Abu Dhabi: a public art guide for the city",
    kicker: "Maps & navigation · Freelance",
    client: "Department of Culture and Tourism, Abu Dhabi",
    period: "2024 – 2025",
    role: "Created the app · largest code author",
    stack: ["React Native", "TypeScript", "Redux Toolkit"],
    summary:
      "Formerly Public Art Abu Dhabi. I created the app from scratch for Abu Dhabi's Department of Culture and Tourism and was its largest code author.",
    metrics: [
      { value: "0 → 1", label: "created from scratch" },
      { value: "Largest", label: "code author" },
      { value: "iOS + Android", label: "live on both stores" },
    ],
    sections: [
      {
        heading: "What I built",
        bullets: [
          "An interactive art map with point-of-interest filters.",
          "Artwork views and event listings.",
          "In-app turn-by-turn route guidance to each artwork.",
        ],
      },
    ],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.publicartabudhabi" },
      { label: "App Store", href: "https://apps.apple.com/us/app/manar-abu-dhabi/id6738164283" },
    ],
  },
];

export const getWork = (slug: string) => work.find((w) => w.slug === slug);
