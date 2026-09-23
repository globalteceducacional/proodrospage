import { useEffect, useState } from 'react'
import { company } from '../data/company.js'
import { copyText } from '../lib/clipboard.js'

export function CopyCnpj({ className = 'text-action' }) {
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (status === 'idle') return undefined
    const timer = window.setTimeout(() => setStatus('idle'), 2200)
    return () => window.clearTimeout(timer)
  }, [status])

  async function onCopy() {
    const copied = await copyText(company.cnpjDigits)
    setStatus(copied ? 'copied' : 'error')
  }

  const label = status === 'copied'
    ? 'CNPJ copiado'
    : status === 'error'
      ? 'Não foi possível copiar'
      : 'Copiar CNPJ'

  return (
    <button type="button" className={className} onClick={onCopy}>
      {label}
    </button>
  )
}
