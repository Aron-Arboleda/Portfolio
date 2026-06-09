import { Timeline } from '@/components/journey/Timeline'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { PageShell } from '@/components/ui/PageShell'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { routeSeo, toPageMeta } from '@/config/seo'
import { journey } from '@/data/journey'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function JourneyPage() {
  usePageMeta(toPageMeta(routeSeo.journey))

  return (
    <PageShell className="py-16 sm:py-24">
      <Section className="py-0 md:py-0">
        <SectionHeading
          title="My Journey"
          subtitle="The path I took from computer servicing in high school to building ML-powered applications and thesis research."
          titleAs="h1"
          index={1}
        />
        <FadeInSection className="mt-12 overflow-x-hidden">
          <Timeline milestones={journey} />
        </FadeInSection>
      </Section>
    </PageShell>
  )
}
