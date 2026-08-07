import { Link } from 'react-router-dom'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { navLinks } from '@/config/navigation'
import { profile } from '@/data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t-2 border-border bg-surface-elevated">
      <div
        className="gradient-rule mx-auto max-w-content px-4 sm:px-6"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="m-0 font-heading text-lg font-semibold text-primary">
              {profile.fullName}
            </p>
            <p className="m-0 mt-1 font-mono text-sm text-accent">
              {profile.role}
            </p>
            <p className="m-0 mt-3 max-w-xs text-sm text-muted">
              Building software across web, mobile, and desktop. Always leaving
              room for creative craft.
            </p>
          </div>

          <div>
            <p className="m-0 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Navigate
            </p>
            <ul className="m-0 mt-4 flex list-none flex-col gap-2 p-0">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-mono text-sm text-muted no-underline transition-colors hover:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="m-0 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Connect
            </p>
            <SocialLinks
              className="mt-4"
              linkClassName="text-sm text-muted hover:text-accent"
              showEmailAddress
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border-muted pt-6 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">
            &copy; {year} {profile.fullName}
          </p>
          <p className="m-0">React + Tailwind · Ink &amp; Voltage</p>
        </div>
      </div>
    </footer>
  )
}
