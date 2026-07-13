import { ArrowDown01Icon, ArrowUpRight01Icon } from "hugeicons-react"
import { person, heroStats, heroCapabilities, productionDomains } from "@/lib/content"
import { useGsap, prefersReducedMotion } from "@/lib/use-gsap"
import { Magnetic } from "@/components/magnetic"

export function Hero() {
  const ref = useGsap<HTMLElement>(({ gsap, reduced }) => {
    if (reduced) return

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // eyebrow
    tl.from(".hero-eyebrow", { y: 14, opacity: 0, duration: 0.5 })
    // headline lines (masked)
    tl.from(
      ".hero-line-inner",
      { yPercent: 115, duration: 0.9, ease: "power4.out", stagger: 0.1 },
      "-=0.2",
    )
    // positioning statement
    tl.from(".hero-statement", { y: 18, opacity: 0, duration: 0.6 }, "-=0.4")
    // CTAs
    tl.from(".hero-cta", { y: 16, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.3")
    // credibility + socials
    tl.from(".hero-meta", { y: 14, opacity: 0, duration: 0.5, stagger: 0.06 }, "-=0.3")
    // console reveal via clip
    tl.from(".hero-console", { opacity: 0, y: 24, duration: 0.8 }, "-=0.7")
    tl.from(".hero-console-row", { y: 12, opacity: 0, duration: 0.4, stagger: 0.08 }, "-=0.5")
  })

  return (
    <section
      ref={ref}
      id="intro"
      className="grain relative isolate flex min-h-[calc(100svh-1.5rem)] flex-col scroll-mt-8"
    >
      {/* ── status bar ─────────────────────────────────────── */}
      <div className="hero-eyebrow flex items-center justify-between border-b border-border px-5 py-4 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="eyebrow text-ember">{person.initials}</span>
          <span className="eyebrow text-muted-foreground">{person.name}</span>
        </div>
        <div className="hidden items-center gap-2.5 sm:flex">
          <span className="status-dot" aria-hidden />
          <span className="eyebrow text-muted-foreground">{person.status}</span>
        </div>
        <span className="eyebrow text-muted-foreground sm:hidden">FSD · PK</span>
      </div>

      {/* ── main grid ──────────────────────────────────────── */}
      <div className="relative flex flex-1 flex-col justify-between gap-12 px-5 py-10 sm:px-8 sm:py-12 lg:grid lg:grid-cols-[minmax(0,1.4fr)_minmax(20rem,0.6fr)] lg:gap-16 lg:px-12 lg:py-16">
        {/* LEFT — narrative */}
        <div className="flex flex-col justify-center">
          <div className="hero-eyebrow mb-6 flex items-center gap-3">
            <span className="eyebrow text-foreground">{person.role}</span>
            <span className="h-px w-10 bg-border" />
            <span className="eyebrow text-muted-foreground">{person.yearsExperience} years</span>
          </div>

          <h1 className="display max-w-4xl text-[clamp(2.75rem,7vw,6rem)] text-foreground">
            <span className="line-mask">
              <span className="hero-line-inner block">Production backends</span>
            </span>
            <span className="line-mask">
              <span className="hero-line-inner block text-ember">built to stay safe</span>
            </span>
            <span className="line-mask">
              <span className="hero-line-inner block">to change.</span>
            </span>
          </h1>

          <p className="hero-statement mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {person.positioning}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a href="#work" className="btn-ember hero-cta">
                Explore selected work
                <ArrowUpRight01Icon className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </Magnetic>
            <a href="#contact" className="btn-ghost-line hero-cta">
              Start a conversation
              <ArrowUpRight01Icon className="size-4" />
            </a>
          </div>

          {/* credibility row */}
          <dl className="mt-12 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-border sm:grid-cols-3">
            {heroStats.map((s) => (
              <div key={s.label} className="hero-meta bg-card px-4 py-4">
                <dt className="display text-2xl text-foreground sm:text-3xl">{s.value}</dt>
                <dd className="mt-1.5 text-xs leading-snug text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* RIGHT — system profile console */}
        <aside className="hero-console console-frame self-start lg:sticky lg:top-6">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="status-dot" aria-hidden />
              <span className="eyebrow text-muted-foreground">System profile</span>
            </div>
            <span className="font-mono text-[0.6rem] text-muted-foreground">v4.0</span>
          </div>

          <div className="divide-y divide-border">
            {heroCapabilities.map((c) => (
              <div key={c.label} className="hero-console-row grid grid-cols-[1fr] gap-1 px-5 py-4">
                <p className="text-sm font-semibold text-foreground">{c.label}</p>
                <p className="font-mono text-[0.66rem] leading-relaxed tracking-wide text-muted-foreground">
                  {c.value}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-border px-5 py-4">
            <p className="eyebrow mb-3 text-muted-foreground">Production domains</p>
            <div className="flex flex-wrap gap-1.5">
              {productionDomains.map((d) => (
                <span key={d} className="chip">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* ── footer rail ────────────────────────────────────── */}
      <div className="hero-meta flex items-end justify-between border-t border-border px-5 py-4 sm:px-8 lg:px-12">
        <div className="font-mono text-[0.66rem] leading-relaxed tracking-wide text-muted-foreground">
          <p className="uppercase">{person.location}</p>
          <p className="mt-1 text-foreground">Laravel · PHP · production systems</p>
        </div>
        <a
          href="#work"
          aria-label="Scroll to selected work"
          className="hero-meta grid size-10 place-items-center rounded-full border border-border text-foreground transition-colors duration-300 hover:border-ember hover:text-ember"
        >
          <ArrowDown01Icon className="size-4" />
        </a>
      </div>

      {prefersReducedMotion() && (
        <style>{`
          #intro .hero-line-inner { transform: none !important; }
        `}</style>
      )}
    </section>
  )
}
