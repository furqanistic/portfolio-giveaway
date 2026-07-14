import { Section } from "@/components/section"
import { useGsap } from "@/lib/use-gsap"
import { experience } from "@/lib/content"

export function Experience() {
  const ref = useGsap<HTMLDivElement>(({ gsap, reduced }) => {
    if (reduced) return
    gsap.utils.toArray<HTMLElement>(".exp-role").forEach((role) => {
      gsap.from(role, {
        y: 28,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: role, start: "top 88%" },
      })
    })
  })

  return (
    <Section
      id="experience"
      index="04"
      eyebrow="Experience"
      title="Four years owning backend modules in production."
      intro="From Laravel intern to marketplace backend owner."
    >
      <div ref={ref} className="relative">
        {/* vertical rail */}
        <div className="absolute bottom-0 left-[7px] top-2 w-px bg-border sm:left-[9px]" aria-hidden />

        <ol className="space-y-12">
          {experience.map((role) => {
            const current = role.end === null
            return (
              <li key={role.company} className="exp-role relative pl-8 sm:pl-12">
                {/* node */}
                <span
                  className={`absolute left-0 top-1.5 grid size-[15px] place-items-center rounded-full border sm:size-[19px] ${
                    current ? "border-ember bg-ember/15" : "border-border bg-background"
                  }`}
                  aria-hidden
                >
                  <span className={`size-1.5 rounded-full ${current ? "bg-ember" : "bg-muted-foreground"}`} />
                </span>

                <div className="grid gap-6 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:gap-12">
                  {/* meta column */}
                  <div className="lg:sticky lg:top-8 lg:self-start">
                    <p className="font-mono text-[0.66rem] uppercase tracking-wide text-muted-foreground">
                      {role.period}
                    </p>
                    {current && (
                      <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-ember">
                        <span className="status-dot" aria-hidden /> Current
                      </p>
                    )}
                    <p className="mt-3 font-mono text-[0.66rem] uppercase tracking-wide text-muted-foreground">
                      {role.location}
                    </p>
                  </div>

                  {/* content column */}
                  <div>
                    <h3 className="display text-xl text-foreground sm:text-2xl">{role.position}</h3>
                    <p className="mt-1 text-base font-semibold text-ember">{role.company}</p>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {role.overview}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {role.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                          {r}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {role.tech.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}
