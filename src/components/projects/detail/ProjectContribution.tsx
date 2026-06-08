import { Section } from '@/components/ui/Section'

type ProjectContributionProps = {
  role: string
  contribution: string
}

export function ProjectContribution({
  role,
  contribution,
}: ProjectContributionProps) {
  return (
    <Section title="My contribution" className="py-12 md:py-16">
      <div className="max-w-3xl">
        <p className="m-0 text-sm text-muted">
          <span className="font-medium text-primary">Role:</span> {role}
        </p>
        <p className="m-0 mt-4 leading-relaxed text-muted">{contribution}</p>
      </div>
    </Section>
  )
}
