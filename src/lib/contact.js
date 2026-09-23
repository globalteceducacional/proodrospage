import { company, addressLine } from '../data/company.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

export const SUBJECTS = [
  { value: 'cooperacao', label: 'Cooperação técnica' },
  { value: 'zaki', label: 'Projeto ZAKI-IA' },
  { value: 'pdi', label: 'Pesquisa e desenvolvimento' },
  { value: 'outro', label: 'Outro assunto' },
]

export const EMPTY_FORM = {
  nome: '',
  email: '',
  telefone: '',
  organizacao: '',
  assunto: 'cooperacao',
  mensagem: '',
  empresaSite: '',
}

export function validateContact(values) {
  const errors = {}
  const nome = values.nome.trim()
  const email = values.email.trim()
  const telefone = values.telefone.replace(/\D/g, '')
  const mensagem = values.mensagem.trim()

  if (nome.length < 2) errors.nome = 'Informe seu nome.'
  else if (nome.length > 80) errors.nome = 'Use no máximo 80 caracteres no nome.'

  if (!EMAIL_PATTERN.test(email)) errors.email = 'Informe um e-mail válido.'
  else if (email.length > 120) errors.email = 'Esse e-mail é longo demais.'

  if (telefone && (telefone.length < 10 || telefone.length > 11)) {
    errors.telefone = 'Informe DDD e número, com 10 ou 11 dígitos.'
  }

  if (values.organizacao.trim().length > 120) {
    errors.organizacao = 'Use no máximo 120 caracteres.'
  }

  if (!SUBJECTS.some((item) => item.value === values.assunto)) {
    errors.assunto = 'Escolha um assunto da lista.'
  }

  if (mensagem.length < 20) errors.mensagem = 'Descreva o pedido com pelo menos 20 caracteres.'
  else if (mensagem.length > 1200) errors.mensagem = 'A mensagem passa de 1.200 caracteres.'

  return errors
}

export function subjectLabel(value) {
  return SUBJECTS.find((item) => item.value === value)?.label ?? 'Contato'
}

// Texto que o WhatsApp recebe. O site não guarda a mensagem.
export function buildContactMessage(values) {
  const telefone = values.telefone.replace(/\D/g, '')
  return [
    'Olá, Proodos. Vim pelo site.',
    '',
    `Nome: ${values.nome.trim()}`,
    `E-mail: ${values.email.trim()}`,
    `Telefone: ${telefone || 'não informado'}`,
    `Organização: ${values.organizacao.trim() || 'não informada'}`,
    `Assunto: ${subjectLabel(values.assunto)}`,
    '',
    values.mensagem.trim(),
  ].join('\n')
}

export function whatsAppUrl(text = '') {
  const base = `https://wa.me/${company.phoneE164}`
  if (!text) return base
  return `${base}?text=${encodeURIComponent(text)}`
}

export function phoneUrl() {
  return `tel:+${company.phoneE164}`
}

export function mapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine())}`
}

export function hasErrors(errors) {
  return Object.keys(errors).length > 0
}
