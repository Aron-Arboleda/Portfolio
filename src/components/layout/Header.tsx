import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { MobileNav } from '@/components/layout/MobileNav'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { navLinks } from '@/config/navigation'
import { profile } from '@/data/profile'
import { navLinkClass } from '@/lib/nav-link-variants'
import { cn } from '@/lib/cn'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 border-b-2 bg-surface/90 backdrop-blur-md transition-shadow',
          scrolled
            ? 'border-accent shadow-[var(--shadow-ink)]'
            : 'border-border',
        )}
      >
        <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-4 sm:px-6">
          <NavLink
            to="/"
            className="group flex items-center gap-3 no-underline transition-colors hover:text-accent"
          >
            <span
              className="flex h-9 w-9 items-center justify-center border-2 border-primary bg-surface-elevated font-mono text-xs font-bold text-primary ink-shadow transition-colors group-hover:border-accent group-hover:text-accent"
              aria-hidden="true"
            >
              AR
            </span>
            <span className="hidden font-heading text-lg font-semibold text-primary sm:inline">
              {profile.siteName}
            </span>
          </NavLink>

          <div className="flex items-center gap-2">
            <nav
              aria-label="Main navigation"
              className="hidden items-center md:flex"
            >
              <ul className="m-0 flex list-none gap-1 p-0">
                {navLinks.map(({ to, label, end }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={end}
                      className={({ isActive }) => navLinkClass(isActive)}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center border-2 border-border bg-surface-elevated text-primary ink-shadow hover:border-accent hover:text-accent md:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
