// Copia texto sem gravar nada no site. Se a API moderna travar ou for bloqueada, usa a seleção clássica.
export async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    try {
      await Promise.race([
        navigator.clipboard.writeText(value),
        new Promise((_, reject) => {
          window.setTimeout(() => reject(new Error('timeout')), 800)
        }),
      ])
      return true
    } catch {
      // A permissão pode falhar. O método abaixo cobre esse caso.
    }
  }

  const area = document.createElement('textarea')
  area.value = value
  area.setAttribute('readonly', '')
  area.style.position = 'fixed'
  area.style.top = '0'
  area.style.left = '-9999px'
  document.body.appendChild(area)
  area.select()

  let copied = false
  try {
    copied = document.execCommand('copy')
  } catch {
    copied = false
  }

  area.remove()
  return copied
}
