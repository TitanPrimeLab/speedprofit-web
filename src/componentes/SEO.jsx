import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BASE_URL = 'https://speedprofitai.com'

/**
 * Corrige un bug real detectado con Semrush (20 ago 2026): al ser una SPA,
 * el <title>, la meta description y el <link rel="canonical"> quedaban
 * fijos en index.html, así que TODAS las páginas (agentes-ia, testimonios,
 * diseño web, privacidad...) mostraban el mismo título y se declaraban
 * "duplicado" de la home ante buscadores y motores de IA. Sitio flagged:
 * "9 pages have duplicate H1 and title tags" + "Incorrect pages found in
 * sitemap.xml" (7 pages) — mismo origen técnico.
 *
 * Se monta una vez en App.jsx (dentro del Router) y actualiza los tres
 * campos en cada cambio de ruta. Los artículos de blog gestionan su propio
 * título/descripción por separado (vienen del markdown de cada artículo,
 * son dinámicos); aquí solo se cubren las páginas fijas.
 */
const METADATOS = {
  '/': {
    title: 'SpeedProfit AI — Automatización con IA para inmobiliarias en España',
    description:
      'Sistema comercial con IA para inmobiliarias locales y agentes independientes en España: capta, atiende y convierte cada oportunidad de forma automática, las 24 horas, sin ampliar el equipo.',
  },
  '/agentes-ia': {
    title: 'Agentes de IA para inmobiliarias — SpeedProfit AI',
    description:
      'Agentes de inteligencia artificial que responden leads por WhatsApp al instante, cualifican consultas y agendan visitas automáticamente, 24 horas al día.',
  },
  '/como-funciona': {
    title: 'Cómo funciona — SpeedProfit AI',
    description:
      'Cómo implementamos el sistema de respuesta y automatización con IA en tu agencia inmobiliaria: proceso, plazos y qué incluye.',
  },
  '/captacion-exclusivas': {
    title: 'Captación de Exclusivas con IA — SpeedProfit AI',
    description:
      'Servicio de captación de exclusivas inmobiliarias apoyado en Meta Ads e inteligencia artificial, para agencias locales y agentes independientes.',
  },
  '/diseno-web-inmobiliarias': {
    title: 'Diseño Web para Inmobiliarias desde 399€ — SpeedProfit AI',
    description:
      'Web profesional para tu agencia inmobiliaria, lista para conectar a un agente de IA desde el primer día. Precio cerrado: 399€, pago único.',
  },
  '/testimonios': {
    title: 'Casos reales medidos — SpeedProfit AI',
    description:
      'Casos de éxito documentados con auditorías de tiempo de respuesta antes y después: datos medidos, no promesas.',
  },
  '/sobre-nosotros': {
    title: 'Sobre nosotros — SpeedProfit AI',
    description:
      'Quiénes somos y por qué construimos SpeedProfit AI: automatización comercial con IA para el sector inmobiliario español.',
  },
  '/contacto': {
    title: 'Contacto — SpeedProfit AI',
    description:
      'Habla con nosotros sobre cómo automatizar la respuesta y captación de tu agencia inmobiliaria con inteligencia artificial.',
  },
  '/blog': {
    title: 'Blog — SpeedProfit AI · Automatización con IA para inmobiliarias',
    description:
      'Artículos sobre automatización, IA y captación de leads para agencias inmobiliarias en España.',
  },
  '/privacidad': {
    title: 'Política de Privacidad — SpeedProfit AI',
    description: 'Política de privacidad y tratamiento de datos de SpeedProfit AI.',
  },
  '/terminos': {
    title: 'Términos y Condiciones — SpeedProfit AI',
    description: 'Términos y condiciones del servicio de SpeedProfit AI.',
  },
  '/cookies': {
    title: 'Política de Cookies — SpeedProfit AI',
    description: 'Política de cookies del sitio web de SpeedProfit AI.',
  },
}

const DEFAULT_META = METADATOS['/']

function actualizarMetaTag(name, content) {
  let tag = document.querySelector(`meta[name='${name}']`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export default function SEO() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Las páginas de artículo de blog (/blog/:slug) gestionan su propio
    // title/description/canonical en BlogArticulo.jsx — no se pisan aquí.
    if (pathname.startsWith('/blog/')) return

    const meta = METADATOS[pathname] || DEFAULT_META

    document.title = meta.title
    actualizarMetaTag('description', meta.description)

    const ruta = pathname === '/' ? '' : pathname.replace(/\/+$/, '')
    const url = `${BASE_URL}${ruta}`
    let link = document.querySelector("link[rel='canonical']")
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', url)
  }, [pathname])

  return null
}
