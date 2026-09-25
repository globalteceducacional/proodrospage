const FRONTS = [
  'Assistência a tarefas de inspeção e registro técnico.',
  'Leitura e interpretação de identificadores e elementos visuais.',
  'Interação natural por voz em português.',
  'Integração entre IA, sensores, software e plataforma robótica.',
  'Supervisão humana e controle seguro de ações físicas.',
  'Documentação técnica para evolução, replicação e transferência.',
]

export function Zaki() {
  return (
    <section id="zaki-ia" className="section">
      <div className="section-heading">
        <span className="eyebrow">05 / PROODOS</span>
        <h2>ZAKI-IA</h2>
      </div>
      <div className="section-content">
        <p>O ZAKI-IA é o primeiro programa estruturado de PD&I da Proodos. O projeto pesquisa e desenvolve inteligência artificial embarcada e segura para assistência robótica, inspeção industrial e formação tecnológica.</p>
        <p>A solução integra percepção multimodal, visão computacional, interação por voz e linguagem em português a uma arquitetura de controle com barreiras determinísticas de segurança. O propósito é permitir que sistemas inteligentes auxiliem tarefas reais sem transferir decisões físicas críticas diretamente a modelos generativos.</p>
        <h3>Frentes de desenvolvimento</h3>
        <ul className="features">
          {FRONTS.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  )
}
