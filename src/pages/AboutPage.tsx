import { CertificateList } from '@/components/about/CertificateList'
import { EducationCard } from '@/components/about/EducationCard'
import { OrganizationCard } from '@/components/about/OrganizationCard'
import { ProfileAvatar } from '@/components/about/ProfileAvatar'
import { ResumeDownload } from '@/components/about/ResumeDownload'
import { Badge } from '@/components/ui/Badge'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { PageShell } from '@/components/ui/PageShell'
import { Section } from '@/components/ui/Section'
import { routeSeo, toPageMeta } from '@/config/seo'
import { certificates } from '@/data/certificates'
import { education } from '@/data/education'
import { organizations } from '@/data/organizations'
import { profile } from '@/data/profile'
import { usePageMeta } from '@/hooks/usePageMeta'

const college = education.find((item) => item.level === 'college')
const seniorHigh = education.find((item) => item.level === 'senior-high')
const juniorHigh = education.find((item) => item.level === 'junior-high')

export default function AboutPage() {
  usePageMeta(toPageMeta(routeSeo.about))

  return (
    <PageShell className="py-16 sm:py-24">
      <FadeInSection>
        <Section className="py-0 md:py-0">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            <ProfileAvatar size="lg" />
            <div className="flex-1">
              <h1 className="m-0 font-heading text-4xl text-primary sm:text-5xl">
                About me
              </h1>
              <p className="m-0 mt-6 max-w-3xl leading-relaxed text-muted">
                {profile.objective}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {profile.highlights.map((highlight) => (
                  <Badge key={highlight}>{highlight}</Badge>
                ))}
              </div>
              <div className="mt-6">
                <ResumeDownload />
              </div>
              <p className="m-0 mt-6 text-sm text-muted">
                <span className="font-medium text-primary">Languages:</span>{' '}
                {profile.languages.join(', ')}
              </p>
            </div>
          </div>
        </Section>
      </FadeInSection>

      <FadeInSection delay={0.08}>
        <Section title="Education" subtitle="My academic path in computer science.">
          {college && <EducationCard education={college} />}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {seniorHigh && <EducationCard education={seniorHigh} />}
            {juniorHigh && <EducationCard education={juniorHigh} />}
          </div>
        </Section>
      </FadeInSection>

      <FadeInSection delay={0.12}>
        <Section
          title="Certificates"
          subtitle="Courses and certifications earned along the way."
        >
          <CertificateList certificates={certificates} />
        </Section>
      </FadeInSection>

      <FadeInSection delay={0.16}>
        <Section
          title="Organizations"
          subtitle="Communities and causes I've been part of."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {organizations.map((organization, index) => (
              <FadeInSection key={organization.id} delay={index * 0.06}>
                <OrganizationCard organization={organization} />
              </FadeInSection>
            ))}
          </div>
        </Section>
      </FadeInSection>
    </PageShell>
  )
}
