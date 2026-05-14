import { skillGroups, softSkills } from '../data/cv'

export function Skills() {
  return (
    <section id="habilidades" className="scroll-mt-24 border-b border-zinc-800/80 bg-zinc-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Skills técnicas
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Stack y herramientas alineadas a desarrollo frontend, integración y calidad de código.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-fuchsia-300/90">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="inline-flex rounded-lg border border-zinc-700/80 bg-zinc-950/80 px-3 py-1.5 text-xs font-medium text-zinc-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-white">Soft skills</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <li key={s}>
                  <span className="inline-flex rounded-full bg-fuchsia-500/10 px-4 py-2 text-xs font-medium text-fuchsia-200 ring-1 ring-inset ring-fuchsia-500/25">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
