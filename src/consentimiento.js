import { EMPRESA } from './contenido'

// ============================================================================
// CONSENTIMIENTO DE COOKIES + META PIXEL
//
// El píxel de Meta NO está en el <head> de index.html. Se carga desde aquí,
// y SOLO si el visitante ha pulsado "Aceptar".
//
// Por qué no va en index.html como sugiere Meta:
//   - En España (RGPD + art. 22.2 LSSI) el píxel de publicidad necesita
//     consentimiento PREVIO. En el <head> cargaría para todo el mundo desde el
//     primer segundo, incluso antes de que nadie pueda decir que no.
//   - Meta ofrece `fbq('consent','revoke')`, pero con eso el script de
//     facebook.com se descarga igualmente (Meta recibe la IP del visitante).
//     Aquí ni siquiera se pide el script hasta que hay un "sí".
//   - Tampoco lleva la etiqueta <noscript><img ...> del snippet: esa imagen
//     dispara el evento sin JS y por tanto sin consentimiento posible.
//
// Seguimiento entre páginas: fbevents.js ya detecta solo los cambios de URL
// (history.pushState) y dispara un PageView por cada navegación de la SPA.
// NO añadir aquí PageViews manuales al cambiar de ruta: saldrían duplicados.
// Si algún día hiciera falta apagarlo: `window.fbq.disablePushState = true`.
//
// Si añades otra herramienta de medición (Analytics, TikTok...), cuélgala de
// este mismo consentimiento y actualiza /cookies y /privacidad — ver CLAUDE.md.
// ============================================================================

const CLAVE = 'sp_consentimiento_publicidad'
const EVENTO_ABRIR = 'sp:abrir-cookies'

// Valores: 'si' | 'no' | null (sin decidir). El almacenamiento local puede
// lanzar excepción (modo privado, cookies bloqueadas): nunca debe romper la web.
export function leerConsentimiento() {
  try {
    return window.localStorage.getItem(CLAVE)
  } catch {
    return null
  }
}

function guardarConsentimiento(valor) {
  try {
    window.localStorage.setItem(CLAVE, valor)
  } catch {
    // Sin almacenamiento: la elección vale para esta sesión y se vuelve a
    // preguntar en la siguiente visita. Es lo correcto, mejor que asumir un sí.
  }
}

let pixelCargado = false

// Snippet oficial de Meta, sin cambios de lógica. Solo se ejecuta una vez.
function cargarPixel() {
  if (typeof window === 'undefined') return

  if (pixelCargado) {
    // Ya cargado en esta sesión y el visitante lo había retirado: reactivar.
    if (window.fbq) window.fbq('consent', 'grant')
    return
  }
  pixelCargado = true

  /* eslint-disable */
  ;(function (f, b, e, v, n, t, s) {
    if (f.fbq) return
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = !0
    n.version = '2.0'
    n.queue = []
    t = b.createElement(e)
    t.async = !0
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
  /* eslint-enable */

  window.fbq('init', EMPRESA.metaPixelId)
  window.fbq('track', 'PageView')
}

// Borra las cookies del píxel (_fbp, _fbc). El píxel las crea en el dominio
// raíz, así que se intenta con y sin punto delante para cubrir ambos casos.
function borrarCookiesMeta() {
  const host = window.location.hostname
  const dominios = ['', `; domain=${host}`, `; domain=.${host.replace(/^www\./, '')}`]
  for (const nombre of ['_fbp', '_fbc']) {
    for (const dominio of dominios) {
      document.cookie = `${nombre}=; Max-Age=0; path=/${dominio}`
    }
  }
}

function retirarPixel() {
  if (window.fbq) window.fbq('consent', 'revoke')
  borrarCookiesMeta()
}

// --- API pública ------------------------------------------------------------

// Al arrancar la web: si ya había dicho que sí, se activa sin volver a preguntar.
export function iniciarSiHayConsentimiento() {
  if (leerConsentimiento() === 'si') cargarPixel()
}

export function aceptarCookies() {
  guardarConsentimiento('si')
  cargarPixel()
}

export function rechazarCookies() {
  guardarConsentimiento('no')
  retirarPixel()
}

// Reabre el aviso (enlace "Configurar cookies" del pie de página).
export function abrirConfiguracionCookies() {
  window.dispatchEvent(new Event(EVENTO_ABRIR))
}

export { EVENTO_ABRIR }
