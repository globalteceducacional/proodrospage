import { company } from '../data/company.js'
import { CopyCnpj } from './CopyCnpj.jsx'

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span></span> Proodos Tecnologia e Inovação Ltda.</p>
          <h1>Engenharia e software para produtos que <em>aprendem.</em></h1>
          <p className="lead">A Proodos projeta, desenvolve e integra soluções de engenharia, software e inteligência artificial aplicada - do conceito técnico ao protótipo validado.</p>
          <div className="hero-actions">
            <a className="button primary" href="#pdi">Conheça nossa capacidade de PD&amp;I <span>↗</span></a>
            <a className="button ghost" href="#atuacao">Áreas de atuação</a>
          </div>
        </div>
        <div className="hero-visual reveal" aria-label="Ciclo Proodos: pesquisar, desenvolver, validar e escalar">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="core"><span>PRO</span><strong>ODOS</strong><small>progresso</small></div>
          <div className="node n1"><b>01</b><span>Pesquisar</span></div>
          <div className="node n2"><b>02</b><span>Desenvolver</span></div>
          <div className="node n3"><b>03</b><span>Validar</span></div>
          <div className="node n4"><b>04</b><span>Escalar</span></div>
        </div>
      </div>
      <div className="company-facts" aria-label="Dados empresariais">
        <article>
          <small>CNPJ</small>
          <strong>{company.cnpj}</strong>
          <CopyCnpj />
        </article>
        <article><small>Porte</small><strong>{company.size}</strong></article>
        <article><small>Constituída em</small><strong>{company.founded}</strong></article>
        <article><small>Natureza</small><strong>{company.nature}</strong></article>
      </div>
    </section>
  )
}
