import { COMO_FUNCIONA, PRECIO } from '../contenido'
import {
  BotonOro,
  CabeceraSeccion,
  CierreCTA,
  Icono,
  Ilustracion,
  ListaPuntos,
  Revelar,
  Seccion,
  Tarjeta,
} from '../componentes/ui'
import VolverAlInicio from '../componentes/VolverAlInicio'

export default function ComoFunciona() {
  return (
    <>
      <VolverAlInicio />

      <Seccion className="!pt-12">
        <CabeceraSeccion
          kicker={COMO_FUNCIONA.kicker}
          titulo={COMO_FUNCIONA.titulo}
          subtitulo={COMO_FUNCIONA.subtitulo}
        />

        {COMO_FUNCIONA.imagen && (
          <div className="max-w-2xl mx-auto mb-14">
            <Ilustracion
              src={COMO_FUNCIONA.imagen}
              alt={COMO_FUNCIONA.imagenAlt}
              ancho={900}
              alto={900}
            />
          </div>
        )}

        <div className="space-y-6 max-w-5xl mx-auto">
          {COMO_FUNCIONA.pasos.map((paso) => (
            <Revelar key={paso.numero}>
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
          {COMO_FUNCIONA.diferenciadores.lista.map((d) => (
            <Revelar key={d.titulo}>
              <Tarjeta className="h-full">
                <Icono nombre={d.icono} className="w-8 h-8 texto-oro mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{d.titulo}</h3>
                <p className="texto-apagado leading-relaxed">{d.texto}</p>
              </Tarjeta>
            </Revelar>
          ))}
        </div>
      </Seccion>

      {/* Precio — movido aquí desde Home: el visitante ya ha visto el proceso
          completo y la garantía de devolución antes de ver la cifra */}
      <Seccion>
        <CabeceraSeccion kicker={PRECIO.kicker} titulo={PRECIO.titulo} subtitulo={PRECIO.subtitulo} />

        <div
          className={`max-w-5xl mx-auto grid grid-cols-1 gap-10 items-center ${
            PRECIO.imagen ? 'lg:grid-cols-2' : ''
          }`}
        >
          {PRECIO.imagen && (
            <div className="hidden lg:block">
              <Ilustracion src={PRECIO.imagen} alt={PRECIO.imagenAlt} ancho={1100} alto={1100} />
            </div>
          )}

          <div className="max-w-md mx-auto w-full">
            <Tarjeta className="text-center border-[rgba(201,168,76,0.35)]">
              <p className="text-sm texto-apagado uppercase tracking-wider mb-2">
                {PRECIO.plan.nombre}
              </p>
              <p className="text-3xl font-bold texto-oro mb-1">{PRECIO.plan.precio}</p>
              <p className="texto-apagado text-sm mb-3">{PRECIO.plan.periodo}</p>
              {PRECIO.puente && (
                <p className="texto-oro text-sm font-medium mb-8 leading-relaxed">{PRECIO.puente}</p>
              )}

              <ul className="space-y-3 text-left mb-8">
                {PRECIO.plan.incluye.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Icono nombre="Check" className="w-5 h-5 texto-oro flex-shrink-0 mt-0.5" />
                    <span className="texto-apagado text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <BotonOro className="w-full" mensaje={PRECIO.ctaMensaje}>
                {PRECIO.cta}
              </BotonOro>
            </Tarjeta>

            <p className="texto-apagado text-sm text-center mt-6">{PRECIO.nota}</p>
          </div>
        </div>
      </Seccion>

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
