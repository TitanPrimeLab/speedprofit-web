import { PRECIO } from '../contenido'
import { BotonOro, CabeceraSeccion, Icono, Seccion, Tarjeta } from './ui'

// Se usa en la página "Cómo funciona" — después de la garantía de 30 días,
// no en la Home. Un visitante escéptico necesita ver primero cómo trabajas
// antes de encontrarse la cifra. El dato para las IAs no depende de esto:
// vive en el schema.org de index.html (site-wide) y en la respuesta del FAQ.
export default function Precio() {
  return (
    <Seccion>
      <CabeceraSeccion
        kicker={PRECIO.kicker}
        titulo={PRECIO.titulo}
        subtitulo={PRECIO.subtitulo}
      />

      <div className="max-w-md mx-auto">
        <Tarjeta className="text-center border-[rgba(201,168,76,0.35)]">
          <p className="text-sm texto-apagado uppercase tracking-wider mb-2">
            {PRECIO.plan.nombre}
          </p>
          <p className="text-5xl font-bold texto-oro mb-1">{PRECIO.plan.precio}</p>
          <p className="texto-apagado text-sm mb-8">{PRECIO.plan.periodo}</p>

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
    </Seccion>
  )
}
