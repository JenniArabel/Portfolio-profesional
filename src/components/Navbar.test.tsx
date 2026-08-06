import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { LanguageProvider } from '../i18n/LanguageContext'
import { ThemeProvider } from '../ThemeContext'
import { Navbar } from './Navbar'

function renderNavbar() {
  return render(
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>
    </ThemeProvider>,
  )
}

beforeEach(() => {
  localStorage.clear()
  localStorage.setItem('theme', 'dark')
  window.dataLayer = []
})

afterEach(() => {
  cleanup()
  localStorage.clear()
  document.documentElement.classList.remove('light')
  window.history.replaceState(null, '', '/')
})

describe('Navbar', () => {
  it('toggles the theme and persists it to the document and localStorage', () => {
    renderNavbar()

    const themeButton = screen.getByRole('button', { name: 'Activar modo claro' })
    expect(themeButton).toBeInTheDocument()
    expect(document.documentElement.classList.contains('light')).toBe(false)

    fireEvent.click(themeButton)

    expect(document.documentElement.classList.contains('light')).toBe(true)
    expect(localStorage.getItem('theme')).toBe('light')

    fireEvent.click(screen.getByRole('button', { name: 'Activar modo oscuro' }))
    expect(localStorage.getItem('theme')).toBe('dark')
    expect(document.documentElement.classList.contains('light')).toBe(false)
  })

  it('switches the locale and updates the UI strings', () => {
    renderNavbar()

    const langButton = screen.getByRole('button', { name: 'Cambiar a inglés' })
    fireEvent.click(langButton)

    expect(localStorage.getItem('locale')).toBe('en')
    expect(screen.getByRole('button', { name: 'Switch to Spanish' })).toBeInTheDocument()
  })

  it('updates the URL path when the locale is switched', () => {
    renderNavbar()

    fireEvent.click(screen.getByRole('button', { name: 'Cambiar a inglés' }))
    expect(window.location.pathname).toBe('/en')

    fireEvent.click(screen.getByRole('button', { name: 'Switch to Spanish' }))
    expect(window.location.pathname).toBe('/')
  })

  it('toggles the locale back from en to es', () => {
    localStorage.setItem('locale', 'en')
    renderNavbar()

    fireEvent.click(screen.getByRole('button', { name: 'Switch to Spanish' }))
    expect(localStorage.getItem('locale')).toBe('es')
    expect(screen.getByRole('button', { name: 'Cambiar a inglés' })).toBeInTheDocument()
  })
})