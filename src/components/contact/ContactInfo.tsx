import { SocialLinks } from '@/components/ui/SocialLinks'
import { profile } from '@/data/profile'

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="m-0 text-sm font-medium uppercase tracking-widest text-accent">
          Languages
        </p>
        <p className="m-0 mt-2 text-primary">{profile.languages.join(', ')}</p>
      </div>

      <div>
        <p className="m-0 text-sm font-medium uppercase tracking-widest text-accent">
          Connect
        </p>
        <SocialLinks className="mt-2" linkClassName="text-primary" />
      </div>
    </div>
  )
}
