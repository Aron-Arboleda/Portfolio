import { Tag } from '@/components/ui/Tag'
import { getTechUrl } from '@/data/tech-links'
import { cn } from '@/lib/cn'

type SkillTagProps = {
  name: string
}

const linkClassName = cn(
  'inline-flex items-center rounded-button border border-border-muted bg-surface-muted px-2 py-0.5',
  'font-mono text-xs text-primary no-underline',
  'transition-[color,background-color,border-color,transform] duration-200',
  'hover:border-accent hover:bg-accent-muted hover:text-accent',
  'motion-safe:hover:-translate-y-px',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
)

export function SkillTag({ name }: SkillTagProps) {
  const url = getTechUrl(name)

  if (!url) {
    return <Tag>{name}</Tag>
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClassName}
      title={`Visit ${name} website`}
    >
      {name}
    </a>
  )
}
