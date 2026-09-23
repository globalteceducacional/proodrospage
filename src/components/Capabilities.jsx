export function Capabilities() {
  return (
    <section className="section dark" id="atuacao">
      <div className="section-tag light">02 · Frentes de atuação</div>
      <div className="section-head">
        <h2>Áreas registradas, competências convergentes</h2>
        <p>A estrutura empresarial combina quatro frentes complementares para conceber, construir e validar produtos tecnológicos.</p>
      </div>
      <div className="capability-grid">
        <article className="capability featured">
          <div className="icon" aria-hidden="true">ENG</div>
          <p className="mini">CNAE principal</p>
          <h3>Serviços de Engenharia</h3>
          <p>Projeto, especificação técnica e acompanhamento de soluções de engenharia aplicadas a produtos e processos.</p>
          <ul>
            <li>Arquiteturas de percepção e processamento</li>
            <li>Integração de hardware e software</li>
            <li>Especificação, prototipação e validação</li>
          </ul>
        </article>
        <article className="capability">
          <div className="icon" aria-hidden="true">SW</div>
          <h3>Desenvolvimento de Software</h3>
          <p>Concepção e implementação de sistemas, incluindo processamento de linguagem e integração com hardware.</p>
        </article>
        <article className="capability">
          <div className="icon" aria-hidden="true">DP</div>
          <h3>Design de Produto</h3>
          <p>Desenvolvimento do conceito ao protótipo, unindo engenharia, usabilidade e viabilidade técnica.</p>
        </article>
        <article className="capability">
          <div className="icon" aria-hidden="true">P&amp;D</div>
          <h3>Pesquisa Experimental</h3>
          <p>Pesquisa aplicada e desenvolvimento experimental voltados à geração de soluções tecnológicas originais.</p>
        </article>
      </div>
    </section>
  )
}
