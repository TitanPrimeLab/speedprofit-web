// ============================================================================
// CONTENIDO CENTRAL DE speedprofitai.com
// Todo el texto de la web vive aquí. Para cambiar un copy, cámbialo SOLO aquí.
// Los componentes no llevan texto escrito a mano.
// ============================================================================

// --- DATOS DE CONTACTO (fuente única de verdad) -----------------------------
export const EMPRESA = {
  nombre: 'SpeedProfit AI',
  email: 'info@speedprofitai.com',
  // OJO: número corregido. El sitio antiguo en Base44 tenía 722852924 (incorrecto).
  telefonoVisible: '+34 722 842 925',
  telefonoWhatsApp: '34722842925',
  web: 'speedprofitai.com',
  domicilio: 'Carrer Ramon Llull, Edifici Rocamar 5, 43840 Salou, Tarragona',
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
  { etiqueta: 'Diseño Web', ruta: '/diseno-web-inmobiliarias' },
  { etiqueta: 'Testimonios', ruta: '/testimonios' },
  { etiqueta: 'Blog', ruta: '/blog' },
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
      { valor: '63', etiqueta: 'Auditorías de respuesta medidas en agencias españolas' },
      { valor: '24/7', etiqueta: 'Respuesta activa los 365 días del año' },
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
        propiedad: {
          titulo: 'Piso en Castelldefels',
          detalles: '3 hab · 90 m² · 2 baños',
          extras: 'Garaje + trastero',
          ubicacion: 'A 300 m del mar · Reformado',
          precio: '339.000€',
        },
      },
      {
        de: 'agente',
        texto: 'Tengo visita libre el sábado a las 10:30 o a las 12:00. ¿Cuál te va mejor?',
      },
      { de: 'cliente', texto: 'A las 10:30 perfecto' },
      { de: 'agente', texto: '¡Hecho! 🏠 Te confirmo la visita el sábado a las 10:30. Te llega recordatorio.' },
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
        r: '5 días desde la contratación. Sin necesidad de conocimientos técnicos.',
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
        r: 'Depende del volumen de leads y de los canales que conectemos. Te lo decimos en la auditoría inicial, con el número concreto para tu caso y sin costes ocultos. El diseño web para inmobiliarias sí tiene precio cerrado: 399€.',
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
// INTEGRACIONES — solo herramientas verificadas: probadas de forma real
// conectando agentes de SpeedProfit a ellas. No incluir nada que no esté
// en esta lista sin confirmar primero que es una integración real.
// ============================================================================
export const INTEGRACIONES = {
  kicker: 'Compatibilidad',
  titulo: 'Si tiene API, lo conectamos',
  subtitulo:
    'No dependemos de una lista cerrada de integraciones. Conectamos tu WhatsApp, tu web, tu CRM actual, tu calendario y tus canales de captación — sin que tengas que cambiar de herramientas ni migrar nada. Estas son algunas con las que ya hemos probado la conexión.',
  grupos: [
    {
      categoria: 'Portales inmobiliarios',
      icono: 'Search',
      herramientas: ['Idealista', 'Fotocasa', 'Habitaclia', 'Pisos.com', 'Inmoweb'],
    },
    {
      categoria: 'CRM',
      icono: 'Users',
      herramientas: ['HubSpot', 'Salesforce', 'Zoho CRM', 'Pipedrive'],
    },
    {
      categoria: 'Mensajería y redes',
      icono: 'MessageSquare',
      herramientas: ['WhatsApp', 'Instagram', 'Facebook'],
    },
    {
      categoria: 'Calendario y documentos',
      icono: 'PhoneCall',
      herramientas: ['Google Calendar', 'Calendly', 'Google Drive'],
    },
  ],
  nota: '¿Usas otra herramienta? Si tiene API, la conectamos igual — pregúntanos.',
}

// ============================================================================
// PRECIO — sección pública de precio en Home
// ============================================================================
export const PRECIO = {
  kicker: 'Precio',
  titulo: 'Un precio. Sin sorpresas.',
  subtitulo:
    'Ya has visto cómo trabajamos y qué garantía te damos. Esto es lo que cuesta — sin sorpresas.',
  plan: {
    nombre: 'Implementación completa',
    precio: 'Consultar precio',
    periodo: 'pago único de configuración',
    incluye: [
      'Agente de IA entrenado con tu catálogo, tono y procesos reales',
      'Integración con WhatsApp, tu web y tu CRM actual',
      'Implementación completa en 5 días',
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
  titulo: 'Cuánto estás perdiendo por no responder a tiempo',
  subtitulo:
    'Estos son los datos por defecto del sector — cámbialos por los de tu agencia y verás los resultados al instante.',
  campos: {
    leads: {
      etiqueta: 'Leads que recibes al mes',
      ayuda: 'Formularios, WhatsApp, llamadas, etc.',
      defecto: 48,
    },
    tiempoRespuesta: {
      etiqueta: 'Tiempo medio de respuesta',
      opciones: [
        { valor: 'inmediato', texto: 'Inmediato (< 1 min)', minutos: 1 },
        { valor: '1_5', texto: '1 - 5 min', minutos: 3 },
        { valor: '5_30', texto: '5 - 30 min', minutos: 15 },
        { valor: '30_60', texto: '30 min - 1 hora', minutos: 45 },
        { valor: '1_6', texto: '1 - 6 horas', minutos: 210 },
        { valor: 'mas_6', texto: 'Más de 6 horas', minutos: 720 },
      ],
      defecto: '30_60',
    },
    ticket: {
      etiqueta: 'Ticket medio de venta (€)',
      ayuda: 'Precio medio de las propiedades que vendes',
      defecto: 350000,
    },
    comision: {
      etiqueta: 'Tu comisión (%)',
      ayuda: 'Comisión que ganas por venta',
      defecto: 3,
    },
    conversion: {
      etiqueta: 'Tasa de conversión (%)',
      // Importante que quede claro que es sobre los leads que SÍ atiendes:
      // es lo que hace coherente la fórmula (los leads que se pierden por
      // responder tarde habrían cerrado a este mismo ritmo).
      ayuda: 'De los leads que sí atiendes, % que acaba comprando',
      defecto: 5,
    },
  },

  // Resultado en vivo (panel derecho)
  resultado: {
    titulo: 'Pérdida mensual estimada',
    etiquetaMes: 'al mes',
    etiquetaAnio: 'al año',
    etiquetaIngresasHoy: 'Comisiones que ingresas hoy',
    metricas: {
      leadsPerdidos: 'Leads perdidos/mes',
      ventasPerdidas: 'Ventas perdidas/mes',
      penalizacion: 'Tu penalización',
    },
  },

  // Panel de recuperación con SpeedProfit
  mejora: {
    titulo: 'Si respondieras en 3 segundos con SpeedProfit',
    etiquetaRecupera: 'Recuperarías',
    etiquetaRecuperaAnio: 'Al año',
    cta: 'Quiero recuperar esas ventas',
    ctaMensajeBase:
      'Hola Ángel, he calculado en la web que mi agencia podría estar perdiendo unos %DINERO% al año. Quiero hablar sobre cómo recuperarlo.',
  },

  // Transparencia del cálculo
  transparencia: {
    titulo: '¿Cómo calculamos esto?',
    puntos: [
      {
        numero: '1',
        titulo: 'Penalización por tiempo',
        texto:
          'Basado en estudios del sector: responder en más de 1 hora reduce tu probabilidad de contacto en un 60%. En más de 24h, pierdes el 90% de los leads.',
      },
      {
        numero: '2',
        titulo: 'Leads que se van a la competencia',
        texto:
          'El 78% de compradores trabajan con el primer agente que responde. Si tardas, ya están hablando con otro.',
      },
      {
        numero: '3',
        titulo: 'Impacto en tu comisión',
        texto:
          'Multiplicamos los leads perdidos × tu tasa de conversión × tu comisión = dinero que dejas en la mesa.',
      },
    ],
    fuentes: 'Fuentes: Harvard Business Review, InsideSales.com, Lead Response Management Study',
    enlaceArticulo: {
      texto: 'Lee el análisis completo en nuestro próximo artículo: El coste real de responder tarde a tus leads inmobiliarios',
      url: '/blog',
    },
  },

  // Fila de estadísticas grandes del sector (debajo de la calculadora)
  estadisticasSector: {
    titulo: 'Datos del sector inmobiliario',
    lista: [
      {
        valor: '78%',
        texto: 'de compradores eligen al primer agente que responde',
      },
      {
        valor: '21x',
        texto: 'más probabilidad de cualificar si respondes en 5 min vs 30 min',
      },
      {
        valor: '6h',
        texto: 'tiempo medio de respuesta en el sector inmobiliario',
      },
    ],
  },

  disclaimer:
    'Estimación orientativa basada en datos medios del sector y de nuestros clientes actuales. No es una garantía de resultados.',
}

// ============================================================================
// DIFERENCIADORES (4 tarjetas debajo de la calculadora)
// ============================================================================
export const DIFERENCIADORES = {
  kicker: 'Por qué SpeedProfit AI',
  titulo: 'Diseñado para no fallar en lo que importa',
  subtitulo:
    'Un agente de IA no vale nada si no llega a tiempo, no entiende al cliente, o pone en riesgo sus datos. Lo hemos construido teniendo eso en cuenta desde el primer día.',
  lista: [
    {
      icono: 'Globe',
      titulo: 'Pensado para mercados globales',
      texto:
        'El inmobiliario es internacional. SpeedProfit habla 8 idiomas (español, inglés, catalán, árabe, portugués, francés, ruso, hindi y chino) y funciona en todas las zonas horarias para que nunca pierdas un lead.',
    },
    {
      icono: 'ShieldCheck',
      titulo: 'Privacidad y seguridad ante todo',
      texto:
        'Seguridad de nivel empresarial y cumplimiento con el RGPD. Tus datos y los de tus clientes son tuyos: siempre cifrados y nunca compartidos con terceros.',
    },
    {
      icono: 'Eye',
      titulo: 'IA transparente',
      texto:
        'Creemos que la IA debe potenciar a tu equipo, no reemplazarlo. Cada interacción queda registrada y tus agentes mantienen el control total en todo momento.',
    },
    {
      icono: 'Zap',
      titulo: 'La velocidad importa',
      texto:
        'En el sector inmobiliario, el primer agente en responder gana. Nos aseguramos de que siempre seas tú, respondiendo en menos de 3 segundos.',
    },
  ],
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
    cta: 'Quiero ver cómo funciona para mi agencia',
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
    'En 5 días tu agencia responde sola, cualifica sola y agenda sola. Lo que pierdes mientras esperas, no vuelve.',
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
      titulo: 'Construimos tu agente IA en 3 a 5 días',
      duracion: '3-5 días',
      meta: '3-5 días · Tu equipo no para · Nosotros nos encargamos de todo',
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
    cta: 'Solicitar diagnóstico gratuito ahora',
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
      'Cada semana que pasa sin esto son operaciones que se quedan en el bolsillo de otra agencia de tu zona.',
    texto: '30 minutos. Sin compromiso. Solo números reales para tu zona.',
    cta: 'Quiero ser el primero en mi zona',
    ctaMensaje:
      'Hola Ángel, quiero captar exclusivas en mi zona antes que mi competencia',
    microcopy:
      'Solo trabajamos con una agencia por zona. Cuando alguien de tu área cierre con nosotros, esta conversación ya no será posible.',
  },
}

// ============================================================================
// DISEÑO WEB PARA INMOBILIARIAS — producto de entrada, precio público
// ============================================================================
export const DISENO_WEB = {
  kicker: 'Diseño web para inmobiliarias',
  titulo: 'Una web que vende mientras tú',
  tituloDestacado: 'atiendes visitas.',
  subtitulo:
    'Web profesional para tu agencia, lista para captar leads y conectarse a tu agente de IA desde el primer día. Precio cerrado, sin sorpresas.',
  precio: '399€',
  precioNota: 'Pago único · Sin cuotas mensuales · Entrega en 5-7 días laborables',
  cta: 'Quiero mi web por 399€',
  ctaMensaje: 'Hola Ángel, quiero información sobre la web para inmobiliarias por 399€',

  problema: {
    kicker: 'El problema',
    titulo: 'Tu web actual no está pensada para captar. Está pensada para existir.',
    parrafos: [
      'La mayoría de webs de agencias inmobiliarias son una tarjeta de visita: bonita, estática, y sin ninguna forma real de convertir a quien la visita en un lead cualificado.',
      'Y si mañana quieres conectar un agente de IA que responda por WhatsApp, cualifique y agende visitas, tu web actual probablemente ni siquiera está preparada técnicamente para eso.',
    ],
    remate: 'Una web que no está lista para automatizarse es una web que ya se ha quedado atrás.',
  },

  incluye: {
    kicker: 'Qué incluye',
    titulo: 'Todo lo que necesita tu agencia para empezar a captar',
    bloques: [
      {
        icono: 'Zap',
        titulo: 'Lista para tu agente de IA',
        texto:
          'Construida sobre la misma base técnica que usamos para conectar agentes de WhatsApp, formularios inteligentes y automatización — sin trabajo extra de integración cuando decidas dar el siguiente paso.',
      },
      {
        icono: 'Search',
        titulo: 'Optimizada para SEO local',
        texto:
          'Estructura técnica correcta desde el primer día: velocidad, metadatos, datos estructurados (schema.org) para que Google y los buscadores de IA entiendan quién eres y dónde operas.',
      },
      {
        icono: 'Target',
        titulo: 'Diseñada para convertir',
        texto:
          'Formularios de contacto, botón de WhatsApp directo y estructura pensada para que quien entra deje sus datos, no para que solo mire fotos de pisos.',
      },
      {
        icono: 'Gauge',
        titulo: 'Rápida y responsive',
        texto:
          'Carga en segundos en móvil y escritorio. La mayoría de tus leads te van a encontrar desde el teléfono — tu web tiene que estar a la altura.',
      },
    ],
  },

  precioBloque: {
    kicker: 'Precio',
    titulo: 'Un precio, sin letra pequeña',
    tarjeta: {
      nombre: 'Web para inmobiliarias',
      precio: '399€',
      precioEtiqueta: 'pago único',
      incluye: [
        'Diseño a medida de tu marca',
        'Hasta 6 páginas (inicio, propiedades, sobre nosotros, contacto y 2 más)',
        'Formulario de contacto y botón de WhatsApp',
        'Optimización SEO técnica de base',
        'Adaptada a móvil',
        'Entrega en 5-7 días laborables',
        'Lista para conectar tu agente de IA cuando quieras',
      ],
      notaAparte: 'Dominio y hosting no incluidos. Te ayudamos a configurarlos sin coste adicional de gestión.',
    },
  },

  faq: {
    kicker: 'Preguntas frecuentes',
    titulo: 'Antes de que preguntes',
    lista: [
      {
        p: '¿El precio de 399€ es real, sin sorpresas después?',
        r: 'Sí. Es el precio completo del diseño y desarrollo de la web. Lo único no incluido es el dominio y el hosting, que son costes de terceros (normalmente entre 10-20€/año) y te ayudamos a contratarlos sin cobrarte gestión.',
      },
      {
        p: '¿Puedo conectar esta web a un agente de IA más adelante?',
        r: 'Sí, de hecho está pensada para eso. Se construye sobre la misma base técnica que usamos en nuestros sistemas de automatización, así que cuando quieras dar el paso, no hay que rehacer nada.',
      },
      {
        p: '¿Cuánto tarda la entrega?',
        r: 'Entre 5 y 7 días laborables desde que nos confirmas los contenidos (textos, fotos, propiedades) y el diseño de referencia si tienes uno.',
      },
      {
        p: '¿Puedo pedir cambios después de la entrega?',
        r: 'Incluimos una ronda de ajustes tras la entrega. Cambios estructurales más adelante (páginas nuevas, secciones nuevas) se presupuestan aparte.',
      },
    ],
  },

  cierre: {
    titulo: '¿Empezamos con tu web?',
    texto: 'Cuéntanos sobre tu agencia y te confirmamos plazos en menos de 24h.',
    cta: 'Quiero mi web por 399€',
    ctaMensaje: 'Hola Ángel, quiero información sobre la web para inmobiliarias por 399€',
    microcopy: 'Precio cerrado · Sin permanencia · Entrega en 5-7 días laborables',
  },
}

// ============================================================================
// TESTIMONIOS
// ⚠️ REVISAR ANTES DE PUBLICAR — ver CLAUDE.md, sección "Decisiones pendientes"
// ============================================================================
export const TESTIMONIOS = {
  kicker: 'Casos medidos',
  titulo: 'Resultados medidos, no historias',
  subtitulo:
    'Cada caso de esta página parte de una auditoría real: medimos el tiempo de respuesta antes de tocar nada, y volvemos a medirlo con el sistema en marcha. Mismos mensajes, mismo canal, mismo método. Los datos son nuestros y son verificables.',
  estadisticas: [
    { valor: '63', etiqueta: 'Auditorías de respuesta realizadas' },
    { valor: '2 años', etiqueta: 'Operando con IA aplicada a ventas' },
    { valor: '24/7', etiqueta: 'Cobertura real, 365 días' },
  ],
  lista: [
    {
      metrica: '7h 16m → segundos',
      metricaEtiqueta: 'tiempo de primera respuesta',
      cita: 'La auditoría inicial midió 29 horas y 4 minutos de espera acumulada en solo cuatro mensajes: el 93,3% del tiempo perdido se concentraba fuera del horario de oficina. Con el agente de IA activo, los mismos mensajes reciben respuesta inmediata y con cualificación incluida, a cualquier hora.',
      iniciales: 'EV',
      nombre: 'Engel & Völkers Santa Cruz de Tenerife',
      cargo: 'Inmobiliaria · Santa Cruz de Tenerife',
    },
    {
      metrica: '9h 21m → segundos',
      metricaEtiqueta: 'tiempo de primera respuesta',
      cita: 'Auditoría inicial: 37 horas y 25 minutos de espera acumulada en cuatro mensajes, con el 94,1% del tiempo perdido fuera de horario. Tras automatizar WhatsApp e integrarlo con web, CRM, email y calendario, las consultas reciben respuesta inmediata y quedan cualificadas antes de llegar al equipo.',
      iniciales: 'CO',
      nombre: 'Constructora (caso anónimo por acuerdo)',
      cargo: 'Promoción y obra nueva · España',
    },
    {
      metrica: '< 30 segundos',
      metricaEtiqueta: 'tiempo de respuesta (verificado)',
      cita: 'Antes de automatizar, gestionaban cada contacto a mano: 4 instalaciones cerradas, sin sistema de captación, respondiendo y haciendo seguimiento de forma manual. Con el sistema completo montado, responden en menos de 30 segundos de forma verificada, con campañas activas de 17.320 impresiones y un CPL de 16,99€.',
      iniciales: 'AS',
      nombre: 'Arpamsolar',
      cargo: 'Energía solar · España',
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
    // TODO Ángel: sustituir por el enlace directo a Google Business Profile o
    // Trustpilot en cuanto estén creados (ver CLAUDE.md, Frente 3). Mientras
    // tanto entra por WhatsApp y se le pasa el enlace a mano.
    ctaMensaje: 'Hola Ángel, soy cliente y me gustaría dejar una reseña de mi experiencia',
  },
}

// ============================================================================
// SOBRE NOSOTROS
// ============================================================================
export const SOBRE_NOSOTROS = {
  kicker: 'Sobre nosotros',
  titulo:
    'No somos una plataforma de software. Somos el equipo que hace que tu agencia nunca pierda otra operación.',
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
      { valor: '63', etiqueta: 'Auditorías de tiempo de respuesta medidas en agencias españolas' },
      { valor: '24/7', etiqueta: 'Soporte los 365 días del año' },
      { valor: '30 días', etiqueta: 'Garantía de devolución si no ves resultados' },
    ],
  },

  valores: {
    kicker: 'Nuestros valores',
    lista: [
      {
        icono: 'Gauge',
        titulo: 'Velocidad que no se negocia',
        texto:
          'De la consulta al sistema funcionando en 5 días. Mientras tu competencia evalúa opciones, tú ya estás captando leads.',
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
    { icono: 'MapPin', etiqueta: 'Oficina en España', valor: EMPRESA.domicilio, href: null },
  ],
}
