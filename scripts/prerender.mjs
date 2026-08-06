import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const root = join(scriptDir, '..')

// The SSR entry is compiled by Vite in build mode as ESM.
const { renderApp, localeHead } = await import(
  pathToFileURL(join(scriptDir, '..', 'dist-server', 'entry-ssr.js')).href
)

const template = await readFile(join(root, 'dist', 'index.html'), 'utf8')

function applyHead(html, head) {
  let out = html
  out = out.replace('<html lang="es"', `<html lang="${head.lang}"`)
  out = out.replace(/name="description"[\s\S]*?content="[^"]*"/, `name="description" content="${head.description}"`)
  out = out.replace(/property="og:title"[\s\S]*?content="[^"]*"/, `property="og:title" content="${head.title}"`)
  out = out.replace(
    /property="og:description"[\s\S]*?content="[^"]*"/,
    `property="og:description" content="${head.description}"`,
  )
  out = out.replace(/property="og:url" content="[^"]*"/, `property="og:url" content="${head.canonical}"`)
  out = out.replace(/property="og:locale" content="[^"]*"/, `property="og:locale" content="${head.ogLocale}"`)
  out = out.replace(/name="twitter:title"[\s\S]*?content="[^"]*"/, `name="twitter:title" content="${head.title}"`)
  out = out.replace(
    /name="twitter:description"[\s\S]*?content="[^"]*"/,
    `name="twitter:description" content="${head.description}"`,
  )
  out = out.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${head.canonical}"`)
  out = out.replace(
    /<link rel="alternate" hreflang="es" href="[^"]*"/,
    `<link rel="alternate" hreflang="es" href="${head.hreflangEs}"`,
  )
  out = out.replace(
    /<link rel="alternate" hreflang="en" href="[^"]*"/,
    `<link rel="alternate" hreflang="en" href="${head.hreflangEn}"`,
  )
  out = out.replace(
    /<link rel="alternate" hreflang="x-default" href="[^"]*"/,
    `<link rel="alternate" hreflang="x-default" href="${head.hreflangEs}"`,
  )
  out = out.replace(
    /(<script type="application\/ld\+json" id="ld-person">)[\s\S]*?(<\/script>)/,
    `$1${head.personJsonLd}$2`,
  )
  return out
}

for (const locale of ['es', 'en']) {
  const head = localeHead(locale)
  const appHtml = renderApp(locale)
  let doc = applyHead(template, head)
  // Inject server-rendered markup into the root div (before the module script).
  doc = doc.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  if (locale === 'en') {
    await mkdir(join(root, 'dist', 'en'), { recursive: true })
    await writeFile(join(root, 'dist', 'en', 'index.html'), doc)
  } else {
    await writeFile(join(root, 'dist', 'index.html'), doc)
  }
}

console.log('Prerendered es -> dist/index.html, en -> dist/en/index.html')