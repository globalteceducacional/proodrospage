import { useEffect, useState } from 'react'

const SECTION_IDS = ['inicio', 'proodos', 'atuacao', 'zaki', 'pdi', 'equipe', 'contato']

// Marca a seção visível para o menu saber onde o leitor está.
export function useActiveSection() {
  const [activeId, setActiveId] = useState('inicio')

  useEffect(() => {
    const elements = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target?.id) setActiveId(visible.target.id)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.15, 0.4, 0.7] },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return activeId
}
