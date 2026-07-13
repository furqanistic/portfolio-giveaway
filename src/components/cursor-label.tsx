import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type CursorLabelProps = {
  /** show a small circular label following the cursor inside the target */
  label?: string
  className?: string
  children: React.ReactNode
}

/**
 * Wraps a region; on desktop (fine pointer + no reduced motion) a
 * small "View" badge follows the cursor while it's hovered. The
 * wrapped content is fully interactive regardless — the label is
 * pointer-events-none and purely decorative.
 */
export function CursorLabel({ label = "View", className, children }: CursorLabelProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setEnabled(fine && !reduced)
  }, [])

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!enabled || !ref.current) return
    const el = ref.current.querySelector<HTMLDivElement>("[data-cursor-label]")
    if (!el) return
    const bounds = ref.current.getBoundingClientRect()
    el.style.transform = `translate(${e.clientX - bounds.left - 32}px, ${
      e.clientY - bounds.top - 32
    }px)`
  }

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      onPointerMove={onMove}
      onPointerEnter={() => enabled && setVisible(true)}
      onPointerLeave={() => setVisible(false)}
    >
      {children}
      {enabled && (
        <div
          data-cursor-label
          aria-hidden
          className={cn(
            "pointer-events-none absolute left-0 top-0 z-20 grid size-16 place-items-center rounded-full",
            "border border-border bg-background/80 text-[0.6rem] font-semibold uppercase tracking-[0.15em] backdrop-blur-sm",
            "transition-opacity duration-300",
            visible ? "opacity-100" : "opacity-0",
          )}
          style={{ transform: "translate(-9999px, -9999px)" }}
        >
          {label}
        </div>
      )}
    </div>
  )
}
