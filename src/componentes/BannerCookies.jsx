import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CONSENTIMIENTO } from '../contenido'
import {
  EVENTO_ABRIR,
  aceptarCookies,
  iniciarSiHayConsentimiento,
  leerConsentimiento,
  rechazarCookies,
} from '../consentimiento'

// ---------------------------------------------------------------------------
// Aviso de cookies. Aparece solo si el visitante aún no ha decidido, o cuando
// pulsa "Configurar cookies" en el pie. La lógica (y el Meta Pixel) viven en
// src/consentimiento.js.
//
// Posición: a la izquierda en escritorio y elevado en móvil, para no tapar
// nunca el botón flotante de WhatsApp (z-[9999], esquina inferior derecha),
// que es por donde entran los contactos. Por eso el z-index es menor.
// ---------------------------------------------------------------------------
export default function BannerCookies() {
  const [abierto, setAbierto] = useState(false)
  const contenedor = useRef(null)

  useEffect(() => {
    // Si ya había aceptado en una visita anterior, se reactiva sin preguntar.
    iniciarSiHayConsentimiento()
    if (leerConsentimiento() === null) setAbierto(true)

    const reabrir = () => {
      setAbierto(true)
      // Al reabrirlo a mano, llevar el foco al aviso (teclado / lector de pantalla).
      // En la carga inicial NO se roba el foco.
      requestAnimationFrame(() => contenedor.current?.focus())
    }
    window.addEventListener(EVENTO_ABRIR, reabrir)
    return () => window.removeEventListener(EVENTO_ABRIR, reabrir)
  }, [])

  if (!abierto) return null

  const decidir = (aceptar) => {
    if (aceptar) aceptarCookies()
    else rechazarCookies()
    setAbierto(false)
  }

  // Mismo tamaño y mismo peso visual: rechazar tan fácil como aceptar.
  const base =
    'flex-1 rounded-xl py-2.5 px-5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]'

  return (
    <div
      ref={contenedor}
      tabIndex={-1}
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookies-titulo"
      aria-describedby="cookies-texto"
      className="fixed z-[9998] left-4 right-4 bottom-24 md:right-auto md:left-6 md:bottom-6 md:max-w-md rounded-2xl border border-[rgba(201,168,76,0.35)] bg-[#0e0e10] p-5 shadow-2xl outline-none"
    >
      <p id="cookies-titulo" className="text-white font-semibold mb-1.5">
        {CONSENTIMIENTO.titulo}
      </p>
      <p id="cookies-texto" className="texto-apagado text-sm leading-relaxed">
        {CONSENTIMIENTO.texto}{' '}
        <Link to={CONSENTIMIENTO.enlaceRuta} className="texto-oro underline underline-offset-2">
          {CONSENTIMIENTO.enlace}
        </Link>
      </p>

      <div className="flex gap-3 mt-4">
        <button
          type="button"
          onClick={() => decidir(false)}
          className={`${base} bg-[rgba(255,255,255,0.12)] text-white hover:bg-[rgba(255,255,255,0.2)]`}
        >
          {CONSENTIMIENTO.rechazar}
        </button>
        <button type="button" onClick={() => decidir(true)} className={`${base} btn-gold`}>
          {CONSENTIMIENTO.aceptar}
        </button>
      </div>
    </div>
  )
}
