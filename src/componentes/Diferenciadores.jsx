import { DIFERENCIADORES } from '../contenido'
import { CabeceraSeccion, Icono, Revelar, Seccion, Tarjeta } from './ui'

// ---------------------------------------------------------------------------
// 4 tarjetas de diferenciadores: mercados globales, privacidad, IA
// transparente y velocidad. Bloque de refuerzo de confianza, va después
// de la sección de "La solución" y antes del proceso.
// ---------------------------------------------------------------------------
export default function Diferenciadores() {
  return (
    <Seccion fondo="rgba(5,5,8,0.9)">
      <CabeceraSeccion
        kicker={DIFERENCIADORES.kicker}
        titulo={DIFERENCIADORES.titulo}
        subtitulo={DIFERENCIADORES.subtitulo}
      />

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {DIFERENCIADORES.lista.map((item) => (
          <Revelar key={item.titulo}>
            <Tarjeta className="h-full">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl border border-[rgba(201,168,76,0.35)] bg-[rgba(201,168,76,0.08)] flex items-center justify-center flex-shrink-0">
                  <Icono nombre={item.icono} className="w-6 h-6 texto-oro" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {item.titulo}
                  </h3>
                  <p className="texto-apagado text-sm leading-relaxed">{item.texto}</p>
                </div>
              </div>
            </Tarjeta>
          </Revelar>
        ))}
      </div>
    </Seccion>
  )
}
