import { getSiteOrigin } from '@/config/site'

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${getSiteOrigin()}${normalized}`
}

export function toAbsoluteImageUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (typeof window !== 'undefined') {
    return new URL(normalized, window.location.origin).href
  }
  return absoluteUrl(normalized)
}
