import { useState } from "react"
import { ArrowRight01Icon } from "hugeicons-react"
import { Section } from "@/components/section"
import { useGsap } from "@/lib/use-gsap"
import { capabilities } from "@/lib/content"
import { cn } from "@/lib/utils"

export function Capabilities() {
  const [activeId, setActiveId] = useState(capabilities[0].id)
  const active = capabilities.find((c) => c.id === activeId) ?? capabilities[0]

  const ref = useGsap<HTMLDivElement>(({ gsap, reduced }) => {
    if (reduced) return
    gsap.utils.toArray<HTMLElement>(".cap-row").forEach((row) => {
      gsap.from(row, {
        y: 24,
        opacity: 0,
        duration: 0.55,
        ease: "power3.out",
        scrollTrigger: { trigger: row, start: "top 90%" },
      })
    })
  })

  return (
    <Section
      id="capabilities"
      index="05"
      eyebrow="Capabilities"
      title="What I can actually build and own."
      intro="What I build, the tools I use, and where I've shipped it."
    >
      <div ref={ref} className="capability-shell grid gap-10 lg:grid-cols-[minmax(0,.88fr)_minmax(0,1.12fr)] lg:gap-0">
        {/* LEFT — selectable list */}
        <ul className="divide-y divide-border border-y border-border">
          {capabilities.map((c, i) => {
            const isActive = c.id === activeId
            return (
              <li key={c.id}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveId(c.id)}
                  onFocus={() => setActiveId(c.id)}
                  onClick={() => setActiveId(c.id)}
                  aria-pressed={isActive}
                  aria-controls="capability-detail"
                  className="cap-row group flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-300"
                >
                  <div className="flex items-baseline gap-4">
                    <span className={cn("font-mono text-xs transition-colors", isActive ? "text-ember" : "text-muted-foreground")}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "display text-xl transition-colors duration-300 sm:text-2xl",
                        isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      {c.title}
                    </span>
                  </div>
                  <ArrowRight01Icon
                    className={cn(
                      "size-5 shrink-0 transition-all duration-300",
                      isActive ? "-translate-x-0 text-ember" : "translate-x-0 text-muted-foreground opacity-0 group-hover:opacity-60",
                    )}
                  />
                </button>
              </li>
            )
          })}
        </ul>

        {/* RIGHT — detail panel keyed to active capability */}
        <div id="capability-detail" className="capability-detail grain border border-border lg:sticky lg:top-6 lg:self-start lg:border-l-0">
          <div key={active.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500 p-6 sm:p-10">
            <p className="eyebrow mb-2 text-ember">{active.title}</p>
            <p className="display mb-7 text-[clamp(1.5rem,2.4vw,2rem)] leading-snug text-foreground">
              {active.summary}
            </p>

            <div className="mb-6">
              <p className="eyebrow mb-3 text-muted-foreground">What I build</p>
              <ul className="space-y-2">
                {active.builds.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-ember" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <p className="eyebrow mb-3 text-muted-foreground">Technology</p>
              <div className="flex flex-wrap gap-1.5">
                {active.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <dl className="grid grid-cols-1 border-t border-border sm:grid-cols-2">
              <div className="border-b border-border px-0 py-4 sm:border-b-0 sm:border-r sm:pr-5">
                <dt className="eyebrow mb-1 text-muted-foreground">Example</dt>
                <dd className="text-sm text-foreground">{active.example}</dd>
              </div>
              <div className="px-0 py-4 sm:pl-5">
                <dt className="eyebrow mb-1 text-muted-foreground">Ownership</dt>
                <dd className="text-sm text-foreground">{active.ownership}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Section>
  )
}
