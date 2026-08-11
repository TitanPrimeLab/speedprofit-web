import { Link } from 'react-router-dom'
import { BotonOro, Seccion } from '../componentes/ui'

export default function NoEncontrada() {
  return (
    <Seccion className="text-center min-h-[60vh] flex flex-col justify-center">
      <p className="text-6xl font-bold texto-oro mb-4">404</p>
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Esta página no existe
      </h1>
      <p className="texto-apagado mb-10">
        Puede que el enlace esté mal escrito o que la página se haya movido.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link to="/" className="texto-oro hover:underline">
          Volver al inicio
        </Link>
        <BotonOro tamano="medio" mensaje="Hola Ángel, me gustaría hablar sobre SpeedProfit AI">
          Hablar por WhatsApp
        </BotonOro>
      </div>
    </Seccion>
  )
}
