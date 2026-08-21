import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Check,
  Circle,
  Clock,
  Crosshair,
  Eye,
  Filter,
  Gauge,
  Globe,
  HandHeart,
  Headphones,
  LifeBuoy,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Minus,
  MoonStar,
  Phone,
  PhoneCall,
  Repeat,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  Target,
  Trash2,
  TrendingDown,
  UserCheck,
  Users,
  Wrench,
  Zap,
} from 'lucide-react'
import { waLink } from '../contenido'

// ---------------------------------------------------------------------------
// Mapa explícito de iconos. Importar solo los que se usan mantiene el bundle
// pequeño (un `import * as` de lucide-react arrastra los ~1.500 iconos).
// Si añades un icono nuevo en contenido.js, añádelo también aquí.
// ---------------------------------------------------------------------------
const ICONOS = {
  ArrowRight,
  BarChart3,
  Check,
  Circle,
  Clock,
  Crosshair,
  Eye,
  Filter,
  Gauge,
  Globe,
  HandHeart,
  Headphones,
  LifeBuoy,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Minus,
  MoonStar,
  Phone,
  PhoneCall,
  Repeat,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  Target,
  Trash2,
  TrendingDown,
  UserCheck,
  Users,
  Wrench,
  Zap,
}

export function Icono({ nombre, className = 'w-6 h-6', strokeWidth = 1.5 }) {
  const Componente = ICONOS[nombre] || Circle
  if (!ICONOS[nombre] && import.meta.env.DEV) {
    console.warn(`[ui] Icono "${nombre}" no está en el mapa ICONOS de ui.jsx`)
  }
  return <Componente className={className} strokeWidth={strokeWidth} aria-hidden="true" />
}

// ---------------------------------------------------------------------------
// Botón dorado. Tres modos:
//   - mensaje: enlace que abre WhatsApp con ese texto precargado
//   - href: enlace normal (interno o externo)
//   - onClick (sin href ni mensaje): botón real, para acciones en la propia
//     página (ej. calcular un resultado) sin navegar a ningún sitio
// ---------------------------------------------------------------------------
export function BotonOro({ children, mensaje, href, onClick, className = '', tamano = 'grande' }) {
  const tamanos = {
    grande: 'py-5 px-8 text-lg',
    medio: 'py-3 px-6 text-base',
    pequeno: 'py-2 px-4 text-sm',
  }
  const clases = `btn-gold group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl ${tamanos[tamano]} ${className}`
  const flecha = (
    <ArrowRight
      className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
      aria-hidden="true"
    />
  )

  // Modo botón de acción (sin destino) — no navega a ningún sitio
  if (onClick && !href && !mensaje) {
    return (
      <button type="button" onClick={onClick} className={clases}>
        {children}
        {flecha}
      </button>
    )
  }

  const destino = href ?? waLink(mensaje)
  const esExterno = destino.startsWith('http')

  return (
    <a
      href={destino}
      target={esExterno ? '_blank' : undefined}
      rel={esExterno ? 'noopener noreferrer' : undefined}
      className={clases}
    >
      {children}
      {flecha}
    </a>
  )
}

// ---------------------------------------------------------------------------
// Sección con ancho contenido estándar
// ---------------------------------------------------------------------------
export function Seccion({ children, id, className = '', fondo }) {
  const estilo = fondo ? { backgroundColor: fondo } : undefined
  return (
    <section id={id} className={`py-20 md:py-24 ${className}`} style={estilo}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Etiqueta superior de sección (eyebrow)
// ---------------------------------------------------------------------------
export function Kicker({ children }) {
  return (
    <p className="font-semibold text-sm uppercase tracking-[0.2em] texto-oro">{children}</p>
  )
}

// ---------------------------------------------------------------------------
// Cabecera de sección: kicker + título + subtítulo
// ---------------------------------------------------------------------------
export function CabeceraSeccion({ kicker, titulo, subtitulo, centrado = true, esH1 = false }) {
  const Titulo = esH1 ? 'h1' : 'h2'
  return (
    <Revelar className={`${centrado ? 'text-center max-w-3xl mx-auto' : ''} mb-14`}>
      {kicker && <Kicker>{kicker}</Kicker>}
      <Titulo className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 leading-tight">
        {titulo}
      </Titulo>
      {subtitulo && <p className="texto-apagado text-lg leading-relaxed">{subtitulo}</p>}
    </Revelar>
  )
}

// ---------------------------------------------------------------------------
// Imagen de cabecera de sección. Va justo encima de <CabeceraSeccion /> y
// aparece al hacer scroll como el resto del contenido.
//
// Dos modos:
//
//   Por defecto (banner) — ancho grande y altura fija con recorte. Vale para
//   imágenes apaisadas, como home-equipo (1000x552).
//
//   `completa` — enseña la imagen ENTERA, sin recortar. Para las cuadradas
//   (home-agentes 900x900, home-dashboard 1100x1100): a ancho completo medirían
//   ~900px de alto y echarían el texto fuera de pantalla, así que se muestran
//   más pequeñas y centradas, pero sin cortar nada.
// ---------------------------------------------------------------------------
export function ImagenSeccion({
  src,
  alt,
  className = '',
  posicion = 'object-center',
  completa = false,
}) {
  return (
    <Revelar
      className={`${
        completa ? 'max-w-md' : 'max-w-4xl'
      } mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl border border-[rgba(201,168,76,0.2)] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={
          completa ? 'w-full h-auto' : `w-full h-[240px] md:h-[380px] object-cover ${posicion}`
        }
      />
    </Revelar>
  )
}

// ---------------------------------------------------------------------------
// Tarjeta de cristal (glass) reutilizable
// ---------------------------------------------------------------------------
export function Tarjeta({ children, className = '' }) {
  return <div className={`tarjeta-glass p-6 md:p-8 ${className}`}>{children}</div>
}

// ---------------------------------------------------------------------------
// Insignia / badge dorado pequeño
// ---------------------------------------------------------------------------
export function Insignia({ children }) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] texto-oro border border-[rgba(201,168,76,0.35)] bg-[rgba(201,168,76,0.08)] rounded-full px-4 py-1.5">
      {children}
    </span>
  )
}

// ---------------------------------------------------------------------------
// Bloque de estadística (número grande + etiqueta)
// ---------------------------------------------------------------------------
export function Estadistica({ valor, etiqueta }) {
  return (
    <div>
      <p className="text-3xl md:text-4xl font-bold texto-oro leading-none">{valor}</p>
      <p className="texto-apagado text-sm mt-2 leading-snug">{etiqueta}</p>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Lista de puntos con check dorado
// ---------------------------------------------------------------------------
export function ListaPuntos({ puntos }) {
  return (
    <ul className="space-y-3 mt-6">
      {puntos.map((punto, i) => (
        <li key={i} className="flex items-start gap-3">
          <Check
            className="w-5 h-5 texto-oro flex-shrink-0 mt-0.5"
            strokeWidth={2.5}
            aria-hidden="true"
          />
          <span className="texto-apagado leading-relaxed">{punto}</span>
        </li>
      ))}
    </ul>
  )
}

// ---------------------------------------------------------------------------
// Bloque de cierre / CTA final reutilizable
// ---------------------------------------------------------------------------
export function CierreCTA({ titulo, texto, cta, ctaMensaje, ctaHref, microcopy, badge }) {
  return (
    <Seccion className="text-center">
      {badge && (
        <Revelar className="mb-6">
          <Insignia>{badge}</Insignia>
        </Revelar>
      )}
      <Revelar retraso={badge ? 80 : 0}>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 max-w-4xl mx-auto leading-tight">
          {titulo}
        </h2>
      </Revelar>
      {texto && (
        <Revelar retraso={160}>
          <p className="texto-apagado text-lg max-w-2xl mx-auto mb-10 leading-relaxed">{texto}</p>
        </Revelar>
      )}
      <Revelar retraso={240}>
        <BotonOro mensaje={ctaMensaje} href={ctaHref}>{cta}</BotonOro>
        {microcopy && <p className="texto-apagado text-sm mt-6">{microcopy}</p>}
      </Revelar>
    </Seccion>
  )
}

// ---------------------------------------------------------------------------
// Revelar al hacer scroll.
//
// `retraso` (en ms) sirve para encadenar en cascada varios elementos de una
// misma fila: <Revelar retraso={i * 90}>. Bajo prefers-reduced-motion el CSS
// elimina el desplazamiento y deja solo el fundido (ver index.css).
//
// ⚠️ Salvaguarda: si IntersectionObserver no existe, el contenido se muestra
// de inmediato. Sin esto, un fallo del observador dejaría la página en blanco,
// porque .revelar arranca en opacity: 0.
// ---------------------------------------------------------------------------
export function Revelar({ children, className = '', retraso = 0, como: Etiqueta = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const nodo = ref.current
    if (!nodo) return

    // Salvaguarda 1: navegador sin IntersectionObserver → mostrar ya.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    let cancelado = false
    const mostrar = () => {
      if (!cancelado) setVisible(true)
    }

    // Salvaguarda 2: lo que ya está en pantalla al cargar (la primera
    // pantalla) no espera al observador — se revela en el siguiente frame.
    // El doble requestAnimationFrame es para que el navegador pinte primero
    // el estado invisible y la transición se vea; con uno solo React agrupa
    // los cambios y el elemento aparecería de golpe, sin fundido.
    const caja = nodo.getBoundingClientRect()
    if (caja.top < window.innerHeight && caja.bottom > 0) {
      const id = requestAnimationFrame(() => requestAnimationFrame(mostrar))
      return () => {
        cancelado = true
        cancelAnimationFrame(id)
      }
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          mostrar()
          observador.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    observador.observe(nodo)
    return () => {
      cancelado = true
      observador.disconnect()
    }
  }, [])

  return (
    <Etiqueta
      ref={ref}
      className={`revelar ${visible ? 'visible' : ''} ${className}`}
      style={retraso ? { transitionDelay: `${retraso}ms` } : undefined}
    >
      {children}
    </Etiqueta>
  )
}
