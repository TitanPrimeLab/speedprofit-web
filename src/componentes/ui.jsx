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
export function BotonOro({
  children,
  mensaje,
  href,
  onClick,
  submit,
  disabled,
  className = '',
  tamano = 'grande',
}) {
  const tamanos = {
    grande: 'py-5 px-8 text-lg',
    medio: 'py-3 px-6 text-base',
    pequeno: 'py-2 px-4 text-sm',
  }
  const clases = `btn-gold group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl ${tamanos[tamano]} ${
    disabled ? 'opacity-60 pointer-events-none' : ''
  } ${className}`
  const flecha = (
    <ArrowRight
      className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
      aria-hidden="true"
    />
  )

  // Modo botón de envío de formulario (dentro de un <form onSubmit>)
  if (submit) {
    return (
      <button type="submit" disabled={disabled} className={clases}>
        {children}
        {flecha}
      </button>
    )
  }

  // Modo botón de acción (sin destino) — no navega a ningún sitio
  if (onClick && !href && !mensaje) {
    return (
      <button type="button" onClick={onClick} disabled={disabled} className={clases}>
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
export function CabeceraSeccion({ kicker, titulo, subtitulo, centrado = true }) {
  return (
    <div className={`${centrado ? 'text-center max-w-3xl mx-auto' : ''} mb-14`}>
      {kicker && <Kicker>{kicker}</Kicker>}
      <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 leading-tight">
        {titulo}
      </h2>
      {subtitulo && <p className="texto-apagado text-lg leading-relaxed">{subtitulo}</p>}
    </div>
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
// Bloque de estadística (número grande + etiqueta). Con `href` se convierte
// en enlace — se usa para las cifras de ROI que ahora apuntan a la
// calculadora en vez de mostrar un número fijo (ver contenido.js).
// ---------------------------------------------------------------------------
export function Estadistica({ valor, etiqueta, href }) {
  const contenido = (
    <>
      <p className="text-3xl md:text-4xl font-bold texto-oro leading-none">{valor}</p>
      <p className="texto-apagado text-sm mt-2 leading-snug">{etiqueta}</p>
    </>
  )
  if (href) {
    return (
      <a href={href} className="block hover:opacity-80 transition-opacity">
        {contenido}
      </a>
    )
  }
  return <div>{contenido}</div>
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
// Ilustración de sección — imágenes decorativas en public/img (todas WebP,
// comprimidas). `loading="lazy"` + tamaño intrínseco para evitar saltos de
// layout. Usar `alt=""` solo cuando la imagen es puramente decorativa y el
// texto de alrededor ya transmite la misma información.
// ---------------------------------------------------------------------------
export function Ilustracion({ src, alt = '', ancho, alto, className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      width={ancho}
      height={alto}
      loading="lazy"
      decoding="async"
      className={`rounded-2xl border border-[rgba(201,168,76,0.15)] shadow-2xl w-full h-auto object-cover ${className}`}
    />
  )
}

// ---------------------------------------------------------------------------
// Bloque de cierre / CTA final reutilizable
// ---------------------------------------------------------------------------
export function CierreCTA({ titulo, texto, cta, ctaMensaje, microcopy, badge }) {
  return (
    <Seccion className="text-center">
      {badge && (
        <div className="mb-6">
          <Insignia>{badge}</Insignia>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 max-w-4xl mx-auto leading-tight">
        {titulo}
      </h2>
      {texto && (
        <p className="texto-apagado text-lg max-w-2xl mx-auto mb-10 leading-relaxed">{texto}</p>
      )}
      <BotonOro mensaje={ctaMensaje}>{cta}</BotonOro>
      {microcopy && <p className="texto-apagado text-sm mt-6">{microcopy}</p>}
    </Seccion>
  )
}

// ---------------------------------------------------------------------------
// Revelar al hacer scroll (respeta prefers-reduced-motion vía CSS)
// ---------------------------------------------------------------------------
export function Revelar({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const nodo = ref.current
    if (!nodo) return
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true)
          observador.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observador.observe(nodo)
    return () => observador.disconnect()
  }, [])

  return (
    <div ref={ref} className={`revelar ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Campo de texto genérico para formularios (Contacto, reseñas). `tipo`
// admite 'text', 'email', 'tel' o 'textarea'.
// ---------------------------------------------------------------------------
export function CampoTexto({ etiqueta, placeholder, valor, onChange, tipo = 'text', requerido, nombre }) {
  const clases =
    'w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(201,168,76,0.2)] rounded-xl py-3 px-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--gold)] transition-colors'

  return (
    <label className="block">
      <span className="block text-sm font-medium text-white mb-2">{etiqueta}</span>
      {tipo === 'textarea' ? (
        <textarea
          name={nombre}
          required={requerido}
          rows={5}
          value={valor}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${clases} resize-y`}
        />
      ) : (
        <input
          type={tipo}
          name={nombre}
          required={requerido}
          value={valor}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={clases}
        />
      )}
    </label>
  )
}
