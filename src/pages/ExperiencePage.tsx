import { ExperienceCard } from '@/components/experience/ExperienceCard'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { PageShell } from '@/components/ui/PageShell'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { routeSeo } from '@/config/seo'
import { experience } from '@/data/experience'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function ExperiencePage() {
  usePageMeta(routeSeo.experience.title, routeSeo.experience.description)

  return (
    <PageShell className="py-16 sm:py-24">
      <Section className="py-0 md:py-0">
        <FadeInSection>
          <SectionHeading
            title="Experience"
            subtitle="Freelance work delivering web and desktop applications for clients."
            titleAs="h1"
          />
        </FadeInSection>
        <div className="mt-10 flex flex-col gap-6">
          {experience.map((item, index) => (
            <FadeInSection key={item.id} delay={index * 0.08}>
              <ExperienceCard experience={item} />
            </FadeInSection>
          ))}
        </div>
      </Section>
    </PageShell>
  )
}
