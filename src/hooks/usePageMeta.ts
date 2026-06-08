import { useEffect } from 'react'
import { defaultSeo } from '@/config/seo'

const META_DESCRIPTION_SELECTOR = 'meta[name="description"]'

function setMetaDescription(content: string) {
  let element = document.querySelector<HTMLMetaElement>(META_DESCRIPTION_SELECTOR)
  if (!element) {
    element = document.createElement('meta')
    element.name = 'description'
    document.head.appendChild(element)
  }
  element.content = content
}

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title
    setMetaDescription(description ?? defaultSeo.description)
  }, [title, description])
}
