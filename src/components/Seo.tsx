import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { buildPersonSchema, buildWebsiteSchema, buildFaqSchema } from '../seo/schemas'

export function Seo() {
  const { locale, data } = useLanguage()

  const personSchema = buildPersonSchema(data)
  const websiteSchema = buildWebsiteSchema(data, locale)
  const faqSchema = buildFaqSchema(data)

  useEffect(() => {
    document.getElementById('ld-person')!.textContent = JSON.stringify(personSchema)
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}