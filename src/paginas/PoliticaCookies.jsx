import PaginaLegal from './PaginaLegal'

// A diferencia de Privacidad.jsx y Terminos.jsx, este contenido SÍ es real
// y no un placeholder: refleja el estado técnico actual de la web (sin
// analítica, sin píxeles de terceros). Si en el futuro se añade Google
// Analytics, Meta Pixel o cualquier otro script que instale cookies, hay
// que actualizar el bloque "Qué cookies usamos" en consecuencia — y en ese
// momento sí sería obligatorio un banner de consentimiento, que hoy no lo es.
//
// Esto no es asesoría legal. Antes de publicar, que le eche un vistazo
// alguien con criterio legal (ver CLAUDE.md, Frente 1).
const BLOQUES = [
  {
    parrafos: [
      'En SpeedProfit AI creemos que la transparencia también aplica a algo tan pequeño como las cookies. Por eso esta página dice exactamente la verdad de lo que ocurre técnicamente en esta web, sin plantillas genéricas.',
    ],
  },
  {
    titulo: 'Qué cookies usamos',
    parrafos: [
      'A día de hoy, speedprofitai.com no utiliza cookies de analítica, publicidad ni seguimiento de ningún tipo. No tenemos instalado Google Analytics, Meta Pixel ni ninguna herramienta similar.',
      'El único elemento externo que incrustamos es el vídeo de YouTube en la página de inicio, y lo hacemos en modo de privacidad ampliada (youtube-nocookie.com), precisamente para minimizar cualquier cookie que pudiera instalarse antes de que el usuario decida reproducir el vídeo.',
    ],
  },
  {
    titulo: 'Cookies estrictamente necesarias',
    parrafos: [
      'Esta web no requiere iniciar sesión ni guarda preferencias del usuario, por lo que tampoco utiliza cookies técnicas propias más allá de las que el propio navegador pueda gestionar de forma estándar.',
    ],
  },
  {
    titulo: 'Si esto cambia',
    parrafos: [
      'Si en el futuro incorporamos herramientas de medición (por ejemplo, para campañas de publicidad), actualizaremos esta página antes de activarlas y añadiremos el correspondiente aviso de consentimiento. Te recomendamos revisar esta página de vez en cuando si te preocupa este tema.',
    ],
  },
  {
    titulo: 'Contacto',
    parrafos: [
      'Si tienes cualquier duda sobre esta política, puedes escribirnos a info@speedprofitai.com.',
    ],
  },
]

export default function PoliticaCookies() {
  return <PaginaLegal titulo="Política de Cookies" actualizado="14 de agosto de 2026" bloques={BLOQUES} />
}
