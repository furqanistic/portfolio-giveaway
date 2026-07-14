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
      index="02"
      eyebrow="Additional Work"
      title="More systems I've built."
      intro="Smaller backends built for real users."
    >
      <div ref={ref} className="border-y border-border">
        {experiments.map((e, index) => (
          <article
            key={e.name}
            className="exp-card group grid gap-6 border-b border-border py-8 last:border-b-0 sm:grid-cols-[4rem_minmax(0,.8fr)_minmax(0,1.2fr)] sm:items-start sm:py-10"
          >
            <span className="font-mono text-xs text-ember">0{index + 1}</span>
            <div>
              <span className="eyebrow text-muted-foreground">{e.kind}</span>
              <h3 className="display mt-3 text-2xl text-foreground transition-colors duration-300 group-hover:text-ember sm:text-3xl">{e.name}</h3>
            </div>
            <div>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {e.tech.map((t) => <span key={t} className="eyebrow text-muted-foreground">{t}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
