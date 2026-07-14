import { ArrowUp01Icon, ArrowUpRight01Icon } from "hugeicons-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { person } from "@/lib/content"
import { navItems } from "@/lib/nav"

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="grain relative overflow-hidden border-t border-border px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
      {/* oversized name as a deliberate ending */}
      <div className="mb-12 select-none">
        <p className="display text-[clamp(2.5rem,11vw,9rem)] leading-none tracking-tight text-foreground/8">
          {person.name}
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* identity */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="brand-mark">{person.initials}</span>
            <div>
              <p className="text-sm font-semibold text-foreground">{person.name}</p>
              <p className="font-mono text-[0.66rem] uppercase tracking-wide text-muted-foreground">
                {person.role}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Backend engineer building production Laravel systems that stay safe to change.
          </p>
          <p className="mt-4 font-mono text-[0.66rem] uppercase tracking-wide text-muted-foreground">
            {person.location}
          </p>
        </div>

        {/* nav */}
        <nav aria-label="Footer">
          <p className="eyebrow mb-4 text-muted-foreground">Navigate</p>
          <ul className="space-y-2.5">
            {navItems.map((item) => (
              <li key={item.url}>
                <a
                  href={item.url}
                  className="text-sm text-foreground/80 transition-colors duration-300 hover:text-ember"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* connect */}
        <div>
          <p className="eyebrow mb-4 text-muted-foreground">Connect</p>
          <ul className="space-y-2.5">
            <li>
              <a
                href={`mailto:${person.email}`}
                className="group inline-flex items-center gap-1.5 text-sm text-foreground/80 transition-colors duration-300 hover:text-ember"
              >
                Email <ArrowUpRight01Icon className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </li>
            <li>
              <a
                href={person.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm text-foreground/80 transition-colors duration-300 hover:text-ember"
              >
                LinkedIn <ArrowUpRight01Icon className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </li>
            <li>
              <a
                href={person.social.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm text-foreground/80 transition-colors duration-300 hover:text-ember"
              >
                GitHub <ArrowUpRight01Icon className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-2">
            <span className="eyebrow text-muted-foreground">Theme</span>
            <ThemeToggle className="size-8 rounded-lg" />
          </div>
        </div>
      </div>

      {/* bottom rail */}
      <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[0.66rem] uppercase tracking-wide text-muted-foreground">
          © {year} {person.name}
        </p>
        <div className="flex items-center gap-5">
          <p className="font-mono text-[0.66rem] uppercase tracking-wide text-muted-foreground">
            Built with React · GSAP · Tailwind
          </p>
          <a href="#intro" className="group inline-flex items-center gap-1.5 text-xs font-semibold text-foreground transition-colors hover:text-ember">
            Back to top <ArrowUp01Icon className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
