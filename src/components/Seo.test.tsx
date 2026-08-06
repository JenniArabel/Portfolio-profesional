import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { LanguageProvider, useLanguage, type Locale } from '../i18n/LanguageContext'
import { Seo } from './Seo'

function Toggle() {
  const { locale, setLocale } = useLanguage()
  return (
    <button type="button" onClick={() => setLocale((locale === 'es' ? 'en' : 'es') as Locale)}>
      toggle
    </button>
  )
}

function App() {
  return (
    <LanguageProvider>
      <Toggle />
      <Seo />
    </LanguageProvider>
  )
}

function personScriptText(): string | null {
  return document.getElementById('ld-person')?.textContent ?? null
}

beforeEach(() => {
  document.body.innerHTML = ''
  const script = document.createElement('script')
  script.id = 'ld-person'
  script.type = 'application/ld+json'
  document.body.appendChild(script)
})

afterEach(() => {
  cleanup()
})

describe('Seo #ld-person regression', () => {
  it('renders exactly one #ld-person script element', () => {
    render(<App />)
    expect(document.querySelectorAll('#ld-person')).toHaveLength(1)
  })

  it('writes the person schema with profile name and locale-agnostic fields', () => {
    render(<App />)
    const schema = JSON.parse(personScriptText() ?? 'null')
    expect(schema['@type']).toBe('Person')
    expect(schema.name).toBe('Jennifer Arabel')
    expect(schema.url).toBe('https://portfolio-jennifer-arabel.vercel.app')
    expect(schema.address.addressCountry).toBe('CL')
  })

  it('updates locale-dependent content when the locale changes', () => {
    render(<App />)
    const before = JSON.parse(personScriptText() ?? 'null').description

    fireEvent.click(screen.getByRole('button', { name: 'toggle' }))
    const after = JSON.parse(personScriptText() ?? 'null').description

    expect(after).not.toBe(before)
    expect(after.length).toBeGreaterThan(0)
  })

  it('never leaves stale duplicate #ld-person nodes after a locale switch', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'toggle' }))
    expect(document.querySelectorAll('#ld-person')).toHaveLength(1)
  })
})