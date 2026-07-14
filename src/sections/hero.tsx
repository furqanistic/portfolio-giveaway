import { ArrowDown01Icon, ArrowUpRight01Icon } from "hugeicons-react"
import { Magnetic } from "@/components/magnetic"
import { person, heroCapabilities, productionDomains, projects } from "@/lib/content"
import { useGsap } from "@/lib/use-gsap"

export function Hero() {
  const ref = useGsap<HTMLElement>(({ gsap, reduced }) => {
    if (reduced) return

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } })
    tl.from(".hero-chrome", { y: -12, opacity: 0, duration: 0.45 })
      .from(".hero-line-inner", { yPercent: 110, duration: 0.82, stagger: 0.09 }, "-=0.1")
      .from(".hero-support", { y: 18, opacity: 0, duration: 0.5 }, "-=0.4")
      .from(".hero-action", { y: 14, opacity: 0, duration: 0.42, stagger: 0.06 }, "-=0.28")
      .from(".hero-archive", { clipPath: "inset(0 0 100% 0)", y: 24, duration: 0.82 }, "-=0.34")
      .from(".hero-proof", { opacity: 0, y: 10, duration: 0.4, stagger: 0.05 }, "-=0.28")

    gsap.to(".hero-archive-inner", {
      yPercent: -5,
      ease: "none",
      scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 0.6 },
    })
  })

  return (
    <section ref={ref} id="intro" className="grain relative isolate min-h-svh scroll-mt-8 overflow-hidden">
      <div className="hero-chrome flex items-center justify-between border-b border-border px-5 py-4 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="eyebrow text-ember">{person.initials}</span>
          <span className="eyebrow text-muted-foreground">{person.name}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="status-dot" aria-hidden />
          <span className="eyebrow hidden text-muted-foreground sm:inline">{person.status}</span>
          <span className="eyebrow text-muted-foreground sm:hidden">Available</span>
        </div>
      </div>

      <div className="px-5 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-16 lg:px-12 lg:pb-12 lg:pt-20">
        <div className="mx-auto max-w-[92rem]">
          <div className="hero-chrome mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
            <span className="eyebrow text-foreground">{person.role}</span>
            <span className="eyebrow text-muted-foreground">{person.yearsExperience} years · {person.location}</span>
          </div>

          <h1 className="display w-full max-w-[15ch] text-[clamp(3.25rem,8.15vw,8.75rem)] text-foreground">
            <span className="line-mask"><span className="hero-line-inner block">Production backends</span></span>
            <span className="line-mask"><span className="hero-line-inner block"><span className="text-ember">built safe</span> to change.</span></span>
          </h1>

          <div className="mt-8 grid gap-8 border-t border-border pt-6 lg:grid-cols-[minmax(0,.78fr)_minmax(20rem,.22fr)] lg:items-end">
            <div>
              <p className="hero-support max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {person.positioning}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Magnetic>
                  <a href="#work" className="hero-action btn-ember group/btn">
                    Explore selected work
                    <ArrowUpRight01Icon className="size-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </a>
                </Magnetic>
                <a href="#contact" className="hero-action btn-ghost-line">
                  Start a conversation <ArrowUpRight01Icon className="size-4" />
                </a>
              </div>
            </div>
            <a href="#work" className="hero-action group hidden items-center justify-between border-b border-border pb-3 text-sm font-medium text-foreground transition-colors hover:border-ember hover:text-ember lg:flex">
              View the work archive
              <ArrowDown01Icon className="size-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>

          <div className="hero-archive mt-14 overflow-hidden border border-border bg-card sm:mt-18">
            <div className="hero-archive-inner grid min-h-[18rem] lg:grid-cols-[minmax(0,.64fr)_minmax(18rem,.36fr)]">
              <div className="relative flex flex-col justify-between overflow-hidden border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div className="pointer-events-none absolute -bottom-[.16em] -right-[.05em] select-none font-mono text-[clamp(7rem,18vw,18rem)] font-semibold leading-none tracking-[-0.08em] text-foreground/[0.035]" aria-hidden>
                  01
                </div>
                <div className="relative flex items-center justify-between gap-6">
                  <span className="eyebrow text-ember">Current feature</span>
                  <span className="eyebrow text-muted-foreground">{projects[0].category}</span>
                </div>
                <div className="relative mt-16 max-w-4xl sm:mt-20">
                  <p className="display text-[clamp(2rem,5vw,4.75rem)] text-foreground">{projects[0].name}</p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{projects[0].built}</p>
                </div>
              </div>

              <div className="grid divide-y divide-border">
                {heroCapabilities.map((capability) => (
                  <div key={capability.label} className="hero-proof flex items-start justify-between gap-6 p-5 sm:p-6">
                    <span className="text-sm font-semibold text-foreground">{capability.label}</span>
                    <span className="max-w-[15rem] text-right font-mono text-[0.65rem] leading-relaxed text-muted-foreground">{capability.value}</span>
                  </div>
                ))}
                <div className="hero-proof flex flex-wrap gap-x-4 gap-y-2 p-5 sm:p-6">
                  {productionDomains.map((domain) => <span key={domain} className="eyebrow text-muted-foreground">{domain}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
