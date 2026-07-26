import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

const COMMANDS: Array<[string, string]> = [
  ["--email", "rathorabhay633@gmail.com"],
  ["--phone", "+91 8810469723"],
  ["--location", "Faridabad, Haryana"],
  ["--linkedin", "linkedin.com/in/abhay-rathor-669318251"],
];

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <SectionHeading eyebrow="Contact">Let&apos;s Build Something That Lasts</SectionHeading>

        <h3 className="text-xl font-semibold text-foreground">Ready to solve real problems?</h3>
        <p className="mt-3 text-muted-foreground">
          I&apos;m open to roles in AI/ML engineering, backend architecture, and industrial
          automation. If you have a system that needs to be reliable, intelligent, and
          production-ready — let&apos;s talk.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-[oklch(0.13_0.015_275)] font-mono text-sm">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.65_0.22_20)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.8_0.15_85)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.75_0.15_150)]" />
            <span className="ml-2 text-xs text-muted-foreground">contact.sh</span>
          </div>
          <div className="divide-y divide-border/60">
            {COMMANDS.map(([flag, value]) => (
              <div
                key={flag}
                className="flex flex-wrap items-center gap-x-3 px-4 py-2.5 transition-colors hover:bg-[oklch(0.985_0.005_250/0.04)]"
              >
                <span className="text-teal">&gt;</span>
                <span className="text-muted-foreground">connect</span>
                <span className="text-[color:var(--indigo)]">{flag}</span>
                <span className="text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-10 space-y-6"
        >
          {[
            { name: "name", type: "text", label: "Name" },
            { name: "email", type: "email", label: "Email" },
            { name: "subject", type: "text", label: "Subject" },
          ].map((f) => (
            <input
              key={f.name}
              type={f.type}
              name={f.name}
              placeholder={f.label}
              required
              className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-teal"
            />
          ))}
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="w-full resize-none border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-teal"
          />
          <button
            type="submit"
            className="rounded-lg bg-teal px-8 py-3 font-semibold text-primary-foreground transition-all hover:scale-105 hover:brightness-110"
          >
            {sent ? "Sent ✓" : "Send Message →"}
          </button>
        </form>
      </div>
    </section>
  );
}