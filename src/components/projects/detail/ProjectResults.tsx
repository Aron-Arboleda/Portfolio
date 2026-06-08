import { Section } from '@/components/ui/Section'

type ProjectResultsProps = {
  results?: string
}

export function ProjectResults({ results }: ProjectResultsProps) {
  if (!results) return null

  return (
    <Section title="Results & impact" className="py-12 md:py-16">
      <p className="m-0 max-w-3xl leading-relaxed text-muted">{results}</p>
    </Section>
  )
}
