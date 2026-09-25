const FACTS = [
  ['Razão social', 'Proodos Tecnologia e Inovação Ltda.'],
  ['CNPJ', '38.891.716/0001-07'],
  ['Sede', 'São Luís, Maranhão'],
  ['Site', 'www.proodoseng.com.br'],
  ['Atuação', 'Engenharia, software, tecnologia da informação, design de produto e PD&I'],
  ['Projeto estruturante', 'ZAKI-IA'],
]

export function Institutional() {
  return (
    <section id="dados-institucionais" className="section">
      <div className="section-heading">
        <span className="eyebrow">09 / PROODOS</span>
        <h2>Dados Institucionais</h2>
      </div>
      <div className="section-content">
        <div className="cards">
          {FACTS.map(([title, text]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              {title === 'Site' ? (
                <p><a className="site-link" href="https://www.proodoseng.com.br">www.proodoseng.com.br</a></p>
              ) : (
                <p>{text}</p>
              )}
            </article>
          ))}
        </div>
        <h3>Referências institucionais</h3>
        <p>Trajetória: contrato social e alterações contratuais da Proodos e demonstrações contábeis de 2024. Dados institucionais: contrato social, conforme a segunda alteração contratual, de 24 de outubro de 2025, e registros da empresa.</p>
      </div>
    </section>
  )
}
