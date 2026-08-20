import { SOBRE_NOSOTROS } from '../contenido'
import {
  CabeceraSeccion,
  CierreCTA,
  Estadistica,
  Icono,
  Kicker,
  Revelar,
  Seccion,
  Tarjeta,
} from '../componentes/ui'
import VolverAlInicio from '../componentes/VolverAlInicio'

export default function SobreNosotros() {
  const { filosofia, valores, cierre } = SOBRE_NOSOTROS

  return (
    <>
      <VolverAlInicio />

      {/* INTRO */}
      <Seccion className="!pt-12">
        <div className="max-w-4xl mx-auto">
          <Kicker>{SOBRE_NOSOTROS.kicker}</Kicker>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-8 leading-tight">
            {SOBRE_NOSOTROS.titulo}
          </h1>

          <div className="space-y-5">
            {SOBRE_NOSOTROS.parrafos.map((p, i) => (
              <p key={i} className="texto-apagado text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t border-[rgba(201,168,76,0.15)]">
            {SOBRE_NOSOTROS.insignias.map((ins) => (
              <div key={ins.titulo} className="text-center">
                <Icono nombre={ins.icono} className="w-7 h-7 texto-oro mx-auto mb-3" />
                <p className="text-white font-semibold text-sm">{ins.titulo}</p>
                <p className="texto-apagado text-xs mt-1">{ins.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </Seccion>

      {/* FILOSOFÍA */}
      <Seccion fondo="rgba(8,8,12,0.88)">
        <div className="max-w-4xl mx-auto">
          <Kicker>{filosofia.kicker}</Kicker>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-4 mb-8 leading-snug">
            {filosofia.titulo}
          </h2>

          <div className="space-y-5">
            {filosofia.parrafos.map((p, i) => (
              <p key={i} className="texto-apagado text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12 pt-10 border-t border-[rgba(201,168,76,0.15)]">
            {filosofia.metricas.map((m) => (
              <Estadistica key={m.valor} valor={m.valor} etiqueta={m.etiqueta} />
            ))}
          </div>
        </div>
      </Seccion>

      {/* VALORES */}
      <Seccion>
        <CabeceraSeccion kicker={valores.kicker} titulo="Cómo trabajamos" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valores.lista.map((v) => (
            <Revelar key={v.titulo}>
              <Tarjeta className="h-full">
                <Icono nombre={v.icono} className="w-8 h-8 texto-oro mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{v.titulo}</h3>
                <p className="texto-apagado leading-relaxed">{v.texto}</p>
              </Tarjeta>
            </Revelar>
          ))}
        </div>
      </Seccion>

      <div style={{ backgroundColor: 'rgba(5,5,8,0.9)' }}>
        <CierreCTA
          titulo={cierre.titulo}
          texto={cierre.texto}
          cta={cierre.cta}
          ctaMensaje={cierre.ctaMensaje}
        />
      </div>
    </>
  )
}
