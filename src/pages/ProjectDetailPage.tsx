import { useParams } from 'react-router-dom'
import { ProjectDetailLayout } from '@/components/projects/detail/ProjectDetailLayout'
import { ProjectNotFound } from '@/components/projects/detail/ProjectNotFound'
import { getProjectBySlug } from '@/data/projects'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <ProjectNotFound slug={slug} />
  }

  return <ProjectDetailLayout project={project} />
}
