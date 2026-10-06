import { About } from './components/About.jsx'
import { Competencies } from './components/Competencies.jsx'
import { Cooperation } from './components/Cooperation.jsx'
import { Footer } from './components/Footer.jsx'
import { Governance } from './components/Governance.jsx'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { Impact } from './components/Impact.jsx'
import { Institutional } from './components/Institutional.jsx'
import { IntroStrip } from './components/IntroStrip.jsx'
import { Pdi } from './components/Pdi.jsx'
import { Trajectory } from './components/Trajectory.jsx'
import { Zaki } from './components/Zaki.jsx'
import { useReveal } from './hooks/useReveal.js'

export default function App() {
  useReveal()

  return (
    <>
      <div className="page-bg" aria-hidden="true">
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="blob blob-c" />
      </div>
      <a className="skip" href="#conteudo">Ir para o conteúdo</a>
      <Header />
      <main className="wrap" id="conteudo">
        <Hero />
        <IntroStrip />
        <About />
        <Trajectory />
        <Competencies />
        <Pdi />
        <Zaki />
        <Impact />
        <Cooperation />
        <Governance />
        <Institutional />
      </main>
      <Footer />
    </>
  )
}
