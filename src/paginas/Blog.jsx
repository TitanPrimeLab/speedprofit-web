import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { formatearFecha, listarArticulos } from '../blog'
import { CabeceraSeccion, Revelar, Seccion, Tarjeta } from '../componentes/ui'
import VolverAlInicio from '../componentes/VolverAlInicio'

// ---------------------------------------------------------------------------
// Página de listado del blog. Muestra todos los artículos ordenados de más
// reciente a más antiguo. Cada tarjeta enlaza a /blog/:slug.
//
// Cuando no hay artículos, muestra un estado vacío en vez de una página en
// blanco (importante mientras se van creando los primeros).
// ---------------------------------------------------------------------------
export default function Blog() {
  const articulos = listarArticulos()

  // Actualiza el <title> y meta description de esta página (SEO por página en un SPA)
  useEffect(() => {
    document.title = 'Blog — SpeedProfit AI · Automatización con IA para inmobiliarias'
    actualizarMeta(
      'description',
      'Artículos, análisis y guías sobre automatización con IA en el sector inmobiliario. Escritos por SpeedProfit AI.'
    )
  }, [])

  return (
    <>
      <VolverAlInicio />

      <Seccion className="!pt-12">
        <CabeceraSeccion
          esH1
          kicker="Blog"
          titulo="Automatización, IA y sector inmobiliario"
          subtitulo="Análisis, casos prácticos y datos del sector para agencias que quieren dejar de perder operaciones por no responder a tiempo."
        />

        {articulos.length === 0 ? (
          <EstadoVacio />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {articulos.map((art) => (
              <Revelar key={art.slug}>
                <Link
                  to={`/blog/${art.slug}`}
                  className="block h-full group"
                  aria-label={`Leer artículo: ${art.titulo}`}
                >
                  <Tarjeta className="h-full flex flex-col hover:border-[rgba(201,168,76,0.4)] transition-colors">
                    {art.categoria && (
                      <span className="inline-block self-start text-xs font-semibold uppercase tracking-wider texto-oro mb-3">
                        {art.categoria}
                      </span>
                    )}

                    <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:texto-oro transition-colors">
                      {art.titulo}
                    </h2>

                    {art.descripcion && (
                      <p className="texto-apagado text-sm leading-relaxed flex-1">
                        {art.descripcion}
                      </p>
                    )}

                    <div className="flex items-center gap-4 text-xs text-white/50 mt-5 pt-5 border-t border-[rgba(201,168,76,0.1)]">
                      {art.fecha && (
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatearFecha(art.fecha)}
                        </span>
                      )}
                      {art.autor && (
                        <span className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5" />
                          {art.autor}
                        </span>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-sm texto-oro font-semibold mt-4">
                      Leer artículo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Tarjeta>
                </Link>
              </Revelar>
            ))}
          </div>
        )}
      </Seccion>
    </>
  )
}

// ---------------------------------------------------------------------------
function EstadoVacio() {
  return (
    <div className="text-center max-w-xl mx-auto py-12">
      <p className="text-white/70 text-lg leading-relaxed">
        Todavía no hay artículos publicados. Estamos preparando los primeros contenidos —
        vuelve pronto o suscríbete al canal para no perdértelos.
      </p>
    </div>
  )
}

function actualizarMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}
