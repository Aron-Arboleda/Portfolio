import { profile } from '@/data/profile'

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="m-0 text-sm font-medium uppercase tracking-widest text-accent">
          Email
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="m-0 mt-2 block text-primary no-underline hover:text-accent"
        >
          {profile.email}
        </a>
      </div>

      <div>
        <p className="m-0 text-sm font-medium uppercase tracking-widest text-accent">
          Phone
        </p>
        <a
          href={`tel:${profile.phone.replace(/\s/g, '')}`}
          className="m-0 mt-2 block text-primary no-underline hover:text-accent"
        >
          {profile.phone}
        </a>
      </div>

      <div>
        <p className="m-0 text-sm font-medium uppercase tracking-widest text-accent">
          Location
        </p>
        <p className="m-0 mt-2 text-primary">{profile.location}</p>
      </div>

      <div>
        <p className="m-0 text-sm font-medium uppercase tracking-widest text-accent">
          Languages
        </p>
        <p className="m-0 mt-2 text-primary">
          {profile.languages.join(', ')}
        </p>
      </div>

      <div>
        <p className="m-0 text-sm font-medium uppercase tracking-widest text-accent">
          Connect
        </p>
        <ul className="m-0 mt-2 flex list-none flex-col gap-2 p-0">
          {profile.socials.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                target={social.type === 'email' ? undefined : '_blank'}
                rel={
                  social.type === 'email'
                    ? undefined
                    : 'noopener noreferrer'
                }
                className="text-primary no-underline hover:text-accent"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
