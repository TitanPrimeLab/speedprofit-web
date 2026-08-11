import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV, EMPRESA } from '../contenido'
import { BotonOro } from './ui'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [abierto, setAbierto] = useState(false)
  const location = useLocation()

  // Fondo sólido al hacer scroll
  useEffect(() => {
    const alScroll = () => setScrolled(window.scrollY > 20)
    alScroll()
    window.addEventListener('scroll', alScroll, { passive: true })
    return () => window.removeEventListener('scroll', alScroll)
  }, [])

  // Cerrar el menú móvil al cambiar de página
  useEffect(() => {
    setAbierto(false)
  }, [location.pathname])

  // Bloquear scroll del body con el menú móvil abierto
  useEffect(() => {
    document.body.style.overflow = abierto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [abierto])

  const clasesEnlace = ({ isActive }) =>
    `px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
      isActive
        ? 'texto-oro font-semibold'
        : 'text-white/75 hover:text-white hover:bg-white/5'
    }`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || abierto
          ? 'bg-black/90 backdrop-blur-md border-b border-[rgba(201,168,76,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0" aria-label="Ir al inicio">
          <img
            src="/img/logo.webp"
            alt={EMPRESA.nombre}
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Menú escritorio */}
        <div className="hidden xl:flex items-center gap-0.5">
          {NAV.map((item) => (
            <NavLink key={item.ruta} to={item.ruta} className={clasesEnlace} end={item.ruta === '/'}>
              {item.etiqueta}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <BotonOro
              tamano="pequeno"
              mensaje="Hola Ángel, me gustaría hablar sobre SpeedProfit AI"
            >
              Contactar ahora
            </BotonOro>
          </div>

          {/* Hamburguesa */}
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            className="xl:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={abierto}
          >
            {abierto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {abierto && (
        <div className="xl:hidden bg-black/95 backdrop-blur-md border-t border-[rgba(201,168,76,0.15)] max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-6 py-6 flex flex-col gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.ruta}
                to={item.ruta}
                end={item.ruta === '/'}
                className={({ isActive }) =>
                  `py-3 px-3 rounded-lg text-base transition-colors ${
                    isActive ? 'texto-oro font-semibold' : 'text-white/80 hover:bg-white/5'
                  }`
                }
              >
                {item.etiqueta}
              </NavLink>
            ))}
            <div className="mt-4">
              <BotonOro
                tamano="medio"
                className="w-full"
                mensaje="Hola Ángel, me gustaría hablar sobre SpeedProfit AI"
              >
                Contactar ahora
              </BotonOro>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
