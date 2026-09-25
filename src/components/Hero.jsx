export function Hero() {
  return (
    <section className="hero" id="home">
      <div>
        <span className="eyebrow">Engenharia · Software · Inteligência artificial</span>
        <h1>Conhecimento aplicado.<br /><em>Tecnologia para o setor produtivo.</em></h1>
        <p>Engenharia, desenvolvimento de software, inteligência artificial, integração de sistemas e design de produto convergem na atuação da Proodos. Estamos estruturando uma capacidade própria de pesquisa, desenvolvimento e inovação para transformar conhecimento aplicado em soluções seguras, úteis e capazes de elevar a produtividade.</p>
        <p className="actions">
          <a className="btn" href="#zaki-ia">Conheça o ZAKI-IA ↗</a>
          <a className="btn light" href="#competencias">Nossas competências</a>
        </p>
      </div>
      <div className="visual">
        <span className="eyebrow">Primeiro programa estruturado de PD&I</span>
        <div>
          <div className="zaki">ZAKI-IA</div>
          <p>Inteligência artificial embarcada e segura para assistência robótica, inspeção industrial e formação tecnológica.</p>
        </div>
        <div className="chips">
          <span>Percepção multimodal</span>
          <span>Voz em português</span>
          <span>Supervisão humana</span>
        </div>
      </div>
    </section>
  )
}
