import { experience } from '../data/cv'

export function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-24 border-b border-border/80 bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-text-heading sm:text-3xl">
          Experiencia profesional
        </h2>
        <p className="mt-3 max-w-2xl text-text-muted">
          Roles recientes donde combino frontend, datos y automatización.
        </p>

        <ol className="relative mt-12 space-y-10 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-linear-to-b before:from-fuchsia-500/60 before:via-zinc-700 before:to-transparent sm:before:left-[11px]">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`} className="relative pl-8 sm:pl-12">
                <span
                  className="absolute left-0 top-1.5 flex size-[15px] items-center justify-center rounded-full border-2 border-fuchsia-500/80 bg-surface sm:left-1 sm:size-[19px]"
                aria-hidden
              >
                <span className="size-2 rounded-full bg-fuchsia-400 sm:size-2.5" />
              </span>
              <article className="rounded-2xl border border-border bg-surface-card/40 p-6 transition hover:border-fuchsia-500/30 hover:shadow-lg hover:shadow-fuchsia-950/20 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-text-heading">{job.role}</h3>
                    <p className="text-fuchsia-300/90">{job.company}</p>
                  </div>
                  <p className="shrink-0 text-sm text-text-subtle">{job.period}</p>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-text-muted">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-fuchsia-500/70" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
