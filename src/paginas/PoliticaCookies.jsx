import PaginaLegal from './PaginaLegal'

// A diferencia de Privacidad.jsx y Terminos.jsx, este contenido SÍ es real
// y no un placeholder: refleja el estado técnico actual de la web.
//
// ESTADO ACTUAL (sep 2026): la web usa el Meta Pixel, pero SOLO si el
// visitante pulsa "Aceptar" en el aviso de cookies (src/consentimiento.js,
// src/componentes/BannerCookies.jsx). Sin ese "sí", no se carga ningún script
// de terceros más allá del vídeo de YouTube en modo nocookie.
//
// Si se añade OTRA herramienta (Google Analytics, TikTok Pixel...), hay que:
//   1) colgarla del mismo consentimiento en src/consentimiento.js,
//   2) añadir su bloque en "Qué cookies usamos" aquí,
//   3) mencionarla en Privacidad.jsx y en scripts/contenido-estatico.mjs.
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
      'speedprofitai.com solo instala cookies de publicidad si tú lo aceptas en el aviso que aparece al entrar. Si pulsas "Rechazar", o simplemente no respondes, no se carga ninguna herramienta de seguimiento y no se instala ninguna cookie de terceros.',
      'No utilizamos Google Analytics ni ninguna otra herramienta de analítica.',
    ],
  },
  {
    titulo: 'Cookies de publicidad: Meta Pixel (solo con tu consentimiento)',
    parrafos: [
      'Proveedor: Meta Platforms Ireland Limited (Facebook e Instagram).',
      'Para qué lo usamos: medir si nuestros anuncios en Facebook e Instagram funcionan y poder mostrarlos a personas con intereses similares a los de quienes visitan esta web.',
      'Qué recoge: las páginas que visitas en esta web, tu dirección IP, datos de tu navegador y dispositivo, e identificadores como las cookies _fbp y _fbc.',
      'Cuánto duran: las cookies _fbp y _fbc caducan como máximo a los 90 días.',
      'Meta puede tratar esta información fuera del Espacio Económico Europeo y para sus propios fines, conforme a su política de datos (facebook.com/privacy/policy).',
    ],
  },
  {
    titulo: 'Cómo dar o retirar tu consentimiento',
    parrafos: [
      'Al entrar en la web verás un aviso con los botones "Aceptar" y "Rechazar". Puedes cambiar tu elección cuando quieras con el enlace "Configurar cookies" que hay al pie de todas las páginas. Al rechazar, dejamos de enviar datos a Meta y eliminamos sus cookies.',
      'También puedes bloquear o borrar las cookies desde los ajustes de tu navegador (Chrome, Safari, Firefox y Edge lo permiten).',
    ],
  },
  {
    titulo: 'Cookies estrictamente necesarias',
    parrafos: [
      'Esta web no requiere iniciar sesión y no instala cookies técnicas propias. Lo único que guardamos en tu navegador es tu elección sobre las cookies de publicidad (en el almacenamiento local), para no volver a preguntártelo en cada visita. Es un dato técnico necesario y no sirve para seguirte.',
    ],
  },
  {
    titulo: 'Contenido de terceros: vídeo de YouTube',
    parrafos: [
      'La página de inicio incluye un vídeo de YouTube incrustado en modo de privacidad ampliada (youtube-nocookie.com), precisamente para minimizar cualquier cookie antes de que decidas reproducirlo. Si le das a reproducir, YouTube (Google LLC) puede instalar sus propias cookies conforme a su política de privacidad.',
    ],
  },
  {
    titulo: 'Si esto cambia',
    parrafos: [
      'Si en el futuro incorporamos otras herramientas de medición, actualizaremos esta página antes de activarlas y las someteremos al mismo aviso de consentimiento. Te recomendamos revisar esta página de vez en cuando si te preocupa este tema.',
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
  return <PaginaLegal titulo="Política de Cookies" actualizado="25 de septiembre de 2026" bloques={BLOQUES} />
}
