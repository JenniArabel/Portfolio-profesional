import { ThemeProvider } from './ThemeContext'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Seo } from './components/Seo'
import { Skills } from './components/Skills'

function App() {
  return (
    <ThemeProvider>
      <Seo />
      <div className="min-h-svh bg-surface">
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-fuchsia-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
