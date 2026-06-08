import { PageShell } from '@/components/ui/PageShell'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

type PagePlaceholderProps = {
  title: string
  description?: string
}

export function PagePlaceholder({
  title,
  description = 'Content coming in Phase 4.',
}: PagePlaceholderProps) {
  return (
    <PageShell className="py-16 sm:py-24">
      <Section className="py-0 md:py-0">
        <SectionHeading title={title} titleAs="h1" subtitle={description} />
      </Section>
    </PageShell>
  )
}
