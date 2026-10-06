const ITEMS = [
  ['Origem e sede', 'São Luís, Maranhão'],
  ['Capacidade em estruturação', 'Pesquisa, desenvolvimento e inovação'],
  ['Orientação', 'Tecnologia nacional e cooperação'],
]

export function IntroStrip() {
  return (
    <div className="intro-strip">
      {ITEMS.map(([label, value], index) => (
        <div className="intro-cell reveal" key={label} style={{ '--delay': `${index * 80}ms` }}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </div>
  )
}
