import { ButtonLink } from '@/components/ui/ButtonLink'
import { PageShell } from '@/components/ui/PageShell'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

type ProjectNotFoundProps = {
  slug?: string
}

export function ProjectNotFound({ slug }: ProjectNotFoundProps) {
  return (
    <PageShell className="flex flex-1 flex-col justify-center py-16 sm:py-24">
      <Section className="py-0 md:py-0">
        <SectionHeading
          eyebrow="404"
          title="Project not found"
          titleAs="h1"
          subtitle={`No project exists with slug "${slug ?? 'unknown'}".`}
        />
        <ButtonLink to="/projects" variant="primary" className="mt-8">
          Back to Projects
        </ButtonLink>
      </Section>
    </PageShell>
  )
}
