import { motion } from "motion/react";
import {
  Brain,
  Server,
  Layout,
  Database,
  Cloud,
  BarChart3,
  GitBranch,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading, SpotlightCard } from "./SectionHeading";

type Tone = "teal" | "indigo" | "pink" | "slate";

const TONE: Record<Tone, string> = {
  teal: "text-teal bg-teal-soft border-teal-soft",
  indigo:
    "text-[color:var(--indigo)] bg-[color-mix(in_oklch,var(--indigo)_12%,transparent)] border-[color-mix(in_oklch,var(--indigo)_25%,transparent)]",
  pink: "text-[color:var(--pink)] bg-[color-mix(in_oklch,var(--pink)_12%,transparent)] border-[color-mix(in_oklch,var(--pink)_25%,transparent)]",
  slate: "text-muted-foreground bg-[oklch(0.985_0.005_250/0.04)] border-border",
};

type Card = {
  title: string;
  icon: LucideIcon;
  tone: Tone;
  tags: string[];
  span?: string;
};

const CARDS: Card[] = [
  {
    title: "AI & LLM Stack",
    icon: Brain,
    tone: "indigo",
    tags: [
      "LangChain",
      "RAG",
      "ChromaDB",
      "Vector Embeddings",
      "Semantic Search",
      "Prompt Engineering",
      "Gemini API",
    ],
    span: "md:col-span-2",
  },
  {
    title: "Backend Core",
    icon: Server,
    tone: "teal",
    tags: ["Python", "Django", "DRF", "Flask", "REST APIs", "JWT", "Celery", "Redis"],
    span: "md:col-span-2",
  },
  {
    title: "Frontend",
    icon: Layout,
    tone: "pink",
    tags: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS"],
    span: "md:col-span-2",
  },
  {
    title: "Databases",
    icon: Database,
    tone: "slate",
    tags: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    tone: "slate",
    tags: ["Docker", "Kubernetes", "AWS EC2/S3", "Terraform", "CI/CD", "Linux"],
    span: "md:col-span-2",
  },
  {
    title: "Data",
    icon: BarChart3,
    tone: "slate",
    tags: ["NumPy", "Pandas"],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    tone: "slate",
    tags: ["Git", "GitHub"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Skills">Tools I Trust</SectionHeading>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-4 md:grid-cols-4"
        >
          {CARDS.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  show: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={c.span}
              >
                <SpotlightCard className="h-full p-6">
                  <div className={`inline-flex rounded-lg border p-2 ${TONE[c.tone]}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{c.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className={`rounded-md border px-2.5 py-1 font-mono text-xs ${TONE[c.tone]}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}