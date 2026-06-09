import { ExternalLink } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import type { Organization } from '@/types/organization'

type OrganizationCardProps = {
  organization: Organization
}

function OrganizationCardContent({ organization }: OrganizationCardProps) {
  const isLinked = Boolean(organization.url)

  return (
    <Card hover={isLinked} className="h-full">
      <h3 className="m-0 font-heading text-xl text-primary transition-colors group-hover:text-accent">
        {organization.name}
      </h3>
      <p className="m-0 mt-1 text-sm text-muted">{organization.location}</p>
      <p className="m-0 mt-2 text-sm text-accent">
        {organization.dateRange.display}
      </p>
      <ul className="m-0 mt-4 list-disc space-y-1 pl-5 text-sm text-muted">
        {organization.roles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>
      {isLinked && (
        <p className="m-0 mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors group-hover:text-accent">
          <ExternalLink size={14} aria-hidden="true" />
          Visit Organization Page
        </p>
      )}
    </Card>
  )
}

export function OrganizationCard({ organization }: OrganizationCardProps) {
  if (!organization.url) {
    return <OrganizationCardContent organization={organization} />
  }

  return (
    <a
      href={organization.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full no-underline"
      aria-label={`Visit ${organization.name} website`}
    >
      <OrganizationCardContent organization={organization} />
    </a>
  )
}
