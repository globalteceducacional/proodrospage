const ITEMS = [
  ['Produtividade', 'Redução de tempo, retrabalho e atividades manuais repetitivas.'],
  ['Tecnologia nacional', 'Desenvolvimento de software, modelos, integração e documentação no Brasil.'],
  ['Cadeia de valor', 'Articulação com fornecedores, integradores, instituições científicas e empresas usuárias.'],
  ['Empregos qualificados', 'Inserção e formação de pesquisadores e profissionais em IA, software e robótica.'],
  ['Prosperidade', 'Conversão de conhecimento em produtos, serviços, competências e oportunidades empresariais.'],
  ['Impacto social', 'Formação tecnológica e disseminação responsável de competências como dimensão complementar.'],
]

export function Impact() {
  return (
    <section id="impacto" className="section">
      <div className="section-heading reveal">
        <span className="eyebrow">06 / PROODOS</span>
        <h2>Impacto</h2>
      </div>
      <div className="section-content">
        <h3 className="reveal">Impacto industrial e desenvolvimento nacional</h3>
        <p className="reveal">A atuação da Proodos prioriza resultados que possam fortalecer a indústria brasileira e a sua cadeia de valor. A empresa orientará o ZAKI-IA por indicadores de produtividade, qualidade, confiabilidade, formação profissional e maturidade tecnológica.</p>
        <div className="cards">
          {ITEMS.map(([title, text], index) => (
            <article className="card reveal" key={title} style={{ '--delay': `${index * 70}ms` }}>
              <span className="card-glow" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
