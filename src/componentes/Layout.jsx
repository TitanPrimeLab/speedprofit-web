import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import BotonWhatsApp from './BotonWhatsApp'
import BannerCookies from './BannerCookies'

// Sube al inicio al cambiar de ruta
function ScrollAlInicio() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollAlInicio />
      <a href="#contenido" className="saltar-a-contenido">
        Saltar al contenido
      </a>
      <Nav />
      <main id="contenido" className="pt-16 flex-1">
        {children}
      </main>
      <Footer />
      <BotonWhatsApp />
      <BannerCookies />
    </div>
  )
}
