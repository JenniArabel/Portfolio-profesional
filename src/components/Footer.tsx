import { profile } from '../data/cv'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-zinc-500 sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <p>
          © {year} {profile.name}. Hecho con React y Tailwind CSS.
        </p>
        <p className="text-zinc-600">{profile.location}</p>
      </div>
    </footer>
  )
}
