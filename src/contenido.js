// ============================================================================
// CONTENIDO CENTRAL DE speedprofitai.com
// Todo el texto de la web vive aquí. Para cambiar un copy, cámbialo SOLO aquí.
// Los componentes no llevan texto escrito a mano.
// ============================================================================

// --- DATOS DE CONTACTO (fuente única de verdad) -----------------------------
export const EMPRESA = {
  nombre: 'SpeedProfit AI',
  email: 'info.angelspeedprofit@gmail.com',
  // OJO: número corregido. El sitio antiguo en Base44 tenía 722852924 (incorrecto).
  telefonoVisible: '+34 722 842 925',
  telefonoWhatsApp: '34722842925',
  web: 'speedprofitai.com',
  domicilio: 'Calle Pablo Serrano nº11, 50794',
  instagram: 'https://www.instagram.com/angel.speedprofit/',
  linkedin: 'https://www.linkedin.com/in/angel-valen-580a093a8',
  copyright: '© 2026 SpeedProfit AI · Todos los derechos reservados',
  youtubeId: 'rHPGOX5TKM4',
}

// Construye un enlace de WhatsApp con mensaje preescrito opcional
export const waLink = (mensaje) =>
  `https://wa.me/${EMPRESA.telefonoWhatsApp}${mensaje ? `?text=${encodeURIComponent(mensaje)}` : ''}`

// --- NAVEGACIÓN -------------------------------------------------------------
export const NAV = [
  { etiqueta: 'Inicio', ruta: '/' },
  { etiqueta: 'Agentes de IA', ruta: '/agentes-ia' },
  { etiqueta: 'Cómo funciona', ruta: '/como-funciona' },
  { etiqueta: 'Captación de Exclusivas', ruta: '/captacion-exclusivas' },
  { etiqueta: 'Testimonios', ruta: '/testimonios' },
  { etiqueta: 'Sobre nosotros', ruta: '/sobre-nosotros' },
  { etiqueta: 'Contacto', ruta: '/contacto' },
]

export const NAV_LEGAL = [
  { etiqueta: 'Política de Privacidad', ruta: '/privacidad' },
  { etiqueta: 'Términos de Servicio', ruta: '/terminos' },
  { etiqueta: 'Política de Cookies', ruta: '/cookies' },
  { etiqueta: 'Contacto', ruta: '/contacto' },
]

// ============================================================================
// HOME
// ============================================================================
export const HOME = {
  hero: {
    badge: 'Automatización con IA para Inmobiliarias',
    titulo: 'Ahora mismo hay un lead en tu zona buscando piso.',
    tituloDestacado: 'Lo va a atender otra agencia.',
    subtitulo:
      'Cada minuto sin respuesta automática es una operación que se va con tu competencia. Para siempre.',
    cta: 'Ver cuánto estoy perdiendo',
    // Ancla en vez de WhatsApp: lleva directo a la calculadora interactiva.
    ctaHref: '#calculadora',
    estadisticas: [
      { valor: '8 min', etiqueta: 'Tiempo máximo antes de perder un lead' },
      { valor: '40%', etiqueta: 'De consultas llegan fuera de horario' },
      { valor: 'Tu ROI real', etiqueta: 'Calcula el tuyo en la calculadora', href: '#calculadora' },
    ],
  },

  // Chat simulado del hero (animación, no interactivo)
  chat: {
    agencia: 'Inmobiliaria Homes & Beyond',
    estado: 'en línea',
    iniciales: 'HB',
    placeholder: 'Escribe un mensaje',
    mensajes: [
      {
        de: 'cliente',
        texto: 'Hola buenas, estoy buscando piso en Castelldefels, 3 habitaciones, hasta 350.000€',
      },
      {
        de: 'agente',
        texto: '¡Buenas! Gracias por escribirnos 😊\n¿Buscas algo cerca de la playa o te da igual la zona?',
      },
      { de: 'cliente', texto: 'Mejor cerca del mar si puede ser' },
      {
        de: 'agente',
        texto: '¿Necesitas garaje y trastero? Así te filtro solo lo que encaja 👇',
      },
      { de: 'cliente', texto: 'Sí, las dos cosas' },
      {
        de: 'agente',
        tipo: 'propiedad',
        propiedades: [
          {
            titulo: 'Piso en Castelldefels',
            detalles: '3 hab · 65 m² · 2 baños',
            extras: 'Garaje + trastero',
            ubicacion: 'A 300 m del mar · Reformado',
            precio: '299.000€',
          },
          {
            titulo: 'Piso en Castelldefels',
            detalles: '3 hab · 90 m² · 2 baños',
            extras: 'Garaje + trastero',
            ubicacion: 'A 300 m del mar · Reformado',
            precio: '339.000€',
          },
        ],
      },
      { de: 'cliente', texto: 'Me gusta más la de 90 m², ¿podría ir a verla?' },
      {
        de: 'agente',
        texto: 'Tengo visita libre el sábado a las 10:30 o a las 12:00. ¿Cuál te va mejor?',
      },
      { de: 'cliente', texto: 'A las 10:30 perfecto' },
      {
        de: 'agente',
        texto: '¡Hecho! 🏠 Te confirmo la visita el sábado a las 10:30. Te llegará un recordatorio.',
      },
    ],
  },

  problema: {
    kicker: 'El problema',
    titulo: 'Lo que te está costando no tener IA',
    subtitulo:
      'No son hipótesis. Son operaciones reales que se pierden cada semana en agencias como la tuya.',
    tarjetas: [
      {
        icono: 'Clock',
        titulo: 'Respondes tarde. Pierdes la venta.',
        texto:
          'Un comprador interesado espera menos de 8 minutos. Si tardas más, ya está hablando con la agencia de al lado. Y esa agencia no tiene más talento que tú — solo responde más rápido.',
      },
      {
        icono: 'MoonStar',
        titulo: 'Tu agencia duerme. Tus leads, no.',
        texto:
          'El 40% de las consultas inmobiliarias llegan de noche o en fin de semana. Cada una de esas personas que no recibe respuesta es una comisión que no verás nunca.',
      },
      {
        icono: 'Trash2',
        titulo: 'Pagas por leads que tiras a la basura.',
        texto:
          'Inviertes en Fotocasa, Idealista, publicidad. Pero sin cualificación automática, tu equipo pierde horas en curiosos mientras los compradores reales se enfrían.',
      },
      {
        icono: 'TrendingDown',
        titulo: 'Tu competencia ya se ha automatizado.',
        texto:
          'Mientras lees esto, hay agencias en tu zona que ya tienen IA respondiendo, cualificando y agendando visitas. Cada día que pasa amplían la ventaja.',
      },
    ],
    cta: 'Quiero dejar de perderlas',
    ctaMensaje: 'Hola Ángel, quiero dejar de perder operaciones en mi agencia',
  },

  solucion: {
    kicker: 'La solución',
    titulo: 'La IA que trabaja mientras tú cierras operaciones',
    subtitulo: 'No es tecnología del futuro. Es lo que tus clientes ya esperan hoy.',
    imagen: '/img/home-agentes.webp',
    imagenAlt: 'Agentes de IA de SpeedProfit AI integrados en WhatsApp, web y CRM',
    bloques: [
      {
        icono: 'Zap',
        titulo: 'Responde en menos de 10 segundos',
        texto:
          'Siempre. A las 3 de la mañana también. Nunca más pierdes un lead por no estar disponible.',
        badge: 'Tiempo de respuesta: <10 seg',
      },
      {
        icono: 'Filter',
        titulo: 'Solo hablas con quien va a comprar',
        texto:
          'La IA filtra a los curiosos y te entrega únicamente leads calificados listos para visitar.',
        badge: '+85% leads cualificados',
      },
      {
        icono: 'BarChart3',
        titulo: 'Ves en tiempo real lo que funciona',
        texto:
          'Dashboard con cada métrica que importa. Sabes exactamente de dónde vienen tus operaciones.',
        badge: 'ROI medible al instante',
      },
      {
        icono: 'Repeat',
        titulo: 'Ninguna oportunidad se queda sin seguimiento',
        texto:
          'Secuencias automáticas que persiguen al lead por ti hasta que esté listo para firmar.',
        badge: '+40% tasa de cierre',
      },
      // NUEVO — soporte 24/7/365
      {
        icono: 'LifeBuoy',
        titulo: 'Un equipo detrás, 365 días al año',
        texto:
          'Si algo falla un domingo a las 11 de la noche, lo arreglamos entonces. No abres un ticket ni esperas al lunes: tienes detrás al equipo que montó tu sistema.',
        badge: 'Soporte 24/7 · 365 días',
      },
      // NUEVO — trato personalizado
      {
        icono: 'UserCheck',
        titulo: 'Tu agencia no es un número de cliente',
        texto:
          'No te asignamos un chatbot de soporte ni un plan estándar. Cada agencia tiene su sistema, su tono y su interlocutor directo. Eso la competencia no lo hace.',
        badge: 'Trato individual, siempre',
      },
    ],
    cta: 'Solicitar información',
    ctaMensaje: 'Hola Ángel, quiero información sobre los agentes de IA para mi agencia',
  },

  proceso: {
    kicker: 'Cómo funciona',
    titulo: '3 pasos para transformar tu inmobiliaria',
    pasos: [
      {
        numero: '01',
        icono: 'Search',
        titulo: 'Consulta gratuita',
        texto: 'Analizamos tu inmobiliaria, tus procesos actuales y definimos objetivos claros.',
      },
      {
        numero: '02',
        icono: 'Settings',
        titulo: 'Configuración personalizada',
        texto: 'Implementamos la IA adaptada a tu catálogo de propiedades y flujo de trabajo.',
      },
      {
        numero: '03',
        icono: 'Rocket',
        titulo: 'Lanzamiento y resultados',
        texto: 'Activamos el sistema y empiezas a ver resultados desde la primera semana.',
      },
    ],
    cta: 'Solicitar información',
    ctaMensaje: 'Hola Ángel, quiero información sobre cómo funciona SpeedProfit AI',
  },

  urgencia: {
    badge: 'Plazas limitadas',
    imagen: '/img/home-equipo.webp',
    imagenAlt: 'Equipo de SpeedProfit AI, soporte real 24/7 los 365 días del año',
    titulo: 'Tu competencia ya tomó la decisión. ¿Y tú?',
    subtitulo:
      'La pregunta es cuántas operaciones más vas a dejar ir antes de tomar la tuya.',
    texto:
      '30 minutos. Sin compromiso. Te mostramos exactamente cuánto estás perdiendo ahora mismo y cómo recuperarlo.',
    cta: 'Solicitar diagnóstico gratuito',
    ctaMensaje: 'Hola Ángel, quiero solicitar el diagnóstico gratuito de 30 minutos',
    microcopy: 'Sin compromiso · Solo una agencia por zona · Soporte 24/7 los 365 días',
  },

  video: {
    badge: 'Vídeo explicativo',
    titulo: 'Descubre cómo SpeedProfit AI transforma tu negocio',
    subtitulo: 'Mira cómo nuestros agentes trabajan por ti las 24 horas del día.',
  },

  faq: {
    titulo: 'Preguntas frecuentes',
    subtitulo: 'Todo lo que necesitas saber',
    preguntas: [
      {
        p: '¿Para qué tipo de agencias está pensado SpeedProfit AI?',
        r: 'Para agencias inmobiliarias independientes de toda España que quieren automatizar la captación de propietarios y la gestión de leads.',
      },
      {
        p: '¿Cuánto tarda la implementación?',
        r: 'De 2 a 3 semanas después de firmar el contrato. Sin necesidad de conocimientos técnicos.',
      },
      {
        p: '¿Funciona 24 horas al día?',
        r: 'Sí. El sistema responde leads automáticamente a cualquier hora, incluyendo noches y fines de semana.',
      },
      {
        p: '¿Qué pasa si algo falla un domingo por la noche?',
        r: 'Lo resolvemos entonces. Tenemos soporte 24 horas los 365 días del año y un equipo detrás de cada una de las más de 50 empresas activas que gestionamos. No abres un ticket y esperas: hablas directamente con quien montó tu sistema.',
      },
      {
        p: '¿Hay contrato de permanencia?',
        r: 'No. Ofrecemos garantía total de 30 días. Si no ves resultados, te devolvemos el dinero.',
      },
      {
        p: '¿Cuánto cuesta?',
        r: 'La inversión es de 1.500€. Sin costes ocultos ni sorpresas.',
      },
      {
        p: '¿Mi agencia de la competencia puede contratar SpeedProfit AI en mi misma zona?',
        r: 'No. Trabajamos con exclusividad por zona geográfica. Una sola agencia por área.',
      },
      {
        p: '¿Qué pasa con los datos de mis clientes y propietarios (RGPD)?',
        r: 'Firmamos contigo un contrato de encargado del tratamiento (Art. 28 RGPD) antes de conectar cualquier sistema a tus datos. Tú sigues siendo el responsable del tratamiento en todo momento y los datos no se comparten con terceros.',
      },
      {
        p: '¿Puedo hablar con clientes reales antes de contratar?',
        r: 'Sí. En la consulta gratuita de 30 minutos te ponemos en contacto con agencias que ya trabajan con nosotros y que aceptan hablar de su experiencia. No trabajamos con testimonios que no podamos respaldar.',
      },
      {
        p: '¿Qué herramientas usáis por detrás?',
        r: 'Combinamos WhatsApp Business API, modelos de IA de proveedores como OpenAI y Anthropic, y automatización propia conectada a tu CRM y calendario. Lo que pagas no es la tecnología en sí — es la configuración, integración, entrenamiento con tu catálogo real y el mantenimiento continuo.',
      },
      {
        p: '¿Puedo ver una demo en directo con un caso real, no una presentación?',
        r: 'Sí, y te lo recomendamos. En la consulta gratuita simulamos un lead real de tu inmobiliaria delante de ti: cómo lo recibe el agente, cómo cualifica, cómo agenda la visita y dónde queda registrado todo. Sin vídeo grabado, en directo.',
      },
    ],
  },
}

// ============================================================================
// PRECIO — sección pública de precio en Home
// ============================================================================
export const PRECIO = {
  kicker: 'Precio',
  titulo: 'Un precio. Sin sorpresas.',
  subtitulo:
    'Sabemos que vas a comparar. Preferimos que compares con el precio real delante, no adivinando.',
  imagen: '/img/home-dashboard.webp',
  imagenAlt: 'Dashboard de SpeedProfit AI con métricas de leads y operaciones en tiempo real',
  puente: 'La mayoría de nuestros clientes recupera esta inversión con la primera operación cerrada.',
  plan: {
    nombre: 'Implementación completa',
    precio: '1.500€',
    periodo: 'pago único de configuración',
    incluye: [
      'Agente de IA entrenado con tu catálogo, tono y procesos reales',
      'Integración con WhatsApp, tu web y tu CRM actual',
      'Implementación completa en 2 a 3 semanas',
      'Soporte 24 horas, los 365 días del año',
      'Optimización mensual sin coste adicional',
      'Garantía de devolución total en 30 días si no ves resultados',
    ],
  },
  nota: 'Sin permanencia. Sin letra pequeña. Si en 30 días no ves ROI positivo, te devolvemos cada euro.',
  cta: 'Solicitar diagnóstico gratuito',
  ctaMensaje: 'Hola Ángel, quiero información sobre el precio y cómo empezar',
}

// ============================================================================
// CALCULADORA DE COMISIONES PERDIDAS
// Toda la lógica de cálculo vive en Calculadora.jsx, documentada ahí mismo.
// Aquí solo van los textos.
// ============================================================================
export const CALCULADORA = {
  id: 'calculadora',
  kicker: 'Calculadora',
  titulo: 'Cuánto estás perdiendo en comisiones cada año',
  subtitulo:
    'Mete tus números reales. En unos segundos ves cuánto te está costando no responder a tiempo o no hacer seguimiento — y cuántas horas podrías ahorrar automatizando.',
  campos: {
    leads: {
      etiqueta: '¿Cuántos leads recibes al mes aproximadamente?',
      placeholder: 'Ej. 60',
    },
    operaciones: {
      etiqueta: '¿Cuántas operaciones cierras al mes con esos leads?',
      placeholder: 'Ej. 4',
    },
    comision: {
      etiqueta: 'Comisión media por operación (€)',
      placeholder: 'Ej. 3000',
    },
    horas: {
      etiqueta: 'Horas a la semana que tú o tu equipo dedicáis a atender consultas (opcional)',
      placeholder: 'Ej. 10',
    },
  },
  botonCalcular: 'Ver cuánto estoy perdiendo',
  botonMejora: 'Ver qué podría mejorar',
  resultado: {
    titulo: 'Esto es lo que tu agencia deja escapar cada año',
    etiquetaOperacionesPerdidas: 'operaciones perdidas al año por respuesta tardía o falta de seguimiento',
    etiquetaDineroPerdido: 'en comisiones que no llegan a tu agencia cada año',
    etiquetaDineroPerdidoMes: 'al mes',
  },
  mejora: {
    titulo: 'Esto es lo que podrías recuperar trabajando con SpeedProfit',
    etiquetaOperacionesGanadas: 'operaciones adicionales al año',
    etiquetaDineroGanado: 'de facturación adicional estimada al año',
    etiquetaDineroGanadoMes: 'al mes',
    etiquetaHorasAhorradas: 'horas al año liberadas para ti o tu equipo',
    cta: 'Quiero recuperarlo',
  },
  transparencia: {
    titulo: 'Cómo lo calculamos',
    texto:
      'La fórmula, paso a paso, para que puedas repetirla tú mismo con tus datos: 1) Leads que no conviertes al mes = leads − operaciones. 2) No todos esos leads eran una venta real: descontamos un 60% que son curiosos sin intención real de compra — es una estimación conservadora del sector, no una cifra a tu medida. 3) Lo que queda son los leads que sí eran oportunidades reales y se perdieron por respuesta tardía o falta de seguimiento: son las operaciones y el dinero perdidos que ves arriba (con el equivalente mensual justo debajo), multiplicado por 12 para el total anual. Con esta fórmula, si cierras el 100% de tus leads el resultado siempre da 0 — no puedes perder lo que no se te escapa. 4) De esas oportunidades reales perdidas, estimamos que SpeedProfit recupera un 70% con respuesta inmediata 24/7 y seguimiento automático — no el 100%, porque no prometemos resultados milagrosos. 5) Si nos dices cuántas horas a la semana dedicáis a atender consultas, calculamos también cuántas de esas horas quedarían libres para tu equipo (60% de ese tiempo). Es una estimación orientativa, no una promesa de resultados — en la consulta gratuita de 30 minutos calculamos las cifras reales de tu agencia con tus datos concretos.',
  },
  disclaimer:
    'Estimación orientativa basada en datos medios del sector y de nuestros clientes actuales. No es una garantía de resultados.',
}

// ============================================================================
// AGENTES DE IA
// ============================================================================
export const AGENTES = {
  kicker: 'Nuestros Agentes',
  titulo: 'Mientras tu equipo duerme, estos agentes están cerrando operaciones',
  subtitulo:
    'Cada punto de contacto con un cliente es una oportunidad de venta. Ahora mismo estás perdiendo la mayoría de ellas.',
  cta: 'Solicitar información',
  lista: [
    {
      icono: 'PhoneCall',
      imagen: '/img/agente-callcenter.webp',
      titulo: 'IA Call Center — Nunca más un teléfono que nadie coge',
      texto:
        'Cada llamada que no contestas es un comprador que llama a la siguiente agencia de la lista. Tu IA atiende todas las llamadas entrantes al instante, responde, cualifica y agenda — y cuando tú llegas por la mañana, las visitas ya están en el calendario.',
      puntos: [
        'Disponible 24/7. También sábados, domingos y festivos.',
        'Agenda visitas directamente en tu calendario sin intervención humana.',
        'Gestiona múltiples llamadas a la vez. Sin esperas. Sin desvíos.',
      ],
      mensaje: 'Hola Ángel, quiero información sobre el agente IA Call Center',
    },
    {
      icono: 'MessageSquare',
      imagen: '/img/agente-chat.webp',
      titulo: 'IA Vendedor por Chat — El comercial que nunca se cansa ni pide comisión',
      texto:
        'Un comprador que escribe por WhatsApp a las 11 de la noche quiere respuesta ahora, no mañana a las 9. Tu agente IA responde en segundos, resuelve dudas, envía fichas de propiedades y cierra la visita — mientras tú estás en la cena con tu familia.',
      puntos: [
        'Respuesta instantánea en WhatsApp y web. Sin tiempos de espera.',
        'Scripts de venta integrados que convierten consultas en visitas.',
        'Upselling automático: sugiere propiedades de mayor valor sin que nadie lo pida.',
      ],
      mensaje: 'Hola Ángel, quiero información sobre el agente IA Vendedor por Chat',
    },
    {
      icono: 'Users',
      imagen: '/img/agente-setter.webp',
      titulo: 'IA Setter — Un equipo entero de prospección trabajando solo',
      texto:
        '¿Cuántos contactos tienes en tu CRM que nunca has llegado a trabajar bien? Tu IA Setter los contacta a todos, personaliza cada mensaje, filtra a los que tienen intención real de comprar o vender y te los entrega listos para hablar. Lo que un equipo de 3 personas haría en una semana, lo hace en una hora.',
      puntos: [
        'Procesa cientos de contactos por hora sin bajar la calidad del mensaje.',
        'Filtro automático: solo llegan a ti los leads con intención real.',
        'Personalización por nombre, zona, tipo de propiedad y perfil del contacto.',
      ],
      mensaje: 'Hola Ángel, quiero información sobre el agente IA Setter',
    },
    {
      icono: 'Headphones',
      imagen: '/img/agente-soporte.webp',
      titulo: 'IA Soporte — El 90% de las preguntas de tus clientes ya tienen respuesta',
      texto:
        'Tu equipo pierde horas respondiendo siempre lo mismo: horarios, documentación, estado de la operación, precios. Cada hora ahí es una hora que no están vendiendo. Tu agente de soporte resuelve el 90% de las consultas solo, escala solo lo que realmente necesita atención humana y libera a tu equipo para lo que genera dinero.',
      puntos: [
        'Resolución autónoma del 90% de consultas sin intervención humana.',
        'Tiempo de espera: cero. A cualquier hora. En cualquier canal.',
        'Tu equipo solo interviene cuando hay una oportunidad real de venta.',
      ],
      mensaje: 'Hola Ángel, quiero información sobre el agente IA Soporte',
    },
    {
      icono: 'Wrench',
      imagen: '/img/agente-medida.webp',
      titulo: '¿Tu caso es distinto? Mejor. Lo construimos desde cero para ti.',
      texto:
        'Las agencias que más crecen no usan soluciones genéricas. Usan sistemas diseñados exactamente para cómo trabajan ellas. Si tus procesos son distintos, tus flujos son complejos o simplemente quieres algo que nadie más tenga — lo desarrollamos. Entrenado con tu material, integrado en tus herramientas, funcionando a tu manera.',
      puntos: [
        'Entrenado con tus guiones, procesos y base de conocimiento propia.',
        'Integración total con las herramientas que ya usas hoy.',
        'Un sistema que tu competencia no va a poder copiar.',
      ],
      mensaje: 'Hola Ángel, quiero un agente de IA hecho a medida para mi agencia',
    },
  ],
  cierre: {
    titulo: 'Cada hora que pasa sin esto, tu competencia gana terreno.',
    texto:
      'Dinos con qué parte de tu negocio quieres empezar. En 30 minutos te mostramos exactamente cómo funcionaría para tu agencia.',
    cta: 'Quiero verlo en mi agencia',
    ctaMensaje: 'Hola Ángel, quiero ver cómo funcionarían los agentes de IA en mi agencia',
  },
}

// ============================================================================
// CÓMO FUNCIONA
// ============================================================================
export const COMO_FUNCIONA = {
  kicker: 'Cómo funciona',
  titulo: 'Cada día que no tienes IA, estás pagando un coste invisible',
  subtitulo:
    'En 2 a 3 semanas tu agencia responde sola, cualifica sola y agenda sola. Lo que pierdes mientras esperas, no vuelve.',
  imagen: '/img/como-funciona.webp',
  imagenAlt: 'Agente de IA de SpeedProfit AI gestionando conversaciones automatizadas',
  pasos: [
    {
      numero: '01',
      titulo: 'Descubrimos exactamente cuánto estás perdiendo',
      duracion: '30 min',
      meta: '30 min · Gratis · Sin compromiso',
      texto:
        'La mayoría de agencias no saben cuántas operaciones se les escapan cada semana. En 30 minutos te lo mostramos con números reales: cuántos leads no respondiste a tiempo, cuántas consultas llegaron fuera de horario, cuánto dinero está yendo a la competencia sin que lo veas. Cuando termina la llamada, tienes un diagnóstico exacto de lo que te está costando no automatizar.',
      puntos: [
        'Auditoría real de tu proceso comercial actual',
        'Identificamos los puntos exactos donde se pierden operaciones',
        'Te entregamos un ROI estimado para tu caso concreto antes de decidir nada',
      ],
    },
    {
      numero: '02',
      titulo: 'Construimos tu agente IA en 2 a 3 semanas',
      duracion: '2-3 semanas',
      meta: '2-3 semanas · Tu equipo no para · Nosotros nos encargamos de todo',
      texto:
        'Mientras tú sigues cerrando operaciones como siempre, nuestro equipo entrena tu agente con el tono de tu marca, tu catálogo, tus guiones y tus procesos. Lo integramos en WhatsApp, tu web y tu CRM. Lo probamos hasta que funciona perfecto. Tú no tocas nada, no interrumpes nada y no necesitas saber de tecnología.',
      puntos: [
        'Integración completa con WhatsApp, web y tus herramientas actuales',
        'Entrenado con tu información real, no con respuestas genéricas',
        'Pruebas exhaustivas antes de lanzar. Si no está perfecto, no sale',
      ],
    },
    {
      numero: '03',
      titulo: 'Desde el día 1 tu agencia trabaja sola mientras tú cierras',
      duracion: 'Desde el día 1',
      meta: 'Día 1 en adelante · 24/7 · Sin parar nunca',
      texto:
        'El agente entra en producción y desde ese momento no hay fin de semana, no hay noche, no hay festivo en que tu agencia deje de responder. Monitorizamos el rendimiento cada día, optimizamos cada mes y te enviamos un informe claro de lo que está funcionando y lo que está generando. Tú solo ves los resultados.',
      puntos: [
        'Soporte continuo y optimización mensual sin coste adicional',
        'Panel de métricas en tiempo real para que veas cada operación generada',
        'Escalamos automáticamente si crece tu volumen. Sin tocar nada',
      ],
    },
  ],
  diferenciadores: {
    titulo: 'Lo que nos diferencia de todo lo demás',
    lista: [
      {
        icono: 'ShieldCheck',
        titulo: 'Resultados en 30 días o te devolvemos el dinero',
        texto:
          'No te pedimos que confíes en nosotros. Te pedimos que lo compruebes. Si en 30 días no ves ROI positivo, te devolvemos cada euro. Sin letras pequeñas. Sin excusas.',
      },
      // ACTUALIZADO — soporte 24/7/365 con equipo detrás
      {
        icono: 'LifeBuoy',
        titulo: 'Soporte 24 horas, los 365 días del año',
        texto:
          'No somos una plataforma de software donde abres un ticket y esperas. Detrás de las más de 50 empresas que gestionamos hay un equipo real que responde a cualquier hora, cualquier día del año. Un problema un domingo por la noche se resuelve el domingo por la noche.',
      },
      // NUEVO — trato personalizado como diferenciador explícito
      {
        icono: 'UserCheck',
        titulo: 'Trato individual. No eres un plan estándar.',
        texto:
          'La competencia te vende una licencia y te deja solo con un manual. Nosotros trabajamos agencia por agencia: tu sistema, tu tono, tu zona y una persona concreta que conoce tu caso y te coge el teléfono. Por eso solo trabajamos con una agencia por zona.',
      },
      {
        icono: 'HandHeart',
        titulo: 'Tú no tocas nada. Nosotros nos encargamos de todo.',
        texto:
          'Sin curvas de aprendizaje. Sin manuales. Sin integraciones que hacer tú. Nosotros lo montamos, lo probamos y lo ponemos a funcionar. Tu única tarea es atender a los clientes que lleguen.',
      },
    ],
  },
  cierre: {
    titulo: 'Cada semana sin esto son operaciones que no verás nunca.',
    texto:
      '30 minutos para saber exactamente cuánto te está costando esperar. Sin compromiso. Sin tecnicismos. Solo números reales.',
    cta: 'Solicitar diagnóstico gratuito',
    ctaMensaje: 'Hola Ángel, quiero solicitar el diagnóstico gratuito',
    microcopy:
      'Sin compromiso · Garantía de devolución en 30 días · Solo una agencia por zona',
  },
}

// ============================================================================
// CAPTACIÓN DE EXCLUSIVAS
// ============================================================================
export const EXCLUSIVAS = {
  kicker: 'Captación de Exclusivas · Meta Ads',
  titulo: 'Las exclusivas de tu zona las está firmando otra agencia.',
  tituloDestacado: 'Ahora mismo.',
  subtitulo:
    'No es mala suerte. No es el mercado. Es que hay una agencia llegando antes que tú a propietarios que todavía no han llamado a nadie. Y tú no lo estás viendo.',
  imagen: '/img/captacion-whatsapp.webp',
  imagenAlt: 'Notificaciones de WhatsApp de propietarios captados con Meta Ads',
  cta: 'Ver cómo lo hacemos',
  ctaMensaje: 'Hola Ángel, quiero ver cómo captáis exclusivas con Meta Ads',

  problema: {
    kicker: 'El problema',
    titulo: 'Lo que pasa mientras dependes de Fotocasa e Idealista',
    parrafos: [
      'Cuando un propietario publica en un portal, ya ha decidido vender. Ya ha buscado. Ya ha comparado. Y cuando tú le llamas, ya le han llamado cuatro agencias antes que tú.',
    ],
    destacado: 'No estás captando. Estás compitiendo por las sobras.',
    parrafos2: [
      'Pagas por listas frías de contactos que no te conocen, que no confían en ti y que ya están hablando con tu competencia. Y cada mes que pasa, el coste sube y los resultados bajan.',
      'Mientras tanto, hay propietarios en tu zona que están pensando en vender ahora mismo — antes de buscar en ningún portal, antes de llamar a nadie, antes de que exista competencia — y no están viendo a ninguna agencia. El espacio está completamente vacío.',
    ],
    remate: 'Vacío exactamente hasta que alguien lo ocupe.',
  },

  metodo: {
    kicker: 'El método',
    titulo: 'Cómo hacemos que llegues primero. Siempre.',
    bloques: [
      {
        icono: 'Target',
        titulo: 'Antes de que busquen',
        texto:
          'Lanzamos anuncios en Meta dirigidos a propietarios de tu zona con intención de vender. Los alcanzamos semanas antes de que abran Fotocasa. Antes de que llamen a nadie. Antes de que tu competencia exista para ellos.',
      },
      {
        icono: 'Eye',
        titulo: 'Presencia que no se olvida',
        texto:
          'El propietario te ve constantemente durante semanas. Cuando llega el momento de decidir, en quien piensa primero es en ti. No porque seas el mejor — porque fuiste el único que apareció cuando nadie más estaba mirando.',
      },
      {
        icono: 'MapPin',
        titulo: 'Tu zona. Solo tuya.',
        texto:
          'No trabajamos con dos agencias en la misma área. Cuando cerramos contigo, cerramos la puerta a tu competencia. Para siempre. Esa ventana no estará abierta mucho tiempo.',
      },
    ],
  },

  numeros: {
    titulo:
      'Las agencias que trabajan con nosotros captan de media 2 a 3 exclusivas más al mes.',
    subtitulo: 'No leads. No contactos. Exclusivas firmadas a precio de mercado.',
    parrafos: [
      'Si una exclusiva te genera de media 3.000€ de comisión, estamos hablando de entre 6.000 y 9.000€ de facturación nueva cada mes. Mes tras mes. Sin depender de portales. Sin listas frías. Sin llegar el quinto.',
      'Y lo que inviertes con nosotros lo recuperas con la primera exclusiva.',
    ],
  },

  tiempo: {
    titulo: 'Hay una cosa que no puedes comprar por mucho dinero que tengas.',
    lineas: [
      'El tiempo que pierdes esta semana no vuelve.',
      'No para la agencia.',
      'No para ti.',
      'No para los tuyos.',
    ],
    parrafos: [
      'Las agencias que trabajan con nosotros no nos contrataron porque creyeran en los anuncios.',
      'Nos contrataron porque se cansaron de perder lo que ya era suyo.',
    ],
    bullets: [
      'Propietarios que firmaron con otra agencia esa misma tarde.',
      'Zonas enteras donde llevan años siendo invisibles.',
      'Comisiones que calcularon después y prefirieron no sumar.',
    ],
    remate: 'Un día tomaron una decisión. Y al mes siguiente ya no reconocían sus números.',
  },

  cierre: {
    titulo: 'Tu competencia ya ha tomado esa decisión.',
    lineas: [
      'La pregunta no es si esto funciona.',
      'La pregunta es si vas a ser tú — o la agencia de al lado.',
    ],
    destacado:
      'Cada semana que pasa sin esto son entre 1.500 y 3.000€ que se quedan en el bolsillo de otra agencia de tu zona.',
    texto: '30 minutos. Sin compromiso. Solo números reales para tu zona.',
    cta: 'Quiero ser el primero',
    ctaMensaje:
      'Hola Ángel, quiero captar exclusivas en mi zona antes que mi competencia',
    microcopy:
      'Solo trabajamos con una agencia por zona. Cuando alguien de tu área cierre con nosotros, esta conversación ya no será posible.',
  },
}

// ============================================================================
// TESTIMONIOS
// ⚠️ REVISAR ANTES DE PUBLICAR — ver CLAUDE.md, sección "Decisiones pendientes"
// ============================================================================
export const TESTIMONIOS = {
  kicker: 'Testimonios reales',
  titulo: 'Empresas que ya trabajan diferente',
  subtitulo:
    'No te contamos historias. Aquí tienes los resultados reales de los negocios que confiaron en SpeedProfit AI para automatizar su crecimiento.',
  estadisticas: [
    { valor: '+50', etiqueta: 'Empresas activas' },
    { valor: 'Tu ROI real', etiqueta: 'Calcula el tuyo en la calculadora', href: '/#calculadora' },
    { valor: '4.9/5', etiqueta: 'Valoración media' },
  ],
  lista: [
    {
      metrica: '+320%',
      metricaEtiqueta: 'leads cualificados',
      cita: 'Llevábamos años con el mismo problema: los leads llegaban fuera de horario y nadie los atendía. Desde que implantamos el agente de IA de SpeedProfit, cada consulta recibe respuesta al instante, a cualquier hora. En 3 meses hemos triplicado los leads cualificados y nuestro equipo solo habla con clientes listos para comprar.',
      iniciales: 'CM',
      nombre: 'Carlos M.',
      cargo: 'Director comercial · Agencia inmobiliaria, Madrid',
    },
    {
      metrica: '15',
      metricaEtiqueta: 'ventas extra en 90 días',
      cita: 'Antes perdíamos el 60% de las consultas fuera de horario. Ahora la IA atiende 24/7, califica a cada prospecto y agenda citas automáticamente. En un solo trimestre cerramos 15 operaciones extra que antes simplemente se perdían. El retorno fue inmediato.',
      iniciales: 'LF',
      nombre: 'Laura F.',
      cargo: 'CEO · Grupo residencial, Costa Mediterránea',
    },
    {
      metrica: 'x8',
      metricaEtiqueta: 'ROI en los primeros 90 días',
      cita: 'Soy escéptico por naturaleza, así que pedí datos antes de confiar. Los resultados me dejaron sin palabras: cada euro invertido nos devuelve x8 en comisiones. SpeedProfit AI no es un gasto, es la inversión de mayor rentabilidad que hemos tomado en la historia de la empresa.',
      iniciales: 'MR',
      nombre: 'Miguel Ángel R.',
      cargo: 'Fundador · Consultora inmobiliaria',
    },
    {
      metrica: '+40%',
      metricaEtiqueta: 'tasa de conversión a visita',
      cita: 'Lo que más me sorprendió fue la naturalidad con la que el agente habla con los clientes. Nadie nota que es IA. Las conversaciones son fluidas, empáticas y siempre enfocadas en cerrar la cita. Nuestra tasa de conversión de visitas ha subido un 40%.',
      iniciales: 'ES',
      nombre: 'Elena S.',
      cargo: 'Directora de marketing · Agencia inmobiliaria, Alicante',
    },
    {
      metrica: '3.000€',
      metricaEtiqueta: 'ahorro mensual en personal',
      cita: 'Implantamos el Call Center IA para las llamadas de seguimiento. Lo que antes requería 2 personas a tiempo completo, ahora lo gestiona solo el agente: llama, habla, registra y agenda. Ahorramos más de 3.000€ al mes en costes de personal y el seguimiento es mucho más consistente.',
      iniciales: 'AV',
      nombre: 'Andrés V.',
      cargo: 'Gerente · Agencia inmobiliaria, Barcelona',
    },
    {
      metrica: '< 1 semana',
      metricaEtiqueta: 'de implementación completa',
      cita: 'La implementación fue sorprendentemente rápida. En menos de una semana ya estaba funcionando con nuestro catálogo y tono de marca. El equipo de SpeedProfit nos guió en cada paso y el soporte post-lanzamiento es excelente. No podríamos estar más contentos.',
      iniciales: 'PN',
      nombre: 'Patricia N.',
      cargo: 'Socia fundadora · Agencia inmobiliaria, Galicia',
    },
  ],
  cierre: {
    titulo: '¿Listo para ser el próximo caso de éxito?',
    texto:
      'Cada empresa que aparece en esta página comenzó con una consulta gratuita de 30 minutos. El tuyo puede ser el siguiente.',
    cta: 'Solicitar consulta gratuita',
    ctaMensaje: 'Hola Ángel, quiero solicitar la consulta gratuita de 30 minutos',
    microcopy: 'Sin compromiso · Respuesta garantizada en < 24h',
  },
  dejaResena: {
    titulo: '¿Ya eres cliente de SpeedProfit AI?',
    texto: 'Tu experiencia ayuda a otras agencias a decidir con datos reales, no con promesas.',
    cta: 'Comparte tu experiencia',
    // TODO Ángel: cuando tengas Google Business Profile o Trustpilot (ver
    // CLAUDE.md, Frente 3) puedes seguir usando este mismo formulario o
    // enlazar directo — lo que prefieras. Por ahora el formulario te avisa
    // por email; revisas la reseña y decides si la publicas en contenido.js.
    formulario: {
      campos: {
        nombre: { etiqueta: 'Nombre y apellidos', placeholder: 'Ej. María García' },
        cargo: { etiqueta: 'Cargo', placeholder: 'Ej. Directora comercial' },
        empresa: { etiqueta: 'Empresa', placeholder: 'Nombre de tu agencia' },
        zona: { etiqueta: 'Zona', placeholder: 'Ej. Madrid' },
        resena: { etiqueta: 'Tu reseña', placeholder: 'Cuéntanos tu experiencia con SpeedProfit AI…' },
      },
      etiquetaEstrellas: 'Valoración',
      botonEnviar: 'Enviar reseña',
      botonEnviando: 'Enviando…',
      exito: 'Reseña recibida, gracias. La revisamos y la publicamos en cuanto podamos.',
      error: 'No se pudo enviar. Escríbenos por WhatsApp mientras lo solucionamos.',
    },
  },
}

// ============================================================================
// SOBRE NOSOTROS
// ============================================================================
export const SOBRE_NOSOTROS = {
  kicker: 'Sobre nosotros',
  titulo:
    'No somos una plataforma de software. Somos el equipo que hace que tu agencia nunca pierda otra operación.',
  imagen: '/img/sobre-nosotros.webp',
  imagenAlt: 'Equipo de SpeedProfit AI trabajando con sus clientes',
  parrafos: [
    'SpeedProfit AI nació de una frustración real: ver cómo negocios con talento perdían operaciones cada día simplemente por no poder responder a tiempo. No por falta de capacidad. Por falta de escala.',
    'Decidimos que eso tenía solución. Y que esa solución no debería costar lo que cuesta en una empresa del Fortune 500.',
    'Hoy trabajamos con agencias en España y Latinoamérica que han dejado de perder leads fuera de horario y que por primera vez sienten que su negocio trabaja para ellos — y no al revés.',
  ],
  insignias: [
    { icono: 'Lock', titulo: 'Seguridad', texto: 'Datos protegidos' },
    { icono: 'Zap', titulo: 'Experiencia', texto: '+2 años en IA' },
    { icono: 'Globe', titulo: 'Global', texto: 'ES & LATAM' },
    // NUEVO
    { icono: 'LifeBuoy', titulo: 'Soporte', texto: '24/7 · 365 días' },
  ],

  filosofia: {
    kicker: 'Nuestra filosofía',
    titulo: 'Nuestra única regla interna: si no ganas más de lo que pagas, hemos fallado.',
    parrafos: [
      'No creemos en vender tecnología cara que suena bien en una presentación pero no mueve la aguja. Por eso antes de desarrollar nada hacemos un diagnóstico real, calculamos el ROI esperado para tu caso concreto, y si los números no tienen sentido para ti te lo decimos — aunque eso signifique no cerrarte como cliente.',
      'Cada agente que desarrollamos está diseñado para que desde el primer mes genere más de lo que cuesta: más ventas cerradas, más horas de equipo recuperadas, más oportunidades que antes se perdían. Si nuestro agente no te devuelve el múltiplo en valor, algo hemos hecho mal — y eso no es aceptable para nosotros.',
    ],
    metricas: [
      { valor: 'Tu ROI real', etiqueta: 'Calcula el tuyo en la calculadora', href: '/#calculadora' },
      { valor: '24/7', etiqueta: 'Soporte los 365 días del año para nuestras +50 empresas activas' },
      { valor: '30 días', etiqueta: 'Garantía de devolución si no ves resultados' },
    ],
  },

  equipo: {
    kicker: 'Nuestro equipo',
    titulo: 'Personas reales detrás de cada sistema',
    texto:
      'Detrás de cada sistema que desplegamos hay un equipo real. Especialistas en marketing digital y sector inmobiliario que diseñan la estrategia, programadores que construyen los agentes sin atajos técnicos, y un equipo de soporte que está disponible cuando lo necesitas — no durante "horario de oficina", sino 24/7 los 365 días. Cada cliente tiene una persona que conoce su agencia, su zona, su forma de trabajar. Ese es el trabajo que hacemos.',
  },

  valores: {
    kicker: 'Nuestros valores',
    lista: [
      {
        icono: 'Gauge',
        titulo: 'Velocidad que no se negocia',
        texto:
          'De la consulta al sistema funcionando en 2-3 semanas. Mientras tu competencia evalúa opciones, tú ya estás captando leads.',
      },
      {
        icono: 'Crosshair',
        titulo: 'Precisión de élite',
        texto:
          'Nuestros agentes responden igual a las 9 de la mañana que a las 3 de la noche. Sin fatiga. Sin errores de un viernes por la tarde.',
      },
      // REFORZADO — trato personalizado como diferenciador
      {
        icono: 'UserCheck',
        titulo: 'Hecho para ti, no para todos',
        texto:
          'Cada sistema está entrenado con tu tono, tu catálogo y tu forma de cerrar. No repartimos un plan estándar ni te dejamos con un manual: tienes una persona concreta que conoce tu agencia por su nombre. Tu competencia no puede copiar lo que no puede ver.',
      },
      // NUEVO — soporte como valor
      {
        icono: 'LifeBuoy',
        titulo: 'Estamos cuando hace falta. Siempre.',
        texto:
          'Soporte 24 horas los 365 días del año, con un equipo real detrás de cada una de las más de 50 empresas que gestionamos. Si algo se rompe en festivo, se arregla en festivo.',
      },
      {
        icono: 'Target',
        titulo: 'Solo resultados. Nada más.',
        texto:
          'Lo medimos en operaciones cerradas, leads convertidos y dinero que antes se perdía y ahora no.',
      },
    ],
  },

  cierre: {
    titulo: 'Si has llegado hasta aquí, ya sabes que necesitas esto.',
    texto:
      'La única pregunta es cuántas operaciones más vas a dejar ir antes de actuar. Habla con nosotros hoy. Sin compromiso. Sin presión.',
    cta: 'Hablar con el equipo ahora',
    ctaMensaje: 'Hola Ángel, quiero hablar con el equipo de SpeedProfit AI',
  },
}

// ============================================================================
// CONTACTO
// ============================================================================
export const CONTACTO = {
  kicker: 'Contacto',
  titulo: 'Hablemos de tu',
  tituloDestacado: 'proyecto',
  subtitulo:
    '¿Listo para automatizar tu negocio con IA? Contáctanos por el canal que prefieras y te responderemos a la mayor brevedad.',
  nota: 'Soporte 24 horas, los 365 días del año.',
  cta: 'Escríbenos por WhatsApp ahora',
  ctaMensaje: 'Hola Ángel, me gustaría hablar sobre SpeedProfit AI',
  campos: [
    { icono: 'Mail', etiqueta: 'Email', valor: EMPRESA.email, href: `mailto:${EMPRESA.email}` },
    {
      icono: 'Phone',
      etiqueta: 'Teléfono / WhatsApp',
      valor: EMPRESA.telefonoVisible,
      href: waLink(),
    },
    { icono: 'Globe', etiqueta: 'Web', valor: EMPRESA.web, href: 'https://speedprofitai.com/' },
    { icono: 'MapPin', etiqueta: 'Domicilio', valor: EMPRESA.domicilio, href: null },
  ],
  formulario: {
    titulo: 'O escríbenos directamente',
    campos: {
      nombre: { etiqueta: 'Nombre y apellidos', placeholder: 'Ej. María García' },
      email: { etiqueta: 'Email', placeholder: 'maria@agencia.com' },
      telefono: { etiqueta: 'Teléfono (opcional)', placeholder: '600 000 000' },
      empresa: { etiqueta: 'Empresa (opcional)', placeholder: 'Nombre de tu agencia' },
      mensaje: { etiqueta: 'Mensaje', placeholder: 'Cuéntanos en qué podemos ayudarte…' },
    },
    botonEnviar: 'Enviar mensaje',
    botonEnviando: 'Enviando…',
    exito: 'Mensaje enviado. Te responderemos a la mayor brevedad.',
    error: 'No se pudo enviar. Escríbenos por WhatsApp o a nuestro email mientras lo solucionamos.',
  },
}
