import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import type { JourneyMilestone } from '@/types/journey'
import { cn } from '@/lib/cn'

const kindLabels: Record<JourneyMilestone['kind'], string> = {
  education: 'Education',
  project: 'Project',
  certificate: 'Certificate',
  organization: 'Organization',
  competition: 'Competition',
  career: 'Career',
}

type MilestoneCardProps = {
  milestone: JourneyMilestone
  align?: 'left' | 'right'
  className?: string
}

export function MilestoneCard({
  milestone,
  align = 'left',
  className,
}: MilestoneCardProps) {
  return (
    <Card className={cn('relative z-10', className)}>
      <div
        className={cn(
          'flex flex-wrap items-center gap-2',
          align === 'right' && 'lg:justify-end',
        )}
      >
        <span className="font-mono text-sm font-medium text-accent lg:hidden">
          {milestone.year}
        </span>
        <Badge>{kindLabels[milestone.kind]}</Badge>
      </div>
      <h3
        className={cn(
          'm-0 mt-3 font-heading text-xl font-semibold text-primary',
          align === 'right' && 'lg:text-right',
        )}
      >
        {milestone.title}
      </h3>
      <p
        className={cn(
          'm-0 mt-2 leading-relaxed text-muted',
          align === 'right' && 'lg:text-right',
        )}
      >
        {milestone.body}
      </p>
      {milestone.projectSlug && (
        <div className={cn('mt-3', align === 'right' && 'lg:text-right')}>
          <Link
            to={`/projects/${milestone.projectSlug}`}
            className="font-mono text-sm text-accent no-underline hover:underline"
          >
            View project &rarr;
          </Link>
        </div>
      )}
    </Card>
  )
}
