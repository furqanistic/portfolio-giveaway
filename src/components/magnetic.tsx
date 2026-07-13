import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type MagneticProps = {
  children: ReactNode
  className?: string
  /** max displacement in px */
  strength?: number
}

/**
 * Subtle magnetic wrapper for desktop (fine pointer, no reduced
 * motion). The child drifts a few pixels toward the cursor. The
 * element remains fully interactive — this is purely decorative.
 */
export function Magnetic({ children, className, strength = 7 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const fine = window.matchMedia("(pointer: fine)").matches
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!fine || reduced) return

    function onMove(e: MouseEvent) {
      if (!el) return
      const r = el.getBoundingClientRect()
      const x = e.clientX - (r.left + r.width / 2)
      const y = e.clientY - (r.top + r.height / 2)
      el.style.transform = `translate(${(x / r.width) * strength}px, ${
        (y / r.height) * strength
      }px)`
    }
    function onLeave() {
      if (el) el.style.transform = "translate(0,0)"
    }

    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)
    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
    }
  }, [strength])

  return (
    <div
      ref={ref}
      className={cn("inline-flex transition-transform duration-300 ease-out", className)}
    >
      {children}
    </div>
  )
}
