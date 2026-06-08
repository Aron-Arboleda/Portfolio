import { useState } from 'react'
import { ProjectImage } from '@/components/projects/ProjectImage'
import { Section } from '@/components/ui/Section'
import { ImageLightbox } from '@/components/projects/detail/ImageLightbox'
import type { Project } from '@/types/project'
import { getGalleryImages, imagePathToCaption } from '@/lib/projects'

type ProjectGalleryProps = {
  project: Project
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const sources = getGalleryImages(project)
  const images = sources.map((src) => ({
    src,
    caption: imagePathToCaption(src),
  }))

  if (images.length === 0) return null

  return (
    <Section title="Gallery" className="py-12 md:py-16">
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group cursor-pointer border-0 bg-transparent p-0 text-left"
            aria-label={`View ${image.caption}`}
          >
            <ProjectImage
              src={image.src}
              alt={`${project.title} — ${image.caption}`}
              title={project.title}
              slug={project.slug}
              className="transition-opacity group-hover:opacity-90"
            />
            <p className="m-0 mt-2 text-sm text-muted">{image.caption}</p>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <ImageLightbox
          images={images}
          activeIndex={activeIndex}
          projectTitle={project.title}
          projectSlug={project.slug}
          onClose={() => setActiveIndex(null)}
          onPrev={() => setActiveIndex((index) => Math.max(0, (index ?? 0) - 1))}
          onNext={() =>
            setActiveIndex((index) =>
              Math.min(images.length - 1, (index ?? 0) + 1),
            )
          }
        />
      )}
    </Section>
  )
}
