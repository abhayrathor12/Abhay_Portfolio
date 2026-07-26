import { motion } from "motion/react";
import { SectionHeading, SpotlightCard } from "./SectionHeading";
import type { ReactNode } from "react";

type Project = {
  tag: string;
  title: string;
  problem: string;
  solution: string;
  metrics: { icon: string; text: string }[];
  stack: string[];
  visual: ReactNode;
};

const ChatMockup = (
  <div className="flex h-full flex-col gap-3 font-mono text-xs">
    <div className="max-w-[85%] self-end rounded-2xl rounded-br-sm border border-border bg-[oklch(0.22_0.02_275)] p-3 text-foreground/90">
      Motor M-204 tripped with overcurrent alarm. What should I check first?
    </div>
    <div className="max-w-[90%] self-start rounded-2xl rounded-bl-sm border border-teal-soft bg-teal-soft p-3 text-foreground/90">
      Based on the <span className="text-teal">Kirloskar manual</span> and 3 similar past faults,
      check the <span className="text-teal">bearing lubrication</span> and{" "}
      <span className="text-teal">stator winding insulation</span>. Step-by-step procedure below…
    </div>
    <div className="max-w-[70%] self-start rounded-lg border border-border bg-background/60 p-2 text-[10px] text-muted-foreground">
      sources: manual_M204.pdf · fault_log_2024.md
    </div>
  </div>
);

const DashMockup = (
  <div className="flex h-full flex-col gap-3 font-mono text-xs">
    <div className="grid grid-cols-3 gap-2">
      {[
        ["12", "Audits Today"],
        ["3", "Pending"],
        ["98%", "Compliance"],
      ].map(([n, l]) => (
        <div key={l} className="rounded-lg border border-border bg-[oklch(0.22_0.02_275)] p-2">
          <div className="text-lg font-bold text-teal">{n}</div>
          <div className="text-[10px] text-muted-foreground">{l}</div>
        </div>
      ))}
    </div>
    <div className="rounded-lg border border-border bg-[oklch(0.22_0.02_275)] p-3 text-[11px]">
      {[
        ["Line 3 · Weld Check", "Completed", "text-teal"],
        ["Line 5 · Torque Audit", "In Progress", "text-[color:var(--indigo)]"],
        ["Line 2 · Safety Sweep", "Overdue", "text-[color:var(--pink)]"],
      ].map(([label, status, cls]) => (
        <div
          key={label}
          className="flex items-center justify-between border-b border-border/60 py-1.5 last:border-0"
        >
          <span className="text-foreground/80">{label}</span>
          <span className={cls}>● {status}</span>
        </div>
      ))}
    </div>
  </div>
);

function Gauge({ value, label }: { value: number; label: string }) {
  const c = 2 * Math.PI * 28;
  return (
    <div className="flex flex-col items-center">
      <svg width="72" height="72" viewBox="0 0 72 72">
        <circle cx="36" cy="36" r="28" fill="none" stroke="oklch(0.985 0.005 250 / 0.08)" strokeWidth="6" />
        <circle
          cx="36"
          cy="36"
          r="28"
          fill="none"
          stroke="var(--teal)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - value / 100)}
          transform="rotate(-90 36 36)"
        />
        <text
          x="36"
          y="40"
          textAnchor="middle"
          className="fill-foreground font-mono"
          fontSize="12"
          fontWeight="600"
        >
          {value}%
        </text>
      </svg>
      <span className="mt-1 font-mono text-[10px] text-muted-foreground">{label}</span>
    </div>
  );
}

const OEEMockup = (
  <div className="flex h-full flex-col gap-3 font-mono text-xs">
    <div className="flex items-center justify-around rounded-lg border border-border bg-[oklch(0.22_0.02_275)] p-3">
      <Gauge value={94} label="Availability" />
      <Gauge value={89} label="Performance" />
      <Gauge value={97} label="Quality" />
    </div>
    <div className="rounded-lg border border-border bg-[oklch(0.22_0.02_275)] p-3">
      <div className="text-[10px] text-muted-foreground">OEE — last 24h</div>
      <svg viewBox="0 0 200 40" className="mt-1 h-10 w-full">
        <polyline
          fill="none"
          stroke="var(--teal)"
          strokeWidth="1.5"
          points="0,30 20,26 40,28 60,20 80,22 100,15 120,18 140,12 160,14 180,10 200,8"
        />
      </svg>
    </div>
    <div className="rounded-lg border border-[color-mix(in_oklch,var(--pink)_30%,transparent)] bg-[color-mix(in_oklch,var(--pink)_10%,transparent)] px-3 py-2 text-[11px] text-[color:var(--pink)]">
      ⚠ Spindle temperature rising on Line 3
    </div>
  </div>
);

const PROJECTS: Project[] = [
  {
    tag: "AI-Powered Diagnostics",
    title: "Maintenance Mate",
    problem:
      "When a critical motor fails on the factory floor, every minute of downtime costs thousands. Maintenance teams drown in paper manuals, scattered PDFs, and siloed expert knowledge. Junior technicians guess. Senior engineers get interrupted. The plant loses money and morale.",
    solution:
      "I built an AI diagnosis assistant that understands natural language fault descriptions, retrieves precise technical documentation using RAG, and delivers step-by-step troubleshooting guidance. It's like having a senior engineer on call, 24/7, who never gets tired and never forgets a manual.",
    metrics: [
      { icon: "⚡", text: "Instant fault analysis from natural language" },
      { icon: "📚", text: "1000+ technical documents indexed" },
      { icon: "🧠", text: "Context-aware multi-turn conversations" },
      { icon: "📧", text: "Automated fault report distribution" },
    ],
    stack: [
      "Python",
      "Django",
      "LangChain",
      "Gemini API",
      "ChromaDB",
      "RAG",
      "Vector Embeddings",
      "Celery",
      "Redis",
      "Docker",
    ],
    visual: ChatMockup,
  },
  {
    tag: "Digital Transformation",
    title: "Inspection & Audit Management System",
    problem:
      "Factory audits were a paper nightmare. Inspectors carried clipboards. Photos lived on WhatsApp. Reports took 3 days to compile. Managers had zero real-time visibility. With 50+ users across multiple audit levels, compliance was guesswork and accountability was nonexistent.",
    solution:
      "I architected a role-based digital platform that replaces the entire paper audit lifecycle. From dynamic checksheets to automated PDF report generation, what used to take days now takes minutes. Every inspection is traceable, every report is instant, and every user sees only what they're authorized to see.",
    metrics: [
      { icon: "📋", text: "50+ daily active users" },
      { icon: "⏱️", text: "95% faster reports (days → minutes)" },
      { icon: "🔐", text: "Role-based access control" },
      { icon: "🔄", text: "Real-time async status updates" },
    ],
    stack: [
      "Django",
      "React.js",
      "MySQL",
      "JWT",
      "RBAC",
      "Celery",
      "Redis",
      "Docker",
      "CI/CD",
      "PDF Generation",
    ],
    visual: DashMockup,
  },
  {
    tag: "Industrial IoT",
    title: "OEE Monitoring & Control Device Software",
    problem:
      "Production managers were flying blind. They discovered machine problems in post-shift meetings, when it was too late to fix them. OEE — the golden metric of manufacturing efficiency — was calculated manually (when calculated at all). Unplanned downtime was bleeding production targets every single week.",
    solution:
      "I developed a real-time PLC-integrated monitoring system that collects machine data continuously, calculates OEE automatically, and surfaces faults before they become shutdowns. It turns reactive firefighting into proactive maintenance. It turns gut feelings into data-driven decisions.",
    metrics: [
      { icon: "📡", text: "Real-time PLC data integration" },
      { icon: "📊", text: "Live OEE dashboards" },
      { icon: "🚨", text: "Proactive fault alerts" },
      { icon: "🖥️", text: "24/7 uptime on Linux + Docker + AWS" },
    ],
    stack: [
      "Python",
      "Django",
      "PLC Integration",
      "Celery",
      "Redis",
      "Docker",
      "AWS EC2",
      "Linux",
      "Real-time Sync",
    ],
    visual: OEEMockup,
  },
];

export function Projects() {
  return (
    <section id="work" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Projects">Systems That Solve Real Problems</SectionHeading>
        <p className="-mt-6 mb-14 max-w-2xl text-lg text-muted-foreground">
          I don&apos;t build portfolio filler. Every project here runs (or ran) in production,
          handles real data, and solves a problem that cost someone money or time.
        </p>

        <div className="space-y-12">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <SpotlightCard>
                <div className="grid gap-0 md:grid-cols-5">
                  <div className="relative border-b border-border bg-[oklch(0.13_0.015_275)] p-6 md:col-span-2 md:border-b-0 md:border-r">
                    {p.visual}
                  </div>
                  <div className="p-8 md:col-span-3 md:p-10">
                    <span className="inline-block rounded-full bg-teal-soft px-3 py-1 font-mono text-xs text-teal">
                      {p.tag}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold text-foreground">{p.title}</h3>
                    <blockquote className="my-4 border-l-2 border-[color-mix(in_oklch,var(--pink)_50%,transparent)] pl-4 italic text-muted-foreground">
                      {p.problem}
                    </blockquote>
                    <p className="leading-relaxed text-foreground/80">{p.solution}</p>
                    <div className="mt-6 grid grid-cols-2 gap-2">
                      {p.metrics.map((m) => (
                        <div
                          key={m.text}
                          className="rounded-lg border border-border bg-[oklch(0.985_0.005_250/0.03)] p-3 text-center text-xs text-foreground/80"
                        >
                          <span className="mr-1">{m.icon}</span>
                          {m.text}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-border bg-[oklch(0.985_0.005_250/0.04)] px-2 py-1 font-mono text-[11px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}