import { AGENTES } from '../contenido'
import {
  BotonOro,
  CabeceraSeccion,
  CierreCTA,
  Icono,
  ListaPuntos,
  Revelar,
  Seccion,
  Tarjeta,
} from '../componentes/ui'
import VolverAlInicio from '../componentes/VolverAlInicio'

export default function AgentesIA() {
  return (
    <>
      <VolverAlInicio />

      <Seccion className="!pt-12">
        <CabeceraSeccion
          esH1
          kicker={AGENTES.kicker}
          titulo={AGENTES.titulo}
          subtitulo={AGENTES.subtitulo}
        />

        <div className="space-y-6 max-w-5xl mx-auto">
          {AGENTES.lista.map((agente) => (
            <Revelar key={agente.titulo}>
              <Tarjeta>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-14 h-14 rounded-xl border border-[rgba(201,168,76,0.35)] bg-[rgba(201,168,76,0.08)] flex items-center justify-center flex-shrink-0">
                    <Icono nombre={agente.icono} className="w-7 h-7 texto-oro" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                      {agente.titulo}
                    </h3>
                    <p className="texto-apagado leading-relaxed">{agente.texto}</p>
                    <ListaPuntos puntos={agente.puntos} />
                    <div className="mt-7">
                      <BotonOro tamano="medio" mensaje={agente.mensaje}>
                        {AGENTES.cta}
                      </BotonOro>
                    </div>
                  </div>
                </div>
              </Tarjeta>
            </Revelar>
          ))}
        </div>
      </Seccion>

      <div style={{ backgroundColor: 'rgba(5,5,8,0.9)' }}>
        <CierreCTA
          titulo={AGENTES.cierre.titulo}
          texto={AGENTES.cierre.texto}
          cta={AGENTES.cierre.cta}
          ctaMensaje={AGENTES.cierre.ctaMensaje}
        />
      </div>
    </>
  )
}
