const PARTNERS = [
  ['IFMA', 'Instituto Federal de Educação, Ciência e Tecnologia do Maranhão', 'Pesquisa aplicada, formação e validação complementar.'],
  ['Trimbow', 'Trimbow Inspeções Navais', 'Contexto industrial de inspeção visual e leitura de identificadores técnicos.'],
]

export function Cooperation() {
  return (
    <section id="cooperacao" className="section">
      <div className="section-heading reveal">
        <span className="eyebrow">07 / PROODOS</span>
        <h2>Cooperação</h2>
      </div>
      <div className="section-content">
        <p className="reveal">A Proodos desenvolve sua capacidade tecnológica por meio de cooperação formal e validação em ambientes relevantes. A estratégia articula ativos tecnológicos preexistentes, pesquisa aplicada, formação profissional e experimentação industrial.</p>
        <p className="reveal">O Instituto Federal de Educação, Ciência e Tecnologia do Maranhão (IFMA) oferece o ambiente de pesquisa aplicada, formação e validação complementar. A Trimbow Inspeções Navais representa o contexto industrial em que a Proodos pretende avaliar tarefas de inspeção visual e de leitura de identificadores técnicos.</p>
        <div className="partner-grid">
          {PARTNERS.map(([short, name, role], index) => (
            <article className="partner-card reveal" key={short} style={{ '--delay': `${index * 90}ms` }}>
              <span className="partner-mark">{short}</span>
              <h3>{name}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
