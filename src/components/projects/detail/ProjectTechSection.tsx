import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import type { Project } from '@/types/project'
import { getTechStackItems } from '@/lib/projects'

type ProjectTechSectionProps = {
  project: Project
}

export function ProjectTechSection({ project }: ProjectTechSectionProps) {
  const items = getTechStackItems(project)

  return (
    <Section title="Tech stack" className="py-12 md:py-16">
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <Card key={item.name}>
            <p className="m-0 font-medium text-primary">{item.name}</p>
            {item.note && (
              <p className="m-0 mt-2 text-sm text-muted">{item.note}</p>
            )}
          </Card>
        ))}
      </div>
    </Section>
  )
}
