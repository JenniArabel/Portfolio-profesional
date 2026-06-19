import { profile, skillGroups, education, certifications } from '../data/cv'

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
    </>
  )
}
