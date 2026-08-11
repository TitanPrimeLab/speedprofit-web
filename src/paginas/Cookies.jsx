import PaginaLegal from './PaginaLegal'

// La Política de Privacidad ya prometía esta página ("informaremos en la
// Política de Cookies y solicitaremos consentimiento cuando sea necesario").
// Contenido verificado contra el código: este sitio no fija ninguna cookie
// propia (sin analítica, sin backend, sin sesión) — ver CLAUDE.md.
const BLOQUES = [
  {
    titulo: '¿Qué son las cookies?',
    parrafos: [
      'Las cookies son pequeños archivos que un sitio web puede guardar en tu navegador para recordar información entre visitas (preferencias, sesión, estadísticas de uso, publicidad, etc.).',
    ],
  },
  {
    titulo: 'Cookies propias de speedprofitai.com',
    parrafos: [
      'Este sitio no instala ninguna cookie propia. No usamos analítica (Google Analytics ni similares), no hay inicio de sesión ni carrito, y no guardamos identificadores de seguimiento. Puedes navegar por completo sin que se te pida aceptar cookies porque, sencillamente, no las hay.',
    ],
  },
  {
    titulo: 'Contenido de terceros — vídeo de YouTube',
    parrafos: [
      'La página de inicio incluye un vídeo incrustado desde youtube-nocookie.com, el modo de YouTube pensado para no instalar cookies hasta que le das a reproducir. Si reproduces el vídeo, YouTube (Google LLC) puede entonces instalar sus propias cookies conforme a su política de privacidad y cookies.',
    ],
  },
  {
    titulo: 'Formularios de contacto y reseñas',
    parrafos: [
      'Al enviar el formulario de Contacto o el de "Comparte tu experiencia", los datos que escribes se envían directamente a Web3Forms (proveedor externo) para hacerte llegar un email. Es un envío puntual al pulsar el botón, no una cookie ni un seguimiento continuo.',
    ],
  },
  {
    titulo: 'Enlaces externos — WhatsApp',
    parrafos: [
      'Los botones de contacto te llevan a WhatsApp (wa.me / whatsapp.com), un sitio de Meta con su propia política de cookies, ajena a este sitio.',
    ],
  },
  {
    titulo: 'Cómo gestionar las cookies',
    parrafos: [
      'Como no instalamos cookies propias, no necesitas hacer nada aquí. Si en el futuro añadimos analítica o alguna funcionalidad que sí requiera cookies, actualizaremos esta página y pediremos tu consentimiento antes de activarlas, tal y como se anticipa en la Política de Privacidad.',
      'Para las cookies de terceros mencionadas arriba (YouTube, WhatsApp), puedes gestionarlas desde la configuración de tu propio navegador o directamente en las políticas de esos proveedores.',
    ],
  },
  {
    titulo: 'Cambios en esta política',
    parrafos: [
      'Podremos actualizar esta página para reflejar cambios en el sitio o en la normativa aplicable. La versión vigente estará siempre disponible aquí.',
    ],
  },
]

export default function Cookies() {
  return <PaginaLegal titulo="Política de Cookies" bloques={BLOQUES} />
}
