import { ResumeDownload } from '@/components/about/ResumeDownload'
import { ProjectGrid } from '@/components/projects/ProjectGrid'
import { SkillGrid } from '@/components/skills/SkillGrid'
import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Card } from '@/components/ui/Card'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { HeroGrain } from '@/components/ui/HeroGrain'
import { PageShell } from '@/components/ui/PageShell'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { routeSeo, toPageMeta } from '@/config/seo'
import { profile } from '@/data/profile'
import { getFeaturedProjects } from '@/data/projects'
import { skills } from '@/data/skills'
import { usePageMeta } from '@/hooks/usePageMeta'

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
  const featuredProjects = getFeaturedProjects()

  usePageMeta(toPageMeta(routeSeo.home))

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
              <ResumeDownload />
            </div>
          </Section>
        </PageShell>
      </HeroGrain>

      <PageShell>
        <FadeInSection>
          <Section
            title="Featured work"
            subtitle="Highlights from my thesis, freelance, and NGO projects."
          >
            <ProjectGrid projects={featuredProjects} />
            <div className="mt-8">
              <ButtonLink to="/projects" variant="secondary">
                View all projects
              </ButtonLink>
            </div>
          </Section>
        </FadeInSection>

        <FadeInSection delay={0.08}>
          <Section
            title="What I build"
            subtitle="Software across platforms — from thesis research to client deliverables."
          >
            <div className="grid gap-6 md:grid-cols-3">
              {buildAreas.map((area, index) => (
                <FadeInSection key={area.title} delay={index * 0.06}>
                  <Card hover className="h-full">
                    <h3 className="m-0 font-heading text-xl text-primary">
                      {area.title}
                    </h3>
                    <p className="m-0 mt-3 text-sm leading-relaxed text-muted">
                      {area.description}
                    </p>
                  </Card>
                </FadeInSection>
              ))}
            </div>
          </Section>
        </FadeInSection>

        <FadeInSection delay={0.12}>
          <Section
            title="Tech stack"
            subtitle="Languages, frameworks, and tools I work with."
          >
            <SkillGrid skills={skills} />
          </Section>
        </FadeInSection>

        <FadeInSection delay={0.16}>
          <Section>
            <Card className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="m-0 font-heading text-2xl text-primary">
                  My journey
                </h2>
                <p className="m-0 mt-3 max-w-xl text-muted">
                  From computer servicing in high school to building ML-powered
                  apps — see the full path I took to become a software developer.
                </p>
              </div>
              <ButtonLink to="/journey" variant="primary" className="shrink-0">
                Explore my journey
              </ButtonLink>
            </Card>
          </Section>
        </FadeInSection>
      </PageShell>
    </>
  )
}
