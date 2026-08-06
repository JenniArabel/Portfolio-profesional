import { useEffect, useRef } from 'react'
import { trackEvent } from './useTrack'

const SECTION_IDS = ['inicio', 'sobre-mi', 'experiencia', 'habilidades', 'formacion', 'contacto']

export function useScrollDepth() {
  const tracked = useRef(new Set<string>())
  const enteredAt = useRef(new Map<string, number>())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id
          if (entry.isIntersecting) {
            if (!tracked.current.has(id)) {
              tracked.current.add(id)
              trackEvent('scroll_depth', { section: id })
            }
            enteredAt.current.set(id, Date.now())
          } else {
            const entryTime = enteredAt.current.get(id)
            if (entryTime) {
              const timeSpent = Math.round((Date.now() - entryTime) / 1000)
              if (timeSpent >= 3) {
                trackEvent('section_engagement', { section: id, time_spent_seconds: timeSpent })
              }
              enteredAt.current.delete(id)
            }
          }
        }
      },
      { threshold: 0.3 },
    )

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])
}
