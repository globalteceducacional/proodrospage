import { useEffect, useRef } from 'react'

const LINKS = [
  { id: 'proodos', label: 'A Proodos' },
  { id: 'atuacao', label: 'Atuação' },
  { id: 'zaki', label: 'ZAKI-IA' },
  { id: 'pdi', label: 'PD&I' },
  { id: 'equipe', label: 'Equipe' },
  { id: 'contato', label: 'Contato', cta: true },
]

export function Header({ open, onToggle, onClose, activeId }) {
  const headerRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    function onKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    function onPointerDown(event) {
      if (!headerRef.current?.contains(event.target)) onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open || !window.matchMedia('(max-width: 900px)').matches) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <header className="site-header" ref={headerRef}>
      <div className="nav-wrap">
        <a className="brand" href="#inicio" aria-label="Proodos, início" onClick={onClose}>
          <span className="brand-logo-crop">
            <img src="/assets/logotipo-proodos-oficial.png" alt="Proodos - Inteligência e Inovação" />
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={onToggle}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
        <nav id="main-nav" className={open ? 'open' : undefined} aria-label="Navegação principal">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={link.cta ? 'nav-cta' : undefined}
              aria-current={activeId === link.id ? 'page' : undefined}
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
