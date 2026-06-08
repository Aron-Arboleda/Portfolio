import { Section } from '@/components/ui/Section'

type ProjectFeaturesProps = {
  features: string[]
}

export function ProjectFeatures({ features }: ProjectFeaturesProps) {
  if (features.length === 0) return null

  return (
    <Section title="Key features" className="py-12 md:py-16">
      <ul className="m-0 max-w-3xl list-disc space-y-2 pl-5 text-muted">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </Section>
  )
}
