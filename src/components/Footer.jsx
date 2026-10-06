import { Logo } from './BrandBars.jsx'

export function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div className="foot-brand">
          <Logo compact />
          <p>
            <strong>Proodos Tecnologia e Inovação Ltda.</strong>
            <br />
            CNPJ 38.891.716/0001-07 · São Luís, Maranhão
          </p>
        </div>
        <div>
          Conteúdo institucional · Setembro de 2026
          <br />
          <a href="#home">Voltar ao início ↑</a>
        </div>
      </div>
    </footer>
  )
}
