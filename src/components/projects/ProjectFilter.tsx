import { projectCategories, type ProjectFilterId } from '@/data/projects'
import { cn } from '@/lib/cn'

type ProjectFilterProps = {
  active: ProjectFilterId
  onChange: (id: ProjectFilterId) => void
}

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="flex flex-nowrap gap-2 overflow-x-auto border-b-2 border-border pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap [&::-webkit-scrollbar]:hidden"
    >
      {projectCategories.map(({ id, label }) => {
        const isActive = active === id
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(id)}
            className={cn(
              'shrink-0 border-2 px-4 py-2 font-mono text-xs font-medium uppercase tracking-wide transition-colors duration-200 min-h-11',
              isActive
                ? 'border-primary bg-primary text-inverse ink-shadow'
                : 'border-border bg-surface-elevated text-muted hover:border-accent hover:text-accent',
            )}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
