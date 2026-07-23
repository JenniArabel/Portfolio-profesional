type TrackParams = Record<string, string | number | boolean>

export function trackEvent(event: string, params?: TrackParams) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}
