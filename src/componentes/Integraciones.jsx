import { INTEGRACIONES } from '../contenido'
import { CabeceraSeccion, Icono, Revelar, Seccion, Tarjeta } from './ui'

export default function Integraciones() {
  return (
    <Seccion id="integraciones">
      <CabeceraSeccion
        kicker={INTEGRACIONES.kicker}
        titulo={INTEGRACIONES.titulo}
        subtitulo={INTEGRACIONES.subtitulo}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {INTEGRACIONES.grupos.map((g, i) => (
          <Revelar key={g.categoria} retraso={i * 80}>
            <Tarjeta className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.3)] flex items-center justify-center flex-shrink-0">
                  <Icono nombre={g.icono} className="w-5 h-5 texto-oro" />
                </span>
                <h3 className="text-white font-semibold text-sm">{g.categoria}</h3>
              </div>
              <ul className="space-y-2">
                {g.herramientas.map((h) => (
                  <li key={h} className="texto-apagado text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[rgba(201,168,76,0.6)] flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </Tarjeta>
          </Revelar>
        ))}
      </div>

      <Revelar>
        <p className="text-center texto-apagado text-sm mt-8">{INTEGRACIONES.nota}</p>
      </Revelar>
    </Seccion>
  )
}
