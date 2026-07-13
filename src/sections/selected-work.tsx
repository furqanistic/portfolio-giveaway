import { ArrowUpRight01Icon } from "hugeicons-react"
import { Section } from "@/components/section"
import { CursorLabel } from "@/components/cursor-label"
import { SplitText } from "@/components/split-text"
import { useGsap } from "@/lib/use-gsap"
import { projects } from "@/lib/content"

export function SelectedWork() {
  const featured = projects.find((p) => p.featured) ?? projects[0]
  const index = projects.filter((p) => p.id !== featured.id)

  const stickyRef = useGsap<HTMLDivElement>(({ gsap, reduced }) => {
    if (reduced) return
    // subtle parallax on the featured visual
    gsap.to(".work-featured-visual", {
      yPercent: -12,
      ease: "none",
      scrollTrigger: {
        trigger: ".work-featured",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
    // index rows reveal
    gsap.utils.toArray<HTMLElement>(".work-index-row").forEach((row) => {
      gsap.from(row, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: row, start: "top 88%" },
      })
    })
  })

  return (
    <Section
      id="work"
      index="01"
      eyebrow="Selected Work"
      title="Backends that carry real product weight."
      intro="Two systems where the work mattered: live commerce under continuous delivery, and a healthcare platform where state and permissions had to be unambiguous."
    >
      <div ref={stickyRef}>
        {/* ── Featured project — sticky text, scrolling visual ── */}
        <article className="work-featured grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="mb-5 flex items-center gap-3">
              <span className="eyebrow text-ember">Featured · {featured.index}</span>
              <span className="eyebrow text-muted-foreground">{featured.category}</span>
            </div>
            <SplitText
              lines={[featured.name]}
              as="h3"
              className="display mb-6 text-[clamp(1.75rem,3.5vw,2.75rem)] text-foreground"
            />

            <dl className="space-y-5 text-sm">
              <div>
                <dt className="eyebrow mb-1.5 text-muted-foreground">The problem</dt>
                <dd className="leading-relaxed text-muted-foreground">{featured.problem}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-1.5 text-muted-foreground">My role</dt>
                <dd className="leading-relaxed text-foreground">{featured.role}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-1.5 text-muted-foreground">Key challenge</dt>
                <dd className="leading-relaxed text-muted-foreground">{featured.challenge}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-1.5 text-muted-foreground">Result</dt>
                <dd className="leading-relaxed text-foreground">{featured.result}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {featured.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* scrolling visual — abstract system map, not a fake dashboard */}
          <CursorLabel label="System" className="h-full min-h-[28rem] lg:min-h-[40rem]">
            <div className="surface grain relative h-full w-full overflow-hidden p-6 sm:p-8">
              <div className="work-featured-visual absolute inset-0 -z-0 opacity-[0.9]">
                <SystemMap />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-muted-foreground">{featured.index} / System map</span>
                  <span className="status-dot" aria-hidden />
                </div>
                <div className="font-mono text-[0.62rem] leading-relaxed tracking-wide text-muted-foreground">
                  <p className="text-foreground">catalog → orders → identity → search</p>
                  <p className="mt-1">payments · caching · queues · integrations</p>
                </div>
              </div>
            </div>
          </CursorLabel>
        </article>

        {/* ── Project index — rows with hover preview ──────── */}
        <div className="mt-20 sm:mt-28">
          <div className="mb-8 flex items-center gap-3">
            <span className="eyebrow text-muted-foreground">More work</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {index.map((p) => (
              <li key={p.id}>
                <a
                  href={`#${p.id}`}
                  className="work-index-row group flex items-baseline justify-between gap-4 py-6 transition-colors duration-300 hover:bg-card/40"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-xs text-muted-foreground">{p.index}</span>
                    <div>
                      <h3 className="display text-xl text-foreground transition-colors duration-300 group-hover:text-ember sm:text-2xl">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden font-mono text-[0.66rem] uppercase tracking-wide text-muted-foreground sm:inline">
                      {p.tech.slice(0, 3).join(" · ")}
                    </span>
                    <ArrowUpRight01Icon className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

/** Abstract, editorial system-map graphic — pure SVG, theme-aware, no fake UI. */
function SystemMap() {
  const nodes = [
    { x: 18, y: 22, label: "API" },
    { x: 50, y: 14, label: "Auth" },
    { x: 82, y: 26, label: "Search" },
    { x: 16, y: 64, label: "Orders" },
    { x: 52, y: 54, label: "Core" },
    { x: 84, y: 70, label: "Payments" },
    { x: 38, y: 86, label: "Queues" },
    { x: 70, y: 90, label: "Cache" },
  ]
  const edges: [number, number][] = [
    [0, 1], [0, 4], [1, 2], [2, 5], [3, 4], [4, 5], [4, 6], [4, 7], [3, 6], [5, 7],
  ]
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <g stroke="var(--border)" strokeWidth="0.25" fill="none">
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} />
        ))}
      </g>
      <g>
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="2.4" fill="var(--card)" stroke="var(--ember)" strokeWidth="0.4" />
            <circle cx={n.x} cy={n.y} r="0.8" fill="var(--ember)" />
            <text
              x={n.x}
              y={n.y - 4}
              textAnchor="middle"
              fontSize="2.1"
              fontFamily="var(--font-mono)"
              fill="var(--muted-foreground)"
              letterSpacing="0.1"
            >
              {n.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  )
}
