import { Timeline } from '@/components/journey/Timeline'
import { PageShell } from '@/components/ui/PageShell'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { journey } from '@/data/journey'

export default function JourneyPage() {
  return (
    <PageShell className="py-16 sm:py-24">
      <Section className="py-0 md:py-0">
        <SectionHeading
          title="My Journey"
          subtitle="The path I took from computer servicing in high school to building ML-powered applications and thesis research."
          titleAs="h1"
        />
        <div className="mt-12">
          <Timeline milestones={journey} />
        </div>
      </Section>
    </PageShell>
  )
}
