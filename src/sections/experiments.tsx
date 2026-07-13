import { Section } from "@/components/section"
import { useGsap } from "@/lib/use-gsap"
import { experiments } from "@/lib/content"

export function Experiments() {
  const ref = useGsap<HTMLDivElement>(({ gsap, reduced }) => {
    if (reduced) return
    gsap.utils.toArray<HTMLElement>(".exp-card").forEach((card) => {
      gsap.from(card, {
        y: 24,
        opacity: 0,
        duration: 0.55,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 90%" },
      })
    })
  })

  return (
    <Section
      id="experiments"
      index="06"
      eyebrow="Additional Work"
      title="More systems I've built."
      intro="Side and adjacent work — smaller in scope, still real backends with real users."
    >
      <div ref={ref} className="grid gap-5 sm:grid-cols-2">
        {experiments.map((e) => (
          <article
            key={e.name}
            className="exp-card group surface relative overflow-hidden p-6 transition-colors duration-300 hover:border-ember/40 sm:p-8"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="eyebrow text-muted-foreground">{e.kind}</span>
              <span className="size-2 rounded-full bg-border transition-colors duration-300 group-hover:bg-ember" />
            </div>
            <h3 className="display mb-3 text-xl text-foreground sm:text-2xl">{e.name}</h3>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
            <div className="flex flex-wrap gap-1.5">
              {e.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
