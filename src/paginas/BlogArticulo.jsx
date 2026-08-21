import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { formatearFecha, obtenerArticulo } from '../blog'
import { CierreCTA, Seccion } from '../componentes/ui'
import NoEncontrada from './NoEncontrada'
import { EMPRESA } from '../contenido'

// ---------------------------------------------------------------------------
// Página de artículo individual: /blog/:slug
//
// - Renderiza el markdown a HTML.
// - Actualiza <title> y meta tags de la página con los datos del artículo
//   (SEO por artículo dentro del SPA).
// - Inyecta un script JSON-LD schema.org Article + BreadcrumbList para que
//   Google y las IAs entiendan cada artículo como un contenido publicado
//   con autor y fecha.
// - Si no existe el slug, devuelve NoEncontrada (404).
//
// El estilo del contenido markdown vive en index.css bajo .prose-blog.
// ---------------------------------------------------------------------------
export default function BlogArticulo() {
  const { slug } = useParams()
  const articulo = obtenerArticulo(slug)

  useEffect(() => {
    if (!articulo) return

    document.title = `${articulo.titulo} — Blog SpeedProfit AI`
    if (articulo.descripcion) actualizarMeta('description', articulo.descripcion)
    if (articulo.palabrasClave && Array.isArray(articulo.palabrasClave)) {
      actualizarMeta('keywords', articulo.palabrasClave.join(', '))
    }

    // Open Graph específico del artículo
    actualizarMetaOg('og:type', 'article')
    actualizarMetaOg('og:title', articulo.titulo)
    if (articulo.descripcion) actualizarMetaOg('og:description', articulo.descripcion)
    actualizarMetaOg('og:url', `https://speedprofitai.com/blog/${articulo.slug}`)
    if (articulo.imagen) {
      actualizarMetaOg('og:image', `https://speedprofitai.com${articulo.imagen}`)
    }
    if (articulo.fecha) actualizarMetaOg('article:published_time', articulo.fecha)
    if (articulo.autor) actualizarMetaOg('article:author', articulo.autor)
    if (articulo.categoria) actualizarMetaOg('article:section', articulo.categoria)

    // Canonical: gestionado globalmente por SEOCanonical.jsx a partir de la ruta

    // JSON-LD schema.org Article + BreadcrumbList
    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          '@id': `https://speedprofitai.com/blog/${articulo.slug}#article`,
          headline: articulo.titulo,
          description: articulo.descripcion,
          datePublished: articulo.fecha,
          dateModified: articulo.fecha,
          author: { '@type': 'Person', name: articulo.autor || EMPRESA.nombre },
          publisher: {
            '@type': 'Organization',
            name: EMPRESA.nombre,
            logo: {
              '@type': 'ImageObject',
              url: 'https://speedprofitai.com/img/logo.webp',
            },
          },
          image: articulo.imagen
            ? `https://speedprofitai.com${articulo.imagen}`
            : 'https://speedprofitai.com/img/og-image.jpg',
          mainEntityOfPage: `https://speedprofitai.com/blog/${articulo.slug}`,
          inLanguage: 'es-ES',
          articleSection: articulo.categoria,
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://speedprofitai.com/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://speedprofitai.com/blog' },
            {
              '@type': 'ListItem',
              position: 3,
              name: articulo.titulo,
              item: `https://speedprofitai.com/blog/${articulo.slug}`,
            },
          ],
        },
      ],
    }

    inyectarJsonLd('jsonld-articulo', jsonLd)

    return () => {
      // Al salir del artículo, restaura título de la home y quita el JSON-LD del artículo
      document.title = 'SpeedProfit AI — Automatización con IA para inmobiliarias en España'
      quitarJsonLd('jsonld-articulo')
    }
  }, [articulo])

  if (!articulo) return <NoEncontrada />

  return (
    <Seccion className="!pt-12">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm texto-oro hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al blog
        </Link>

        <header className="mb-10">
          {articulo.categoria && (
            <span className="inline-block text-xs font-semibold uppercase tracking-wider texto-oro mb-4">
              {articulo.categoria}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            {articulo.titulo}
          </h1>

          <div className="flex items-center gap-6 text-sm text-white/60 pb-6 border-b border-[rgba(201,168,76,0.15)]">
            {articulo.fecha && (
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatearFecha(articulo.fecha)}
              </span>
            )}
            {articulo.autor && (
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {articulo.autor}
              </span>
            )}
          </div>
        </header>

        <article
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: articulo.cuerpoHtml }}
        />
      </div>

      <div className="max-w-3xl mx-auto mt-16">
        <CierreCTA
          titulo="¿Y en tu agencia, cuánto se pierde?"
          texto="Calcula cuánto dinero está dejando escapar tu agencia por no responder a tiempo — con los datos reales de tu negocio."
          cta="Ver la calculadora"
          ctaHref="/#calculadora"
        />
      </div>
    </Seccion>
  )
}

// ---------------------------------------------------------------------------
// Helpers para manipular <head> desde React (necesario en SPA sin SSR)
// ---------------------------------------------------------------------------
function actualizarMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function actualizarMetaOg(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function actualizarLink(rel, href) {
  let tag = document.querySelector(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

function inyectarJsonLd(id, data) {
  let tag = document.getElementById(id)
  if (!tag) {
    tag = document.createElement('script')
    tag.type = 'application/ld+json'
    tag.id = id
    document.head.appendChild(tag)
  }
  tag.textContent = JSON.stringify(data)
}

function quitarJsonLd(id) {
  const tag = document.getElementById(id)
  if (tag) tag.remove()
}
