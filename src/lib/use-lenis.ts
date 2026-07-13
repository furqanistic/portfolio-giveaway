import { useEffect } from "react"
import Lenis from "lenis"
import { prefersReducedMotion } from "./use-gsap"

// Singleton so other components (sidebar, footer) can request smooth scrolls
// through the same Lenis instance that owns the scroll loop.
let lenisInstance: Lenis | null = null

/**
 * Smoothly scroll to a target. Goes through Lenis when active; falls back to
 * native scrollIntoView when Lenis is disabled (reduced-motion) so it still works.
 */
export function smoothScrollTo(target: string | HTMLElement) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -16, duration: 1.15 })
    return
  }
  // reduced-motion fallback
  const el = typeof target === "string" ? document.querySelector(target) : target
  el?.scrollIntoView({ behavior: "smooth", block: "start" })
}

/**
 * Optional smooth scroll via Lenis on the window. Auto-disabled when the user
 * prefers reduced motion (accessibility first). Anchor-link clicks anywhere on
 * the page are intercepted and routed through Lenis for a smooth glide.
 */
export function useLenis() {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })
    lenisInstance = lenis

    let raf = 0
    function loop(time: number) {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    // Intercept in-page anchor links → smooth Lenis glide
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute("href")
      if (!href || href === "#") return
      const el = document.querySelector(href)
      if (el) {
        e.preventDefault()
        lenis.scrollTo(el as HTMLElement, { offset: -16, duration: 1.15 })
      }
    }
    document.addEventListener("click", onClick)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener("click", onClick)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}
