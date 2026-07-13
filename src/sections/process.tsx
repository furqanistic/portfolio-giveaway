import { Section } from "@/components/section"
import { useGsap } from "@/lib/use-gsap"
import { processSteps } from "@/lib/content"

export function Process() {
  const ref = useGsap<HTMLDivElement>(({ gsap, reduced }) => {
    if (reduced) return

    // the progress rail fills as you scroll through the steps
    gsap.to(".process-progress", {
      scaleY: 1,
      ease: "none",
      transformOrigin: "top",
      scrollTrigger: {
        trigger: ".process-list",
        start: "top 70%",
        end: "bottom 80%",
        scrub: true,
      },
    })

    gsap.utils.toArray<HTMLElement>(".process-step").forEach((step) => {
      gsap.from(step, {
        y: 26,
        opacity: 0,
        duration: 0.55,
        ease: "power3.out",
        scrollTrigger: { trigger: step, start: "top 85%" },
      })
    })
  })

  return (
    <Section
      id="process"
      index="05"
      eyebrow="Process"
      title="From a production problem to a launched system."
      intro="How I work — written so a non-technical client can follow it, not just another engineer."
    >
      <div ref={ref} className="relative">
        <ol className="process-list relative grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {/* progress rail (desktop horizontal) */}
          <div className="pointer-events-none absolute inset-x-0 top-[34px] hidden h-px lg:block">
            <div className="relative h-px w-full bg-border">
              <div className="process-progress absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-ember" />
            </div>
          </div>

          {processSteps.map((step) => (
            <li key={step.no} className="process-step relative">
              <div className="group h-full rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-ember/50">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full border border-border bg-background font-mono text-xs text-ember transition-colors duration-300 group-hover:border-ember">
                    {step.no}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="display mb-3 text-lg text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
