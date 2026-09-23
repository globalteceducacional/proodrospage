const ITEMS = [
  { id: '01', title: 'Equipe técnico-científica', text: 'Competências multidisciplinares organizadas por entregas, responsabilidades e dedicação.' },
  { id: '02', title: 'Ativos tecnológicos', text: 'Código, modelos, dados, documentação e conhecimento técnico sob gestão definida.' },
  { id: '03', title: 'Rede de cooperação', text: 'Integração com universidades, ICTs, empresas e ambientes de experimentação.' },
  { id: '04', title: 'Gestão de resultados', text: 'Marcos, indicadores, riscos e evidências acompanhados durante todo o ciclo do projeto.' },
]

export function Evidence() {
  return (
    <section className="section evidence">
      <div className="section-tag">05 · Evidências de capacidade</div>
      <div className="evidence-grid">
        <div>
          <h2>Uma organização preparada para parcerias de inovação</h2>
          <p>Projetos robustos exigem mais que uma boa ideia. Exigem governança, talentos, infraestrutura, rastreabilidade e capacidade de transformar pesquisa em valor.</p>
        </div>
        <div className="evidence-list">
          {ITEMS.map((item) => (
            <article key={item.id}>
              <span>{item.id}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
