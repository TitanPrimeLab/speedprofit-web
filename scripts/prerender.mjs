// ============================================================================
// PRERENDER ESTÁTICO POR RUTA
// ============================================================================
// Problema real detectado con Semrush (20 ago 2026): al ser una SPA, todas
// las rutas sirven el mismo index.html, y su único fallback para crawlers
// sin JavaScript (<noscript>) era idéntico en las 12 páginas — por eso
// Semrush veía exactamente 156 palabras en Home, Contacto, Blog, Testimonios...
// todas la misma cosa. Muchos crawlers de IA (GPTBot, ClaudeBot,
// PerplexityBot, entre otros) no ejecutan JavaScript: solo ven esto.
//
// Este script corre DESPUÉS de `vite build` (hook "postbuild"). Genera, para
// cada ruta real, una copia de dist/index.html con:
//   - <title> y meta description específicos de esa página
//   - <link rel="canonical"> apuntando a su propia URL
//   - el bloque <noscript> con contenido real y distinto de esa página
// y la escribe en dist/<ruta>/index.html — así Cloudflare Pages sirve el
// archivo correcto para cada URL. La app de React sigue intacta: en cuanto
// carga el JS, se monta sobre el mismo <div id="root">, como siempre.
// ============================================================================

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '..', 'dist')
const BASE_URL = 'https://speedprofitai.com'

// --- Contenido real y distinto por página (texto plano, sin JSX) ----------
const PAGINAS = {
  '/': {
    title: 'SpeedProfit AI — Automatización con IA para inmobiliarias en España',
    description:
      'Sistema comercial con IA para inmobiliarias locales y agentes independientes en España: capta, atiende y convierte cada oportunidad de forma automática, las 24 horas, sin ampliar el equipo.',
    h1: 'SpeedProfit AI — Automatización con IA para inmobiliarias en España',
    parrafos: [
      '<strong>Agencia de automatización con inteligencia artificial para inmobiliarias independientes en España.</strong> Desarrollamos agentes de IA por WhatsApp que responden, cualifican y agendan visitas 24/7 los 365 días del año.',
      'Diseño web para inmobiliarias: 399€. Resto de servicios, precio según volumen. Garantía de resultados a 30 días. 63 auditorías de tiempo de respuesta medidas sobre agencias españolas.',
    ],
  },
  '/agentes-ia': {
    title: 'Agentes de IA para inmobiliarias — SpeedProfit AI',
    description:
      'Agentes de inteligencia artificial que responden leads por WhatsApp al instante, cualifican consultas y agendan visitas automáticamente, 24 horas al día.',
    h1: 'Agentes de IA para inmobiliarias',
    parrafos: [
      'Cada agente se entrena con el catálogo, tono y forma de trabajar de tu agencia, se integra con WhatsApp, tu web y tu CRM, y responde en menos de 3 segundos las 24 horas del día.',
      'Cualifica cada consulta automáticamente (zona, presupuesto, tipo de propiedad, comprar o alquilar) y agenda la visita directamente en tu calendario. Los leads que hoy se pierden por no responder a tiempo se convierten en visitas agendadas.',
    ],
  },
  '/como-funciona': {
    title: 'Cómo funciona — SpeedProfit AI',
    description:
      'Cómo implementamos el sistema de respuesta y automatización con IA en tu agencia inmobiliaria: proceso, plazos y qué incluye.',
    h1: 'Cómo funciona el sistema de SpeedProfit AI',
    parrafos: [
      'Auditamos primero cómo responde hoy tu agencia (tiempo real de respuesta, medido, no estimado). Después diseñamos y entrenamos tu agente de IA con tu catálogo y tono de marca, lo conectamos a WhatsApp, tu web, tu CRM y tu calendario, y lo dejamos operando en producción.',
      'El proceso completo, desde la auditoría inicial hasta el agente funcionando, se hace en pocos días, sin que tengas que cambiar de herramientas.',
    ],
  },
  '/captacion-exclusivas': {
    title: 'Captación de Exclusivas con IA — SpeedProfit AI',
    description:
      'Servicio de captación de exclusivas inmobiliarias apoyado en Meta Ads e inteligencia artificial, para agencias locales y agentes independientes.',
    h1: 'Captación de Exclusivas con IA',
    parrafos: [
      'Campañas de captación con Meta Ads combinadas con un agente de IA que cualifica cada contacto entrante en tiempo real, para que tu equipo solo hable con propietarios con intención real de firmar en exclusiva.',
      'Solo trabajamos con una agencia por zona: cuando alguien de tu área cierra con nosotros, dejamos de aceptar nuevos clientes en esa zona.',
    ],
  },
  '/diseno-web-inmobiliarias': {
    title: 'Diseño Web para Inmobiliarias desde 399€ — SpeedProfit AI',
    description:
      'Web profesional para tu agencia inmobiliaria, lista para conectar a un agente de IA desde el primer día. Precio cerrado: 399€, pago único.',
    h1: 'Diseño Web para Inmobiliarias — 399€',
    parrafos: [
      'Web profesional para tu agencia, optimizada para SEO local y lista para captar leads desde el primer día. Precio cerrado: 399€, pago único, sin cuotas mensuales. Entrega en 5-7 días laborables.',
      'Construida sobre la misma base técnica que usamos para conectar agentes de IA: cuando decidas automatizar la respuesta de tu agencia, no hay que rehacer nada.',
    ],
  },
  '/testimonios': {
    title: 'Casos reales medidos — SpeedProfit AI',
    description:
      'Casos de éxito documentados con auditorías de tiempo de respuesta antes y después: datos medidos, no promesas.',
    h1: 'Casos reales, medidos con auditoría propia',
    parrafos: [
      'Cada caso parte de una auditoría real: medimos el tiempo de respuesta antes de tocar nada, y volvemos a medirlo con el sistema en marcha. Mismos mensajes, mismo canal, mismo método.',
      'Engel & Völkers Santa Cruz de Tenerife pasó de una media de 7h16m de respuesta (con hasta 29h04m de espera en mensajes fuera de horario) a respuesta inmediata con el agente de IA activo.',
    ],
  },
  '/sobre-nosotros': {
    title: 'Sobre nosotros — SpeedProfit AI',
    description:
      'Quiénes somos y por qué construimos SpeedProfit AI: automatización comercial con IA para el sector inmobiliario español.',
    h1: 'Sobre SpeedProfit AI',
    parrafos: [
      'SpeedProfit AI es una marca operada por SpeedProficient OÜ, en activo desde 2024, especializada en automatización comercial con inteligencia artificial para inmobiliarias locales y agentes independientes en España.',
      '63 auditorías de tiempo de respuesta medidas sobre agencias españolas con metodología de mystery shopping propia. Soporte 24/7 los 365 días del año.',
    ],
  },
  '/contacto': {
    title: 'Contacto — SpeedProfit AI',
    description:
      'Habla con nosotros sobre cómo automatizar la respuesta y captación de tu agencia inmobiliaria con inteligencia artificial.',
    h1: 'Contacta con SpeedProfit AI',
    parrafos: [
      'Cuéntanos sobre tu agencia y te respondemos con la auditoría de tu canal de contacto actual y una propuesta concreta.',
    ],
  },
  '/blog': {
    title: 'Blog — SpeedProfit AI · Automatización con IA para inmobiliarias',
    description:
      'Artículos sobre automatización, IA y captación de leads para agencias inmobiliarias en España.',
    h1: 'Blog de SpeedProfit AI',
    parrafos: [
      'Artículos, análisis y guías sobre automatización con IA, tiempo de respuesta y captación de leads en el sector inmobiliario español.',
    ],
  },
  '/privacidad': {
    title: 'Política de Privacidad — SpeedProfit AI',
    description: 'Política de privacidad y tratamiento de datos de SpeedProfit AI.',
    h1: 'Política de Privacidad',
    parrafos: [
      'Información sobre el responsable del tratamiento de datos, tus derechos y cómo tratamos tu información en SpeedProfit AI.',
    ],
  },
  '/terminos': {
    title: 'Términos y Condiciones — SpeedProfit AI',
    description: 'Términos y condiciones del servicio de SpeedProfit AI.',
    h1: 'Términos y Condiciones',
    parrafos: ['Términos y condiciones de uso y contratación de los servicios de SpeedProfit AI.'],
  },
  '/cookies': {
    title: 'Política de Cookies — SpeedProfit AI',
    description: 'Política de cookies del sitio web de SpeedProfit AI.',
    h1: 'Política de Cookies',
    parrafos: ['Información sobre las cookies utilizadas en speedprofitai.com y cómo gestionarlas.'],
  },
}

const NAV_HTML = `
        <h2>Páginas</h2>
        <ul>
          <li><a href="${BASE_URL}/">Inicio</a></li>
          <li><a href="${BASE_URL}/agentes-ia">Agentes de IA</a></li>
          <li><a href="${BASE_URL}/como-funciona">Cómo funciona</a></li>
          <li><a href="${BASE_URL}/captacion-exclusivas">Captación de Exclusivas</a></li>
          <li><a href="${BASE_URL}/diseno-web-inmobiliarias">Diseño Web para Inmobiliarias</a></li>
          <li><a href="${BASE_URL}/testimonios">Testimonios</a></li>
          <li><a href="${BASE_URL}/sobre-nosotros">Sobre nosotros</a></li>
          <li><a href="${BASE_URL}/blog">Blog</a></li>
          <li><a href="${BASE_URL}/contacto">Contacto</a></li>
        </ul>

        <h2>Contacto</h2>
        <p>
          Email: <a href="mailto:info@speedprofitai.com">info@speedprofitai.com</a><br>
          WhatsApp: <a href="https://wa.me/34722842925">+34 722 842 925</a><br>
          Web: <a href="${BASE_URL}/">speedprofitai.com</a>
        </p>`

function construirNoscript(pagina) {
  const parrafosHtml = pagina.parrafos.map((p) => `        <p>${p}</p>`).join('\n')
  return `<noscript>
      <div style="max-width: 800px; margin: 40px auto; padding: 20px; font-family: system-ui, sans-serif; color: #fff; background: #0a0a0a;">
        <h1>${pagina.h1}</h1>
${parrafosHtml}
${NAV_HTML}
      </div>
    </noscript>`
}

function generarHtmlParaRuta(template, ruta, pagina) {
  let html = template

  // <title>
  html = html.replace(/<title>.*?<\/title>/s, `<title>${pagina.title}</title>`)

  // meta description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${pagina.description}" />`
  )

  // canonical
  const url = ruta === '/' ? BASE_URL + '/' : `${BASE_URL}${ruta}`
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="${url}" />`
  )

  // bloque <noscript> — reemplaza todo el bloque existente por el específico de esta ruta
  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, construirNoscript(pagina))

  return html
}

function main() {
  if (!existsSync(DIST)) {
    console.error('[prerender] No existe dist/. Corre "vite build" primero.')
    process.exit(1)
  }

  const template = readFileSync(join(DIST, 'index.html'), 'utf-8')
  let generadas = 0

  for (const [ruta, pagina] of Object.entries(PAGINAS)) {
    const html = generarHtmlParaRuta(template, ruta, pagina)

    if (ruta === '/') {
      // La home ya es dist/index.html — la sobreescribimos con su propia versión
      writeFileSync(join(DIST, 'index.html'), html)
    } else {
      const carpeta = join(DIST, ruta.slice(1))
      mkdirSync(carpeta, { recursive: true })
      writeFileSync(join(carpeta, 'index.html'), html)
    }
    generadas++
  }

  console.log(`[prerender] ${generadas} páginas generadas con contenido estático distinto por ruta.`)
}

main()
