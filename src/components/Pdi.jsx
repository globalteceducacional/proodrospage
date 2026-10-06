const PHASES = [
  ['1', 'Compreender', 'Desafio, requisitos, riscos e indicadores'],
  ['2', 'Pesquisar', 'Hipóteses, experimentos e arquitetura'],
  ['3', 'Desenvolver', 'Software, modelos, dados e protótipos'],
  ['4', 'Validar', 'Desempenho, segurança e uso em ambiente relevante'],
  ['5', 'Transferir', 'Documentação, capacitação, propriedade intelectual e escala'],
]

export function Pdi() {
  return (
    <section id="pdi" className="section">
      <div className="section-heading reveal">
        <span className="eyebrow">04 / PROODOS</span>
        <h2>PD&I</h2>
      </div>
      <div className="section-content">
        <h3 className="reveal">Um ciclo de pesquisa desenvolvimento e inovação</h3>
        <p className="reveal">A Proodos adota um ciclo de cinco fases para as suas iniciativas de PD&I, aplicado pela primeira vez de forma estruturada no Projeto ZAKI-IA: definição do desafio, pesquisa e arquitetura, desenvolvimento, validação e transferência para escala. Cada fase produz evidências, documentação e critérios de evolução tecnológica.</p>
        <ol className="process">
          {PHASES.map(([number, action, delivery], index) => (
            <li className="reveal" key={number} style={{ '--delay': `${index * 80}ms` }}>
              <span className="process-num">{number}</span>
              <span className="small">Ação</span>
              <strong>{action}</strong>
              <span className="small">Entrega</span>
              <p>{delivery}</p>
            </li>
          ))}
        </ol>
        <p className="reveal">A Proodos acompanha a evolução dos projetos por meio de níveis de maturidade tecnológica, métricas de desempenho e validação humana das decisões críticas. Esse modelo permite desenvolver soluções com rastreabilidade, segurança e potencial de aplicação industrial.</p>
      </div>
    </section>
  )
}
