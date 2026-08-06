import { describe, expect, it } from 'vitest'
import { createT, localeFromPathname, localePath, type UiStrings } from './LanguageContext'

const ui: UiStrings = {
  skipLink: 'Saltar al contenido',
  nav: {
    switchLang: 'Cambiar a inglés',
    openMenu: 'Abrir menú',
    mainNav: 'Principal',
    mobileNav: 'Móvil',
    lightMode: 'Activar modo claro',
    darkMode: 'Activar modo oscuro',
  },
  hero: { portfolio: 'Portfolio profesional', contact: 'Contactar', viewExperience: 'Ver experiencia' },
  about: { title: 'Perfil profesional', focus: 'Enfoque y valores', quickSummary: 'Resumen rápido' },
  skills: { title: 'Skills técnicas', description: 'Descripción', softSkills: 'Soft skills' },
  experience: { title: 'Experiencia', description: 'Descripción' },
  education: { title: 'Educación', description: 'Descripción', certifications: 'Certificaciones' },
  contact: {
    title: 'Contacto',
    description: 'Descripción',
    email: 'Email',
    phone: 'Teléfono',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: { credit: 'Crédito' },
  downloadCv: {
    button: 'Descargar',
    summary: 'Resumen',
    technicalSkills: 'Técnicas',
    softSkills: 'Soft',
    education: 'Educación',
    certifications: 'Certificaciones',
  },
  interactiveBanner: { title: 'Título', description: 'Descripción', button: 'Botón' },
  seo: { websiteName: 'Nombre del sitio' },
}

const t = createT(ui)

describe('createT', () => {
  it('resolves a top-level key', () => {
    expect(t('skipLink')).toBe('Saltar al contenido')
  })

  it('resolves a nested dot-path key', () => {
    expect(t('nav.switchLang')).toBe('Cambiar a inglés')
    expect(t('nav.mainNav')).toBe('Principal')
    expect(t('downloadCv.technicalSkills')).toBe('Técnicas')
  })

  it('reads a value equal to a falsy but valid string', () => {
    expect(typeof t('skipLink')).toBe('string')
  })

  it('returns the raw key for an unknown top-level path', () => {
    expect(t('notAKey')).toBe('notAKey')
  })

  it('returns the raw key for an unknown nested path', () => {
    expect(t('nav.unknown')).toBe('nav.unknown')
    expect(t('nav.switchLang.deeper')).toBe('nav.switchLang.deeper')
  })

  it('returns the raw key when a segment is not an object', () => {
    expect(t('skipLink.children')).toBe('skipLink.children')
  })

  it('returns the raw key when the path traverses a missing segment', () => {
    expect(t('nav.contact.title')).toBe('nav.contact.title')
  })

  it('returns the raw key for an empty key', () => {
    expect(t('')).toBe('')
  })
})

describe('localeFromPathname', () => {
  it('detects en from /en and nested paths', () => {
    expect(localeFromPathname('/en')).toBe('en')
    expect(localeFromPathname('/en/#inicio')).toBe('en')
  })

  it('detects es from /es and nested paths', () => {
    expect(localeFromPathname('/es')).toBe('es')
    expect(localeFromPathname('/es#inicio')).toBe('es')
  })

  it('returns null for the root path and unknown paths', () => {
    expect(localeFromPathname('/')).toBeNull()
    expect(localeFromPathname('/contacto')).toBeNull()
  })
})

describe('localePath', () => {
  it('maps es to root and en to /en', () => {
    expect(localePath('es')).toBe('/')
    expect(localePath('en')).toBe('/en')
  })
})