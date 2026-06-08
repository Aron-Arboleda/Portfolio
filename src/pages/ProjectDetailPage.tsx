import { useParams } from 'react-router-dom'
import { PagePlaceholder } from '@/components/ui/PagePlaceholder'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <PagePlaceholder
      title={slug ? formatSlug(slug) : 'Project'}
      description={`Project detail page for "${slug ?? 'unknown'}". Full case study coming in Phase 5.`}
    />
  )
}

function formatSlug(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
