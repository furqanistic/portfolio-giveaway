import { Section } from "@/components/section"
import { useGsap } from "@/lib/use-gsap"
import { proof, person } from "@/lib/content"

export function Proof() {
  const ref = useGsap<HTMLDivElement>(({ gsap, reduced }) => {
    if (reduced) return
    gsap.from(".proof-cell", {
      y: 24,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: { trigger: ".proof-grid", start: "top 85%" },
    })
  })

  return (
    <Section id="proof" index="07" eyebrow="Proof" title="What I bring, stated honestly.">
      <div ref={ref}>
        <div className="proof-grid grid grid-flow-dense grid-cols-1 gap-px overflow-hidden border border-border sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((p) => (
            <div key={p.label} className="proof-cell bg-card p-6">
              <p className="eyebrow mb-3 text-ember">{p.label}</p>
              <p className="text-sm leading-relaxed text-foreground">{p.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2.5">
          <span className="status-dot" aria-hidden />
          <span className="text-sm text-muted-foreground">{person.status}</span>
        </div>
      </div>
    </Section>
  )
}
