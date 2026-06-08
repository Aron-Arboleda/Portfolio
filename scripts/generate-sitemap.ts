import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getAllProjectSlugs } from '../src/data/projects/index.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

const siteUrl = (process.env.VITE_SITE_URL ?? 'http://localhost:4173').replace(
  /\/$/,
  '',
)

const lastmod = new Date().toISOString().split('T')[0]

const staticRoutes = [
  { path: '/', priority: '1.0' },
  { path: '/about', priority: '0.7' },
  { path: '/journey', priority: '0.7' },
  { path: '/projects', priority: '0.8' },
  { path: '/experience', priority: '0.7' },
  { path: '/contact', priority: '0.7' },
] as const

type SitemapEntry = {
  loc: string
  priority: string
}

const entries: SitemapEntry[] = [
  ...staticRoutes.map((route) => ({
    loc: `${siteUrl}${route.path}`,
    priority: route.priority,
  })),
  ...getAllProjectSlugs().map((slug) => ({
    loc: `${siteUrl}/projects/${slug}`,
    priority: '0.8',
  })),
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

writeFileSync(join(publicDir, 'sitemap.xml'), sitemap, 'utf8')
writeFileSync(join(publicDir, 'robots.txt'), robots, 'utf8')

console.log(
  `Generated sitemap.xml and robots.txt (${entries.length} URLs, base: ${siteUrl})`,
)
