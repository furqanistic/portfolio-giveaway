import { Section } from "@/components/section"
import { SplitText } from "@/components/split-text"
import { person, education } from "@/lib/content"

export function About() {
  return (
    <Section
      id="about"
      index="03"
      eyebrow="About"
      title="I work on the parts that have to stay correct."
      intro="A backend engineer who likes systems you can reason about — not clever ones you're afraid to touch."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-16">
        {/* Narrative */}
        <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <SplitText
            lines={[person.intro[0]]}
            as="p"
            className="text-xl leading-relaxed text-foreground sm:text-2xl"
            trigger="scroll"
          />
          <p>{person.intro[1]}</p>
          <p>
            Most of my work lives where third-party services meet your own code — payments,
            notifications, search — and where the cost of getting it wrong shows up months later,
            under load, in production. That's the part I find worth doing well.
          </p>
        </div>

        {/* Meta + education */}
        <aside className="space-y-8 lg:pt-2">
          <div>
            <p className="eyebrow mb-4 text-muted-foreground">Focus</p>
            <ul className="space-y-2 text-sm">
              {["API design & boundaries", "Auth, permissions & 2FA", "Data paths at scale", "Failure handling & queues"].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-foreground">
                  <span className="size-1 rounded-full bg-ember" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-muted-foreground">Approach</p>
            <p className="text-sm leading-relaxed text-foreground">
              Pragmatic, explicit, safe to change. I prefer boundaries over cleverness, and failure
              paths over happy paths.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4 text-muted-foreground">Education</p>
            <ul className="space-y-4">
              {education.map((e) => (
                <li key={e.degree}>
                  <p className="text-sm font-semibold text-foreground">{e.degree}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{e.school}</p>
                  <p className="mt-0.5 font-mono text-[0.66rem] uppercase tracking-wide text-muted-foreground">
                    {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  )
}
