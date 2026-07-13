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
        "relative scroll-mt-8 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28",
        className,
      )}
    >
      {showHeader && (
        <header className="mb-12 flex flex-col gap-6 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            {eyebrow && (
              <div className="mb-5 flex items-center gap-3">
                {index && (
                  <span className="eyebrow text-ember">{index}</span>
                )}
                <span className="eyebrow text-muted-foreground">{eyebrow}</span>
              </div>
            )}
            {title && (
              <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)] text-foreground">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {intro}
              </p>
            )}
          </div>
          {aside && <div className="shrink-0">{aside}</div>}
        </header>
      )}
      <div className="hairline mb-12 sm:mb-16" />
      {children}
    </section>
  )
})
