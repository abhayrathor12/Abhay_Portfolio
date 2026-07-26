import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-12 md:mb-16"
    >
      {eyebrow && (
        <div className="mb-3 font-mono text-xs uppercase tracking-widest text-teal">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {children}
      </h2>
    </motion.div>
  );
}

export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      data-cursor-hover
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-teal-soft ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), color-mix(in oklch, var(--teal) 15%, transparent), transparent 40%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}