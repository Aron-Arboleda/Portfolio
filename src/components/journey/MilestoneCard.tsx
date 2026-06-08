import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/Badge'
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
  className?: string
}

export function MilestoneCard({ milestone, className }: MilestoneCardProps) {
  return (
    <div className={cn(className)}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-heading text-2xl text-accent lg:text-3xl">
          {milestone.year}
        </span>
        <Badge>{kindLabels[milestone.kind]}</Badge>
      </div>
      <h3 className="m-0 mt-3 font-heading text-xl text-primary">
        {milestone.title}
      </h3>
      <p className="m-0 mt-2 max-w-2xl leading-relaxed text-muted">
        {milestone.body}
      </p>
      {milestone.projectSlug && (
        <Link
          to={`/projects/${milestone.projectSlug}`}
          className="mt-3 inline-block text-sm text-accent no-underline hover:underline"
        >
          View project &rarr;
        </Link>
      )}
    </div>
  )
}
