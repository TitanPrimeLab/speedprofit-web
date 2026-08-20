import { EXCLUSIVAS } from '../contenido'
import {
  BotonOro,
  CabeceraSeccion,
  CierreCTA,
  Icono,
  Insignia,
  Revelar,
  Seccion,
  Tarjeta,
} from '../componentes/ui'

export default function CaptacionExclusivas() {
  const { problema, metodo, numeros, tiempo, cierre } = EXCLUSIVAS

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-4xl">
            <Insignia>{EXCLUSIVAS.kicker}</Insignia>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mt-6">
              {EXCLUSIVAS.titulo}{' '}
              <span className="texto-oro-degradado">{EXCLUSIVAS.tituloDestacado}</span>
            </h1>

            <p className="texto-apagado text-lg md:text-xl mt-6 leading-relaxed max-w-2xl">
              {EXCLUSIVAS.subtitulo}
            </p>

            <div className="mt-9">
              <BotonOro mensaje={EXCLUSIVAS.ctaMensaje}>{EXCLUSIVAS.cta}</BotonOro>
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

          <p className="text-2xl md:text-3xl font-bold text-white leading-snug py-4">
            {problema.destacado}
          </p>

          {problema.parrafos2.map((p, i) => (
            <p key={i} className="texto-apagado text-lg leading-relaxed">
              {p}
            </p>
          ))}

          <p className="text-xl md:text-2xl font-semibold texto-oro leading-snug pt-2">
            {problema.remate}
          </p>
        </div>
      </Seccion>

      {/* EL MÉTODO */}
      <Seccion>
        <CabeceraSeccion kicker={metodo.kicker} titulo={metodo.titulo} />

        <div className="grid md:grid-cols-3 gap-6">
          {metodo.bloques.map((b) => (
            <Revelar key={b.titulo}>
              <Tarjeta className="h-full">
                <Icono nombre={b.icono} className="w-8 h-8 texto-oro mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">{b.titulo}</h3>
                <p className="texto-apagado leading-relaxed">{b.texto}</p>
              </Tarjeta>
            </Revelar>
          ))}
        </div>
      </Seccion>

      {/* LOS NÚMEROS */}
      <Seccion fondo="rgba(5,5,8,0.9)">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-snug mb-4">
            {numeros.titulo}
          </h2>
          <p className="text-lg texto-oro font-semibold mb-10">{numeros.subtitulo}</p>

          <div className="space-y-6 text-left">
            {numeros.parrafos.map((p, i) => (
              <p key={i} className="texto-apagado text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Seccion>

      {/* EL TIEMPO */}
      <Seccion>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-snug mb-8">
            {tiempo.titulo}
          </h2>

          <div className="space-y-1 mb-10 border-l-2 border-[var(--gold)] pl-6">
            {tiempo.lineas.map((l, i) => (
              <p key={i} className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                {l}
              </p>
            ))}
          </div>

          <div className="space-y-4 mb-8">
            {tiempo.parrafos.map((p, i) => (
              <p key={i} className="texto-apagado text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <ul className="space-y-3 mb-8">
            {tiempo.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <Icono nombre="Minus" className="w-5 h-5 texto-oro flex-shrink-0 mt-1" />
                <span className="texto-apagado text-lg leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          <p className="text-xl md:text-2xl font-semibold text-white leading-snug">
            {tiempo.remate}
          </p>
        </div>
      </Seccion>

      {/* CIERRE */}
      <Seccion fondo="rgba(5,5,8,0.9)" className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {cierre.titulo}
        </h2>

        <div className="space-y-2 mb-10 max-w-2xl mx-auto">
          {cierre.lineas.map((l, i) => (
            <p key={i} className="texto-apagado text-lg leading-relaxed">
              {l}
            </p>
          ))}
        </div>

        <p className="text-xl md:text-2xl font-semibold texto-oro max-w-3xl mx-auto mb-10 leading-snug">
          {cierre.destacado}
        </p>

        <p className="texto-apagado mb-8">{cierre.texto}</p>

        <BotonOro mensaje={cierre.ctaMensaje}>{cierre.cta}</BotonOro>

        <p className="texto-apagado text-sm mt-8 max-w-xl mx-auto leading-relaxed">
          {cierre.microcopy}
        </p>
      </Seccion>
    </>
  )
}
