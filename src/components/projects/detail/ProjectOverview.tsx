import { Section } from '@/components/ui/Section'

type ProjectOverviewProps = {
  overview: string
}

export function ProjectOverview({ overview }: ProjectOverviewProps) {
  const paragraphs = overview.split('\n\n').filter(Boolean)

  return (
    <Section title="Overview" className="py-12 md:py-16">
      <div className="max-w-3xl space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="m-0 leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  )
}
