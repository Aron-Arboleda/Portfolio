import { ButtonLink } from '@/components/ui/ButtonLink'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import type { Experience } from '@/types/experience'
import { buttonVariants } from '@/lib/button-variants'

type ExperienceCardProps = {
  experience: Experience
}

const typeLabels: Record<Experience['type'], string> = {
  freelance: 'Freelance',
  'full-time': 'Full-time',
  internship: 'Internship',
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card>
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="m-0 font-heading text-xl font-semibold text-primary">
          {experience.title}
        </h3>
        <Badge>{typeLabels[experience.type]}</Badge>
      </div>
      <p className="m-0 mt-2 font-mono text-sm text-muted">
        {experience.dateRange.display} &middot; {experience.location}
      </p>
      <p className="m-0 mt-4 font-medium text-primary">
        {experience.deliverable}
      </p>
      <p className="m-0 mt-2 text-sm leading-relaxed text-muted">
        {experience.details}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        {experience.link && (
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'primary', size: 'md' })}
          >
            View Live
          </a>
        )}
        {experience.projectSlug && (
          <ButtonLink
            to={`/projects/${experience.projectSlug}`}
            variant="secondary"
          >
            View Project
          </ButtonLink>
        )}
      </div>
    </Card>
  )
}
