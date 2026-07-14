import { Section } from "@/components/section"
import { useGsap } from "@/lib/use-gsap"
import { processSteps } from "@/lib/content"

export function Process() {
  const ref = useGsap<HTMLDivElement>(({ gsap, reduced }) => {
    if (reduced) return

    // A single progress line connects the steps into one system.
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

    gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, index) => {
      gsap.from(step, {
        x: index % 2 === 0 ? -20 : 20,
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
      intro="A clear path from problem to production."
    >
      <div ref={ref} className="relative">
        <ol className="process-list relative grid gap-x-10 lg:grid-cols-2 lg:gap-x-20">
          <div className="pointer-events-none absolute bottom-0 left-4 top-0 w-px bg-border lg:left-1/2" aria-hidden>
            <div className="process-progress h-full w-px origin-top scale-y-0 bg-ember" />
          </div>

          {processSteps.map((step, index) => (
            <li
              key={step.no}
              className={`process-step relative mb-10 pl-12 lg:mb-0 lg:min-h-52 lg:pl-0 ${index % 2 === 0 ? "lg:pr-16" : "lg:col-start-2 lg:pl-16"}`}
            >
              <span className={`absolute left-0 top-1 grid size-8 place-items-center border border-border bg-background font-mono text-[0.65rem] text-ember lg:left-auto ${index % 2 === 0 ? "lg:-right-4" : "lg:-left-4"}`}>
                {step.no}
              </span>
              <div className="border-t border-border pt-6">
                <h3 className="display mb-3 text-xl text-foreground sm:text-2xl">{step.title}</h3>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
