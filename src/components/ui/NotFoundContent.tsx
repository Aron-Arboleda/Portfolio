import { ButtonLink } from '@/components/ui/ButtonLink'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

type NotFoundContentProps = {
  subtitle?: string
}

export function NotFoundContent({ subtitle }: NotFoundContentProps) {
  return (
    <Section className="py-0 md:py-0">
      <p className="m-0 font-heading text-6xl text-accent sm:text-7xl">404</p>
      <SectionHeading
        title="Page not found"
        titleAs="h1"
        subtitle={
          subtitle ??
          'The page you are looking for does not exist or may have been moved.'
        }
        className="mt-4"
      />
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink to="/" variant="primary">
          Back to Home
        </ButtonLink>
        <ButtonLink to="/projects" variant="secondary">
          View Projects
        </ButtonLink>
        <ButtonLink to="/contact" variant="ghost">
          Contact
        </ButtonLink>
      </div>
    </Section>
  )
}
