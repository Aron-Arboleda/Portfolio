import { SkillTag } from '@/components/skills/SkillTag'
import { Card } from '@/components/ui/Card'
import type { Skills } from '@/types/skills'

type SkillGridProps = {
  skills: Skills
}

export function SkillGrid({ skills }: SkillGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {skills.map((group, index) => (
        <Card key={group.id} className="p-5">
          <p className="m-0 font-mono text-xs text-accent">
            {String(index + 1).padStart(2, '0')}
          </p>
          <p className="m-0 mt-2 font-mono text-sm font-medium uppercase tracking-wide text-primary">
            {group.label}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <SkillTag key={item} name={item} />
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
