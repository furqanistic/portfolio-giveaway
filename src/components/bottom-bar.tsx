import { navItems } from "@/lib/nav"
import { useActiveSection } from "@/lib/use-active-section"
import { cn } from "@/lib/utils"

export function BottomBar() {
  const active = useActiveSection(navItems.map((i) => i.url.slice(1)))

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "fixed inset-x-2 bottom-2 z-50 overflow-hidden rounded-[1rem] border border-border bg-card/90 shadow-[0_16px_50px_-24px_rgba(0,0,0,.55)] backdrop-blur-xl",
      )}
    >
      <ul className="flex items-stretch justify-around px-1.5">
        {navItems.map((item) => {
          const isActive = active === item.url.slice(1)
          return (
            <li key={item.title} className="flex-1">
              <a
                href={item.url}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative flex min-h-14 flex-col items-center justify-center gap-0.5 py-1.5 text-[9px] font-medium transition-colors",
                  isActive ? "text-ember" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <item.icon className="size-[1.1rem]" />
                <span>{item.short}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
