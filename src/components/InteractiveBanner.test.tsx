import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { LanguageProvider } from '../i18n/LanguageContext'
import { InteractiveBanner } from './InteractiveBanner'

function renderBanner() {
  return render(
    <LanguageProvider>
      <InteractiveBanner />
    </LanguageProvider>,
  )
}

function interactionEvents(): Array<Record<string, unknown>> {
  return (window.dataLayer as Array<Record<string, unknown>>).filter((e) => e.event === 'interaction')
}

beforeEach(() => {
  localStorage.clear()
  window.dataLayer = []
  vi.useFakeTimers()
})

afterEach(() => {
  cleanup()
  vi.useRealTimers()
})

describe('InteractiveBanner', () => {
  it('starts with a persisted count from localStorage', () => {
    localStorage.setItem('boost-count', '42')
    renderBanner()
    expect(localStorage.getItem('boost-count')).toBe('42')
  })

  it('increments the count and persists it on click', () => {
    renderBanner()
    const button = screen.getByRole('button', { name: /Dale impulso/i })
    fireEvent.click(button)

    expect(localStorage.getItem('boost-count')).toBe('1')
    expect(interactionEvents()).toEqual([
      {
        event: 'interaction',
        interaction_type: 'banner_click',
        label: 'boost_portfolio',
        locale: 'es',
        value: 1,
      },
    ])
  })

  it('ignores rapid double clicks while an animation is running', () => {
    renderBanner()
    const button = screen.getByRole('button', { name: /Dale impulso/i })
    fireEvent.click(button)
    fireEvent.click(button)

    expect(localStorage.getItem('boost-count')).toBe('1')
    expect(interactionEvents()).toHaveLength(1)
  })

  it('shows confetti on click and clears it after the animation', async () => {
    renderBanner()
    const button = screen.getByRole('button', { name: /Dale impulso/i })

    fireEvent.click(button)
    expect(document.querySelector('.pointer-events-none')).not.toBeNull()

    await act(async () => {
      vi.advanceTimersByTime(1100)
    })
    expect(document.querySelector('.pointer-events-none')).toBeNull()
  })

  it('allows a new click once the animation is over', async () => {
    renderBanner()
    const button = screen.getByRole('button', { name: /Dale impulso/i })

    fireEvent.click(button)
    await act(async () => {
      vi.advanceTimersByTime(1200)
    })
    fireEvent.click(button)

    expect(localStorage.getItem('boost-count')).toBe('2')
    expect(interactionEvents()).toHaveLength(2)
    expect(interactionEvents()[1].value).toBe(2)
  })
})