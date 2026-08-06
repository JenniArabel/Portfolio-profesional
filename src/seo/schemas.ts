import { profile } from '../data/cv'
import type { Locale, TranslationData } from '../i18n/LanguageContext'

export const siteUrl = 'https://portfolio-jennifer-arabel.vercel.app'

export function buildPersonSchema(data: TranslationData) {
  const skills = data.skillGroups.flatMap((g) => g.items)

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    givenName: profile.name.split(' ')[0],
    familyName: profile.name.split(' ').slice(1).join(' '),
    jobTitle: profile.title,
    description: data.summary.join(' '),
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
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
}

export function buildWebsiteSchema(data: TranslationData, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Jennifer Arabel | Frontend Developer',
    url: siteUrl,
    description: data.summary[0],
    inLanguage: locale === 'es' ? 'es-CL' : 'en-US',
  }
}

export function buildFaqSchema(data: TranslationData) {
  return {
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
}
