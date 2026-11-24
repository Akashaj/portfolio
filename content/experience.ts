export type Role = {
  title: string;
  org: string;
  orgNote?: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Role[] = [
  {
    title: "Staff Software Engineer",
    org: "Foodhub",
    orgNote: "formerly Touch2Success",
    period: "Jan 2026 – Present",
    location: "Chennai, India",
    points: [
      "Designed and built the core of Foodhub's TypeScript local-first engine replacing AWS Amplify DataStore on the POS — live in 40 stores, rolling out at ~5 stores a day.",
      "Built the multi-terminal coordinator RPC layer and a ~200 ms distributed lock over peer-to-peer TCP; fixed a leader-election failover defect that left a fleet without a coordinator for 42+ min against a 10 s spec.",
      "Redesigned order failure handling after two lost-order incidents so failed AppSync order creation falls back to the offline queue.",
      "Co-led extraction of the Orders POS micro-app (~39,000 lines of dead code removed) and built the Order Management hub.",
    ],
  },
  {
    title: "Senior Software Engineer",
    org: "Foodhub",
    period: "Jan 2022 – Dec 2025",
    location: "Chennai, India",
    points: [
      "Owned the front-end AWS AppSync / Amplify DataStore architecture across the POS and merchant apps: offline orders, real-time subscriptions, reconnect strategy, schema and SQLite migrations.",
      "Drove the AWS Amplify v5.3 → v6.9 upgrade of the React Native POS.",
      "Built core POS logic for table ordering, offline ordering and the basket; co-built multi-store support (one primary plus up to 10 secondary takeaways per device).",
      "Implemented card-over-phone payments, Adyen cloud-terminal failure handling and PDQ terminal integration.",
    ],
  },
  {
    title: "Software Engineer",
    org: "Foodhub",
    period: "May 2018 – Dec 2021",
    location: "Chennai, India",
    points: [
      "Single-handedly built Foodhub's first React Native app — a rewrite of the native Drive2Success driver app with real-time background location via custom native modules and weekly CodePush OTA updates.",
      "Built the AWS AppSync / DataStore proof of concept, then co-developed the production real-time order sync for the POS.",
      "Helped rebuild the My Business Hub merchant app and Fusion tablet POS as one React Native codebase, including printer and POS hardware integration (PAX A920, Citaq, Sunmi).",
      "Rewrote the Foodhub consumer app's menu (1M+ installs); main developer and release owner of the Digital Board Android TV / Fire TV app.",
    ],
  },
  {
    title: "Co-founder & Engineer",
    org: "ClockInMaster",
    orgNote: "Pivotium Ltd, UK · part-time",
    period: "Sep 2023 – Present",
    location: "Remote",
    points: [
      "Wrote the original time-and-pay engine (multi-week overtime, session wages, round-off, labour cost, automatic clock-out cut-offs).",
      "Moved shift approvals to Cloud Function callables with optimistic UI, fixing 10–15 s approval delays; built scheduled PDF/CSV report delivery.",
      "Authored a 38-finding security audit for a payroll partner's penetration test and fixed 21 findings.",
    ],
  },
  {
    title: "Freelance Mobile Engineer",
    org: "Selected clients",
    period: "2019 – 2026",
    location: "Philippines · Abu Dhabi",
    points: [
      "JoyRide (Philippines): built the rider and driver apps and Firebase Cloud Functions from scratch — 10M+ Google Play downloads.",
      "Public Art Abu Dhabi (now Manar Abu Dhabi) for the Department of Culture and Tourism: created the app and was its largest code author.",
      "Yas Driving Academy: created the tablet exam app, re-architected its state layer, and co-built the trainee and trainer apps.",
    ],
  },
];

export const education = {
  degree: "B.Tech, Information Technology",
  school: "Sathyabama Institute of Science and Technology, Chennai",
  period: "2014 – 2018",
};
