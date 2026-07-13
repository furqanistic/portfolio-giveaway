import { navItems } from "@/lib/nav"
import { useActiveSection } from "@/lib/use-active-section"
import { cn } from "@/lib/utils"

export function BottomBar() {
  const active = useActiveSection(navItems.map((i) => i.url.slice(1)))

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/80 backdrop-blur-xl",
      )}
    >
      <ul className="flex items-stretch justify-around px-1">
        {navItems.map((item) => {
          const isActive = active === item.url.slice(1)
          return (
            <li key={item.title} className="flex-1">
              <a
                href={item.url}
                className={cn(
                  "flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium transition-colors",
                  isActive ? "text-ember" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <item.icon className="size-5" />
                <span>{item.short}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
