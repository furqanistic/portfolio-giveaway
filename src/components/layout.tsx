import { AppSidebar } from "@/components/app-sidebar"
import { BottomBar } from "@/components/bottom-bar"
import { ThemeToggle } from "@/components/theme-toggle"
import { useIsMobile } from "@/hooks/use-mobile"
import { useLenis } from "@/lib/use-lenis"
import { person } from "@/lib/content"

export function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()
  useLenis()

  return (
    <div className="min-h-screen bg-background text-foreground md:flex">
      {/* Desktop sidebar — sticky, stays put while the page scrolls */}
      {!isMobile && (
        <aside className="hidden md:block">
          <div className="sticky top-3 h-[calc(100vh-1.5rem)] p-3">
            <AppSidebar />
          </div>
        </aside>
      )}

      {/* Main content — scrolls with the window (one page) */}
      <main className="min-h-screen min-w-0 flex-1">
        {isMobile && (
          <header className="sticky top-0 z-40 flex h-12 items-center justify-between border-b border-border bg-card/70 px-4 backdrop-blur-xl">
            <span className="text-sm font-semibold tracking-tight">{person.name}</span>
            <ThemeToggle />
          </header>
        )}
        {children}
      </main>

      {isMobile && <BottomBar />}
    </div>
  )
}
