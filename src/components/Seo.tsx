import { profile, skillGroups, education, certifications, experience, softSkills } from '../data/cv'

const url = 'https://portfolio-jennifer-arabel.vercel.app'

const skills = skillGroups.flatMap((g) => g.items)

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  givenName: profile.name.split(' ')[0],
  familyName: profile.name.split(' ').slice(1).join(' '),
  jobTitle: profile.title,
  description: profile.summary.join(' '),
  url,
  image: `${url}/favicon.svg`,
  sameAs: [profile.linkedin, profile.github],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Curicó',
    addressCountry: 'CL',
  },
  knowsAbout: skills,
  alumniOf: education.map((e) => ({
    '@type': 'EducationalOrganization',
    name: e.institution,
  })),
  hasCredential: certifications.map((c) => ({
    '@type': 'EducationalOccupationalCredential',
    name: c,
  })),
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Jennifer Arabel | Frontend Developer',
  url,
  description: profile.summary[0],
  inLanguage: 'es-CL',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Quién es Jennifer Arabel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: profile.summary.join(' '),
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tecnologías domina Jennifer Arabel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: skills.join(', ') + '.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Dónde trabaja Jennifer Arabel actualmente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `${experience[0].role} en ${experience[0].company} (${experience[0].period}). ${experience[0].geoSummary}`,
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué experiencia laboral tiene Jennifer Arabel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: experience
          .map((e) => `${e.role} en ${e.company} (${e.period}): ${e.geoSummary}`)
          .join(' '),
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué certificaciones tiene Jennifer Arabel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: certifications.join(', ') + '.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Dónde está ubicada Jennifer Arabel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: profile.location,
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué estudió Jennifer Arabel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: education
          .map((e) => `${e.degree} en ${e.institution} (${e.period})`)
          .join(', ') + '.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuáles son las habilidades blandas de Jennifer Arabel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: softSkills.join(', ') + '.',
      },
    },
  ],
}

export function Seo() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
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
