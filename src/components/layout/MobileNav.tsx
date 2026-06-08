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
          'fixed inset-0 z-40 bg-primary/20 backdrop-blur-sm md:hidden',
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
          'fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col',
          'border-l border-border bg-surface-elevated shadow-[var(--shadow-soft)] md:hidden',
          'transition-transform duration-300 ease-out motion-reduce:transition-none',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4">
          <span className="font-heading text-lg text-primary">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-button px-3 py-1.5 text-sm text-muted hover:text-primary"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto p-4">
          <ul className="m-0 flex list-none flex-col gap-1 p-0">
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

        <div className="flex items-center justify-between border-t border-border px-4 py-4">
          <span className="text-sm text-muted">Theme</span>
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}
