import { useMemo, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { CALCULADORA } from '../contenido'
import { BotonOro, CabeceraSeccion, ImagenSeccion, Revelar, Seccion, Tarjeta } from './ui'

// ============================================================================
// CALCULADORA DE PÉRDIDAS POR TIEMPO DE RESPUESTA
//
// Rediseñada: dos columnas (inputs a la izquierda, resultados en vivo a la
// derecha). Los valores por defecto son los del sector, así que en cuanto
// alguien entra ya ve un resultado — cero fricción. Todo se recalcula en
// tiempo real conforme cambian los inputs, sin botón "calcular".
//
// FÓRMULA (documentada aquí porque hace afirmaciones sobre dinero real):
//
//   1) Penalización por tiempo de respuesta:
//      El % de leads que se pierden aumenta con el tiempo que tardas en
//      responder. Basado en estudios del sector (Lead Response Management
//      Study, Harvard Business Review, InsideSales.com).
//
//   2) Leads perdidos/mes = leadsMes × penalizacion
//
//   3) Ventas perdidas/mes = leadsPerdidos × tasaConversion
//
//   4) Dinero perdido/mes = ventasPerdidas × ticket × comision
//
//   5) Con SpeedProfit se asume respuesta en < 3 segundos → penalización
//      mínima (5%), y por tanto se recupera casi toda la pérdida.
//
// Si cambias esta lógica, actualiza también CALCULADORA.transparencia
// en contenido.js — el texto explica esta fórmula al usuario.
// ============================================================================

// Curva de penalización según tiempo de respuesta (en minutos)
// Fuente: Lead Response Management Study (InsideSales.com + MIT)
const PENALIZACION_POR_TIEMPO = {
  1: 0.05, // Respuesta inmediata: pierdes solo 5%
  3: 0.10, // 1-5 min: 10%
  15: 0.20, // 5-30 min: 20%
  45: 0.30, // 30 min - 1h: 30%
  210: 0.60, // 1-6h: 60%
  720: 0.90, // >6h: 90%
}

// Con SpeedProfit se asume respuesta instantánea
const PENALIZACION_CON_SPEEDPROFIT = 0.05

const formatoEuros = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

const formatoNumero = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 1 })

export default function Calculadora() {
  const { campos } = CALCULADORA

  // Estados con valores por defecto (sin fricción — ya se ve un resultado)
  const [leads, setLeads] = useState(campos.leads.defecto)
  const [tiempoRespuesta, setTiempoRespuesta] = useState(campos.tiempoRespuesta.defecto)
  const [ticket, setTicket] = useState(campos.ticket.defecto)
  const [comision, setComision] = useState(campos.comision.defecto)
  const [conversion, setConversion] = useState(campos.conversion.defecto)
  const [mostrarTransparencia, setMostrarTransparencia] = useState(false)

  const resultado = useMemo(() => {
    const opcionTiempo = campos.tiempoRespuesta.opciones.find((o) => o.valor === tiempoRespuesta)
    const minutos = opcionTiempo?.minutos ?? 45
    const penalizacion = PENALIZACION_POR_TIEMPO[minutos] ?? 0.30

    const nLeads = parseFloat(leads) || 0
    const nTicket = parseFloat(ticket) || 0
    const nComision = (parseFloat(comision) || 0) / 100
    const nConversion = (parseFloat(conversion) || 0) / 100

    // Estado actual
    const leadsPerdidosMes = nLeads * penalizacion
    const ventasPerdidasMes = leadsPerdidosMes * nConversion
    const dineroPerdidoMes = ventasPerdidasMes * nTicket * nComision
    const dineroPerdidoAnio = dineroPerdidoMes * 12

    // Lo que YA estás ingresando con los leads que sí llegas a atender.
    //
    // Se enseña a propósito junto a la pérdida. Sin este dato la calculadora
    // solo daba media foto: al subir la tasa de conversión, la pérdida sube
    // (correcto — si cierras mejor, cada lead que se cae vale más dinero),
    // pero sin ver que los ingresos suben en la misma proporción parecía que
    // la herramienta te castigaba por mejorar. Con los dos números al lado
    // se ve que la relación entre ambos no cambia.
    const ventasCerradasMes = nLeads * (1 - penalizacion) * nConversion
    const dineroActualMes = ventasCerradasMes * nTicket * nComision

    // Con SpeedProfit
    const leadsPerdidosMesSP = nLeads * PENALIZACION_CON_SPEEDPROFIT
    const ventasPerdidasMesSP = leadsPerdidosMesSP * nConversion
    const dineroPerdidoMesSP = ventasPerdidasMesSP * nTicket * nComision
    const dineroRecuperadoMes = dineroPerdidoMes - dineroPerdidoMesSP

    const dineroRecuperadoAnio = dineroRecuperadoMes * 12

    return {
      leadsPerdidosMes,
      ventasPerdidasMes,
      dineroPerdidoMes,
      dineroPerdidoAnio,
      penalizacionPct: Math.round(penalizacion * 100),
      dineroRecuperadoMes,
      dineroRecuperadoAnio,
      dineroActualMes,
      ventasCerradasMes,
    }
  }, [leads, tiempoRespuesta, ticket, comision, conversion, campos.tiempoRespuesta.opciones])

  const mensajeWhatsApp = CALCULADORA.mejora.ctaMensajeBase.replace(
    '%DINERO%',
    formatoEuros.format(resultado.dineroPerdidoAnio)
  )

  return (
    <Seccion id={CALCULADORA.id} fondo="rgba(5,5,8,0.9)">
      <ImagenSeccion
        completa
        src="/img/home-agentes.webp"
        alt="Agentes de IA de SpeedProfit AI atendiendo leads inmobiliarios"
      />

      <CabeceraSeccion
        kicker={CALCULADORA.kicker}
        titulo={CALCULADORA.titulo}
        subtitulo={CALCULADORA.subtitulo}
      />

      <Revelar className="max-w-5xl mx-auto">
        {/* Dos columnas: inputs / resultados */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* ---- Columna izquierda: INPUTS ---- */}
          <Tarjeta>
            <div className="space-y-5">
              <CampoNumero
                etiqueta={campos.leads.etiqueta}
                ayuda={campos.leads.ayuda}
                valor={leads}
                onChange={setLeads}
              />

              <CampoSelect
                etiqueta={campos.tiempoRespuesta.etiqueta}
                valor={tiempoRespuesta}
                onChange={setTiempoRespuesta}
                opciones={campos.tiempoRespuesta.opciones}
              />

              <CampoNumero
                etiqueta={campos.ticket.etiqueta}
                ayuda={campos.ticket.ayuda}
                valor={ticket}
                onChange={setTicket}
              />

              <CampoNumero
                etiqueta={campos.comision.etiqueta}
                ayuda={campos.comision.ayuda}
                valor={comision}
                onChange={setComision}
              />

              <CampoNumero
                etiqueta={campos.conversion.etiqueta}
                ayuda={campos.conversion.ayuda}
                valor={conversion}
                onChange={setConversion}
              />
            </div>
          </Tarjeta>

          {/* ---- Columna derecha: RESULTADOS EN VIVO ---- */}
          <div className="space-y-4">
            {/* Contexto: lo que ya ingresas con los leads que sí atiendes.
                Va ANTES de la pérdida para que el número rojo se lea en
                proporción a lo que ya facturas, no como un dato suelto. */}
            <div className="rounded-2xl p-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(201,168,76,0.18)] flex items-baseline justify-between gap-3">
              <span className="text-sm text-white/70">
                {CALCULADORA.resultado.etiquetaIngresasHoy}
              </span>
              <span className="text-xl font-bold text-white whitespace-nowrap">
                {formatoEuros.format(resultado.dineroActualMes)}
                <span className="text-white/50 text-sm font-normal">/mes</span>
              </span>
            </div>

            {/* Bloque grande: pérdida al mes */}
            <div className="rounded-2xl p-6 bg-[rgba(220,60,60,0.08)] border border-[rgba(220,60,60,0.25)] text-center">
              <p className="text-sm text-white/70 mb-1">{CALCULADORA.resultado.titulo}</p>
              <p className="text-5xl md:text-6xl font-bold text-[#FF6B6B] leading-tight">
                {formatoEuros.format(resultado.dineroPerdidoMes)}
              </p>
              <p className="text-white/70 text-sm mt-1">{CALCULADORA.resultado.etiquetaMes}</p>
            </div>

            {/* Segundo bloque: pérdida anual */}
            <div className="rounded-2xl p-4 bg-[rgba(220,60,60,0.05)] border border-[rgba(220,60,60,0.15)] text-center">
              <p className="text-3xl font-bold text-[#FF6B6B]">
                {formatoEuros.format(resultado.dineroPerdidoAnio)}
              </p>
              <p className="text-white/60 text-sm mt-1">{CALCULADORA.resultado.etiquetaAnio}</p>
            </div>

            {/* 3 métricas horizontales */}
            <div className="grid grid-cols-3 gap-3">
              <MiniMetrica
                valor={Math.round(resultado.leadsPerdidosMes)}
                etiqueta={CALCULADORA.resultado.metricas.leadsPerdidos}
              />
              <MiniMetrica
                valor={formatoNumero.format(resultado.ventasPerdidasMes)}
                etiqueta={CALCULADORA.resultado.metricas.ventasPerdidas}
              />
              <MiniMetrica
                valor={`${resultado.penalizacionPct}%`}
                etiqueta={CALCULADORA.resultado.metricas.penalizacion}
              />
            </div>

            {/* Bloque VERDE: recuperación con SpeedProfit */}
            <div className="rounded-2xl p-5 bg-[rgba(74,222,128,0.06)] border border-[rgba(74,222,128,0.25)]">
              <p className="text-sm font-semibold text-[#4ADE80] mb-3">
                {CALCULADORA.mejora.titulo}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">{CALCULADORA.mejora.etiquetaRecupera}</span>
                  <span className="font-bold text-[#4ADE80]">
                    {formatoEuros.format(resultado.dineroRecuperadoMes)}/mes
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">{CALCULADORA.mejora.etiquetaRecuperaAnio}</span>
                  <span className="font-bold text-[#4ADE80]">
                    {formatoEuros.format(resultado.dineroRecuperadoAnio)}/año
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <BotonOro className="w-full" mensaje={mensajeWhatsApp}>
              {CALCULADORA.mejora.cta}
            </BotonOro>
          </div>
        </div>

        {/* -------- BLOQUE INFERIOR: cómo lo calculamos -------- */}
        <div className="mt-10">
          <button
            type="button"
            onClick={() => setMostrarTransparencia((v) => !v)}
            className="w-full flex items-center justify-between gap-3 text-left px-5 py-4 rounded-xl border border-[rgba(201,168,76,0.15)] bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.04)] transition-colors"
          >
            <span className="text-sm font-semibold texto-oro">
              {CALCULADORA.transparencia.titulo}
            </span>
            <ChevronDown
              className={`w-4 h-4 texto-oro flex-shrink-0 transition-transform duration-300 ${
                mostrarTransparencia ? 'rotate-180' : ''
              }`}
            />
          </button>

          {mostrarTransparencia && (
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {CALCULADORA.transparencia.puntos.map((punto) => (
                <div key={punto.numero} className="text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-black text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {punto.numero}
                    </span>
                    <h4 className="text-white font-semibold text-sm">{punto.titulo}</h4>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{punto.texto}</p>
                </div>
              ))}
            </div>
          )}

          {mostrarTransparencia && (
            <>
              <p className="text-white/40 text-xs text-center mt-6">
                {CALCULADORA.transparencia.fuentes}
              </p>
              <p className="text-center mt-3">
                <a
                  href={CALCULADORA.transparencia.enlaceArticulo.url}
                  className="text-sm texto-oro hover:underline"
                >
                  {CALCULADORA.transparencia.enlaceArticulo.texto}
                </a>
              </p>
            </>
          )}

          <p className="texto-apagado text-xs text-center mt-6 max-w-lg mx-auto leading-relaxed">
            {CALCULADORA.disclaimer}
          </p>
        </div>
      </Revelar>
    </Seccion>
  )
}

// ---------------------------------------------------------------------------
function CampoNumero({ etiqueta, ayuda, valor, onChange }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-white mb-1.5">{etiqueta}</span>
      <input
        type="number"
        inputMode="decimal"
        min="0"
        step="any"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(201,168,76,0.2)] rounded-xl py-2.5 px-4 text-white focus:outline-none focus:border-[var(--gold)] transition-colors"
      />
      {ayuda && <span className="block text-xs text-white/50 mt-1.5">{ayuda}</span>}
    </label>
  )
}

function CampoSelect({ etiqueta, valor, onChange, opciones }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-white mb-1.5">{etiqueta}</span>
      <div className="relative">
        <select
          value={valor}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-[rgba(255,255,255,0.04)] border border-[rgba(201,168,76,0.2)] rounded-xl py-2.5 pl-4 pr-10 text-white focus:outline-none focus:border-[var(--gold)] transition-colors cursor-pointer"
        >
          {opciones.map((op) => (
            <option key={op.valor} value={op.valor} className="bg-[#0a0a0a]">
              {op.texto}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 texto-oro absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </label>
  )
}

function MiniMetrica({ valor, etiqueta }) {
  return (
    <div className="rounded-xl p-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] text-center">
      <p className="text-xl font-bold text-white">{valor}</p>
      <p className="text-[10px] text-white/60 mt-1 leading-tight">{etiqueta}</p>
    </div>
  )
}
