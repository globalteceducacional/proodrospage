const ITEMS = [
  'Desenvolvimento de software sob encomenda e de soluções customizáveis.',
  'Engenharia de sistemas e integração de componentes físicos e digitais.',
  'Inteligência artificial embarcada e processamento multimodal.',
  'Integração robótica e interfaces de interação por voz.',
  'Consultoria em tecnologia da informação.',
  'Design de produto e prototipagem tecnológica.',
  'Governança, segurança e documentação de sistemas de IA.',
]

export function Competencies() {
  return (
    <section id="competencias" className="section">
      <div className="section-heading">
        <span className="eyebrow">03 / PROODOS</span>
        <h2>Competências</h2>
      </div>
      <div className="section-content">
        <p>A Proodos organiza a sua atuação em áreas de competência que decorrem do seu objeto social e que convergem para o desenvolvimento de sistemas inteligentes aplicados a produtos físicos. Essas áreas combinam engenharia, software, inteligência artificial e design, e formam a base sobre a qual a empresa estrutura o Projeto ZAKI-IA. Algumas delas já fazem parte da operação atual da empresa, enquanto outras, como a inteligência artificial embarcada e a governança de sistemas de IA, a Proodos pretende consolidar como competência interna ao longo do Projeto ZAKI-IA.</p>
        <ul className="features">
          {ITEMS.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  )
}
