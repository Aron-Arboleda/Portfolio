import { Tag } from '@/components/ui/Tag'
import type { Skills } from '@/types/skills'

type SkillGridProps = {
  skills: Skills
}

export function SkillGrid({ skills }: SkillGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {skills.map((group) => (
        <div
          key={group.id}
          className="rounded-card border border-border bg-surface-elevated p-5"
        >
          <p className="m-0 text-sm font-medium uppercase tracking-widest text-accent">
            {group.label}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
