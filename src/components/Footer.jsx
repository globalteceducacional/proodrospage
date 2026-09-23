import { addressLine, company } from '../data/company.js'
import { phoneUrl } from '../lib/contact.js'
import { CopyCnpj } from './CopyCnpj.jsx'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-brand">
        <a className="brand footer-logo" href="#inicio">
          <span className="brand-logo-crop">
            <img src="/assets/logotipo-proodos-oficial.png" alt="Proodos - Inteligência e Inovação" />
          </span>
        </a>
        <p>{company.legalName} · Grupo GlobalTec Educacional</p>
        <p>{addressLine()}</p>
      </div>
      <div className="footer-meta">
        <p>CNPJ {company.cnpj}</p>
        <CopyCnpj />
        <p><a href={phoneUrl()}>{company.phoneDisplay}</a></p>
        <p>© {year} Proodos. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
