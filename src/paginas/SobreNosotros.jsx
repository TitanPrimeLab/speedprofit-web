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
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_340px] gap-12 items-start">
          <div>
            <Revelar>
              <Kicker>{SOBRE_NOSOTROS.kicker}</Kicker>
              <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-8 leading-tight">
                {SOBRE_NOSOTROS.titulo}
              </h1>
            </Revelar>

            <div className="space-y-5">
              {SOBRE_NOSOTROS.parrafos.map((p, i) => (
                <Revelar
                  key={i}
                  como="p"
                  retraso={i * 70}
                  className="texto-apagado text-lg leading-relaxed"
                >
                  {p}
                </Revelar>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t border-[rgba(201,168,76,0.15)]">
              {SOBRE_NOSOTROS.insignias.map((ins, i) => (
                <Revelar key={ins.titulo} retraso={i * 90} className="text-center">
                  <Icono nombre={ins.icono} className="w-7 h-7 texto-oro mx-auto mb-3" />
                  <p className="text-white font-semibold text-sm">{ins.titulo}</p>
                  <p className="texto-apagado text-xs mt-1">{ins.texto}</p>
                </Revelar>
              ))}
            </div>
          </div>

          <Revelar
            retraso={150}
            className="rounded-2xl overflow-hidden shadow-2xl border border-[rgba(201,168,76,0.2)]"
          >
            <img
              src="/img/sobre-nosotros.webp"
              alt={SOBRE_NOSOTROS.titulo}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </Revelar>
        </div>
      </Seccion>

      {/* FILOSOFÍA */}
      <Seccion fondo="rgba(8,8,12,0.88)">
        <div className="max-w-4xl mx-auto">
          <Revelar>
            <Kicker>{filosofia.kicker}</Kicker>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-4 mb-8 leading-snug">
              {filosofia.titulo}
            </h2>
          </Revelar>

          <div className="space-y-5">
            {filosofia.parrafos.map((p, i) => (
              <Revelar
                key={i}
                como="p"
                retraso={i * 70}
                className="texto-apagado text-lg leading-relaxed"
              >
                {p}
              </Revelar>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12 pt-10 border-t border-[rgba(201,168,76,0.15)]">
            {filosofia.metricas.map((m, i) => (
              <Revelar key={m.valor} retraso={i * 110}>
                <Estadistica valor={m.valor} etiqueta={m.etiqueta} />
              </Revelar>
            ))}
          </div>
        </div>
      </Seccion>

      {/* VALORES */}
      <Seccion>
        <CabeceraSeccion kicker={valores.kicker} titulo="Cómo trabajamos" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valores.lista.map((v, i) => (
            <Revelar key={v.titulo} retraso={(i % 3) * 90}>
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
