// ============================================================================
// PRERENDER ESTÁTICO POR RUTA
// ============================================================================
// Corre después de `vite build` (hook "postbuild" en package.json).
//
// POR QUÉ EXISTE
// La web es una SPA: sin este paso, todas las rutas sirven el mismo
// index.html, con el mismo <title> y el mismo contenido. Muchos crawlers de
// IA (GPTBot, ClaudeBot, PerplexityBot) y Semrush por defecto NO ejecutan
// JavaScript: solo ven el HTML crudo. Sin prerender, para ellos la web
// entera es una sola página duplicada 12 veces.
//
// DECISIÓN IMPORTANTE — archivos planos, no carpetas
// La primera versión generaba dist/agentes-ia/index.html. Cloudflare Pages
// sirve eso en /agentes-ia/ y devuelve un 308 desde /agentes-ia. Resultado
// en la auditoría del 20/08/2026: 80 redirecciones permanentes, 8 URLs
// "incorrectas" en sitemap.xml, páginas huérfanas y 52% sin canonical.
// Generando dist/agentes-ia.html, Cloudflare lo sirve en /agentes-ia con un
// 200 limpio. Sin redirecciones, sin cadenas.
//
// El contenido de cada página vive en contenido-estatico.mjs.
// ============================================================================

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PAGINAS, BASE_URL } from './contenido-estatico.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const RAIZ = join(__dirname, '..')
const DIST = join(RAIZ, 'dist')

// Estilos del fallback: coherentes con el tema oscuro de la web, por si
// React tarda un instante en montar.
const ESTILO = `max-width:860px;margin:0 auto;padding:48px 24px;font-family:system-ui,-apple-system,sans-serif;color:#e8e8ea;background:#0a0a0c;line-height:1.7`

function leerArticulosBlog() {
  const dirBlog = join(RAIZ, 'src', 'blog')
  if (!existsSync(dirBlog)) return []

  return readdirSync(dirBlog)
    .filter((f) => f.endsWith('.md'))
    .map((archivo) => {
      const contenido = readFileSync(join(dirBlog, archivo), 'utf-8')
      const fm = contenido.match(/^---\n([\s\S]*?)\n---/)
      if (!fm) return null

      const campo = (nombre) => {
        const m = fm[1].match(new RegExp(`^${nombre}:\\s*(.+)$`, 'm'))
        return m ? m[1].trim().replace(/^["']|["']$/g, '') : ''
      }

      const cuerpo = contenido.slice(fm[0].length).trim()
      const parrafos = cuerpo
        .split('\n\n')
        .map((bloque) =>
          bloque
            .replace(/^#{1,6}\s+/gm, '')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '$1')
            .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
            .replace(/^[-*]\s+/gm, '· ')
            .trim()
        )
        .filter(Boolean)

      return {
        slug: campo('slug') || archivo.replace(/\.md$/, ''),
        titulo: campo('titulo'),
        descripcion: campo('descripcion'),
        parrafos,
      }
    })
    .filter(Boolean)
}

const NAV_HTML = `<nav aria-label="Navegación principal">
  <h2>Todas las páginas</h2>
  <ul>
    <li><a href="/">Inicio</a></li>
    <li><a href="/agentes-ia">Agentes de IA para inmobiliarias</a></li>
    <li><a href="/como-funciona">Cómo funciona</a></li>
    <li><a href="/captacion-exclusivas">Captación de exclusivas</a></li>
    <li><a href="/diseno-web-inmobiliarias">Diseño web para inmobiliarias — 399€</a></li>
    <li><a href="/testimonios">Casos reales medidos</a></li>
    <li><a href="/sobre-nosotros">Sobre nosotros</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/contacto">Contacto</a></li>
    <li><a href="/privacidad">Política de privacidad</a></li>
    <li><a href="/terminos">Términos y condiciones</a></li>
    <li><a href="/cookies">Política de cookies</a></li>
  </ul>
</nav>`

const PIE_HTML = `<footer>
  <p>SpeedProfit AI — marca comercial de SpeedProficient OÜ (registro 17532333), Pärnu mnt 105, Tallinn, Harju maakond, 11312, Estonia.</p>
  <p>Contacto: <a href="mailto:info@speedprofitai.com">info@speedprofitai.com</a> · Teléfono y WhatsApp: +34 722 842 925</p>
</footer>`

function construirContenido(pagina) {
  const partes = [`<h1>${pagina.h1}</h1>`]

  for (const seccion of pagina.secciones) {
    if (seccion.h2) partes.push(`<h2>${seccion.h2}</h2>`)
    if (seccion.p) for (const p of seccion.p) partes.push(`<p>${p}</p>`)
    if (seccion.lista) {
      partes.push('<ul>')
      for (const item of seccion.lista) partes.push(`<li>${item}</li>`)
      partes.push('</ul>')
    }
  }

  partes.push(NAV_HTML, PIE_HTML)
  return `<div style="${ESTILO}">\n${partes.join('\n')}\n</div>`
}

function generarHtml(plantilla, ruta, pagina, contenidoHtml) {
  let html = plantilla

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${pagina.title}</title>`)
  html = html.replace(
    /<meta name="description" content="[\s\S]*?"\s*\/?>/,
    `<meta name="description" content="${pagina.description}" />`
  )

  const url = ruta === '/' ? `${BASE_URL}/` : `${BASE_URL}${ruta}`
  html = html.replace(
    /<link rel="canonical" href="[\s\S]*?"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`
  )
  html = html.replace(
    /<meta property="og:url" content="[\s\S]*?"\s*\/?>/,
    `<meta property="og:url" content="${url}" />`
  )
  html = html.replace(
    /<meta property="og:title" content="[\s\S]*?"\s*\/?>/,
    `<meta property="og:title" content="${pagina.title}" />`
  )
  html = html.replace(
    /<meta property="og:description" content="[\s\S]*?"\s*\/?>/,
    `<meta property="og:description" content="${pagina.description}" />`
  )

  // El contenido va DENTRO de #root: React lo reemplaza al montar, y así lo
  // cuenta cualquier crawler (no todos parsean <noscript>).
  html = html.replace('<div id="root"></div>', `<div id="root">${contenidoHtml}</div>`)
  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, '')

  return html
}

function main() {
  if (!existsSync(DIST)) {
    console.error('[prerender] No existe dist/. Ejecuta "vite build" primero.')
    process.exit(1)
  }

  const plantilla = readFileSync(join(DIST, 'index.html'), 'utf-8')
  const rutas = []

  // 1) Páginas fijas → archivo plano, sin carpeta, sin 308
  for (const [ruta, pagina] of Object.entries(PAGINAS)) {
    const html = generarHtml(plantilla, ruta, pagina, construirContenido(pagina))
    const nombre = ruta === '/' ? 'index.html' : `${ruta.slice(1)}.html`
    writeFileSync(join(DIST, nombre), html)
    rutas.push(ruta)
  }

  // 2) Artículos del blog → dist/blog/<slug>.html
  const articulos = leerArticulosBlog()
  if (articulos.length) mkdirSync(join(DIST, 'blog'), { recursive: true })

  for (const art of articulos) {
    const ruta = `/blog/${art.slug}`
    const pagina = {
      title: `${art.titulo} — Blog SpeedProfit AI`,
      description: art.descripcion,
      h1: art.titulo,
      secciones: [{ p: art.parrafos }],
    }
    const html = generarHtml(plantilla, ruta, pagina, construirContenido(pagina))
    writeFileSync(join(DIST, 'blog', `${art.slug}.html`), html)
    rutas.push(ruta)
  }

  // 3) Sitemap generado desde las rutas REALES que acabamos de escribir.
  //    Así nunca hay URLs en el sitemap que no se sirvan tal cual con 200.
  const prioridad = (r) => {
    if (r === '/') return '1.0'
    if (['/privacidad', '/terminos', '/cookies'].includes(r)) return '0.3'
    if (r.startsWith('/blog/')) return '0.7'
    if (['/testimonios', '/sobre-nosotros', '/contacto', '/blog'].includes(r)) return '0.8'
    return '0.9'
  }
  const hoy = new Date().toISOString().split('T')[0]
  const urls = rutas
    .map((r) => {
      const loc = r === '/' ? `${BASE_URL}/` : `${BASE_URL}${r}`
      return `  <url><loc>${loc}</loc><lastmod>${hoy}</lastmod><priority>${prioridad(r)}</priority></url>`
    })
    .join('\n')

  writeFileSync(
    join(DIST, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
  )

  console.log(
    `[prerender] ${rutas.length} páginas (${articulos.length} artículos) + sitemap.xml regenerado`
  )
}

main()
