import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { trackEvent } from './useTrack'

describe('trackEvent', () => {
  beforeEach(() => {
    localStorage.clear()
    window.dataLayer = []
  })

  afterEach(() => {
    window.dataLayer = []
  })

  it('creates the dataLayer on first call', () => {
    trackEvent('click_nav')
    expect(window.dataLayer).toEqual([{ event: 'click_nav', locale: 'es' }])
  })

  it('pushes the event with the locale from localStorage', () => {
    localStorage.setItem('locale', 'en')
    trackEvent('click_nav')
    expect(window.dataLayer).toEqual([{ event: 'click_nav', locale: 'en' }])
  })

  it('defaults to es when no locale is stored', () => {
    trackEvent('click_nav')
    expect(window.dataLayer?.[0]).toMatchObject({ locale: 'es' })
  })

  it('spreads custom params over the base payload', () => {
    trackEvent('scroll_depth', { section: 'inicio', depth_percent: 50 })
    expect(window.dataLayer).toEqual([
      { event: 'scroll_depth', locale: 'es', section: 'inicio', depth_percent: 50 },
    ])
  })

  it('lets params override the locale', () => {
    trackEvent('custom', { locale: 'en' })
    expect(window.dataLayer?.[0]).toMatchObject({ event: 'custom', locale: 'en' })
  })

  it('appends to an existing dataLayer instead of replacing it', () => {
    window.dataLayer = [{ event: 'gtm.js' }]
    trackEvent('click_nav')
    expect(window.dataLayer).toHaveLength(2)
    expect(window.dataLayer?.[1]).toMatchObject({ event: 'click_nav' })
  })
})