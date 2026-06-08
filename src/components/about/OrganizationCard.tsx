import { Card } from '@/components/ui/Card'
import type { Organization } from '@/types/organization'

type OrganizationCardProps = {
  organization: Organization
}

export function OrganizationCard({ organization }: OrganizationCardProps) {
  return (
    <Card>
      <h3 className="m-0 font-heading text-xl text-primary">
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
    </Card>
  )
}
