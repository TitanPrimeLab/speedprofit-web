import { useEffect, useRef, useState } from 'react'
import { Check, Phone, Send } from 'lucide-react'
import { HOME } from '../contenido'

// ---------------------------------------------------------------------------
// Chat animado del hero. NO es interactivo: reproduce una conversación en
// bucle simulando un cliente real hablando con el agente de IA.
//
// ⚠️ IMPORTANTE (bug conocido del sitio original): el scroll interno del chat
// arrastraba la página entera hacia arriba con cada mensaje nuevo. La solución
// es la de abajo: altura fija + overflow-y auto + overscroll-behavior contain,
// y hacer scroll SOLO del contenedor (scrollTop), nunca con scrollIntoView.
// ---------------------------------------------------------------------------

const RETRASO_ESCRIBIENDO = 1100
const RETRASO_ENTRE_MENSAJES = 1500
const PAUSA_ANTES_DE_REINICIAR = 6000

export default function ChatSimulado() {
  const { chat } = HOME
  const [visibles, setVisibles] = useState([])
  const [escribiendo, setEscribiendo] = useState(false)
  const contenedorRef = useRef(null)

  useEffect(() => {
    // ⚠️ NO VOLVER A AÑADIR AQUÍ UN CORTE POR prefers-reduced-motion.
    //
    // Ya se hizo dos veces y las dos veces rompió el chat (commit a4506d0 lo
    // arregló, commit 7b53e6b lo volvió a romper). Motivo comprobado: en el
    // navegador de Ángel ese media query devuelve `true` aunque él no tenga
    // el movimiento reducido activado a propósito (Windows 11 lo activa solo
    // al desactivar "efectos de animación" o en modo ahorro de energía), y el
    // chat salía estático con los 9 mensajes de golpe.
    //
    // Accesibilidad: el chat es decorativo (`aria-hidden`, los lectores de
    // pantalla lo ignoran) y los mensajes solo aparecen — no hay deslizamiento,
    // parallax ni zoom, que es lo que WCAG 2.3.3 pide evitar. Que un contenido
    // aparezca no es movimiento vestibular.
    let temporizadores = []
    let activo = true

    const reproducir = () => {
      setVisibles([])
      setEscribiendo(false)

      chat.mensajes.forEach((mensaje, i) => {
        const base = i * RETRASO_ENTRE_MENSAJES

        // Indicador "escribiendo…" solo antes de los mensajes del agente
        if (mensaje.de === 'agente') {
          temporizadores.push(
            setTimeout(() => activo && setEscribiendo(true), base)
          )
        }

        temporizadores.push(
          setTimeout(
            () => {
              if (!activo) return
              setEscribiendo(false)
              setVisibles((prev) => [...prev, mensaje])
            },
            base + (mensaje.de === 'agente' ? RETRASO_ESCRIBIENDO : 200)
          )
        )
      })

      // Reiniciar el bucle
      temporizadores.push(
        setTimeout(
          () => activo && reproducir(),
          chat.mensajes.length * RETRASO_ENTRE_MENSAJES + PAUSA_ANTES_DE_REINICIAR
        )
      )
    }

    reproducir()

    return () => {
      activo = false
      temporizadores.forEach(clearTimeout)
    }
  }, [chat.mensajes])

  // Scroll SOLO del contenedor interno — nunca de la página
  useEffect(() => {
    const nodo = contenedorRef.current
    if (nodo) nodo.scrollTop = nodo.scrollHeight
  }, [visibles, escribiendo])

  return (
    <div
      className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl border border-[rgba(201,168,76,0.2)]"
      aria-hidden="true"
    >
      {/* Cabecera */}
      <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {chat.iniciales}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-white font-semibold text-sm truncate">{chat.agencia}</p>
          <p className="text-white/70 text-xs">{chat.estado}</p>
        </div>
        <Phone className="w-5 h-5 text-white/90 flex-shrink-0" />
      </div>

      {/* Conversación — altura fija, scroll contenido */}
      <div
        ref={contenedorRef}
        className="bg-[#ECE5DD] px-3 py-4 space-y-2 h-[420px] overflow-y-auto"
        style={{ overscrollBehavior: 'contain' }}
      >
        {visibles.map((mensaje, i) => (
          <Burbuja key={i} mensaje={mensaje} />
        ))}
        {escribiendo && <Escribiendo />}
      </div>

      {/* Barra inferior (deshabilitada, decorativa) */}
      <div className="bg-[#F0F0F0] px-3 py-3 flex items-center gap-2">
        <div className="flex-1 bg-white rounded-full px-4 py-2.5 text-gray-400 text-sm">
          {chat.placeholder}
        </div>
        <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
          <Send className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  )
}

function Burbuja({ mensaje }) {
  const esCliente = mensaje.de === 'cliente'

  if (mensaje.tipo === 'propiedad') {
    const p = mensaje.propiedad
    return (
      <div className="flex justify-start">
        <div className="max-w-[85%] bg-white rounded-lg rounded-tl-none shadow-sm overflow-hidden">
          <div className="bg-[#075E54]/5 px-3 py-2 border-b border-gray-100">
            <p className="text-[11px] uppercase tracking-wider text-[#075E54] font-semibold">
              Propiedad encontrada
            </p>
          </div>
          <div className="px-3 py-2.5 space-y-1">
            <p className="text-gray-900 font-semibold text-sm">{p.titulo}</p>
            <p className="text-gray-600 text-xs">{p.detalles}</p>
            <p className="text-gray-600 text-xs">{p.extras}</p>
            <p className="text-gray-600 text-xs">{p.ubicacion}</p>
            <p className="text-[#075E54] font-bold text-base pt-1">{p.precio}</p>
          </div>
          <div className="px-3 pb-2 flex justify-end">
            <DobleCheck />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex ${esCliente ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] px-3 py-2 shadow-sm ${
          esCliente
            ? 'bg-[#DCF8C6] rounded-lg rounded-tr-none'
            : 'bg-white rounded-lg rounded-tl-none'
        }`}
      >
        <p className="text-gray-800 text-sm whitespace-pre-line leading-snug">{mensaje.texto}</p>
        <div className="flex justify-end mt-0.5">
          <DobleCheck />
        </div>
      </div>
    </div>
  )
}

function DobleCheck() {
  return (
    <span className="inline-flex -space-x-1.5 text-[#4FC3F7]">
      <Check className="w-3.5 h-3.5" strokeWidth={3} />
      <Check className="w-3.5 h-3.5" strokeWidth={3} />
    </span>
  )
}

function Escribiendo() {
  return (
    <div className="flex justify-start">
      <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow-sm">
        <span className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </span>
      </div>
    </div>
  )
}
