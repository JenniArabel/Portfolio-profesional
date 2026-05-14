import { education } from '../data/cv'

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

        <div className="mt-10 max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
          <p className="mt-2 text-fuchsia-300/90">{education.institution}</p>
          <p className="mt-4 text-sm text-zinc-500">{education.period}</p>
        </div>
      </div>
    </section>
  )
}
