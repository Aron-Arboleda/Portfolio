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
      className="flex flex-nowrap gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap [&::-webkit-scrollbar]:hidden"
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
              'shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              isActive
                ? 'bg-accent-muted text-accent'
                : 'border border-border text-muted hover:text-primary',
            )}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
