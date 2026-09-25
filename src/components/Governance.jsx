const PRINCIPLES = [
  'Proteção de dados desde a concepção.',
  'Gestão de riscos técnicos, éticos e operacionais.',
  'Validação humana em decisões críticas.',
  'Barreiras de segurança entre modelos generativos e atuadores físicos.',
  'Documentação, rastreabilidade e reprodutibilidade.',
  'Avaliação contínua de desempenho e limitações.',
]

export function Governance() {
  return (
    <section id="ia-responsavel" className="section">
      <div className="section-heading">
        <span className="eyebrow">08 / PROODOS</span>
        <h2>IA Responsável</h2>
      </div>
      <div className="section-content">
        <p>A Proodos adota princípios de governança desde a concepção dos projetos. Sistemas que interagem com o ambiente físico devem operar com controles verificáveis, limites de atuação, supervisão humana e registros adequados ao risco.</p>
        <ul className="features">
          {PRINCIPLES.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  )
}
