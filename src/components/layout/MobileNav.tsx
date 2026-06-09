import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { navLinks } from '@/config/navigation'
import { navLinkClass } from '@/lib/nav-link-variants'
import { cn } from '@/lib/cn'

type MobileNavProps = {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-40 bg-primary/30 backdrop-blur-sm md:hidden',
          'transition-opacity duration-300 motion-reduce:transition-none',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          'fixed inset-0 z-50 flex flex-col bg-surface md:hidden',
          'transition-opacity duration-300 motion-reduce:transition-none',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div className="flex items-center justify-between border-b-2 border-border px-6 py-5">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Navigate
          </span>
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-sm uppercase tracking-wide text-muted hover:text-primary"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="flex flex-1 flex-col justify-center px-6">
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={onClose}
                  className={({ isActive }) => navLinkClass(isActive, 'lg')}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-between border-t-2 border-border px-6 py-5">
          <span className="font-mono text-xs uppercase tracking-wide text-muted">
            Theme
          </span>
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}
