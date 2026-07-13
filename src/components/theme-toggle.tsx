import { Moon01Icon, Sun01Icon } from "hugeicons-react"

import { useTheme } from "@/hooks/use-theme"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "flex size-10 items-center justify-center rounded-xl transition-all",
        "text-muted-foreground hover:bg-black/5 dark:hover:bg-white/10",
        className
      )}
    >
      <Sun01Icon className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon01Icon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
