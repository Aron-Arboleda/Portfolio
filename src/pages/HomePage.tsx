import { HomeHeroImage } from '@/components/home/HomeHeroImage'
import { ResumeDownload } from '@/components/about/ResumeDownload'
import { ProjectGrid } from '@/components/projects/ProjectGrid'
import { SkillGrid } from '@/components/skills/SkillGrid'
import { Atmosphere } from '@/components/ui/Atmosphere'
import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Card } from '@/components/ui/Card'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { Marquee } from '@/components/ui/Marquee'
import { PageShell } from '@/components/ui/PageShell'
import { Section } from '@/components/ui/Section'
import { routeSeo, toPageMeta } from '@/config/seo'
import { profile } from '@/data/profile'
import { getFeaturedProjects } from '@/data/projects'
import { skills } from '@/data/skills'
import { usePageMeta } from '@/hooks/usePageMeta'

const marqueeItems = [
  'React',
  'TypeScript',
  'React Native',
  'Python',
  'GIS',
  'Machine Learning',
  'Electron',
  'Firebase',
]

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
      <Atmosphere className="border-b-2 border-border bg-surface-muted">
        <PageShell className="py-[clamp(1.5rem,4vh,3rem)]">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 xl:gap-14">
            <div className="min-w-0">
              <DisplayHeading
                name={profile.fullName}
                role={profile.role}
                compact
              />
              <p className="m-0 mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {profile.tagline}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.highlights.map((highlight) => (
                  <Badge key={highlight}>{highlight}</Badge>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
                <ButtonLink to="/projects" variant="primary">
                  View Projects
                </ButtonLink>
                <ButtonLink to="/journey" variant="secondary">
                  My Journey
                </ButtonLink>
                <ResumeDownload />
              </div>
            </div>

            <div className="mx-auto lg:mx-0 lg:justify-self-end">
              <HomeHeroImage />
            </div>
          </div>
        </PageShell>
        <Marquee items={marqueeItems} />
      </Atmosphere>

      <PageShell>
        <FadeInSection>
          <Section
            title="Featured work"
            subtitle="Highlights from my thesis, freelance, and NGO projects."
            index={1}
          >
            <ProjectGrid projects={featuredProjects} bento />
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
            index={2}
          >
            <div className="grid gap-5 md:grid-cols-3">
              {buildAreas.map((area, index) => (
                <FadeInSection key={area.title} delay={index * 0.06}>
                  <Card hover className="h-full">
                    <p className="m-0 font-mono text-xs text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="m-0 mt-3 font-heading text-xl font-semibold text-primary">
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
            index={3}
          >
            <SkillGrid skills={skills} />
          </Section>
        </FadeInSection>

        <FadeInSection delay={0.16}>
          <Section index={4}>
            <Card className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="m-0 font-heading text-2xl font-semibold text-primary">
                  My journey
                </h2>
                <div className="gradient-rule mt-3" aria-hidden="true" />
                <p className="m-0 mt-4 max-w-xl text-muted">
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
