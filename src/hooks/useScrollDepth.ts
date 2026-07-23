import { useEffect, useRef } from 'react'
import { trackEvent } from './useTrack'

const SECTION_IDS = ['inicio', 'sobre-mi', 'experiencia', 'habilidades', 'formacion', 'contacto']

export function useScrollDepth() {
  const tracked = useRef(new Set<string>())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id
            if (!tracked.current.has(id)) {
              tracked.current.add(id)
              trackEvent('scroll_depth', { section: id })
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
