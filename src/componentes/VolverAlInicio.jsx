import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function VolverAlInicio() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-10">
      <Link
        to="/"
        className="inline-flex items-center gap-2 texto-apagado hover:text-white transition-colors text-sm"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        Volver al inicio
      </Link>
    </div>
  )
}
