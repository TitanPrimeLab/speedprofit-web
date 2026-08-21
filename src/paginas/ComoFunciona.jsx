import { COMO_FUNCIONA } from '../contenido'
import {
  CabeceraSeccion,
  CierreCTA,
  Icono,
  ImagenSeccion,
  ListaPuntos,
  Revelar,
  Seccion,
  Tarjeta,
} from '../componentes/ui'
import VolverAlInicio from '../componentes/VolverAlInicio'
import Precio from '../componentes/Precio'

export default function ComoFunciona() {
  return (
    <>
      <VolverAlInicio />

      <Seccion className="!pt-12">
        <CabeceraSeccion
          esH1
          kicker={COMO_FUNCIONA.kicker}
          titulo={COMO_FUNCIONA.titulo}
          subtitulo={COMO_FUNCIONA.subtitulo}
        />

        {/* `completa`: la imagen es cuadrada (900x900). A ancho completo
            mediría ~896px de alto y echaría los pasos fuera de pantalla. */}
        <ImagenSeccion
          completa
          src="/img/como-funciona.webp"
          alt={COMO_FUNCIONA.titulo}
        />

        <div className="space-y-6 max-w-5xl mx-auto">
          {COMO_FUNCIONA.pasos.map((paso, i) => (
            <Revelar key={paso.numero} retraso={i * 60}>
              <Tarjeta>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex items-center gap-4 md:flex-col md:gap-3 flex-shrink-0">
                    <span className="w-14 h-14 rounded-full bg-[var(--gold)] text-black text-lg font-bold flex items-center justify-center">
                      {paso.numero}
                    </span>
                    <span className="text-xs texto-oro font-semibold whitespace-nowrap">
                      {paso.duracion}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
                      {paso.titulo}
                    </h3>
                    <p className="text-xs uppercase tracking-wider texto-oro mb-4">{paso.meta}</p>
                    <p className="texto-apagado leading-relaxed">{paso.texto}</p>
                    <ListaPuntos puntos={paso.puntos} />
                  </div>
                </div>
              </Tarjeta>
            </Revelar>
          ))}
        </div>
      </Seccion>

      <Seccion fondo="rgba(8,8,12,0.88)">
        <CabeceraSeccion titulo={COMO_FUNCIONA.diferenciadores.titulo} />
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {COMO_FUNCIONA.diferenciadores.lista.map((d, i) => (
            <Revelar key={d.titulo} retraso={(i % 2) * 90}>
              <Tarjeta className="h-full">
                <Icono nombre={d.icono} className="w-8 h-8 texto-oro mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{d.titulo}</h3>
                <p className="texto-apagado leading-relaxed">{d.texto}</p>
              </Tarjeta>
            </Revelar>
          ))}
        </div>
      </Seccion>

      <Precio />

      <div style={{ backgroundColor: 'rgba(5,5,8,0.9)' }}>
        <CierreCTA
          titulo={COMO_FUNCIONA.cierre.titulo}
          texto={COMO_FUNCIONA.cierre.texto}
          cta={COMO_FUNCIONA.cierre.cta}
          ctaMensaje={COMO_FUNCIONA.cierre.ctaMensaje}
          microcopy={COMO_FUNCIONA.cierre.microcopy}
        />
      </div>
    </>
  )
}
