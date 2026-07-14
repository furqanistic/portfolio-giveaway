import { education } from "@/lib/content"
import { useGsap } from "@/lib/use-gsap"

export function About() {
  const ref = useGsap<HTMLElement>(({ gsap, reduced }) => {
    if (reduced) return

    gsap.from(".about-portrait", {
      clipPath: "inset(0 0 100% 0)",
      scale: 1.035,
      duration: 1.05,
      ease: "power4.inOut",
      scrollTrigger: { trigger: ".about-portrait", start: "top 86%" },
    })

    gsap.from(".about-fact", {
      y: 20,
      duration: 0.65,
      stagger: 0.06,
      ease: "power3.out",
      scrollTrigger: { trigger: ".about-facts", start: "top 90%" },
    })
  })

  return (
    <section
      ref={ref}
      id="about"
      className="relative scroll-mt-16 border-t border-border px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[92rem]">
        <div className="flex items-center gap-3">
          <span className="size-1.5 rounded-full bg-ember" aria-hidden />
          <span className="eyebrow text-muted-foreground">03 / About</span>
        </div>

        <h2 className="display relative z-10 mt-8 text-[clamp(3.2rem,7vw,6.3rem)] leading-[0.9] text-foreground">
          Quiet systems.<br />Serious ownership.
        </h2>

        <div className="mt-10 grid gap-8 lg:-mt-6 lg:grid-cols-[minmax(12rem,.24fr)_minmax(0,.76fr)] lg:items-center lg:gap-14">
          <p className="max-w-[18rem] text-lg leading-relaxed text-muted-foreground lg:pt-20">
            I care about the parts users never see — permissions, data paths, and failure states.
          </p>

          <figure className="about-portrait relative aspect-[2.63/1] overflow-hidden bg-card">
            <img
              src="/about/editorial-portrait.jpg"
              alt="Editorial black-and-white portrait"
              width={2035}
              height={773}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center grayscale"
            />
          </figure>
        </div>

        <dl className="about-facts mt-14 grid border-y border-border sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          <Fact label="Focus">APIs / Auth / Data / Queues</Fact>
          <Fact label="Experience">4+ years</Fact>
          <Fact label="Location">Faisalabad, Pakistan</Fact>
          <Fact label="Education">
            <span className="block">{education[0].degree}</span>
            <span className="mt-1 block text-[0.62rem] text-muted-foreground">{education[1].degree}</span>
          </Fact>
        </dl>
      </div>
    </section>
  )
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="about-fact border-b border-border py-6 last:border-b-0 sm:odd:border-r sm:[&:nth-child(3)]:border-b-0 sm:[&:nth-child(4)]:border-b-0 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0">
      <dt className="eyebrow flex items-center gap-2 text-muted-foreground">
        {label === "Focus" && <span className="size-1.5 rounded-full bg-ember" aria-hidden />}
        {label}
      </dt>
      <dd className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-foreground">
        {children}
      </dd>
    </div>
  )
}
