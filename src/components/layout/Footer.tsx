import { Link } from 'react-router-dom'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { navLinks } from '@/config/navigation'
import { profile } from '@/data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border bg-surface-elevated">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="m-0 font-heading text-lg text-primary">
              {profile.fullName}
            </p>
            <p className="m-0 mt-1 text-sm text-accent">{profile.role}</p>
            <p className="m-0 mt-3 max-w-xs text-sm text-muted">
              Building thoughtful software across web, mobile, and desktop.
            </p>
          </div>

          <div>
            <p className="m-0 text-sm font-medium uppercase tracking-widest text-accent">
              Navigate
            </p>
            <ul className="m-0 mt-4 flex list-none flex-col gap-2 p-0">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-muted no-underline transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="m-0 text-sm font-medium uppercase tracking-widest text-accent">
              Connect
            </p>
            <SocialLinks
              className="mt-4"
              linkClassName="text-sm text-muted hover:text-primary"
              showEmailAddress
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">
            &copy; {year} {profile.fullName}. All rights reserved.
          </p>
          <p className="m-0">Built with React + TailwindCSS</p>
        </div>
      </div>
    </footer>
  )
}
