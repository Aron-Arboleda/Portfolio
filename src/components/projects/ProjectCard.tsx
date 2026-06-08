import { Link } from 'react-router-dom'
import { ProjectImage } from '@/components/projects/ProjectImage'
import { TechStack } from '@/components/projects/TechStack'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import type { Project } from '@/types/project'
import { cn } from '@/lib/cn'

type ProjectCardProps = {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={cn('group block no-underline', className)}
    >
      <Card hover className="h-full overflow-hidden p-0">
        <div className="overflow-hidden">
          <ProjectImage
            src={project.images.hero}
            alt={project.title}
            title={project.title}
            slug={project.slug}
            className="rounded-none border-0 transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
        <div className="p-5">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="m-0 font-heading text-lg text-primary transition-colors group-hover:text-accent">
              {project.title}
            </h3>
            {project.featured && <Badge>Featured</Badge>}
          </div>
          <p className="m-0 mt-1 text-xs text-muted">{project.dateRange.display}</p>
          <p className="m-0 mt-3 line-clamp-2 text-sm text-muted">
            {project.tagline}
          </p>
          <TechStack items={project.techStack} max={3} className="mt-4" />
        </div>
      </Card>
    </Link>
  )
}
