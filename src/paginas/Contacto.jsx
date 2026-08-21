import { CONTACTO } from '../contenido'
import { BotonOro, Icono, Insignia, Revelar, Seccion } from '../componentes/ui'
import VolverAlInicio from '../componentes/VolverAlInicio'

export default function Contacto() {
  return (
    <>
      <VolverAlInicio />

      <Seccion className="!pt-12">
        <div className="max-w-2xl mx-auto">
          <Revelar>
            <Insignia>{CONTACTO.kicker}</Insignia>
          </Revelar>

          <Revelar retraso={100}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-5 leading-tight">
              {CONTACTO.titulo}{' '}
              <span className="texto-oro-degradado">{CONTACTO.tituloDestacado}</span>
            </h1>
          </Revelar>

          <Revelar retraso={200}>
            <p className="texto-apagado text-lg leading-relaxed mb-3">{CONTACTO.subtitulo}</p>
            <p className="texto-oro font-semibold mb-10">{CONTACTO.nota}</p>
          </Revelar>

          {/* Tarjeta con los datos de contacto */}
          <Revelar retraso={280} className="tarjeta-glass p-6 md:p-8 space-y-6">
            {CONTACTO.campos.map((campo) => {
              const contenido = (
                <>
                  <span className="w-12 h-12 rounded-xl border border-[rgba(201,168,76,0.35)] bg-[rgba(201,168,76,0.08)] flex items-center justify-center flex-shrink-0">
                    <Icono nombre={campo.icono} className="w-5 h-5 texto-oro" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.15em] texto-oro mb-1">
                      {campo.etiqueta}
                    </span>
                    <span className="block text-white font-semibold break-words">
                      {campo.valor}
                    </span>
                  </span>
                </>
              )

              return campo.href ? (
                <a
                  key={campo.etiqueta}
                  href={campo.href}
                  target={campo.href.startsWith('http') ? '_blank' : undefined}
                  rel={campo.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
                >
                  {contenido}
                </a>
              ) : (
                <div key={campo.etiqueta} className="flex items-center gap-4">
                  {contenido}
                </div>
              )
            })}
          </Revelar>

          <Revelar retraso={360} className="mt-10">
            <BotonOro className="w-full" mensaje={CONTACTO.ctaMensaje}>
              {CONTACTO.cta}
            </BotonOro>
          </Revelar>
        </div>
      </Seccion>
    </>
  )
}
