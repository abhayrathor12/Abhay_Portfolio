import { motion } from "motion/react";
import { SectionHeading, SpotlightCard } from "./SectionHeading";

const STATS = [
  { n: "3+", l: "Years shipping production code" },
  { n: "50+", l: "Users on audit platform daily" },
  { n: "99.9%", l: "Uptime on monitoring systems" },
  { n: "3", l: "Major systems built from scratch" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About">The Work Behind the Code</SectionHeading>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a Python developer who spends most of my time at the intersection of{" "}
              <span className="font-medium text-foreground">generative AI</span> and{" "}
              <span className="font-medium text-foreground">industrial infrastructure</span>. I
              don&apos;t build toy projects — I build systems that run on factory floors, handle
              real sensor data, and keep production lines alive.
            </p>
            <p>
              My stack is deliberate. Django for the backend. LangChain for reasoning. ChromaDB for
              memory. Docker and AWS for deployment. Every tool I choose answers one question:{" "}
              <span className="italic text-foreground">
                will this still work when I&apos;m asleep?
              </span>
            </p>
            <p>
              When I&apos;m not debugging Celery workers or tuning vector embeddings, I&apos;m
              probably optimizing a PostgreSQL query that didn&apos;t need to take 4 seconds.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((s) => (
              <motion.div
                key={s.l}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  show: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard className="p-6">
                  <div
                    className="text-4xl font-bold text-teal"
                    style={{
                      textShadow:
                        "0 0 30px color-mix(in oklch, var(--teal) 40%, transparent)",
                    }}
                  >
                    {s.n}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}