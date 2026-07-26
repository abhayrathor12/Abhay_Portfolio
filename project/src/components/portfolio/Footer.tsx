import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6">
        <div className="font-mono text-xs text-muted-foreground">
          © 2026 Abhay Rathor. All rights reserved.
        </div>
        <div className="flex items-center gap-5">
          {[
        
            { Icon: Linkedin, href: "linkedin.com/in/abhay-rathor-669318251" },
            { Icon: Mail, href: "mailto:rathorabhay633@gmail.com" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="text-muted-foreground transition-colors hover:text-teal"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}