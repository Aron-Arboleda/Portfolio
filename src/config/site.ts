const envSiteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '')

export function getSiteOrigin(): string {
  if (envSiteUrl) return envSiteUrl
  if (typeof window !== 'undefined') return window.location.origin
  return 'http://localhost:4173'
}

export const siteUrl = getSiteOrigin()
