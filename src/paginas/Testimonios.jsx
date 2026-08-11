import { useState } from 'react'
import { Star } from 'lucide-react'
import { TESTIMONIOS } from '../contenido'
import {
  BotonOro,
  CabeceraSeccion,
  CampoTexto,
  CierreCTA,
  Estadistica,
  Icono,
  Revelar,
  Seccion,
  Tarjeta,
} from '../componentes/ui'
import VolverAlInicio from '../componentes/VolverAlInicio'
import { enviarFormulario } from '../lib/formularios'

function SelectorEstrellas({ valor, onChange }) {
  return (
    <div className="flex gap-1" role="radiogroup" aria-label="Valoración de 1 a 5 estrellas">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={valor === n}
          aria-label={`${n} estrella${n > 1 ? 's' : ''}`}
          onClick={() => onChange(n)}
          className="p-1"
        >
          <Star
            className={`w-6 h-6 ${n <= valor ? 'texto-oro fill-current' : 'text-white/20'}`}
          />
        </button>
      ))}
    </div>
  )
}

function FormularioResena({ formulario }) {
  const [datos, setDatos] = useState({ nombre: '', cargo: '', empresa: '', zona: '', resena: '' })
  const [estrellas, setEstrellas] = useState(5)
  const [estado, setEstado] = useState('idle') // idle | enviando | exito | error

  const cambiar = (campo) => (valor) => setDatos((d) => ({ ...d, [campo]: valor }))

  const enviar = async (e) => {
    e.preventDefault()
    setEstado('enviando')
    try {
      await enviarFormulario({
        asunto: 'Nueva reseña de cliente — speedprofitai.com',
        campos: {
          from_name: datos.nombre,
          cargo: datos.cargo,
          empresa: datos.empresa,
          zona: datos.zona,
          estrellas,
          resena: datos.resena,
        },
      })
      setEstado('exito')
      setDatos({ nombre: '', cargo: '', empresa: '', zona: '', resena: '' })
      setEstrellas(5)
    } catch {
      setEstado('error')
    }
  }

  if (estado === 'exito') {
    return <p className="texto-oro font-medium text-center py-6">{formulario.exito}</p>
  }

  return (
    <form onSubmit={enviar} className="space-y-5 text-left mt-6">
      <div className="grid sm:grid-cols-2 gap-5">
        <CampoTexto
          nombre="nombre"
          etiqueta={formulario.campos.nombre.etiqueta}
          placeholder={formulario.campos.nombre.placeholder}
          valor={datos.nombre}
          onChange={cambiar('nombre')}
          requerido
        />
        <CampoTexto
          nombre="cargo"
          etiqueta={formulario.campos.cargo.etiqueta}
          placeholder={formulario.campos.cargo.placeholder}
          valor={datos.cargo}
          onChange={cambiar('cargo')}
          requerido
        />
        <CampoTexto
          nombre="empresa"
          etiqueta={formulario.campos.empresa.etiqueta}
          placeholder={formulario.campos.empresa.placeholder}
          valor={datos.empresa}
          onChange={cambiar('empresa')}
          requerido
        />
        <CampoTexto
          nombre="zona"
          etiqueta={formulario.campos.zona.etiqueta}
          placeholder={formulario.campos.zona.placeholder}
          valor={datos.zona}
          onChange={cambiar('zona')}
          requerido
        />
      </div>

      <div>
        <span className="block text-sm font-medium text-white mb-2">
          {formulario.etiquetaEstrellas}
        </span>
        <SelectorEstrellas valor={estrellas} onChange={setEstrellas} />
      </div>

      <CampoTexto
        nombre="resena"
        tipo="textarea"
        etiqueta={formulario.campos.resena.etiqueta}
        placeholder={formulario.campos.resena.placeholder}
        valor={datos.resena}
        onChange={cambiar('resena')}
        requerido
      />

      {estado === 'error' && <p className="text-sm text-red-400 text-center">{formulario.error}</p>}

      <BotonOro className="w-full" tamano="medio" submit disabled={estado === 'enviando'}>
        {estado === 'enviando' ? formulario.botonEnviando : formulario.botonEnviar}
      </BotonOro>
    </form>
  )
}

export default function Testimonios() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  return (
    <>
      <VolverAlInicio />

      <Seccion className="!pt-12">
        <CabeceraSeccion
          kicker={TESTIMONIOS.kicker}
          titulo={TESTIMONIOS.titulo}
          subtitulo={TESTIMONIOS.subtitulo}
        />

        {/* Estadísticas globales */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center mb-16 pb-12 border-b border-[rgba(201,168,76,0.15)]">
          {TESTIMONIOS.estadisticas.map((e) => (
            <Estadistica key={e.valor} valor={e.valor} etiqueta={e.etiqueta} href={e.href} />
          ))}
        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIOS.lista.map((t) => (
            <Revelar key={t.nombre}>
              <Tarjeta className="h-full flex flex-col">
                <div className="mb-5">
                  <span className="text-2xl font-bold texto-oro">{t.metrica}</span>
                  <span className="texto-apagado text-sm ml-2">{t.metricaEtiqueta}</span>
                </div>

                <blockquote className="texto-apagado leading-relaxed flex-1 italic">
                  “{t.cita}”
                </blockquote>

                <div className="flex gap-0.5 mt-6 mb-5" aria-label="5 de 5 estrellas">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 texto-oro fill-current" aria-hidden="true" />
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-5 border-t border-[rgba(201,168,76,0.15)]">
                  <span className="w-11 h-11 rounded-full bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.35)] flex items-center justify-center texto-oro font-bold text-sm flex-shrink-0">
                    {t.iniciales}
                  </span>
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-sm">{t.nombre}</p>
                    <p className="texto-apagado text-xs leading-snug">{t.cargo}</p>
                  </div>
                </div>
              </Tarjeta>
            </Revelar>
          ))}
        </div>

        {/* Invitación a clientes actuales a dejar reseña */}
        <div className="max-w-2xl mx-auto mt-14">
          <Tarjeta className="text-center border-dashed border-[rgba(201,168,76,0.3)] bg-transparent">
            <Icono nombre="MessageSquare" className="w-8 h-8 texto-oro mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              {TESTIMONIOS.dejaResena.titulo}
            </h3>
            <p className="texto-apagado mb-6">{TESTIMONIOS.dejaResena.texto}</p>
            {!mostrarFormulario && (
              <BotonOro tamano="medio" onClick={() => setMostrarFormulario(true)}>
                {TESTIMONIOS.dejaResena.cta}
              </BotonOro>
            )}
            {mostrarFormulario && (
              <FormularioResena formulario={TESTIMONIOS.dejaResena.formulario} />
            )}
          </Tarjeta>
        </div>
      </Seccion>

      <div style={{ backgroundColor: 'rgba(5,5,8,0.9)' }}>
        <CierreCTA
          titulo={TESTIMONIOS.cierre.titulo}
          texto={TESTIMONIOS.cierre.texto}
          cta={TESTIMONIOS.cierre.cta}
          ctaMensaje={TESTIMONIOS.cierre.ctaMensaje}
          microcopy={TESTIMONIOS.cierre.microcopy}
        />
      </div>
    </>
  )
}
