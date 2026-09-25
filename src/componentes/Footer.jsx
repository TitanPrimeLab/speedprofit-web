import { Link } from 'react-router-dom'
import { Instagram, Linkedin } from 'lucide-react'
import { CONSENTIMIENTO, EMPRESA, NAV_LEGAL } from '../contenido'
import { abrirConfiguracionCookies } from '../consentimiento'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[rgba(201,168,76,0.15)] bg-black/40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <Link to="/" aria-label="Ir al inicio">
          <img src="/img/logo.webp" alt={EMPRESA.nombre} className="h-12 w-auto object-contain" />
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <span className="texto-apagado text-sm">{EMPRESA.copyright}</span>

          {NAV_LEGAL.map((item) => (
            <Link
              key={item.ruta}
              to={item.ruta}
              className="texto-apagado text-sm hover:text-white transition-colors"
            >
              {item.etiqueta}
            </Link>
          ))}

          {/* Permite cambiar o retirar el consentimiento en cualquier momento */}
          <button
            type="button"
            onClick={abrirConfiguracionCookies}
            className="texto-apagado text-sm hover:text-white transition-colors"
          >
            {CONSENTIMIENTO.configurar}
          </button>

          <div className="flex items-center gap-4">
            <a
              href={EMPRESA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de SpeedProfit AI"
              className="texto-apagado hover:texto-oro transition-all hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={EMPRESA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de SpeedProfit AI"
              className="texto-apagado hover:texto-oro transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
