import { DISENO_WEB } from '../contenido'
import {
  BotonOro,
  CabeceraSeccion,
  Icono,
  Insignia,
  Revelar,
  Seccion,
  Tarjeta,
} from '../componentes/ui'
import Acordeon from '../componentes/Acordeon'

export default function DisenoWebInmobiliarias() {
  const { problema, incluye, precioBloque, faq, cierre } = DISENO_WEB

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-4xl">
            <Insignia>{DISENO_WEB.kicker}</Insignia>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mt-6">
              {DISENO_WEB.titulo}{' '}
              <span className="texto-oro-degradado">{DISENO_WEB.tituloDestacado}</span>
            </h1>

            <p className="texto-apagado text-lg md:text-xl mt-6 leading-relaxed max-w-2xl">
              {DISENO_WEB.subtitulo}
            </p>

            <div className="flex items-baseline gap-3 mt-8">
              <span className="text-4xl md:text-5xl font-bold texto-oro">
                {DISENO_WEB.precio}
              </span>
            </div>
            <p className="texto-apagado text-sm mt-1">{DISENO_WEB.precioNota}</p>

            <div className="mt-8">
              <BotonOro mensaje={DISENO_WEB.ctaMensaje}>{DISENO_WEB.cta}</BotonOro>
            </div>
          </div>
        </div>
      </section>

      {/* EL PROBLEMA */}
      <Seccion fondo="rgba(8,8,12,0.88)">
        <CabeceraSeccion kicker={problema.kicker} titulo={problema.titulo} />

        <div className="max-w-3xl mx-auto space-y-6">
          {problema.parrafos.map((p, i) => (
            <p key={i} className="texto-apagado text-lg leading-relaxed">
              {p}
            </p>
          ))}

          <p className="text-xl md:text-2xl font-semibold texto-oro leading-snug pt-2">
            {problema.remate}
          </p>
        </div>
      </Seccion>

      {/* QUÉ INCLUYE */}
      <Seccion>
        <CabeceraSeccion kicker={incluye.kicker} titulo={incluye.titulo} />

        <div className="grid md:grid-cols-2 gap-6">
          {incluye.bloques.map((b) => (
            <Revelar key={b.titulo}>
              <Tarjeta className="h-full">
                <Icono nombre={b.icono} className="w-8 h-8 texto-oro mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{b.titulo}</h3>
                <p className="texto-apagado leading-relaxed">{b.texto}</p>
              </Tarjeta>
            </Revelar>
          ))}
        </div>
      </Seccion>

      {/* PRECIO */}
      <Seccion fondo="rgba(5,5,8,0.9)">
        <CabeceraSeccion kicker={precioBloque.kicker} titulo={precioBloque.titulo} />

        <div className="max-w-lg mx-auto">
          <Tarjeta className="text-center border-[rgba(201,168,76,0.3)]">
            <h3 className="text-white font-semibold text-lg mb-1">
              {precioBloque.tarjeta.nombre}
            </h3>
            <div className="flex items-baseline justify-center gap-2 my-5">
              <span className="text-5xl font-bold texto-oro">{precioBloque.tarjeta.precio}</span>
              <span className="texto-apagado text-sm">{precioBloque.tarjeta.precioEtiqueta}</span>
            </div>

            <ul className="space-y-3 text-left mb-6">
              {precioBloque.tarjeta.incluye.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icono nombre="Check" className="w-5 h-5 texto-oro flex-shrink-0 mt-0.5" />
                  <span className="texto-apagado">{item}</span>
                </li>
              ))}
            </ul>

            <BotonOro className="w-full" mensaje={DISENO_WEB.ctaMensaje}>
              {DISENO_WEB.cta}
            </BotonOro>

            <p className="texto-apagado text-xs mt-4">{precioBloque.tarjeta.notaAparte}</p>
          </Tarjeta>
        </div>
      </Seccion>

      {/* FAQ */}
      <Seccion>
        <CabeceraSeccion kicker={faq.kicker} titulo={faq.titulo} />
        <Acordeon preguntas={faq.lista} />
      </Seccion>

      {/* CIERRE */}
      <Seccion fondo="rgba(5,5,8,0.9)" className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {cierre.titulo}
        </h2>

        <p className="texto-apagado mb-8 max-w-xl mx-auto">{cierre.texto}</p>

        <BotonOro mensaje={cierre.ctaMensaje}>{cierre.cta}</BotonOro>

        <p className="texto-apagado text-sm mt-8 max-w-xl mx-auto leading-relaxed">
          {cierre.microcopy}
        </p>
      </Seccion>
    </>
  )
}
