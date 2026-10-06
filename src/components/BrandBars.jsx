export function BrandBars({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="2" y="22" width="11" height="24" rx="5.5" fill="#087f7e" />
      <rect x="18.5" y="11" width="11" height="35" rx="5.5" fill="#1aa87a" />
      <rect x="35" y="2" width="11" height="44" rx="5.5" fill="#d5f58c" />
    </svg>
  )
}

export function Logo({ className = '', compact = false }) {
  return (
    <span className={`brand-lockup ${compact ? 'compact' : ''} ${className}`.trim()}>
      <img
        className="brand-logo"
        src="/assets/logotipo-proodos-oficial.png"
        alt="Proodos — Inteligência e Inovação"
        width="2048"
        height="1143"
      />
    </span>
  )
}
