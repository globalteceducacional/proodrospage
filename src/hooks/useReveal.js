import { useLayoutEffect } from 'react'

export function useReveal() {
  useLayoutEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.reveal'))
    if (!nodes.length) return undefined

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const show = (node) => node.classList.add('is-visible')

    if (reduced) {
      nodes.forEach(show)
      return undefined
    }

    const inView = (node) => {
      const rect = node.getBoundingClientRect()
      return rect.top < window.innerHeight - 24 && rect.bottom > 24
    }

    nodes.forEach((node) => {
      if (inView(node)) show(node)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -8px 0px' },
    )

    nodes.forEach((node) => {
      if (!node.classList.contains('is-visible')) observer.observe(node)
    })

    return () => observer.disconnect()
  }, [])
}
