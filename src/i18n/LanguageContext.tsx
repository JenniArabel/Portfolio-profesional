/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { ui as esUi, data as esData } from './es'
import { ui as enUi, data as enData } from './en'
import { trackEvent } from '../hooks/useTrack'

export type Locale = 'es' | 'en'

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

function getInitialLocale(): Locale {
  const saved = localStorage.getItem('locale') as Locale | null
  if (saved === 'es' || saved === 'en') return saved
  return 'es'
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

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const value: LanguageContextValue = {
    locale,
    setLocale: setLocaleState,
    t: createT(uiMap[locale]),
    data: dataMap[locale],
  }

  useEffect(() => {
    localStorage.setItem('locale', locale)
    document.documentElement.lang = locale

    const descMap: Record<Locale, string> = {
      es: 'Jennifer Arabel — Frontend Developer especializada en React, Angular y TypeScript. Experiencia en microfrontends, Single-SPA y APIs REST. Curicó, Chile.',
      en: 'Jennifer Arabel — Frontend Developer specialized in React, Angular and TypeScript. Experience in microfrontends, Single-SPA and REST APIs. Available for remote work.',
    }
    const title = 'Jennifer Arabel | Frontend Developer — React & Angular'
    const desc = descMap[locale]

    document.querySelector('meta[name="description"]')?.setAttribute('content', desc)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', desc)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', desc)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', locale === 'es' ? 'es_CL' : 'en_US')
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
