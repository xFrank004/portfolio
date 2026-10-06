import { useEffect, useState } from 'react'
import Gate from './components/Gate.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Stack from './components/Stack.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('locked', !entered)
  }, [entered])

  return (
    <>
      {!entered && <Gate onEnter={() => setEntered(true)} />}
      <div className={`site ${entered ? 'is-in' : ''}`} aria-hidden={!entered}>
        <Nav />
        <main>
          <Hero />
          <About />
          <Stack />
          <Projects />
          <Contact />
        </main>
        <footer className="footer wrap">
          <span>© {new Date().getFullYear()} Franco Rodriguez Pouso</span>
          <span className="mono">hecho con React + Vite</span>
        </footer>
      </div>
    </>
  )
}
