type TrackParams = Record<string, string | number | boolean>

function getLocale(): string {
  try {
    return localStorage.getItem('locale') ?? 'es'
  } catch {
    return 'es'
  }
}

export function trackEvent(event: string, params?: TrackParams) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, locale: getLocale(), ...params })
}
