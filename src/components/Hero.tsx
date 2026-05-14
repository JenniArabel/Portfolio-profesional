import { profile } from '../data/cv'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-zinc-800/80 bg-linear-to-b from-zinc-950 via-zinc-950 to-fuchsia-950/20"
    >
      <div
        className="pointer-events-none absolute -left-32 top-20 size-96 rounded-full bg-fuchsia-600/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-purple-600/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-fuchsia-400/90">
          Portfolio profesional
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {profile.name.split(' ')[0]}{' '}
          <span className="bg-linear-to-r from-fuchsia-400 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent">
            {profile.name.split(' ').slice(1).join(' ')}
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400 sm:text-xl">
          {profile.title}
          <span className="text-zinc-500"> · </span>
          <span className="text-zinc-300">{profile.headline}</span>
        </p>
        <p className="mt-2 text-sm text-zinc-500">{profile.location}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-xl bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:bg-fuchsia-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Contactar
          </a>
          <a
            href="#experiencia"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/50 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-fuchsia-500/50 hover:text-fuchsia-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500"
          >
            Ver experiencia
          </a>
        </div>
      </div>
    </section>
  )
}
