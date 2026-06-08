import { Briefcase, Code2, Mail } from 'lucide-react'
import { profile } from '@/data/profile'
import type { SocialLink } from '@/types/profile'
import { cn } from '@/lib/cn'

type SocialLinksProps = {
  className?: string
  linkClassName?: string
  showEmailAddress?: boolean
}

function SocialIcon({ type }: { type: SocialLink['type'] }) {
  const iconClass = 'shrink-0'
  switch (type) {
    case 'github':
      return <Code2 size={16} className={iconClass} aria-hidden="true" />
    case 'linkedin':
      return <Briefcase size={16} className={iconClass} aria-hidden="true" />
    case 'email':
      return <Mail size={16} className={iconClass} aria-hidden="true" />
    default:
      return null
  }
}

function getSocialLabel(social: SocialLink, showEmailAddress: boolean): string {
  if (social.type === 'email' && showEmailAddress) {
    return profile.email
  }
  return social.label
}

export function SocialLinks({
  className,
  linkClassName,
  showEmailAddress = false,
}: SocialLinksProps) {
  return (
    <ul className={cn('m-0 flex list-none flex-col gap-2 p-0', className)}>
      {profile.socials.map((social) => (
        <li key={social.href}>
          <a
            href={social.href}
            target={social.type === 'email' ? undefined : '_blank'}
            rel={
              social.type === 'email' ? undefined : 'noopener noreferrer'
            }
            className={cn(
              'inline-flex items-center gap-2 no-underline transition-colors hover:text-accent',
              linkClassName,
            )}
          >
            <SocialIcon type={social.type} />
            {getSocialLabel(social, showEmailAddress)}
          </a>
        </li>
      ))}
    </ul>
  )
}
