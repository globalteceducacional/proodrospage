export function Governance() {
  return (
    <section className="section governance" id="governanca">
      <div className="section-tag">07 · Governança &amp; IA responsável</div>
      <div className="governance-grid">
        <div className="governance-visual" aria-hidden="true">
          <div className="g-ring r1"></div>
          <div className="g-ring r2"></div>
          <div className="g-ring r3"></div>
          <div className="g-center">IA<br /><small>responsável</small></div>
          <span className="g-label l1">Privacidade</span>
          <span className="g-label l2">Segurança</span>
          <span className="g-label l3">Equidade</span>
          <span className="g-label l4">Transparência</span>
        </div>
        <div>
          <h2>Inovação com controle, responsabilidade e confiança</h2>
          <p className="large">A governança acompanha o projeto desde a definição dos dados até o monitoramento da solução em uso.</p>
          <ul className="checklist">
            <li><span>✓</span> Proteção de dados e privacidade desde o projeto</li>
            <li><span>✓</span> Gestão de riscos técnicos, éticos e operacionais</li>
            <li><span>✓</span> Validação humana e critérios de desempenho</li>
            <li><span>✓</span> Documentação, reprodutibilidade e prestação de contas</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
