import { type ElementType } from "react"
import { useGsap, prefersReducedMotion } from "@/lib/use-gsap"
import { cn } from "@/lib/utils"

type SplitTextProps = {
  /** each line of this array animates as a masked reveal */
  lines: string[]
  as?: ElementType
  className?: string
  lineClassName?: string
  /** delay before the first line, seconds */
  delay?: number
  /** stagger between lines, seconds */
  stagger?: number
  /** reveal when scrolled into view (default) vs immediately on mount */
  trigger?: "scroll" | "mount"
}

/**
 * Line-mask text reveal. Each provided string becomes an overflow-
 * clipped line whose inner span translates up from behind the mask.
 * Respects prefers-reduced-motion (renders instantly).
 */
export function SplitText({
  lines,
  as,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.09,
  trigger = "scroll",
}: SplitTextProps) {
  const ref = useGsap<HTMLElement>(
    ({ gsap, ScrollTrigger, reduced }) => {
      if (reduced) return
      const targets = gsap.utils.toArray<HTMLElement>(".st-line-inner")
      gsap.set(targets, { yPercent: 115 })

      const play = () =>
        gsap.to(targets, {
          yPercent: 0,
          duration: 0.85,
          ease: "power4.out",
          delay,
          stagger,
        })

      if (trigger === "mount") {
        play()
      } else {
        ScrollTrigger.create({
          trigger: ref.current,
          start: "top 82%",
          once: true,
          onEnter: play,
        })
      }
    },
    [delay, stagger, trigger],
  )

  const Comp = (as ?? "h2") as ElementType

  return (
    <Comp
      ref={ref}
      className={cn("block", className)}
      style={prefersReducedMotion() ? undefined : undefined}
    >
      {lines.map((line, i) => (
        <span key={i} className={cn("line-mask", lineClassName)}>
          <span className="st-line-inner block">{line}</span>
        </span>
      ))}
    </Comp>
  )
}
