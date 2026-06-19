import { profile } from '../data/cv'

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-text-heading sm:text-3xl">
          Contacto
        </h2>
        <p className="mt-3 max-w-2xl text-text-muted">
          ¿Tienes un proyecto o una oportunidad? Escríbeme por el canal que prefieras.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${profile.email}`}
            className="group rounded-2xl border border-border bg-surface-card/40 p-6 transition hover:border-fuchsia-500/40 hover:shadow-lg hover:shadow-fuchsia-950/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-fuchsia-400/90">
              Email
            </span>
            <p className="mt-2 break-all text-sm font-medium text-text-heading group-hover:text-fuchsia-200">
              {profile.email}
            </p>
          </a>

          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="group rounded-2xl border border-border bg-surface-card/40 p-6 transition hover:border-fuchsia-500/40 hover:shadow-lg hover:shadow-fuchsia-950/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-fuchsia-400/90">
              Teléfono
            </span>
            <p className="mt-2 text-sm font-medium text-text-heading group-hover:text-fuchsia-200">
              {profile.phone}
            </p>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="group rounded-2xl border border-border bg-surface-card/40 p-6 transition hover:border-fuchsia-500/40 hover:shadow-lg hover:shadow-fuchsia-950/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-fuchsia-400/90">
              LinkedIn
            </span>
            <p className="mt-2 text-sm font-medium text-text-heading group-hover:text-fuchsia-200">
              linkedin.com/in/jenniferarabel
            </p>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="group rounded-2xl border border-border bg-surface-card/40 p-6 transition hover:border-fuchsia-500/40 hover:shadow-lg hover:shadow-fuchsia-950/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-fuchsia-400/90">
              GitHub
            </span>
            <p className="mt-2 text-sm font-medium text-text-heading group-hover:text-fuchsia-200">
              github.com/JenniArabel
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}
