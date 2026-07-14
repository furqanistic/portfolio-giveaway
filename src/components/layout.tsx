import { BottomBar } from "@/components/bottom-bar"
import { ThemeToggle } from "@/components/theme-toggle"
import { TopBar } from "@/components/top-bar"
import { useIsMobile } from "@/hooks/use-mobile"
import { useLenis } from "@/lib/use-lenis"
import { person } from "@/lib/content"

export function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()
  useLenis()

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-background text-foreground">
      <main className="min-h-screen min-w-0 overflow-x-hidden pt-12 md:pt-16">
        {!isMobile && <TopBar />}
        {isMobile && (
          <header className="fixed inset-x-0 top-0 z-40 flex h-12 items-center justify-between border-b border-border bg-card/90 px-4 backdrop-blur-xl">
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
