import { useState } from 'react'
import { CONTACTO } from '../contenido'
import { BotonOro, CampoTexto, Icono, Insignia, Seccion, Tarjeta } from '../componentes/ui'
import VolverAlInicio from '../componentes/VolverAlInicio'
import { enviarFormulario } from '../lib/formularios'

export default function Contacto() {
  const { formulario } = CONTACTO
  const [datos, setDatos] = useState({ nombre: '', email: '', telefono: '', empresa: '', mensaje: '' })
  const [estado, setEstado] = useState('idle') // idle | enviando | exito | error

  const cambiar = (campo) => (valor) => setDatos((d) => ({ ...d, [campo]: valor }))

  const enviar = async (e) => {
    e.preventDefault()
    setEstado('enviando')
    try {
      await enviarFormulario({
        asunto: 'Nuevo contacto desde speedprofitai.com',
        campos: {
          from_name: datos.nombre,
          email: datos.email,
          telefono: datos.telefono,
          empresa: datos.empresa,
          mensaje: datos.mensaje,
        },
      })
      setEstado('exito')
      setDatos({ nombre: '', email: '', telefono: '', empresa: '', mensaje: '' })
    } catch {
      setEstado('error')
    }
  }

  return (
    <>
      <VolverAlInicio />

      <Seccion className="!pt-12">
        <div className="max-w-2xl mx-auto">
          <Insignia>{CONTACTO.kicker}</Insignia>

          <h1 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-5 leading-tight">
            {CONTACTO.titulo}{' '}
            <span className="texto-oro-degradado">{CONTACTO.tituloDestacado}</span>
          </h1>

          <p className="texto-apagado text-lg leading-relaxed mb-3">{CONTACTO.subtitulo}</p>
          <p className="texto-oro font-semibold mb-10">{CONTACTO.nota}</p>

          {/* Tarjeta con los datos de contacto */}
          <div className="tarjeta-glass p-6 md:p-8 space-y-6">
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
          </div>

          <div className="mt-10">
            <BotonOro className="w-full" mensaje={CONTACTO.ctaMensaje}>
              {CONTACTO.cta}
            </BotonOro>
          </div>

          {/* Formulario — envía un email vía Web3Forms, sin backend propio */}
          <div className="mt-14">
            <h2 className="text-xl font-semibold text-white mb-6">{formulario.titulo}</h2>
            <Tarjeta>
              {estado === 'exito' ? (
                <p className="texto-oro font-medium text-center py-6">{formulario.exito}</p>
              ) : (
                <form onSubmit={enviar} className="space-y-5">
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
                      nombre="email"
                      tipo="email"
                      etiqueta={formulario.campos.email.etiqueta}
                      placeholder={formulario.campos.email.placeholder}
                      valor={datos.email}
                      onChange={cambiar('email')}
                      requerido
                    />
                    <CampoTexto
                      nombre="telefono"
                      tipo="tel"
                      etiqueta={formulario.campos.telefono.etiqueta}
                      placeholder={formulario.campos.telefono.placeholder}
                      valor={datos.telefono}
                      onChange={cambiar('telefono')}
                    />
                    <CampoTexto
                      nombre="empresa"
                      etiqueta={formulario.campos.empresa.etiqueta}
                      placeholder={formulario.campos.empresa.placeholder}
                      valor={datos.empresa}
                      onChange={cambiar('empresa')}
                    />
                  </div>
                  <CampoTexto
                    nombre="mensaje"
                    tipo="textarea"
                    etiqueta={formulario.campos.mensaje.etiqueta}
                    placeholder={formulario.campos.mensaje.placeholder}
                    valor={datos.mensaje}
                    onChange={cambiar('mensaje')}
                    requerido
                  />

                  {estado === 'error' && (
                    <p className="text-sm text-red-400 text-center">{formulario.error}</p>
                  )}

                  <BotonOro
                    className="w-full"
                    tamano="medio"
                    submit
                    disabled={estado === 'enviando'}
                  >
                    {estado === 'enviando' ? formulario.botonEnviando : formulario.botonEnviar}
                  </BotonOro>
                </form>
              )}
            </Tarjeta>
          </div>
        </div>
      </Seccion>
    </>
  )
}
