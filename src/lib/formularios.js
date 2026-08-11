// ============================================================================
// Envío de formularios vía Web3Forms — la web es estática (Cloudflare Pages,
// sin servidor propio), así que un formulario que "envía un email real"
// necesita un servicio externo. Web3Forms es gratuito, no requiere backend
// propio y el access key es público por diseño (se usa igual que una site
// key, no es un secreto). Se configura en `VITE_WEB3FORMS_KEY` — ver
// CLAUDE.md, sección "Formularios".
// ============================================================================

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || ''

export async function enviarFormulario({ asunto, campos }) {
  if (!WEB3FORMS_ACCESS_KEY) {
    throw new Error('sin_access_key')
  }

  const respuesta = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: asunto,
      ...campos,
    }),
  })

  const datos = await respuesta.json()
  if (!datos.success) throw new Error(datos.message || 'error_desconocido')
  return datos
}
