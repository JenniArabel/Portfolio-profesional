import { profile } from '../data/cv'

export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-24 border-b border-border/80 bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-text-heading sm:text-3xl">
            Perfil profesional
          </h2>
          <p className="mt-3 text-sm font-medium uppercase tracking-wider text-fuchsia-400/90">
            Enfoque y valores
          </p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="space-y-5 text-base leading-relaxed text-text-muted">
            {profile.summary.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <aside className="rounded-2xl border border-border bg-linear-to-br from-surface-card/80 to-fuchsia-950/20 p-6 shadow-xl shadow-fuchsia-900/10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-fuchsia-300">
              Resumen rápido
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-text-body">
              <li className="flex gap-2">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-fuchsia-500" aria-hidden />
                Microfrontends, Single-SPA con React y Angular
              </li>
              <li className="flex gap-2">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-fuchsia-500" aria-hidden />
                Consumo y manejo de APIs REST
              </li>
              <li className="flex gap-2">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-fuchsia-500" aria-hidden />
                Metodologías Ágiles (Scrum)
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
