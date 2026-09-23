import { useEffect, useState } from 'react'
import { addressLine, company } from '../data/company.js'
import {
  EMPTY_FORM,
  SUBJECTS,
  buildContactMessage,
  hasErrors,
  mapsUrl,
  phoneUrl,
  validateContact,
  whatsAppUrl,
} from '../lib/contact.js'

export function Contact({ subjectIntent }) {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [sentUrl, setSentUrl] = useState('')
  const [popupBlocked, setPopupBlocked] = useState(false)

  useEffect(() => {
    if (!subjectIntent) return
    setForm((current) => ({ ...current, assunto: subjectIntent.subject }))
    setSentUrl('')
    setErrors({})
  }, [subjectIntent])

  function onChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
  }

  function onSubmit(event) {
    event.preventDefault()

    // Campo invisível: preenchido só por robô. Não abre conversa.
    if (form.empresaSite.trim()) {
      setSentUrl('about:blank')
      setPopupBlocked(false)
      return
    }

    const nextErrors = validateContact(form)
    setErrors(nextErrors)
    if (hasErrors(nextErrors)) {
      const firstInvalid = Object.keys(nextErrors)[0]
      document.getElementById(firstInvalid)?.focus()
      return
    }

    const url = whatsAppUrl(buildContactMessage(form))
    const popup = window.open(url, '_blank', 'noopener,noreferrer')
    setPopupBlocked(popup == null)
    setSentUrl(url)
  }

  function resetForm() {
    setForm({ ...EMPTY_FORM, assunto: subjectIntent?.subject ?? 'cooperacao' })
    setErrors({})
    setSentUrl('')
    setPopupBlocked(false)
  }

  return (
    <section className="section contact" id="contato">
      <div className="contact-box contact-live">
        <div>
          <p className="eyebrow"><span></span> Cooperação</p>
          <h2>Engenharia e pesquisa para transformar uma hipótese em produto.</h2>
          <p>A Proodos está aberta a cooperações com empresas, instituições científicas, governos e organizações interessadas em desenvolver e validar soluções tecnológicas.</p>
          <p className="contact-meta">
            {addressLine()}
            <br />
            <a href={phoneUrl()}>{company.phoneDisplay}</a>
          </p>
          <div className="contact-channels">
            <a className="button ghost" href={phoneUrl()}>Ligar</a>
            <a className="button ghost" href={whatsAppUrl()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a className="button ghost" href={mapsUrl()} target="_blank" rel="noopener noreferrer">Como chegar</a>
          </div>
        </div>

        {sentUrl ? (
          <div className="form-success" role="status">
            <h3>Mensagem pronta para envio</h3>
            <p>O WhatsApp abre com o texto preenchido. A mensagem só sai quando você confirma no aplicativo. Este site não armazena os dados.</p>
            {popupBlocked ? <p>O navegador bloqueou a nova aba. Use o botão abaixo para abrir a conversa.</p> : null}
            {sentUrl !== 'about:blank' ? (
              <a className="button primary" href={sentUrl} target="_blank" rel="noopener noreferrer">Abrir WhatsApp <span>↗</span></a>
            ) : null}
            <button className="button ghost" type="button" onClick={resetForm}>Escrever outra mensagem</button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <div className="honeypot" aria-hidden="true">
              <label htmlFor="empresaSite">Site da empresa</label>
              <input id="empresaSite" name="empresaSite" tabIndex={-1} autoComplete="off" value={form.empresaSite} onChange={onChange} />
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="nome">Nome</label>
                <input id="nome" name="nome" autoComplete="name" maxLength={80} value={form.nome} onChange={onChange} aria-invalid={Boolean(errors.nome)} aria-describedby={errors.nome ? 'nome-erro' : undefined} />
                {errors.nome ? <p id="nome-erro" className="field-error" role="alert">{errors.nome}</p> : null}
              </div>
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" autoComplete="email" maxLength={120} value={form.email} onChange={onChange} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-erro' : undefined} />
                {errors.email ? <p id="email-erro" className="field-error" role="alert">{errors.email}</p> : null}
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="telefone">Telefone <span>(opcional)</span></label>
                <input id="telefone" name="telefone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(98) 99999-9999" value={form.telefone} onChange={onChange} aria-invalid={Boolean(errors.telefone)} aria-describedby={errors.telefone ? 'telefone-erro' : undefined} />
                {errors.telefone ? <p id="telefone-erro" className="field-error" role="alert">{errors.telefone}</p> : null}
              </div>
              <div className="field">
                <label htmlFor="organizacao">Organização <span>(opcional)</span></label>
                <input id="organizacao" name="organizacao" autoComplete="organization" maxLength={120} value={form.organizacao} onChange={onChange} aria-invalid={Boolean(errors.organizacao)} aria-describedby={errors.organizacao ? 'organizacao-erro' : undefined} />
                {errors.organizacao ? <p id="organizacao-erro" className="field-error" role="alert">{errors.organizacao}</p> : null}
              </div>
            </div>

            <div className="field">
              <label htmlFor="assunto">Assunto</label>
              <select id="assunto" name="assunto" value={form.assunto} onChange={onChange} aria-invalid={Boolean(errors.assunto)} aria-describedby={errors.assunto ? 'assunto-erro' : undefined}>
                {SUBJECTS.map((item) => (
                  <option key={item.value} value={item.value}>{item.label}</option>
                ))}
              </select>
              {errors.assunto ? <p id="assunto-erro" className="field-error" role="alert">{errors.assunto}</p> : null}
            </div>

            <div className="field">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" rows={5} maxLength={1200} value={form.mensagem} onChange={onChange} aria-invalid={Boolean(errors.mensagem)} aria-describedby={errors.mensagem ? 'mensagem-erro' : 'mensagem-ajuda'} />
              {errors.mensagem ? <p id="mensagem-erro" className="field-error" role="alert">{errors.mensagem}</p> : <p id="mensagem-ajuda" className="field-help">{form.mensagem.trim().length}/1200</p>}
            </div>

            <button className="button primary" type="submit">Enviar pelo WhatsApp <span>↗</span></button>
            <p className="field-help">Os dados vão só para a conversa do WhatsApp. Nada fica salvo neste site.</p>
          </form>
        )}
      </div>
    </section>
  )
}
