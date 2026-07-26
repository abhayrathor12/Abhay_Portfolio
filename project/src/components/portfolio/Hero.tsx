import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const CODE = `from reality import Problems
from abhay import Solutions

rag_pipeline = Solutions.RAG(
    knowledge_base="industrial_docs",
    llm="gemini-pro",
    status="production_ready",
)

result = rag_pipeline.solve(Problems.DOWNTIME)
assert result.uptime == "99.9%"`;

// Single-pass tokenizer — avoids re-matching HTML we just inserted
// (the old version ran three separate .replace() passes on its own
// output, so the "quoted string" rule ended up matching the quotes
// inside the class="..." attribute the keyword rule had just added).
function hl(line: string) {
  const escaped = line.replace(/</g, "&lt;");
  const tokenPattern = /("[^"]*")|(\b(?:from|import|assert)\b)|(\b[A-Z][A-Za-z_]*\b)/g;

  return escaped.replace(tokenPattern, (match, str, keyword, ident) => {
    if (str) return `<span class="text-teal">${str}</span>`;
    if (keyword) return `<span class="text-[color:var(--pink)]">${keyword}</span>`;
    if (ident) return `<span class="text-[color:var(--indigo)]">${ident}</span>`;
    return match;
  });
}

function useTyped(text: string, speed = 14) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (i >= text.length) return;
    const t = setTimeout(() => setI(i + 1), speed);
    return () => clearTimeout(t);
  }, [i, text, speed]);
  return text.slice(0, i);
}

export function Hero() {
  const typed = useTyped(CODE, 12);
  const line = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };

  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[3fr_2fr]">
        {/* Left column: copy + actions, all on one shared rhythm */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-teal"
          >
            Python Developer // GenAI &amp; RAG
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
            className="text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            <motion.span variants={line} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="block">
              Building intelligent
            </motion.span>
            <motion.span variants={line} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="block">
              systems that
            </motion.span>
            <motion.span variants={line} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="block">
              <span className="text-teal">actually</span> work.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            I write Python, design RAG pipelines, and deploy industrial automation tools that
            don&apos;t break at 2 AM. 3 years of shipping production code for real factories and
            real users.
          </motion.p>

          {/* CTAs live directly under the copy they belong to */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="rounded-lg border border-teal-soft bg-teal-soft px-5 py-2.5 text-sm font-medium text-teal transition-all hover:scale-105 hover:bg-[color-mix(in_oklch,var(--teal)_22%,transparent)]"
            >
              Explore My Work
            </a>
            <a
              href="/resume.pdf"
              download="Abhay_Rathor_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground/90 transition-all hover:scale-105 hover:border-teal hover:text-teal"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social row sits on the same left edge, clearly a footer to the action row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-8 flex items-center gap-6 font-mono text-xs text-muted-foreground"
          >
            <a href="#" className="inline-flex items-center gap-1.5 hover:text-teal">
              <Github className="h-4 w-4" /> GH
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 hover:text-teal">
              <Linkedin className="h-4 w-4" /> LI
            </a>
            <a href="mailto:rathorabhay633@gmail.com" className="inline-flex items-center gap-1.5 hover:text-teal">
              <Mail className="h-4 w-4" /> EM
            </a>
          </motion.div>
        </div>

        {/* Right column: just the terminal, vertically centered against the left block */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <div className="overflow-hidden rounded-xl border border-border bg-[oklch(0.13_0.015_275)] shadow-2xl glow-teal">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[oklch(0.65_0.22_20)]" />
              <span className="h-3 w-3 rounded-full bg-[oklch(0.8_0.15_85)]" />
              <span className="h-3 w-3 rounded-full bg-[oklch(0.75_0.15_150)]" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">abhay@portfolio:~</span>
            </div>
            {/* fixed height so the card doesn't resize while typing */}
            <pre className="h-[320px] overflow-hidden p-5 font-mono text-[13px] leading-relaxed text-foreground/90">
              <code
                className="cursor-blink"
                dangerouslySetInnerHTML={{
                  __html: typed.split("\n").map((l) => hl(l)).join("\n"),
                }}
              />
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}