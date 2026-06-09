import { ProjectImage } from '@/components/projects/ProjectImage'
import { Badge } from '@/components/ui/Badge'
import { Section } from '@/components/ui/Section'
import type { Project } from '@/types/project'
import { buttonVariants } from '@/lib/button-variants'
import { categoryLabels, isExternalUrl } from '@/lib/projects'
type ProjectDetailHeroProps = {
  project: Project
}

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  return (
    <Section className="py-0 md:py-0">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div>
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <Badge key={category}>{categoryLabels[category]}</Badge>
            ))}
          </div>

          <h1 className="m-0 mt-4 font-heading text-4xl font-semibold leading-tight text-primary sm:text-5xl">
            {project.title}
          </h1>
          <div className="gradient-rule mt-4" aria-hidden="true" />

          <p className="m-0 mt-4 text-lg text-muted">{project.tagline}</p>

          <p className="m-0 mt-4 font-mono text-sm text-muted">
            <span className="font-medium text-primary">{project.role}</span>
            {' · '}
            {project.dateRange.display}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: 'primary', size: 'md' })}
              >
                Live Demo
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: 'secondary', size: 'md' })}
              >
                Repository
              </a>
            )}
            {project.links.mobile &&
              (isExternalUrl(project.links.mobile) ? (
                <a
                  href={project.links.mobile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: 'secondary', size: 'md' })}
                >
                  Mobile App
                </a>
              ) : (
                <span className="inline-flex items-center rounded-button border border-border px-3 py-1.5 font-mono text-sm text-muted">
                  Mobile: {project.links.mobile}
                </span>
              ))}
          </div>
        </div>

        <div className="ink-shadow overflow-hidden border-2 border-border">
          <ProjectImage
            src={project.images.hero}
            alt={project.title}
            title={project.title}
            slug={project.slug}
            loading="eager"
            className="rounded-none border-0"
          />
        </div>
      </div>
    </Section>
  )
}
