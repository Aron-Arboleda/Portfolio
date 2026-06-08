import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getExpectedImagePaths, toPublicPath } from './image-paths.ts'

const warnOnly = process.argv.includes('--warn')
const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const missing = getExpectedImagePaths().filter((webPath) => {
  const filePath = join(root, toPublicPath(webPath))
  return !existsSync(filePath)
})

if (missing.length === 0) {
  console.log(`All ${getExpectedImagePaths().length} expected image files are present.`)
  process.exit(0)
}

console.log(`Missing ${missing.length} image file(s):\n`)
for (const path of missing) {
  console.log(`  - ${toPublicPath(path)}`)
}
console.log('\nSee public/images/README.md for the full asset checklist.')

process.exit(warnOnly ? 0 : 1)
