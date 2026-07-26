import { CheckCircle2 } from "lucide-react";
import { SectionHeading, SpotlightCard } from "./SectionHeading";

const EDU = [
  { title: "MCA", org: "Uttaranchal University", period: "2026 – 2028", status: "Pursuing" },
  {
    title: "BCA",
    org: "Maharshi Dayanand University, Rohtak",
    period: "Completed 2026",
    status: "Completed",
  },
];

const CERTS = [
  "Advanced Python Programming",
  "MySQL Database Management",
  "DevOps Fundamentals & Tools (Docker, Kubernetes, AWS, Terraform, CI/CD)",
];

export function Education() {
  return (
    <section id="education" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Learning">The Foundation</SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          <SpotlightCard className="p-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-teal">Education</h3>
            <ul className="mt-6 space-y-5">
              {EDU.map((e) => (
                <li key={e.title} className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-semibold text-foreground">{e.title}</div>
                    <div className="text-sm text-muted-foreground">{e.org}</div>
                    <div className="mt-1 font-mono text-xs text-muted-foreground">{e.period}</div>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${
                      e.status === "Pursuing"
                        ? "border-[color-mix(in_oklch,oklch(0.8_0.15_85)_35%,transparent)] bg-[color-mix(in_oklch,oklch(0.8_0.15_85)_12%,transparent)] text-[oklch(0.85_0.15_85)]"
                        : "border-teal-soft bg-teal-soft text-teal"
                    }`}
                  >
                    {e.status}
                  </span>
                </li>
              ))}
            </ul>
          </SpotlightCard>

          <SpotlightCard className="p-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-teal">Certifications</h3>
            <ul className="mt-6 space-y-4">
              {CERTS.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  <span className="font-mono text-sm text-foreground/90">{c}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}