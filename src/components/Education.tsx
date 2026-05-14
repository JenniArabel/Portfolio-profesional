import { certifications, education } from '../data/cv'

export function Education() {
  return (
    <section id="formacion" className="scroll-mt-24 border-b border-zinc-800/80 bg-zinc-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Educación
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Formación formal que complementa la práctica en proyectos reales y certificaciones.
        </p>

        <div className="mt-10 max-w-2xl space-y-6">
          {education.map((item) => (
            <div
              key={`${item.degree}-${item.period}`}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
              <p className="mt-2 text-fuchsia-300/90">{item.institution}</p>
              <p className="mt-4 text-sm text-zinc-500">{item.period}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl p-4 sm:p-8">
          <h3 className="font-display text-lg font-semibold text-white">Certificaciones</h3>
          <ul className="mt-4 space-y-3 text-sm text-zinc-400">
            {certifications.map((c) => (
              <li key={c} className="flex gap-3 border-l-2 border-fuchsia-500/40 pl-3">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
