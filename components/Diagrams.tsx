import type { DiagramKey } from "@/content/work";

/* Small SVG toolkit — everything uses theme tokens so diagrams follow light/dark and accent. */

type BoxProps = {
  x: number;
  y: number;
  w: number;
  h?: number;
  title: string;
  sub?: string;
  accent?: boolean;
};

function Box({ x, y, w, h = 64, title, sub, accent }: BoxProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        fill={accent ? "var(--accent-soft)" : "var(--surface)"}
        stroke={accent ? "var(--accent)" : "var(--border-strong)"}
        strokeWidth={1.25}
      />
      <text
        x={x + w / 2}
        y={y + (sub ? h / 2 - 4 : h / 2 + 5)}
        textAnchor="middle"
        fontSize={14}
        fontWeight={600}
        fill={accent ? "var(--accent-soft-fg)" : "var(--fg)"}
      >
        {title}
      </text>
      {sub && (
        <text className="mono" x={x + w / 2} y={y + h / 2 + 15} textAnchor="middle" fontSize={11} fill="var(--subtle)">
          {sub}
        </text>
      )}
    </g>
  );
}

function Arrow({
  d,
  label,
  lx,
  ly,
  dashed,
}: {
  d: string;
  label?: string;
  lx?: number;
  ly?: number;
  dashed?: boolean;
}) {
  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke="var(--accent)"
        strokeWidth={1.5}
        strokeDasharray={dashed ? "5 5" : undefined}
        markerEnd="url(#arrow)"
      />
      {label && (
        <text className="mono" x={lx} y={ly} textAnchor="middle" fontSize={11} fill="var(--muted)">
          {label}
        </text>
      )}
    </g>
  );
}

function Frame({ w, h, title, children }: { w: number; h: number; title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-surface-2/60 p-4">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        role="img"
        aria-label={title}
        className="diagram mx-auto h-auto w-full min-w-[640px]"
      >
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 10 5 0 10z" fill="var(--accent)" />
          </marker>
        </defs>
        {children}
      </svg>
    </div>
  );
}

function SyncEngine() {
  return (
    <Frame w={880} h={300} title="Local-first sync engine architecture">
      <text x={20} y={28} fontSize={11} className="mono" fill="var(--subtle)">ON DEVICE (POS TILL)</text>
      <rect x={10} y={40} width={540} height={240} rx={14} fill="none" stroke="var(--border)" strokeDasharray="4 4" />
      <Box x={30} y={70} w={150} title="POS UI" sub="React Native" />
      <Box x={220} y={70} w={150} title="Local database" sub="SQLite via JSI" accent />
      <Box x={220} y={190} w={150} title="Durable outbox" sub="survives restarts" accent />
      <Box x={400} y={130} w={130} title="Sync worker" sub="retry · recovery" />
      <Box x={650} y={70} w={210} title="GraphQL API" sub="AWS AppSync" />
      <Box x={650} y={190} w={210} title="REST fallback" sub="order API" />
      <text x={650} y={28} fontSize={11} className="mono" fill="var(--subtle)">CLOUD</text>

      <Arrow d="M180 102 H216" label="write" lx={198} ly={94} />
      <Arrow d="M295 134 V186" label="enqueue" lx={330} ly={164} />
      <Arrow d="M370 222 H420 V198" />
      <Arrow d="M530 150 H600 V102 H646" label="push" lx={574} ly={96} />
      <Arrow d="M530 172 H600 V222 H646" label="fallback" lx={566} ly={240} dashed />
      <Arrow d="M650 86 C 560 40, 420 40, 372 86" label="delta sync" lx={510} ly={36} />
    </Frame>
  );
}

function Coordination() {
  return (
    <Frame w={880} h={280} title="Multi-terminal coordination over peer-to-peer TCP">
      <Box x={345} y={30} w={190} h={70} title="Coordinator till" sub="elected leader" accent />
      <Box x={60} y={180} w={180} title="Till B" sub="follower" />
      <Box x={350} y={180} w={180} title="Till C" sub="follower" />
      <Box x={640} y={180} w={180} title="Till D" sub="follower" />
      <Arrow d="M380 100 L170 176" label="heartbeat · RTT" lx={230} ly={130} />
      <Arrow d="M440 100 V176" label="lock order/table" lx={500} ly={145} />
      <Arrow d="M500 100 L710 176" label="RPC" lx={640} ly={130} />
      <text x={440} y={272} textAnchor="middle" fontSize={11} className="mono" fill="var(--subtle)">
        ~200 ms distributed lock · leader election with failover
      </text>
    </Frame>
  );
}

function ClockInMaster() {
  return (
    <Frame w={880} h={260} title="ClockInMaster server-side architecture">
      <Box x={20} y={40} w={180} title="Tablet & web apps" sub="React Native · Web" />
      <Box x={20} y={160} w={180} title="Optimistic UI" sub="instant feedback" accent />
      <Box x={330} y={40} w={200} title="Callable functions" sub="Cloud Functions" accent />
      <Box x={330} y={160} w={200} title="Scheduled functions" sub="cron" />
      <Box x={660} y={40} w={200} title="Firestore" sub="source of truth" />
      <Box x={660} y={160} w={200} title="PDF / CSV reports" sub="incl. US payroll" />
      <Arrow d="M110 104 V156" />
      <Arrow d="M200 72 H326" label="approve shift" lx={263} ly={64} />
      <Arrow d="M530 72 H656" label="validated write" lx={593} ly={64} />
      <Arrow d="M530 192 H656" label="generate" lx={593} ly={184} />
      <Arrow d="M760 104 V140 H430 V156" dashed />
    </Frame>
  );
}

function JoyRide() {
  return (
    <Frame w={880} h={230} title="JoyRide rider and driver architecture">
      <Box x={30} y={80} w={200} title="Rider app" sub="React Native · Maps" />
      <Box x={650} y={80} w={200} title="Driver app" sub="React Native" />
      <Box x={330} y={30} w={220} title="Firebase" sub="real-time data" accent />
      <Box x={330} y={140} w={220} title="Cloud Functions" sub="server logic" />
      <Arrow d="M230 100 H326 V80" label="book ride" lx={278} ly={92} />
      <Arrow d="M550 62 H646 V96" label="ride updates" lx={600} ly={54} />
      <Arrow d="M440 94 V136" />
    </Frame>
  );
}

export function Diagram({ id }: { id: DiagramKey }) {
  switch (id) {
    case "sync-engine":
      return <SyncEngine />;
    case "coordination":
      return <Coordination />;
    case "clockinmaster":
      return <ClockInMaster />;
    case "joyride":
      return <JoyRide />;
  }
}
