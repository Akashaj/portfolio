export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://akash-j.vercel.app";

export const profile = {
  name: "Akash Jayakumar",
  shortName: "Akash",
  role: "Staff Software Engineer",
  headline: "Mobile Architect & Full-Stack Engineer",
  stackLine: "React Native · TypeScript · Node.js · Express · Next.js",
  location: "Chennai, India",
  email: "akash.jayakumar96@gmail.com",
  linkedin: "https://www.linkedin.com/in/akash-jayakumar-a148a4151",
  github: "https://github.com/Akashaj",
  resume: "/Akash_Jayakumar_Resume.pdf",
  summary:
    "8+ years architecting and shipping React Native and TypeScript applications for restaurant POS, online ordering and delivery platforms used by 30,000+ restaurant partners across five countries. I designed and built the core of Foodhub's in-house local-first sync engine, and single-handedly built the company's first React Native app.",
  summaryShort:
    "I architect offline-first, real-time React Native systems and the Node.js backends behind them — for platforms used by 30,000+ restaurant partners across five countries.",
  now: {
    label: "Now",
    text: "Rolling out a local-first sync engine across the Foodhub POS fleet — live in 40 stores, ~5 more a day.",
  },
};

export const metrics = [
  { value: "10M+", label: "Google Play downloads", detail: "JoyRide rider app, built from scratch" },
  { value: "30,000+", label: "Restaurant partners", detail: "UK, Ireland, US, Australia, New Zealand" },
  { value: "40", label: "Stores live on my sync engine", detail: "Rolling out at ~5 stores a day" },
  { value: "8+", label: "Years of React Native", detail: "Built Foodhub's first RN app in 2018" },
];

export const capabilities = [
  {
    title: "Mobile architecture",
    body: "React Native and TypeScript at scale: JSI and native modules (Kotlin, iOS), modular micro-app architecture, Android TV / Fire TV, and large migrations like Amplify v5→v6 and RN 0.75→0.77.",
    tags: ["React Native", "TypeScript", "JSI", "Native modules", "Micro-apps"],
  },
  {
    title: "Offline-first & real-time",
    body: "Local-first data with SQLite via JSI, GraphQL delta sync and a durable outbox; AppSync subscriptions; peer-to-peer TCP sync with leader election, failover and distributed locking.",
    tags: ["SQLite / op-sqlite", "GraphQL", "AppSync", "P2P TCP", "Distributed locks"],
  },
  {
    title: "Full-stack & cloud",
    body: "Node.js and Express services, Firebase Cloud Functions (callables, cron jobs, reports), AWS AppSync, Lambda authorization and S3, plus web with React and Next.js.",
    tags: ["Node.js", "Express", "Firebase", "AWS", "Next.js"],
  },
];

export const leadership = [
  {
    title: "Onsite releases, two continents",
    body: "Led the local-first engine's UK rollout (Aug–Oct 2026) at client restaurant sites, and an Australia onsite contract in Newcastle NSW (Feb–May 2025) training the local tech team and shipping weekly releases.",
  },
  {
    title: "Engineering quality",
    body: "Audited Redux-Saga test coverage (~11% of generators), introduced AI-assisted test automation with Claude Code, and wrote 225 Jest tests — bringing the payment saga to ~80% statement coverage.",
  },
  {
    title: "Modular architecture",
    body: "Co-led extraction of the Orders POS app from the monolith into an independent micro-app: removed ~39,000 lines of dead code and resolved 91 broken imports.",
  },
  {
    title: "Production reliability",
    body: "Led the POS out-of-memory investigation, replaced a single-endpoint internet check with a 7-provider connectivity probe, and built the diagnostic logging (OpenSearch, Kibana) the team uses for root cause analysis.",
  },
  {
    title: "Security",
    body: "Led hardening for a payroll partner's penetration test: authored a 38-finding audit and fixed 21 findings, including 5 Critical and 12 High.",
  },
  {
    title: "People",
    body: "Mentor freshers and junior developers, run onboarding for fresher batches, and interview candidates in campus drives and experienced hires.",
  },
];

export const skills = [
  {
    group: "Mobile Architecture",
    items: ["React Native", "TypeScript", "JSI", "Native modules (Kotlin, iOS)", "Offline-first / local-first", "Micro-app architecture", "Android TV / Fire TV", "React Native Web"],
  },
  {
    group: "Offline-First & Real-Time",
    items: ["SQLite (op-sqlite via JSI)", "GraphQL delta sync", "Durable outbox", "Conflict handling", "AWS AppSync subscriptions", "Amplify DataStore", "TCP peer-to-peer sync", "Leader election & failover", "Distributed locking"],
  },
  {
    group: "Backend & Cloud",
    items: ["Node.js", "Express", "Firebase (Firestore, Cloud Functions, Auth, FCM, Hosting)", "AWS (AppSync, Amplify, Lambda authorization, S3, CloudWatch)", "REST", "GraphQL"],
  },
  {
    group: "State & Frontend",
    items: ["Redux Toolkit", "Redux-Saga", "Redux-Persist", "Zustand", "React", "Next.js", "React Navigation", "Tailwind CSS"],
  },
  {
    group: "Reliability & Delivery",
    items: ["OpenSearch / Kibana", "Structured logging", "Root cause analysis", "Memory & performance profiling", "Jest", "GitHub Actions", "CodePush OTA", "App Store / Google Play releases", "Security audits"],
  },
  {
    group: "Leadership",
    items: ["System design reviews", "Code reviews", "Mentoring & onboarding", "Hiring", "Cross-region teams (UK, AU, IN)", "AI-assisted engineering (Claude Code, Cursor)"],
  },
];
