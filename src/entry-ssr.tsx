import { renderToString } from 'react-dom/server'
import App from './App'
import { LanguageProvider, localePath, type Locale, type TranslationData } from './i18n/LanguageContext'
import { meta } from './i18n/meta'
import { data as esData } from './i18n/es'
import { data as enData } from './i18n/en'
import { buildPersonSchema, siteUrl } from './seo/schemas'

const dataMap: Record<Locale, TranslationData> = { es: esData, en: enData }

export function renderApp(locale: Locale): string {
  return renderToString(
    <LanguageProvider initialLocale={locale}>
      <App />
    </LanguageProvider>,
  )
}

export function localeHead(locale: Locale): {
  lang: string
  title: string
  description: string
  ogLocale: string
  canonical: string
  hreflangEs: string
  hreflangEn: string
  path: string
  personJsonLd: string
} {
  const m = meta[locale]
  const data = dataMap[locale]
  const path = localePath(locale)

  return {
    lang: locale,
    title: m.title,
    description: m.description,
    ogLocale: m.ogLocale,
    canonical: `${siteUrl}${path}`,
    hreflangEs: `${siteUrl}/`,
    hreflangEn: `${siteUrl}/en`,
    path,
    personJsonLd: JSON.stringify(buildPersonSchema(data)),
  }
}