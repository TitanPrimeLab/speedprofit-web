import { Seccion } from '../componentes/ui'
import VolverAlInicio from '../componentes/VolverAlInicio'

// Plantilla compartida para Privacidad y Términos.
// El contenido llega como array de bloques: { titulo, parrafos }
export default function PaginaLegal({ titulo, actualizado, bloques }) {
  return (
    <>
      <VolverAlInicio />

      <Seccion className="!pt-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{titulo}</h1>
          {actualizado && (
            <p className="texto-apagado text-sm mb-12">Última actualización: {actualizado}</p>
          )}

          <div className="space-y-10">
            {bloques.map((bloque, i) => (
              <section key={i}>
                {bloque.titulo && (
                  <h2 className="text-xl font-semibold text-white mb-4">{bloque.titulo}</h2>
                )}
                <div className="space-y-4">
                  {bloque.parrafos.map((p, j) => (
                    <p key={j} className="texto-apagado leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Seccion>
    </>
  )
}
