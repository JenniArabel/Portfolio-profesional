import { useEffect } from 'react'
import { profile } from '../data/cv'
import { useLanguage } from '../i18n/LanguageContext'

const url = 'https://portfolio-jennifer-arabel.vercel.app'

export function Seo() {
  const { locale, data } = useLanguage()

  const skills = data.skillGroups.flatMap((g) => g.items)

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    givenName: profile.name.split(' ')[0],
    familyName: profile.name.split(' ').slice(1).join(' '),
    jobTitle: profile.title,
    description: data.summary.join(' '),
    url,
    image: `${url}/og-image.png`,
    email: profile.email,
    telephone: profile.phone.replace(/\s/g, ''),
    sameAs: [profile.linkedin, profile.github],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Curicó',
      addressCountry: 'CL',
    },
    knowsAbout: skills,
    alumniOf: data.education.map((e) => ({
      '@type': 'EducationalOrganization',
      name: e.institution,
    })),
    hasCredential: data.certifications.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c,
    })),
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Jennifer Arabel | Frontend Developer',
    url,
    description: data.summary[0],
    inLanguage: locale === 'es' ? 'es-CL' : 'en-US',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

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
