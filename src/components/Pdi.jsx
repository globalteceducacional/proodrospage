const STEPS = [
  { id: '01', title: 'Desafio & evidências', text: 'Diagnóstico do problema, usuários, requisitos, riscos e métricas de referência.' },
  { id: '02', title: 'Pesquisa & arquitetura', text: 'Estado da arte, hipótese tecnológica, dados, modelos e desenho experimental.' },
  { id: '03', title: 'Desenvolvimento', text: 'Prototipação, engenharia de software, integração e documentação técnica.' },
  { id: '04', title: 'Validação', text: 'Testes controlados e piloto em ambiente relevante, com indicadores definidos.' },
  { id: '05', title: 'Transferência & escala', text: 'Propriedade intelectual, incorporação ao negócio, formação e evolução do produto.' },
]

export function Pdi() {
  return (
    <section className="section pdi" id="pdi">
      <div className="section-tag">04 · Pesquisa, Desenvolvimento &amp; Inovação</div>
      <div className="section-head">
        <h2>Capacidade estruturada para desenvolver e demonstrar inovação</h2>
        <p>Nosso modelo de execução organiza cada iniciativa como uma jornada tecnológica rastreável - do problema à adoção.</p>
      </div>
      <div className="pipeline">
        {STEPS.map((step) => (
          <article key={step.id}>
            <span>{step.id}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="alignment">
        <div className="alignment-copy">
          <p className="mini accent">Alinhamento estratégico nacional</p>
          <h3>IA para inovação empresarial e produtividade</h3>
          <p>A agenda de PD&amp;I da Proodos prioriza o desenvolvimento e a aplicação de inteligência artificial em produtos, serviços e processos inovadores.</p>
        </div>
        <div className="alignment-cards">
          <article><strong>PBIA</strong><span>Eixo 4</span><p>IA para inovação empresarial</p></article>
          <article><strong>NIB</strong><span>Missão 4</span><p>Transformação digital da indústria</p></article>
          <article><strong>TRL</strong><span>Evolução</span><p>Maturidade tecnológica baseada em evidências</p></article>
        </div>
      </div>
    </section>
  )
}
