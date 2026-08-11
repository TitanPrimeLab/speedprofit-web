import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

// Acordeón del FAQ. Permite varios abiertos a la vez.
export default function Acordeon({ preguntas }) {
  const [abiertos, setAbiertos] = useState([])

  const alternar = (i) =>
    setAbiertos((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]))

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {preguntas.map((item, i) => {
        const abierto = abiertos.includes(i)
        return (
          <div
            key={i}
            className="border border-[rgba(201,168,76,0.15)] rounded-xl overflow-hidden bg-[rgba(255,255,255,0.03)]"
          >
            <button
              type="button"
              onClick={() => alternar(i)}
              aria-expanded={abierto}
              aria-controls={`respuesta-${i}`}
              className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-5 hover:bg-white/[0.03] transition-colors"
            >
              <span className="text-white font-semibold text-base md:text-lg">{item.p}</span>
              <ChevronDown
                className={`w-5 h-5 texto-oro flex-shrink-0 transition-transform duration-300 ${
                  abierto ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`respuesta-${i}`}
              className={`grid transition-all duration-300 ease-in-out ${
                abierto ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="texto-apagado px-5 md:px-6 pb-5 leading-relaxed">{item.r}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
