import { HOME, EMPRESA } from '../contenido'
import {
  BotonOro,
  CabeceraSeccion,
  CierreCTA,
  Estadistica,
  Icono,
  Ilustracion,
  Insignia,
  Revelar,
  Seccion,
  Tarjeta,
} from '../componentes/ui'
import ChatSimulado from '../componentes/ChatSimulado'
import Acordeon from '../componentes/Acordeon'
import Calculadora from '../componentes/Calculadora'

export default function Home() {
  return (
    <>
      <Hero />
      <Calculadora />
      <Problema />
      <Solucion />
      <Proceso />
      <Urgencia />
      <Video />
      <Faq />
    </>
  )
}

// ---------------------------------------------------------------------------
function Hero() {
  const { hero } = HOME
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna izquierda */}
          <div>
            <Insignia>{hero.badge}</Insignia>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mt-6">
              {hero.titulo}{' '}
              <span className="texto-oro-degradado">{hero.tituloDestacado}</span>
            </h1>

            <p className="texto-apagado text-lg md:text-xl mt-6 leading-relaxed max-w-xl">
              {hero.subtitulo}
            </p>

            <div className="mt-9">
              <BotonOro href={hero.ctaHref}>{hero.cta}</BotonOro>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-14 pt-8 border-t border-[rgba(201,168,76,0.15)]">
              {hero.estadisticas.map((e) => (
                <Estadistica key={e.valor} valor={e.valor} etiqueta={e.etiqueta} href={e.href} />
              ))}
            </div>
          </div>

          {/* Columna derecha — chat animado (oculto en móvil) */}
          <div className="hidden lg:flex justify-center">
            <ChatSimulado />
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
function Problema() {
  const { problema } = HOME
  return (
    <Seccion id="problemas">
      <CabeceraSeccion
        kicker={problema.kicker}
        titulo={problema.titulo}
        subtitulo={problema.subtitulo}
      />

      <div className="grid md:grid-cols-2 gap-6">
        {problema.tarjetas.map((t) => (
          <Revelar key={t.titulo}>
            <Tarjeta className="h-full">
              <Icono nombre={t.icono} className="w-8 h-8 texto-oro mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{t.titulo}</h3>
              <p className="texto-apagado leading-relaxed">{t.texto}</p>
            </Tarjeta>
          </Revelar>
        ))}
      </div>

      <div className="text-center mt-12">
        <BotonOro mensaje={problema.ctaMensaje}>{problema.cta}</BotonOro>
      </div>
    </Seccion>
  )
}

// ---------------------------------------------------------------------------
function Solucion() {
  const { solucion } = HOME
  return (
    <Seccion id="soluciones" fondo="rgba(8,8,12,0.88)">
      <CabeceraSeccion
        kicker={solucion.kicker}
        titulo={solucion.titulo}
        subtitulo={solucion.subtitulo}
      />

      {solucion.imagen && (
        <div className="max-w-3xl mx-auto mb-14">
          <Ilustracion src={solucion.imagen} alt={solucion.imagenAlt} ancho={900} alto={900} />
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solucion.bloques.map((b) => (
          <Revelar key={b.titulo}>
            <Tarjeta className="h-full flex flex-col">
              <Icono nombre={b.icono} className="w-8 h-8 texto-oro mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{b.titulo}</h3>
              <p className="texto-apagado leading-relaxed flex-1">{b.texto}</p>
              <p className="text-sm texto-oro font-semibold mt-5 pt-4 border-t border-[rgba(201,168,76,0.15)]">
                {b.badge}
              </p>
            </Tarjeta>
          </Revelar>
        ))}
      </div>

      <div className="text-center mt-12">
        <BotonOro mensaje={solucion.ctaMensaje}>{solucion.cta}</BotonOro>
      </div>
    </Seccion>
  )
}

// ---------------------------------------------------------------------------
function Proceso() {
  const { proceso } = HOME
  return (
    <Seccion id="proceso">
      <CabeceraSeccion kicker={proceso.kicker} titulo={proceso.titulo} />

      <div className="grid md:grid-cols-3 gap-8 md:gap-6">
        {proceso.pasos.map((paso) => (
          <Revelar key={paso.numero}>
            <div className="text-center px-4">
              <div className="relative inline-flex mb-6">
                <div className="w-16 h-16 rounded-full border border-[rgba(201,168,76,0.35)] bg-[rgba(201,168,76,0.08)] flex items-center justify-center">
                  <Icono nombre={paso.icono} className="w-7 h-7 texto-oro" />
                </div>
                <span className="absolute -top-2 -right-3 w-8 h-8 rounded-full bg-[var(--gold)] text-black text-xs font-bold flex items-center justify-center">
                  {paso.numero}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{paso.titulo}</h3>
              <p className="texto-apagado leading-relaxed">{paso.texto}</p>
            </div>
          </Revelar>
        ))}
      </div>

      <div className="text-center mt-14">
        <BotonOro mensaje={proceso.ctaMensaje}>{proceso.cta}</BotonOro>
      </div>
    </Seccion>
  )
}

// ---------------------------------------------------------------------------
function Urgencia() {
  const { urgencia } = HOME
  return (
    <div style={{ backgroundColor: 'rgba(5,5,8,0.9)' }}>
      {urgencia.imagen && (
        <div className="max-w-2xl mx-auto px-6 pt-14 md:pt-16">
          <Ilustracion src={urgencia.imagen} alt={urgencia.imagenAlt} ancho={1000} alto={552} />
        </div>
      )}
      <CierreCTA
        badge={urgencia.badge}
        titulo={urgencia.titulo}
        texto={`${urgencia.subtitulo}\n\n${urgencia.texto}`}
        cta={urgencia.cta}
        ctaMensaje={urgencia.ctaMensaje}
        microcopy={urgencia.microcopy}
      />
    </div>
  )
}

// ---------------------------------------------------------------------------
function Video() {
  const { video } = HOME
  return (
    <Seccion>
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Insignia>▶ {video.badge}</Insignia>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-5 mb-4 leading-tight">
          {video.titulo}
        </h2>
        <p className="texto-apagado text-lg">{video.subtitulo}</p>
      </div>

      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-[rgba(201,168,76,0.2)]">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${EMPRESA.youtubeId}`}
            title="SpeedProfit AI"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </Seccion>
  )
}

// ---------------------------------------------------------------------------
function Faq() {
  const { faq } = HOME

  // Schema.org FAQPage — permite que los motores de IA y buscadores lean
  // las preguntas y respuestas directamente como datos estructurados, en
  // vez de tener que interpretarlas del HTML visual. Ver CLAUDE.md, "AEO".
  const schemaFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.preguntas.map((item) => ({
      '@type': 'Question',
      name: item.p,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.r,
      },
    })),
  }

  return (
    <Seccion fondo="rgba(8,8,12,0.88)">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <CabeceraSeccion titulo={faq.titulo} subtitulo={faq.subtitulo} />
      <Acordeon preguntas={faq.preguntas} />
    </Seccion>
  )
}
