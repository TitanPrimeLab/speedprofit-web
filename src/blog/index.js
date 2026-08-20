import { marked } from 'marked'

// ============================================================================
// SISTEMA DE BLOG
//
// Todos los artículos viven en src/blog/*.md — cada archivo es un artículo.
// Vite importa TODOS los .md de esta carpeta como texto raw (import.meta.glob).
// Aquí los parseamos: separamos el frontmatter YAML del cuerpo, y exponemos
// dos cosas:
//   - listarArticulos()  → todos los artículos ordenados por fecha (más
//                          reciente primero), sin el HTML del cuerpo (para
//                          el listado en /blog).
//   - obtenerArticulo(slug) → el artículo completo con HTML renderizado
//                             (para /blog/:slug).
//
// FORMATO DE ARTÍCULO (frontmatter YAML al principio):
//
//   ---
//   titulo: Título del artículo
//   slug: url-del-articulo
//   descripcion: Meta descripción para SEO (máx 155 caracteres)
//   fecha: 2026-01-15
//   autor: Ángel Valén
//   categoria: SEO
//   imagen: /img/blog/imagen-articulo.png
//   palabrasClave: [palabra1, palabra2, palabra3]
//   ---
//
//   # El título aparece aquí como H1
//
//   Contenido en Markdown normal...
//
// El slug DEBE ser único y sin espacios (usa guiones). El archivo se puede
// llamar como quieras — el slug es lo que va en la URL.
// ============================================================================

// Vite: importa todos los .md de esta carpeta como string (?raw)
// eager: true = los carga todos al build, no bajo demanda (es un blog, no hay muchos)
const modulos = import.meta.glob('./*.md', { query: '?raw', import: 'default', eager: true })

// Parser simple de frontmatter YAML (líneas clave: valor entre --- y ---)
function parsearFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { meta: {}, cuerpo: raw }

  const meta = {}
  match[1].split('\n').forEach((linea) => {
    const dp = linea.indexOf(':')
    if (dp === -1) return
    const clave = linea.slice(0, dp).trim()
    let valor = linea.slice(dp + 1).trim()

    // Arrays sencillos: [a, b, c]
    if (valor.startsWith('[') && valor.endsWith(']')) {
      valor = valor
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean)
    } else {
      // Quitar comillas si las lleva
      valor = valor.replace(/^["']|["']$/g, '')
    }

    meta[clave] = valor
  })

  return { meta, cuerpo: match[2] }
}

// Procesa todos los artículos al cargar el módulo (una sola vez)
const articulos = Object.entries(modulos)
  .map(([ruta, raw]) => {
    const { meta, cuerpo } = parsearFrontmatter(raw)
    return {
      ...meta,
      ruta,
      cuerpoMarkdown: cuerpo,
    }
  })
  .filter((a) => a.slug) // Descartar archivos sin slug (ej. plantillas)
  .sort((a, b) => (b.fecha || '').localeCompare(a.fecha || ''))

/**
 * Devuelve todos los artículos ordenados de más reciente a más antiguo.
 * Sin el HTML del cuerpo — solo metadatos, para el listado.
 */
export function listarArticulos() {
  // eslint-disable-next-line no-unused-vars
  return articulos.map(({ cuerpoMarkdown, ...meta }) => meta)
}

/**
 * Devuelve un artículo completo por su slug, con el cuerpo ya en HTML.
 * null si no existe.
 */
export function obtenerArticulo(slug) {
  const art = articulos.find((a) => a.slug === slug)
  if (!art) return null
  return {
    ...art,
    cuerpoHtml: marked.parse(art.cuerpoMarkdown, { breaks: false, gfm: true }),
  }
}

/**
 * Formatea una fecha ISO a "15 de enero de 2026" en español.
 */
export function formatearFecha(fechaIso) {
  if (!fechaIso) return ''
  const d = new Date(fechaIso)
  if (isNaN(d)) return fechaIso
  return d.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
}
