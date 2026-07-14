import { forwardRef } from "react"
import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  eyebrow?: string
  index?: string
  title?: string
  intro?: string
  className?: string
  children: React.ReactNode
  /** optional eyebrow on the right side of the header */
  aside?: React.ReactNode
}

/**
 * Consistent editorial section wrapper. Provides the section id,
 * eyebrow label, display heading, intro line, and a hairline rule.
 * Owns its own max-width container and vertical rhythm.
 */
export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { id, eyebrow, index, title, intro, className, children, aside },
  ref,
) {
  const showHeader = eyebrow || title
  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "chapter relative scroll-mt-8 border-t border-border px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40",
        className,
      )}
    >
      {showHeader && (
        <header className="mb-14 grid gap-8 sm:mb-20 lg:grid-cols-[minmax(12rem,.34fr)_minmax(0,.66fr)] lg:items-start lg:gap-16">
          <div>
            {eyebrow && (
              <div className="flex items-center gap-3">
                {index && <span className="size-1.5 rounded-full bg-ember" aria-hidden />}
                <span className="eyebrow text-muted-foreground">{eyebrow}</span>
              </div>
            )}
          </div>
          <div className="max-w-4xl">
            {title && (
              <h2 className="display text-[clamp(2.35rem,5vw,4.75rem)] text-foreground">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {intro}
              </p>
            )}
          </div>
          {aside && <div className="shrink-0 lg:col-start-2">{aside}</div>}
        </header>
      )}
      {children}
    </section>
  )
})
