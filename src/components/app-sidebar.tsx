import { useState } from "react"
import {
  PanelLeftCloseIcon,
  PanelLeftOpenIcon,
} from "hugeicons-react"

import { ThemeToggle } from "@/components/theme-toggle"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { navItems } from "@/lib/nav"
import { useActiveSection } from "@/lib/use-active-section"
import { smoothScrollTo } from "@/lib/use-lenis"
import { cn } from "@/lib/utils"

export function AppSidebar() {
  const [expanded, setExpanded] = useState(false)
  const active = useActiveSection(navItems.map((i) => i.url.slice(1)))

  const handleNavClick = (url: string) => {
    smoothScrollTo(url)
  }

  return (
    <TooltipProvider delayDuration={250}>
      <aside
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-[1.15rem] transition-[width,padding] duration-300 ease-out motion-reduce:transition-none",
          "border border-border bg-card/82 shadow-[0_24px_80px_-48px_rgba(0,0,0,.5)] backdrop-blur-xl",
          expanded ? "w-[224px] p-2.5" : "w-[64px] items-center p-2.5",
        )}
      >
        {/* Header */}
        <div className={cn("flex h-11 w-full items-center", expanded ? "justify-between px-2" : "justify-center")}>
          <div
            className={cn(
              "flex min-w-0 items-center gap-2.5 transition-opacity duration-150 motion-reduce:transition-none",
              expanded ? "opacity-100" : "pointer-events-none w-0 overflow-hidden opacity-0",
            )}
          >
            <span className="brand-mark">AS</span>
            <span
              className={cn(
                "whitespace-nowrap text-sm font-semibold tracking-tight transition-opacity duration-150 motion-reduce:transition-none",
                expanded ? "opacity-100" : "w-0 overflow-hidden opacity-0",
              )}
            >
              Menu
            </span>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setExpanded((value) => !value)}
                aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors duration-150",
                  "hover:bg-foreground/5 hover:text-foreground",
                )}
              >
                {expanded ? <PanelLeftCloseIcon className="size-4" /> : <PanelLeftOpenIcon className="size-4" />}
              </button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={10}>
              {expanded ? "Collapse sidebar" : "Expand sidebar"}
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Nav */}
        <nav className="mt-3 flex-1">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = active === item.url.slice(1)
              return (
                <li key={item.title}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => handleNavClick(item.url)}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "group/nav flex h-10 w-full items-center rounded-lg transition-colors duration-200 motion-reduce:transition-none",
                          expanded ? "gap-3 px-3 text-sm font-medium" : "justify-center",
                          isActive
                            ? expanded
                              ? "bg-foreground text-background"
                              : "text-foreground"
                            : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground",
                        )}
                      >
                        <item.icon className="size-5 shrink-0" />
                        <span
                          className={cn(
                            "overflow-hidden whitespace-nowrap transition-opacity duration-150 motion-reduce:transition-none",
                            expanded ? "opacity-100" : "w-0 opacity-0",
                          )}
                        >
                          {item.title}
                        </span>
                      </button>
                    </TooltipTrigger>
                    {!expanded && (
                      <TooltipContent side="right" sideOffset={12}>
                        {item.title}
                      </TooltipContent>
                    )}
                  </Tooltip>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className={cn("mt-auto flex flex-col", expanded ? "items-start px-1" : "items-center")}>
          <ThemeToggle />
        </div>
      </aside>
    </TooltipProvider>
  )
}
