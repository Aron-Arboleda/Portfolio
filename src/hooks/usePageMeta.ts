import { useEffect } from 'react'
import {
  defaultOgImage,
  defaultSeo,
  siteName,
  type PageMeta,
} from '@/config/seo'
import { getSiteOrigin } from '@/config/site'
import { toAbsoluteImageUrl } from '@/lib/urls'

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

function upsertMetaProperty(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`,
  )
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.appendChild(element)
  }
  element.content = content
}

function upsertMetaName(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.name = name
    document.head.appendChild(element)
  }
  element.content = content
}

function upsertLink(rel: string, href: string) {
  let element = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.rel = rel
    document.head.appendChild(element)
  }
  element.href = href
}

function applyPageMeta(meta: PageMeta) {
  const description = meta.description ?? defaultSeo.description
  const imagePath = meta.image ?? defaultOgImage
  const absoluteImage = toAbsoluteImageUrl(imagePath)
  const canonicalUrl = meta.path
    ? `${getSiteOrigin()}${meta.path}`
    : window.location.href.split('?')[0].split('#')[0]

  document.title = meta.title
  setMetaDescription(description)

  upsertMetaProperty('og:title', meta.title)
  upsertMetaProperty('og:description', description)
  upsertMetaProperty('og:image', absoluteImage)
  upsertMetaProperty('og:url', window.location.href.split('?')[0].split('#')[0])
  upsertMetaProperty('og:type', meta.type ?? 'website')
  upsertMetaProperty('og:site_name', siteName)

  upsertMetaName('twitter:card', 'summary_large_image')
  upsertMetaName('twitter:title', meta.title)
  upsertMetaName('twitter:description', description)
  upsertMetaName('twitter:image', absoluteImage)

  upsertLink('canonical', canonicalUrl)
}

export function usePageMeta(meta: PageMeta): void
export function usePageMeta(title: string, description?: string): void
export function usePageMeta(
  metaOrTitle: PageMeta | string,
  description?: string,
) {
  const title = typeof metaOrTitle === 'string' ? metaOrTitle : metaOrTitle.title
  const resolvedDescription =
    typeof metaOrTitle === 'string' ? description : metaOrTitle.description
  const image = typeof metaOrTitle === 'string' ? undefined : metaOrTitle.image
  const path = typeof metaOrTitle === 'string' ? undefined : metaOrTitle.path
  const type =
    typeof metaOrTitle === 'string' ? 'website' : (metaOrTitle.type ?? 'website')

  useEffect(() => {
    applyPageMeta({
      title,
      description: resolvedDescription,
      image,
      path,
      type,
    })
  }, [title, resolvedDescription, image, path, type])
}
