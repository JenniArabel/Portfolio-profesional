/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { ui as esUi, data as esData } from './es'
import { ui as enUi, data as enData } from './en'
import { meta } from './meta'
import { trackEvent } from '../hooks/useTrack'

export type Locale = 'es' | 'en'

export function localeFromPathname(pathname: string): Locale | null {
  if (pathname.startsWith('/en')) return 'en'
  if (pathname.startsWith('/es')) return 'es'
  return null
}

export type TranslationData = {
  summary: string[]
  experience: {
    role: string
    company: string
    period: string
    highlights: string[]
    geoSummary: string
  }[]
  skillGroups: { label: string; items: string[] }[]
  education: { degree: string; institution: string; period: string }[]
  certifications: string[]
  softSkills: string[]
  navLinks: { id: string; label: string }[]
  aboutBullets: string[]
  faq: { question: string; answer: string }[]
}

export type UiStrings = {
  skipLink: string
  nav: {
    switchLang: string
    openMenu: string
    mainNav: string
    mobileNav: string
    lightMode: string
    darkMode: string
  }
  hero: {
    portfolio: string
    contact: string
    viewExperience: string
  }
  about: { title: string; focus: string; quickSummary: string }
  skills: { title: string; description: string; softSkills: string }
  experience: { title: string; description: string }
  education: { title: string; description: string; certifications: string }
  contact: {
    title: string
    description: string
    email: string
    phone: string
    linkedin: string
    github: string
  }
  footer: { credit: string }
  downloadCv: {
    button: string
    summary: string
    technicalSkills: string
    softSkills: string
    education: string
    certifications: string
  }
  interactiveBanner: { title: string; description: string; button: string }
  seo: { websiteName: string }
}

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  data: TranslationData
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const uiMap: Record<Locale, UiStrings> = { es: esUi, en: enUi }
const dataMap: Record<Locale, TranslationData> = { es: esData, en: enData }

function getInitialLocale(preferred?: Locale): Locale {
  if (preferred === 'es' || preferred === 'en') return preferred
  if (typeof window === 'undefined') return 'es'
  const fromPath = localeFromPathname(window.location.pathname)
  if (fromPath) return fromPath
  const saved = localStorage.getItem('locale') as Locale | null
  if (saved === 'es' || saved === 'en') return saved
  return 'es'
}

export function localePath(locale: Locale): string {
  return locale === 'en' ? '/en' : '/'
}

export function createT(ui: UiStrings): (key: string) => string {
  return (key: string) => {
    const keys = key.split('.')
    let result: unknown = ui
    for (const k of keys) {
      if (result == null || typeof result !== 'object') return key
      result = (result as Record<string, unknown>)[k]
    }
    return (typeof result === 'string' ? result : key) as string
  }
}

export function LanguageProvider({
  children,
  initialLocale,
}: {
  children: ReactNode
  initialLocale?: Locale
}) {
  const [locale, setLocaleState] = useState<Locale>(() => getInitialLocale(initialLocale))

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    if (typeof window !== 'undefined') {
      const path = localePath(next)
      const current = window.location.pathname
      if (localeFromPathname(current) !== null || current === '/') {
        window.history.replaceState(null, '', path + window.location.hash)
      }
    }
  }

  const value: LanguageContextValue = {
    locale,
    setLocale,
    t: createT(uiMap[locale]),
    data: dataMap[locale],
  }

  useEffect(() => {
    localStorage.setItem('locale', locale)
    document.documentElement.lang = locale

    const { title, description, ogLocale } = meta[locale]

    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', ogLocale)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title)
    const titleTag = document.querySelector('title')
    if (titleTag) titleTag.textContent = title

    trackEvent('virtual_page_view', {
      page_title: document.title,
      page_location: window.location.href,
    })
  }, [locale])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
