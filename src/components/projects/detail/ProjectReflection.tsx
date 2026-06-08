import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { isReflectionPlaceholder } from '@/lib/projects'

type ProjectReflectionProps = {
  challenges: string[]
  learnings: string[]
  slug: string
}

function ReflectionBlock({
  title,
  items,
  slug,
}: {
  title: string
  items: string[]
  slug: string
}) {
  if (isReflectionPlaceholder(items)) {
    return (
      <div>
        <h3 className="m-0 font-heading text-lg text-primary">{title}</h3>
        <Card className="mt-4 border-dashed bg-surface-muted">
          <p className="m-0 text-sm text-muted">
            This section is ready for your story. Edit{' '}
            <code className="rounded bg-surface px-1.5 py-0.5 text-xs text-primary">
              src/data/projects/{slug}.ts
            </code>{' '}
            to add your reflections.
          </p>
        </Card>
      </div>
    )
  }

  return (
    <div>
      <h3 className="m-0 font-heading text-lg text-primary">{title}</h3>
      <ul className="m-0 mt-4 list-disc space-y-2 pl-5 text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export function ProjectReflection({
  challenges,
  learnings,
  slug,
}: ProjectReflectionProps) {
  return (
    <Section title="Challenges & learnings" className="py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <ReflectionBlock title="Challenges" items={challenges} slug={slug} />
        <ReflectionBlock title="What I learned" items={learnings} slug={slug} />
      </div>
    </Section>
  )
}
