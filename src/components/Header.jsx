import { useState } from 'react'
import { Logo } from './BrandBars.jsx'

const LINKS = [
  ['home', 'Home'],
  ['sobre', 'Sobre'],
  ['trajetoria', 'Trajetória'],
  ['competencias', 'Competências'],
  ['pdi', 'PD&I'],
  ['zaki-ia', 'ZAKI-IA'],
  ['impacto', 'Impacto'],
  ['cooperacao', 'Cooperação'],
  ['ia-responsavel', 'IA Responsável'],
  ['dados-institucionais', 'Dados'],
]

export function Header() {
  const [open, setOpen] = useState(false)

  function close() {
    setOpen(false)
  }

  return (
    <header>
      <div className="wrap top">
        <a className="brand" href="#home" aria-label="Proodos início" onClick={close}>
          <Logo compact />
        </a>
        <button
          className="menu-toggle"
          type="button"
          id="toggle"
          aria-controls="menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
        <nav
          id="menu"
          className={open ? 'open' : undefined}
          aria-label="Navegação principal"
          onClick={(event) => {
            if (event.target.closest('a')) close()
          }}
        >
          {LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
