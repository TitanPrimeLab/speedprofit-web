import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { CALCULADORA } from '../contenido'
import { BotonOro, CabeceraSeccion, Insignia, Seccion, Tarjeta } from './ui'

// ============================================================================
// CALCULADORA DE COMISIONES PERDIDAS
//
// Toda la fórmula está aquí, comentada línea a línea a propósito: esta
// calculadora hace afirmaciones sobre dinero real, así que tiene que poder
// justificarse. El texto "Cómo lo calculamos" que se ve en la web (más abajo,
// en `transparencia`) es literalmente esta lógica explicada en prosa —
// si cambias la fórmula, actualiza también ese texto en contenido.js.
//
// Diseño pedido por Ángel tras probar la primera versión: "leads" son los
// leads totales que recibes al mes (sin más matices). De los que NO cierras
// (leads − operaciones), no todos son una venta perdida — una parte son
// curiosos sin intención real de compra, así que se descuentan primero. Lo
// que queda son las oportunidades reales que se pierden por respuesta tardía
// o falta de seguimiento. Con esto, cerrar el 100% de tus leads da SIEMPRE
// pérdida cero — no hay forma de que el cálculo se contradiga a sí mismo.
//
// Segundo ajuste pedido por Ángel: los resultados seguían saliendo muy
// elevados incluso sin la contradicción. Se subió el descuento de curiosos
// del 30% al 45% y se añadió un techo (máximo 30% de los leads mensuales).
//
// Tercer ajuste (el techo tenía un bug de UX serio): con leads fijos, el
// techo se activaba para casi cualquier tasa de cierre baja-a-media y el
// resultado se quedaba CLAVADO en el mismo número aunque subieras las
// operaciones cerradas una a una — solo empezaba a moverse al cruzar el
// umbral del techo. Detectado por Ángel probando con leads=20 y subiendo
// operaciones de 1 en 1: no cambiaba nada hasta llegar a 10. Un techo duro
// (Math.min) siempre hace esto en algún tramo — no es una fórmula que se
// pueda "arreglar un poco", hay que quitarlo. Se sustituye por un único
// porcentaje de curiosos más alto (60%): sigue moderando el resultado, pero
// ahora es una proporción simple y por eso responde a CADA cambio de
// operaciones, sin tramos planos.
// ============================================================================

const PORCENTAJE_CURIOSOS = 0.6 // de los leads no cerrados, ~60% no eran una venta real
const PORCENTAJE_RECUPERADO_CON_IA = 0.7 // de las oportunidades reales perdidas, SpeedProfit recupera un 70%
const PORCENTAJE_TIEMPO_LIBERADO = 0.6

function calcular({ leads, operaciones, comision, horas }) {
  if (!leads || leads <= 0) return null

  const operacionesReales = Math.min(operaciones, leads) // no se puede cerrar más de lo que entra

  // --- Lo que se pierde HOY ------------------------------------------------
  const noConvertidosMes = leads - operacionesReales
  const perdidosRealesMes = noConvertidosMes * (1 - PORCENTAJE_CURIOSOS)
  const dineroPerdidoMes = perdidosRealesMes * comision

  const operacionesPerdidasAnio = perdidosRealesMes * 12
  const dineroPerdidoAnio = dineroPerdidoMes * 12

  // --- Lo que se podría recuperar con SpeedProfit --------------------------
  const operacionesGanadasMes = perdidosRealesMes * PORCENTAJE_RECUPERADO_CON_IA
  const dineroGanadoMes = operacionesGanadasMes * comision

  const operacionesGanadasAnio = operacionesGanadasMes * 12
  const dineroGanadoAnio = dineroGanadoMes * 12

  // --- Horas liberadas (informativo, no afecta al cálculo de dinero) -------
  const horasAhorradasAnio = horas > 0 ? Math.round(horas * 52 * PORCENTAJE_TIEMPO_LIBERADO) : null

  return {
    operacionesPerdidasAnio: Math.round(operacionesPerdidasAnio),
    dineroPerdidoMes: Math.round(dineroPerdidoMes),
    dineroPerdidoAnio: Math.round(dineroPerdidoAnio),
    operacionesGanadasAnio: Math.round(operacionesGanadasAnio),
    dineroGanadoMes: Math.round(dineroGanadoMes),
    dineroGanadoAnio: Math.round(dineroGanadoAnio),
    horasAhorradasAnio,
  }
}

const formatoEuros = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

export default function Calculadora() {
  const { campos } = CALCULADORA
  const [leads, setLeads] = useState('')
  const [operaciones, setOperaciones] = useState('')
  const [comision, setComision] = useState('')
  const [horas, setHoras] = useState('')
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [mostrarMejora, setMostrarMejora] = useState(false)
  const [mostrarTransparencia, setMostrarTransparencia] = useState(false)

  const valores = {
    leads: parseFloat(leads) || 0,
    operaciones: parseFloat(operaciones) || 0,
    comision: parseFloat(comision) || 0,
    horas: parseFloat(horas) || 0,
  }
  const resultado = calcular(valores)
  const datosValidos = valores.leads > 0 && valores.comision > 0

  const handleCalcular = (e) => {
    e.preventDefault()
    if (!datosValidos) return
    setMostrarResultado(true)
    setMostrarMejora(false)
    // Desplaza suavemente hasta el resultado
    requestAnimationFrame(() => {
      document.getElementById('resultado-calculadora')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    })
  }

  const mensajeWhatsApp = resultado
    ? `Hola Ángel, he calculado en la web que mi agencia podría estar perdiendo unos ${formatoEuros.format(
        resultado.dineroPerdidoAnio
      )} al año. Quiero hablar sobre cómo recuperarlo.`
    : CALCULADORA.mejora.cta

  return (
    <Seccion id={CALCULADORA.id} fondo="rgba(5,5,8,0.9)">
      <CabeceraSeccion
        kicker={CALCULADORA.kicker}
        titulo={CALCULADORA.titulo}
        subtitulo={CALCULADORA.subtitulo}
      />

      <div className="max-w-2xl mx-auto">
        <Tarjeta>
          <form onSubmit={handleCalcular} className="space-y-6">
            <Campo
              etiqueta={campos.leads.etiqueta}
              placeholder={campos.leads.placeholder}
              valor={leads}
              onChange={setLeads}
            />
            <Campo
              etiqueta={campos.operaciones.etiqueta}
              placeholder={campos.operaciones.placeholder}
              valor={operaciones}
              onChange={setOperaciones}
            />
            <Campo
              etiqueta={campos.comision.etiqueta}
              placeholder={campos.comision.placeholder}
              valor={comision}
              onChange={setComision}
              prefijo="€"
            />
            <Campo
              etiqueta={campos.horas.etiqueta}
              placeholder={campos.horas.placeholder}
              valor={horas}
              onChange={setHoras}
            />

            <BotonOro className="w-full" tamano="medio" onClick={handleCalcular}>
              {CALCULADORA.botonCalcular}
            </BotonOro>
            {!datosValidos && (leads || comision) && (
              <p className="text-sm texto-apagado text-center">
                Rellena al menos los leads mensuales y la comisión media para calcular.
              </p>
            )}
          </form>
        </Tarjeta>

        {/* --- Resultado: lo que se pierde hoy --- */}
        {mostrarResultado && resultado && (
          <div id="resultado-calculadora" className="mt-8">
            <Tarjeta className="border-[rgba(201,168,76,0.35)] text-center">
              <Insignia>{CALCULADORA.resultado.titulo}</Insignia>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div>
                  <p className="text-4xl font-bold text-white">
                    {resultado.operacionesPerdidasAnio}
                  </p>
                  <p className="texto-apagado text-sm mt-2">
                    {CALCULADORA.resultado.etiquetaOperacionesPerdidas}
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold texto-oro">
                    {formatoEuros.format(resultado.dineroPerdidoAnio)}
                  </p>
                  <p className="texto-apagado text-sm mt-2">
                    {CALCULADORA.resultado.etiquetaDineroPerdido}
                  </p>
                  <p className="texto-apagado text-xs mt-1">
                    {formatoEuros.format(resultado.dineroPerdidoMes)}{' '}
                    {CALCULADORA.resultado.etiquetaDineroPerdidoMes}
                  </p>
                </div>
              </div>

              {!mostrarMejora && (
                <div className="mt-8">
                  <BotonOro tamano="medio" onClick={() => setMostrarMejora(true)}>
                    {CALCULADORA.botonMejora}
                  </BotonOro>
                </div>
              )}
            </Tarjeta>

            {/* --- Mejora: lo que se podría ganar --- */}
            {mostrarMejora && (
              <Tarjeta className="mt-6 border-[rgba(201,168,76,0.5)] text-center bg-[rgba(201,168,76,0.06)]">
                <Insignia>{CALCULADORA.mejora.titulo}</Insignia>

                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  <div>
                    <p className="text-4xl font-bold text-white">
                      +{resultado.operacionesGanadasAnio}
                    </p>
                    <p className="texto-apagado text-sm mt-2">
                      {CALCULADORA.mejora.etiquetaOperacionesGanadas}
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold texto-oro">
                      +{formatoEuros.format(resultado.dineroGanadoAnio)}
                    </p>
                    <p className="texto-apagado text-sm mt-2">
                      {CALCULADORA.mejora.etiquetaDineroGanado}
                    </p>
                    <p className="texto-apagado text-xs mt-1">
                      +{formatoEuros.format(resultado.dineroGanadoMes)}{' '}
                      {CALCULADORA.mejora.etiquetaDineroGanadoMes}
                    </p>
                  </div>
                </div>

                {/* Horas liberadas — sustituye al ROI/días de recuperación, más creíble que un múltiplo */}
                {resultado.horasAhorradasAnio != null && (
                  <div className="mt-8 pt-8 border-t border-[rgba(201,168,76,0.2)]">
                    <p className="text-4xl font-bold text-white">+{resultado.horasAhorradasAnio}</p>
                    <p className="texto-apagado text-sm mt-2">
                      {CALCULADORA.mejora.etiquetaHorasAhorradas}
                    </p>
                  </div>
                )}

                <div className="mt-8">
                  <BotonOro mensaje={mensajeWhatsApp}>{CALCULADORA.mejora.cta}</BotonOro>
                </div>
              </Tarjeta>
            )}

            {/* --- Transparencia del cálculo --- */}
            <div className="mt-6">
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
                <p className="texto-apagado text-sm leading-relaxed mt-4 px-1">
                  {CALCULADORA.transparencia.texto}
                </p>
              )}
            </div>

            <p className="texto-apagado text-xs text-center mt-6 max-w-lg mx-auto leading-relaxed">
              {CALCULADORA.disclaimer}
            </p>
          </div>
        )}
      </div>
    </Seccion>
  )
}

// ---------------------------------------------------------------------------
function Campo({ etiqueta, placeholder, valor, onChange, prefijo }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-white mb-2">{etiqueta}</span>
      <div className="relative">
        {prefijo && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 texto-apagado">
            {prefijo}
          </span>
        )}
        <input
          type="number"
          inputMode="decimal"
          min="0"
          step="1"
          value={valor}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(201,168,76,0.2)] rounded-xl py-3 ${
            prefijo ? 'pl-9' : 'pl-4'
          } pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--gold)] transition-colors`}
        />
      </div>
    </label>
  )
}
