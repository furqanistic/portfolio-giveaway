import { useState } from "react"
import { ArrowUpRight01Icon, CheckmarkCircle01Icon, Copy01Icon } from "hugeicons-react"
import { Section } from "@/components/section"
import { Magnetic } from "@/components/magnetic"
import { useGsap } from "@/lib/use-gsap"
import { person, projectTypes, budgetRanges } from "@/lib/content"

export function Contact() {
  const [copied, setCopied] = useState(false)
  const ref = useGsap<HTMLDivElement>(({ gsap, reduced }) => {
    if (reduced) return
    gsap.from(".contact-reveal", {
      y: 28,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: { trigger: ".contact-inner", start: "top 80%" },
    })
  })

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(person.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      /* clipboard unavailable — no-op, mailto still works */
    }
  }

  return (
    <Section id="contact" index="08" eyebrow="Contact">
      <div ref={ref} className="contact-inner grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        {/* LEFT — invitation */}
        <div className="contact-reveal flex flex-col justify-between">
          <div>
            <h2 className="display max-w-2xl text-[clamp(2.25rem,5vw,4rem)] text-foreground">
              Let's build something <span className="text-ember">reliable.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              If you have a backend that needs owning — an API, a marketplace, a platform with real
              constraints — I'd like to hear about it.
            </p>
          </div>

          {/* email with copy interaction */}
          <div className="mt-10">
            <p className="eyebrow mb-3 text-muted-foreground">Email</p>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? "Email copied" : "Copy email address"}
              className="group inline-flex max-w-full items-center gap-3 text-left"
            >
              <span className="display text-xl text-foreground transition-colors duration-300 group-hover:text-ember sm:text-2xl">
                {person.email}
              </span>
              <span className="grid size-8 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors duration-300 group-hover:border-ember group-hover:text-ember">
                {copied ? (
                  <CheckmarkCircle01Icon className="size-4 text-ember" />
                ) : (
                  <Copy01Icon className="size-4" />
                )}
              </span>
            </button>
            {copied && (
              <p className="mt-2 font-mono text-[0.66rem] uppercase tracking-wide text-ember">
                Copied to clipboard
              </p>
            )}
          </div>

          {/* meta grid */}
          <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border sm:grid-cols-2">
            <div className="bg-card p-5">
              <dt className="eyebrow mb-1.5 text-muted-foreground">Location</dt>
              <dd className="text-sm text-foreground">{person.location}</dd>
            </div>
            <div className="bg-card p-5">
              <dt className="eyebrow mb-1.5 text-muted-foreground">Status</dt>
              <dd className="flex items-center gap-2 text-sm text-foreground">
                <span className="status-dot" aria-hidden /> {person.status}
              </dd>
            </div>
          </dl>

          {/* socials */}
          <div className="mt-8">
            <p className="eyebrow mb-3 text-muted-foreground">Elsewhere</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={person.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-line"
              >
                LinkedIn <ArrowUpRight01Icon className="size-4" />
              </a>
              <a
                href={person.social.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-line"
              >
                GitHub <ArrowUpRight01Icon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — short form */}
        <form
          className="contact-reveal surface space-y-5 p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault()
            const data = new FormData(e.currentTarget)
            const body = `Hi Abdullah,%0D%0A%0D%0A${data.get("message")}`
            window.location.href = `mailto:${person.email}?subject=Project enquiry&body=${body}`
          }}
        >
          <Field label="Name" name="name" placeholder="Your name" required />
          <Field label="Email" name="email" type="email" placeholder="you@company.com" required />

          <div>
            <label htmlFor="type" className="eyebrow mb-2 block text-muted-foreground">
              Project type
            </label>
            <select
              id="type"
              name="type"
              defaultValue={projectTypes[0]}
              className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-ember"
            >
              {projectTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="eyebrow mb-2 block text-muted-foreground">
              Budget
            </label>
            <select
              id="budget"
              name="budget"
              defaultValue={budgetRanges[0]}
              className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-ember"
            >
              {budgetRanges.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="eyebrow mb-2 block text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="A few lines about what you're building…"
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ember"
            />
          </div>

          <Magnetic strength={5}>
            <button type="submit" className="btn-ember w-full">
              Send enquiry
              <ArrowUpRight01Icon className="size-4" />
            </button>
          </Magnetic>
        </form>
      </div>
    </Section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow mb-2 block text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ember"
      />
    </div>
  )
}
