import { projects, type Project } from "@/lib/content"
import { useGsap } from "@/lib/use-gsap"
import { cn } from "@/lib/utils"

const projectImages: Record<string, { src: string; alt: string }> = {
  "marketplace-backend": {
    src: "/projects/commerce-catalog.jpg",
    alt: "Dark commerce catalog interface with inventory table and selected product details",
  },
  "consultation-platform": {
    src: "/projects/healthcare-scheduling.jpg",
    alt: "Healthcare scheduling interface with appointments and patient consultation details",
  },
}

export function SelectedWork() {
  const ref = useGsap<HTMLElement>(({ gsap, reduced }) => {
    if (reduced) return

    gsap.utils.toArray<HTMLElement>(".project-spread").forEach((project) => {
      const copy = project.querySelectorAll(".project-copy")
      const image = project.querySelector(".project-image")

      gsap.from(copy, {
        y: 28,
        duration: 0.7,
        ease: "power4.out",
        stagger: 0.06,
        scrollTrigger: { trigger: project, start: "top 82%" },
      })

      if (image) {
        gsap.from(image, {
          clipPath: "inset(0 0 100% 0)",
          scale: 1.035,
          duration: 1,
          ease: "power4.inOut",
          scrollTrigger: { trigger: image, start: "top 88%" },
        })
      }
    })
  })

  return (
    <section
      ref={ref}
      id="work"
      className="relative scroll-mt-8 border-t border-border px-5 py-12 sm:px-8 lg:px-12"
    >
      <header className="mb-10 flex items-center gap-3">
        <span className="size-1.5 rounded-full bg-ember" aria-hidden />
        <span className="eyebrow text-muted-foreground">Selected Work</span>
      </header>

      <div className="mx-auto max-w-[92rem] space-y-24 lg:space-y-20">
        {projects.map((project, index) => (
          <ProjectSpread key={project.id} project={project} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  )
}

function ProjectSpread({ project, reverse }: { project: Project; reverse: boolean }) {
  const media = projectImages[project.id]

  return (
    <article id={project.id} className="project-spread scroll-mt-12">
      <div
        className={cn(
          "grid gap-10 lg:items-end lg:gap-16",
          reverse
            ? "lg:grid-cols-[minmax(18rem,.42fr)_minmax(0,.58fr)]"
            : "lg:grid-cols-[minmax(0,.58fr)_minmax(18rem,.42fr)]",
        )}
      >
        {reverse ? (
          <>
            <ProjectCopy project={project} />
            <ProjectImage media={media} className="lg:aspect-[2/1]" />
          </>
        ) : (
          <>
            <ProjectImage media={media} className="lg:aspect-[2/1]" />
            <ProjectCopy project={project} />
          </>
        )}
      </div>
    </article>
  )
}

function ProjectCopy({ project }: { project: Project }) {
  return (
    <div className="project-copy lg:pb-2">
      <span className="font-mono text-xs text-ember">{project.index}</span>
      <h3 className="display mt-5 max-w-[13ch] text-[2.15rem] leading-[0.98] text-foreground sm:text-[clamp(2.65rem,4.1vw,4.7rem)] sm:leading-[0.94]">
        {project.name}
      </h3>
      <div className="mt-8 max-w-md border-t border-border pt-5">
        <Meta label={project.category} value={project.built} />
      </div>
      <div className="mt-8 hidden gap-8 sm:grid sm:grid-cols-2">
        <Meta label="My role" value={project.role} />
        <TechList project={project} />
      </div>
    </div>
  )
}

function ProjectImage({ media, className }: { media: { src: string; alt: string }; className?: string }) {
  return (
    <figure className={cn("project-image group relative aspect-[3/2] overflow-hidden bg-card", className)}>
      <img
        src={media.src}
        alt={media.alt}
        width={1536}
        height={1024}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.018] motion-reduce:transition-none"
      />
    </figure>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="project-copy">
      <p className="eyebrow mb-3 text-muted-foreground">{label}</p>
      <p className="text-sm leading-relaxed text-muted-foreground">{value}</p>
    </div>
  )
}

function TechList({ project }: { project: Project }) {
  return (
    <div className="project-copy">
      <p className="eyebrow mb-3 text-muted-foreground">Technology</p>
      <p className="font-mono text-[0.68rem] leading-relaxed uppercase tracking-[0.1em] text-foreground">
        {project.tech.slice(0, 5).join(" / ")}
      </p>
    </div>
  )
}
