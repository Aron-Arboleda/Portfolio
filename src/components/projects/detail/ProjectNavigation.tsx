import { Link } from 'react-router-dom'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Divider } from '@/components/ui/Divider'
import { getAdjacentProjects } from '@/data/projects'

type ProjectNavigationProps = {
  slug: string
}

export function ProjectNavigation({ slug }: ProjectNavigationProps) {
  const { prev, next } = getAdjacentProjects(slug)

  return (
    <div className="border-t border-border pt-8">
      <Divider className="mb-8" />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          {prev ? (
            <Link
              to={`/projects/${prev.slug}`}
              className="group block no-underline"
              aria-label={`Previous project: ${prev.title}`}
            >
              <span className="text-xs uppercase tracking-widest text-muted">
                Previous
              </span>
              <span className="mt-1 line-clamp-2 block font-heading text-primary transition-colors group-hover:text-accent">
                &larr; {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </div>

        <ButtonLink to="/projects" variant="ghost" className="shrink-0">
          All projects
        </ButtonLink>

        <div className="min-w-0 flex-1 sm:text-right">
          {next ? (
            <Link
              to={`/projects/${next.slug}`}
              className="group block no-underline"
              aria-label={`Next project: ${next.title}`}
            >
              <span className="text-xs uppercase tracking-widest text-muted">
                Next
              </span>
              <span className="mt-1 line-clamp-2 block font-heading text-primary transition-colors group-hover:text-accent">
                {next.title} &rarr;
              </span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  )
}
