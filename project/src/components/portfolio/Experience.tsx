import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import {
  FaBolt,
  FaLock,
  FaSyncAlt,
  FaAws,
} from "react-icons/fa";
import myimage from "../../assets/myimage.png"
import { BsRobot } from "react-icons/bs";
const HIGHLIGHTS = [
  {
    icon: <FaBolt className="text-yellow-400" />,
    text: "Cut backend response time by 60% via query optimization",
  },
  {
    icon: <FaLock className="text-green-400" />,
    text: "Implemented JWT Authentication & Role-Based Access Control",
  },
  {
    icon: <FaSyncAlt className="text-cyan-400" />,
    text: "Automated background jobs using Celery, Redis & CI/CD",
  },
  {
    icon: <FaAws className="text-orange-400" />,
    text: "Managed AWS deployment with 24/7 production uptime",
  },
  {
    icon: <BsRobot className="text-purple-400" />,
    text: "Integrated LLMs for AI-powered fault diagnosis",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-start justify-between gap-6">
          <SectionHeading eyebrow="Experience">
            Where I&apos;ve Built
          </SectionHeading>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-2 shrink-0 rounded-full border border-teal-soft bg-teal-soft px-4 py-2 text-right font-mono text-xs text-teal shadow-[0_0_18px_color-mix(in_oklch,var(--teal)_25%,transparent)] md:text-sm"
          >
            <div className="text-lg font-bold leading-none md:text-2xl">
              3+ years
            </div>

            <div className="mt-1 text-[10px] uppercase tracking-widest text-teal/80 md:text-xs">
              of shipping production code
            </div>
          </motion.div>
        </div>

        <div className="relative mt-16">
          {/* Timeline */}
          <div className="pointer-events-none absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[color-mix(in_oklch,var(--teal)_50%,transparent)] to-transparent md:left-1/2" />

          <div className="relative grid gap-16 md:grid-cols-2">
            {/* ================= LEFT : EXPERIENCE ================= */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative md:pr-12"
            >
              {/* Timeline Dot */}
              <span className="absolute right-0 top-8 hidden h-3 w-3 translate-x-1/2 rounded-full bg-teal shadow-[0_0_12px_color-mix(in_oklch,var(--teal)_60%,transparent)] md:block" />

              <div className="rounded-xl border border-border bg-[var(--surface)] p-6 md:p-8">
                <div className="font-mono text-xs text-teal">
                  Technoviz Automation Solutions
                </div>

                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  Python Developer
                </h3>

                <div className="mt-1 text-sm text-muted-foreground">
                  Gurgaon · Jun 2023 – Present · Full-time
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
  AI, Agentic AI, and RAG Developer with experience building intelligent
  automation systems, industrial IoT platforms, and scalable backend
  applications from development to production deployment.
</p>
                

               <div className="mt-6 flex flex-wrap gap-3">
  {HIGHLIGHTS.map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-2 rounded-full border border-border bg-[var(--surface)] px-3 py-2 text-xs text-foreground transition-all duration-300 hover:border-teal hover:shadow-[0_0_12px_rgba(45,212,191,0.25)]"
    >
      <span className="text-base">{item.icon}</span>
      <span>{item.text}</span>
    </div>
  ))}
</div>
              </div>
            </motion.div>

            {/* ================= RIGHT : IMAGE ================= */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="hidden md:flex md:justify-start md:pl-12"
            >
              <div className="group relative">
                {/* Glow */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[color-mix(in_oklch,var(--teal)_40%,transparent)] to-[color-mix(in_oklch,var(--indigo)_40%,transparent)] opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-90" />

                <div className="relative overflow-hidden rounded-2xl border border-border bg-[var(--surface)]">
                  <img
                    src={myimage}
                    alt="Abhay Rathor"
                    onError={(e) => {
                      (
                        e.currentTarget as HTMLImageElement
                      ).src = "/abhay-placeholder.svg";
                    }}
                    className="h-[360px] w-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-4">
                    <div className="font-mono text-[11px] text-teal">
                      abhay@portfolio:~
                    </div>

                    <div className="text-sm font-semibold text-foreground">
                      Abhay Rathor
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}