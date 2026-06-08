import { ButtonLink } from '@/components/ui/ButtonLink'
import { PageShell } from '@/components/ui/PageShell'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function NotFoundPage() {
  return (
    <PageShell className="flex flex-1 flex-col justify-center py-16 sm:py-24">
      <Section className="py-0 md:py-0">
        <SectionHeading
          eyebrow="404"
          title="Page not found"
          titleAs="h1"
          subtitle="The page you are looking for does not exist or may have been moved."
        />
        <ButtonLink to="/" variant="primary" className="mt-8">
          Back to Home
        </ButtonLink>
      </Section>
    </PageShell>
  )
}
