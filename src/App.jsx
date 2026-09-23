import { useCallback, useState } from 'react'
import { About } from './components/About.jsx'
import { Capabilities } from './components/Capabilities.jsx'
import { Contact } from './components/Contact.jsx'
import { Evidence } from './components/Evidence.jsx'
import { Footer } from './components/Footer.jsx'
import { Governance } from './components/Governance.jsx'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { Pdi } from './components/Pdi.jsx'
import { Project } from './components/Project.jsx'
import { Team } from './components/Team.jsx'
import { useActiveSection } from './hooks/useActiveSection.js'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [subjectIntent, setSubjectIntent] = useState(null)
  const activeId = useActiveSection()
  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), [])

  const chooseSubject = useCallback((subject) => {
    setSubjectIntent({ subject, at: Date.now() })
    setMenuOpen(false)
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <Header open={menuOpen} onToggle={toggleMenu} onClose={closeMenu} activeId={activeId} />
      <main id="conteudo">
        <Hero />
        <About />
        <Capabilities />
        <Project onChooseSubject={chooseSubject} />
        <Pdi />
        <Evidence />
        <Team />
        <Governance />
        <Contact subjectIntent={subjectIntent} />
      </main>
      <Footer />
    </>
  )
}
