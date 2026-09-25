const STEPS = [
  ['2020', 'Constituição da empresa em Bom Jardim, no Maranhão, e formação de sua base patrimonial e operacional.'],
  ['2024', 'Início da prestação regular de serviços e consolidação de uma operação empresarial positiva.'],
  ['2025', 'Adoção da denominação Proodos Tecnologia e Inovação, transferência da sede para São Luís e ampliação do objeto social para engenharia, software, tecnologia da informação e design de produto.'],
  ['2026', 'Estruturação do primeiro programa formal de PD&I em inteligência artificial embarcada e robótica, com o Projeto ZAKI-IA.'],
]

export function Trajectory() {
  return (
    <section id="trajetoria" className="section">
      <div className="section-heading">
        <span className="eyebrow">02 / PROODOS</span>
        <h2>Trajetória</h2>
      </div>
      <div className="section-content">
        <p>A trajetória da Proodos mostra uma empresa que partiu de uma base operacional no Maranhão e, em poucos anos, redirecionou a sua atuação para a tecnologia e a inovação. Cada etapa desse percurso preparou a seguinte: a constituição da empresa formou a base patrimonial, a operação regular consolidou resultados positivos, a mudança de denominação e de objeto social abriu espaço para a engenharia, o software e o design de produto, e o Projeto ZAKI-IA inaugura agora o primeiro programa formal de PD&I da empresa.</p>
        <div className="cards">
          {STEPS.map(([year, text]) => (
            <article className="card" key={year}>
              <h3>{year}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
