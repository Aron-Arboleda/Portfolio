import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/Badge'
import { PageShell } from '@/components/ui/PageShell'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { getAllProjects } from '@/data/projects'

export default function ProjectsPage() {
  const allProjects = getAllProjects()

  return (
    <PageShell className="py-16 sm:py-24">
      <Section className="py-0 md:py-0">
        <SectionHeading
          title="Projects"
          subtitle="All projects from my portfolio. Full grid and filters coming in Phase 4."
          titleAs="h1"
        />

        <ul className="m-0 mt-10 flex list-none flex-col gap-4 p-0">
          {allProjects.map((project) => (
            <li key={project.slug}>
              <Link
                to={`/projects/${project.slug}`}
                className="group flex flex-col gap-2 rounded-card border border-border bg-surface-elevated p-5 no-underline transition-colors hover:border-accent sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-heading text-lg text-primary group-hover:text-accent">
                      {project.title}
                    </span>
                    {project.featured && <Badge>Featured</Badge>}
                  </div>
                  <p className="m-0 mt-1 text-sm text-muted">
                    {project.dateRange.display}
                  </p>
                </div>
                <p className="m-0 max-w-md text-sm text-muted sm:text-right">
                  {project.tagline}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </PageShell>
  )
}
