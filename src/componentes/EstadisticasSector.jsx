import { CALCULADORA } from '../contenido'
import { Revelar, Seccion } from './ui'

// ---------------------------------------------------------------------------
// Fila de estadísticas del sector inmobiliario en grande.
// Va justo debajo de la Calculadora — refuerza los datos que la calculadora
// acaba de usar y sirve de puente hacia el resto del contenido.
// ---------------------------------------------------------------------------
export default function EstadisticasSector() {
  const { estadisticasSector } = CALCULADORA
  return (
    <Seccion fondo="rgba(8,8,12,0.85)">
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
        {estadisticasSector.lista.map((stat, i) => (
          <Revelar key={stat.valor} retraso={i * 120}>
            <p className="text-6xl md:text-7xl font-bold texto-oro leading-none">{stat.valor}</p>
            <p className="text-white/70 text-base leading-relaxed mt-4 max-w-xs mx-auto">
              {stat.texto}
            </p>
          </Revelar>
        ))}
      </div>
    </Seccion>
  )
}
