import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Card } from '@/components/ui/Card'
import { HeroGrain } from '@/components/ui/HeroGrain'
import { PageShell } from '@/components/ui/PageShell'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { profile } from '@/data/profile'

const buildAreas = [
  {
    title: 'Web Applications',
    description:
      'Full-stack apps with React, TypeScript, and modern APIs — from dashboards to GIS tools.',
  },
  {
    title: 'Mobile Apps',
    description:
      'Cross-platform experiences with React Native, real-time features, and cloud backends.',
  },
  {
    title: 'Desktop Software',
    description:
      'Electron apps for specialized workflows, calculations, and offline-first tooling.',
  },
] as const

export default function HomePage() {
  return (
    <>
      <HeroGrain className="border-b border-border bg-surface-muted">
        <PageShell className="py-16 sm:py-24">
          <Section className="py-0 md:py-0">
            <SectionHeading
              eyebrow="Portfolio"
              title={profile.fullName}
              titleAs="h1"
            />
            <p className="m-0 mt-2 text-xl text-muted sm:text-2xl">
              {profile.role}
            </p>
            <p className="m-0 mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {profile.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.highlights.map((highlight) => (
                <Badge key={highlight}>{highlight}</Badge>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink to="/projects" variant="primary">
                View Projects
              </ButtonLink>
              <ButtonLink to="/journey" variant="secondary">
                My Journey
              </ButtonLink>
            </div>
          </Section>
        </PageShell>
      </HeroGrain>

      <PageShell>
        <Section
          title="What I build"
          subtitle="Software across platforms — from thesis research to client deliverables."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {buildAreas.map((area) => (
              <Card key={area.title} hover>
                <h3 className="m-0 font-heading text-xl text-primary">
                  {area.title}
                </h3>
                <p className="m-0 mt-3 text-sm leading-relaxed text-muted">
                  {area.description}
                </p>
              </Card>
            ))}
          </div>
        </Section>
      </PageShell>
    </>
  )
}
