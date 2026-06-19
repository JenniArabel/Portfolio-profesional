import { useCallback, useEffect, useRef, useState } from 'react'

type Particle = {
  id: number
  dx: number
  dy: number
  gravity: number
  spin: number
  color: string
  size: number
  delay: number
  shape: 'square' | 'circle'
}

const COLORS = [
  '#d946ef',
  '#a855f7',
  '#818cf8',
  '#22d3ee',
  '#f472b6',
  '#fb923c',
  '#fbbf24',
  '#4ade80',
]

const COUNT = 50

function createParticles(): Particle[] {
  return Array.from({ length: COUNT }, (_, i) => ({
    id: Date.now() + i,
    dx: (Math.random() - 0.5) * 500,
    dy: -Math.random() * 300 - 50,
    gravity: Math.random() * 180 + 60,
    spin: (Math.random() - 0.5) * 1440,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size: Math.random() * 8 + 6,
    delay: Math.random() * 60,
    shape: Math.random() > 0.5 ? 'square' : 'circle',
  }))
}

const ANIMATION_DURATION = 1100

export function InteractiveBanner() {
  const [count, setCount] = useState(() => {
    try {
      return Number(localStorage.getItem('boost-count')) || 0
    } catch {
      return 0
    }
  })
  const [particles, setParticles] = useState<Particle[]>([])
  const animatingRef = useRef(false)

  useEffect(() => {
    if (particles.length === 0) return
    const timer = setTimeout(() => {
      setParticles([])
      animatingRef.current = false
    }, ANIMATION_DURATION)
    return () => clearTimeout(timer)
  }, [particles])

  const handleClick = useCallback(() => {
    if (animatingRef.current) return
    animatingRef.current = true

    const newCount = count + 1
    setCount(newCount)
    try {
      localStorage.setItem('boost-count', String(newCount))
    } catch {}

    const w = window as { dataLayer?: Record<string, unknown>[] }
    w.dataLayer?.push({
      event: 'interaction',
      interaction_type: 'banner_click',
      label: 'boost_portfolio',
      value: newCount,
    })

    setParticles(createParticles())
  }, [count])

  return (
    <section className="relative overflow-hidden border-b border-border/80 bg-linear-to-r from-surface via-fuchsia-950/10 to-surface">
      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
          55% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--dx), calc(var(--dy) + var(--gravity))) rotate(var(--spin)) scale(0.2);
            opacity: 0;
          }
        }
      `}</style>

      {particles.length > 0 && (
        <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden>
          {particles.map((p) => (
            <span
              key={p.id}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                width: p.size,
                height: p.size * 1.6,
                borderRadius: p.shape === 'circle' ? '50%' : '2px',
                backgroundColor: p.color,
                ['--dx' as string]: `${p.dx}px`,
                ['--dy' as string]: `${p.dy}px`,
                ['--gravity' as string]: `${p.gravity}px`,
                ['--spin' as string]: `${p.spin}deg`,
                animation: `confetti-fall ${ANIMATION_DURATION}ms ${p.delay}ms ease-out forwards`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}

      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-display text-lg font-semibold text-text-heading">
              ¿Me ayudas a crecer?
            </p>
            <p className="mt-0.5 text-sm text-text-muted">
                Interactúa con este botón y genera datos para mi{' '}
              <span className="font-medium text-fuchsia-400/80">Google Analytics</span>
            </p>
          </div>

          <button
            type="button"
            onClick={handleClick}
            className="group relative inline-flex cursor-pointer items-center gap-2.5 rounded-xl bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition-all hover:bg-fuchsia-400 hover:shadow-fuchsia-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:scale-95"
          >
            <span className="flex items-center gap-2">
              <span className="inline-block transition-transform duration-200 group-hover:scale-110">
                ✨
              </span>
              Dale impulso
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
