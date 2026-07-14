import { ThemeToggle } from "@/components/theme-toggle"
import { person } from "@/lib/content"
import { navItems } from "@/lib/nav"
import { useActiveSection } from "@/lib/use-active-section"
import { smoothScrollTo } from "@/lib/use-lenis"
import { cn } from "@/lib/utils"

const topNavItems = navItems

export function TopBar() {
  const active = useActiveSection(topNavItems.map((item) => item.url.slice(1)))

  return (
    <header className="fixed inset-x-0 top-0 z-50 hidden h-16 items-center border-b border-border bg-background/88 px-8 backdrop-blur-xl md:flex lg:px-12">
      <a
        href="#intro"
        onClick={(event) => {
          event.preventDefault()
          smoothScrollTo("#intro")
        }}
        className="shrink-0 text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        aria-label={`${person.name}, back to intro`}
      >
        {person.name}
      </a>

      <nav aria-label="Primary" className="ml-auto">
        <ul className="flex items-center gap-1 lg:gap-2">
          {topNavItems.map((item) => {
            const isActive = active === item.url.slice(1)

            return (
              <li key={item.title}>
                <a
                  href={item.url}
                  onClick={(event) => {
                    event.preventDefault()
                    smoothScrollTo(item.url)
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative flex h-10 items-center px-3 text-[0.7rem] font-medium uppercase tracking-[0.13em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.title}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-3 -bottom-[13px] h-px bg-ember transition-transform duration-300 motion-reduce:transition-none",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="ml-3 border-l border-border pl-3">
        <ThemeToggle className="size-9 rounded-none" />
      </div>
    </header>
  )
}
