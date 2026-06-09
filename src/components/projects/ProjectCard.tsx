import { Link } from 'react-router-dom'
import { ProjectImage } from '@/components/projects/ProjectImage'
import { TechStack } from '@/components/projects/TechStack'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import type { Project } from '@/types/project'
import { cn } from '@/lib/cn'

type ProjectCardProps = {
  project: Project
  bento?: boolean
  className?: string
}

export function ProjectCard({ project, bento = false, className }: ProjectCardProps) {
  const isFeaturedBento = bento && project.featured

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={cn('group block no-underline', className)}
    >
      <Card
        hover
        className={cn(
          'h-full overflow-hidden p-0',
          isFeaturedBento && 'motion-safe:group-hover:-rotate-1',
        )}
      >
        <div className={cn('relative overflow-hidden', isFeaturedBento && 'min-h-[220px]')}>
          <ProjectImage
            src={project.images.hero}
            alt={project.title}
            title={project.title}
            slug={project.slug}
            loading="lazy"
            className={cn(
              'rounded-none border-0',
              isFeaturedBento ? 'min-h-[220px] lg:min-h-[280px]' : undefined,
            )}
          />
          {isFeaturedBento && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent p-5 pt-16">
              <h3 className="m-0 font-heading text-2xl font-semibold text-inverse">
                {project.title}
              </h3>
            </div>
          )}
        </div>
        <div className={cn('p-5', isFeaturedBento && 'lg:pt-4')}>
          {!isFeaturedBento && (
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="m-0 font-heading text-lg font-semibold text-primary transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              {project.featured && <Badge>Featured</Badge>}
            </div>
          )}
          {isFeaturedBento && project.featured && (
            <div className="mb-2 lg:hidden">
              <Badge>Featured</Badge>
            </div>
          )}
          <p className="m-0 mt-1 font-mono text-xs text-muted">
            {project.dateRange.display}
          </p>
          <p className="m-0 mt-3 line-clamp-2 text-sm text-muted">
            {project.tagline}
          </p>
          <TechStack items={project.techStack} max={3} className="mt-4" />
        </div>
      </Card>
    </Link>
  )
}
