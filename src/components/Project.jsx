export function Project({ onChooseSubject }) {
  return (
    <section className="section project" id="zaki">
      <div className="section-tag">03 · Projeto em destaque</div>
      <div className="project-card">
        <div className="project-label">RHAE IA 2026 · Chamada CNPq/SETEC/SETAD/MCTI/FNDCT nº 29/2026</div>
        <div className="project-grid">
          <div>
            <h2>ZAKI-IA: Inteligência artificial embarcada e segura para assistência pedagógica e laboratorial</h2>
          </div>
          <div>
            <p className="large">Projeto de PD&amp;I em inteligência artificial para desenvolver um módulo cognitivo de percepção multimodal, voz e linguagem local, com uma camada determinística de validação de segurança.</p>
            <p>Essa arquitetura impede que modelos de IA generativa acionem hardware diretamente. O módulo será validado em cooperação técnica sobre a plataforma robótica humanoide Zaki 2.0.</p>
          </div>
        </div>
        <div className="project-tags">
          <span>Eixo 4 · IA para Inovação Empresarial (PBIA)</span>
          <span>Missão 4 · Transformação Digital da Indústria (NIB)</span>
          <span>RHAE IA · CNPq</span>
        </div>
        <a className="button primary project-cta" href="#contato" onClick={() => onChooseSubject('zaki')}>Falar sobre o ZAKI-IA <span>↗</span></a>
      </div>
    </section>
  )
}
