import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

/**
 * Scoped GSAP context. Pass a setup callback that receives the
 * scoped `gsap` and `ScrollTrigger`. Animations are scoped to the
 * ref element and auto-cleaned on unmount. Collapses to no-op when
 * the user prefers reduced motion (the callback still runs so any
 * non-animated state stays correct, but timelines resolve instantly).
 */
export function useGsap<T extends HTMLElement>(
  setup: (ctx: { gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger; reduced: boolean }) => void,
  deps: unknown[] = [],
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = prefersReducedMotion()

    const ctx = gsap.context((self) => {
      if (reduced) {
        // respect reduced motion: reveal everything instantly
        gsap.set(self.selector?.("*") ?? el, { clearProps: "opacity,transform" })
      }
      setup({ gsap, ScrollTrigger, reduced })
    }, el)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
