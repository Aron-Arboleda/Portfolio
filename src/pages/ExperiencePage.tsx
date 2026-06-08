import { ExperienceCard } from '@/components/experience/ExperienceCard'
import { PageShell } from '@/components/ui/PageShell'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experience } from '@/data/experience'

export default function ExperiencePage() {
  return (
    <PageShell className="py-16 sm:py-24">
      <Section className="py-0 md:py-0">
        <SectionHeading
          title="Experience"
          subtitle="Freelance work delivering web and desktop applications for clients."
          titleAs="h1"
        />
        <div className="mt-10 flex flex-col gap-6">
          {experience.map((item) => (
            <ExperienceCard key={item.id} experience={item} />
          ))}
        </div>
      </Section>
    </PageShell>
  )
}
