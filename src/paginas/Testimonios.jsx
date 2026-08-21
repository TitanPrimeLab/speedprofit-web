import { Star } from 'lucide-react'
import { TESTIMONIOS } from '../contenido'
import {
  BotonOro,
  CabeceraSeccion,
  CierreCTA,
  Estadistica,
  Icono,
  Revelar,
  Seccion,
  Tarjeta,
} from '../componentes/ui'
import VolverAlInicio from '../componentes/VolverAlInicio'

export default function Testimonios() {
  return (
    <>
      <VolverAlInicio />

      <Seccion className="!pt-12">
        <CabeceraSeccion
          esH1
          kicker={TESTIMONIOS.kicker}
          titulo={TESTIMONIOS.titulo}
          subtitulo={TESTIMONIOS.subtitulo}
        />

        {/* Estadísticas globales */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center mb-16 pb-12 border-b border-[rgba(201,168,76,0.15)]">
          {TESTIMONIOS.estadisticas.map((e, i) => (
            <Revelar key={e.valor} retraso={i * 110}>
              <Estadistica valor={e.valor} etiqueta={e.etiqueta} />
            </Revelar>
          ))}
        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIOS.lista.map((t, i) => (
            <Revelar key={t.nombre} retraso={(i % 3) * 90}>
              <Tarjeta className="h-full flex flex-col">
                <div className="mb-5">
                  <span className="text-2xl font-bold texto-oro">{t.metrica}</span>
                  <span className="texto-apagado text-sm ml-2">{t.metricaEtiqueta}</span>
                </div>

                <blockquote className="texto-apagado leading-relaxed flex-1 italic">
                  “{t.cita}”
                </blockquote>

                <div className="flex gap-0.5 mt-6 mb-5" aria-label="5 de 5 estrellas">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 texto-oro fill-current" aria-hidden="true" />
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-5 border-t border-[rgba(201,168,76,0.15)]">
                  <span className="w-11 h-11 rounded-full bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.35)] flex items-center justify-center texto-oro font-bold text-sm flex-shrink-0">
                    {t.iniciales}
                  </span>
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-sm">{t.nombre}</p>
                    <p className="texto-apagado text-xs leading-snug">{t.cargo}</p>
                  </div>
                </div>
              </Tarjeta>
            </Revelar>
          ))}
        </div>

        {/* Invitación a clientes actuales a dejar reseña */}
        <div className="max-w-2xl mx-auto mt-14">
          <Tarjeta className="text-center border-dashed border-[rgba(201,168,76,0.3)] bg-transparent">
            <Icono nombre="MessageSquare" className="w-8 h-8 texto-oro mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              {TESTIMONIOS.dejaResena.titulo}
            </h3>
            <p className="texto-apagado mb-6">{TESTIMONIOS.dejaResena.texto}</p>
            <BotonOro tamano="medio" mensaje={TESTIMONIOS.dejaResena.ctaMensaje}>
              {TESTIMONIOS.dejaResena.cta}
            </BotonOro>
          </Tarjeta>
        </div>
      </Seccion>

      <div style={{ backgroundColor: 'rgba(5,5,8,0.9)' }}>
        <CierreCTA
          titulo={TESTIMONIOS.cierre.titulo}
          texto={TESTIMONIOS.cierre.texto}
          cta={TESTIMONIOS.cierre.cta}
          ctaMensaje={TESTIMONIOS.cierre.ctaMensaje}
          microcopy={TESTIMONIOS.cierre.microcopy}
        />
      </div>
    </>
  )
}
