import { useEffect, useState } from "react"

/**
 * Tracks which section is currently in view via IntersectionObserver,
 * for sidebar active-state highlighting. Returns the active id (no '#').
 */
export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? "")
  const key = sectionIds.join(",")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the most-visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          setActive(visible[0].target.id)
        }
      },
      {
        // trigger near the top third of the viewport
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.15, 0.4, 0.7, 1],
      },
    )

    const ids = key.split(",")
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return active
}
