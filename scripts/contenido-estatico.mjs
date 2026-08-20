// ============================================================================
// CONTENIDO ESTÁTICO POR PÁGINA (para crawlers sin JavaScript)
// ============================================================================
// Este contenido se inyecta dentro de <div id="root"> en el HTML generado.
// React lo reemplaza en cuanto monta, así que el usuario nunca lo ve más de
// una fracción de segundo — pero cualquier crawler que NO ejecute JavaScript
// (GPTBot, ClaudeBot, PerplexityBot, Semrush por defecto) lee esto y solo esto.
//
// REGLA: el contenido de aquí debe decir LO MISMO que la web real. No es
// contenido oculto ni distinto — es la misma información en HTML plano.
// Si cambia el copy de la web, cambia también aquí.
//
// Cada página necesita 350+ palabras reales para no disparar los avisos de
// "bajo número de palabras" y "baja relación texto-HTML", y enlaces internos
// contextuales para que ninguna página quede con un solo enlace entrante.
// ============================================================================

export const BASE_URL = 'https://speedprofitai.com'

export const PAGINAS = {
  '/': {
    title: 'SpeedProfit AI — Automatización con IA para inmobiliarias en España',
    description:
      'Sistema comercial con IA para inmobiliarias locales y agentes independientes en España: capta, atiende y convierte cada oportunidad de forma automática, las 24 horas, sin ampliar el equipo.',
    h1: 'Automatización con IA para inmobiliarias en España',
    secciones: [
      {
        p: [
          '<strong>SpeedProfit AI es el sistema comercial con inteligencia artificial para inmobiliarias locales y agentes independientes en España.</strong> Capta, atiende y convierte cada oportunidad de forma automática, las 24 horas del día, sin ampliar el equipo.',
          'Operamos desde 2024 bajo SpeedProficient OÜ. Hemos realizado 63 auditorías de tiempo de respuesta sobre agencias inmobiliarias españolas con metodología de mystery shopping propia, midiendo cuánto tardan realmente en contestar a un cliente que escribe por WhatsApp o rellena un formulario.',
        ],
      },
      {
        h2: 'El problema: el tiempo de respuesta decide quién cierra la operación',
        p: [
          'Cuando un comprador contacta con varias agencias, la que responde primero tiene una ventaja enorme. El problema no es que las agencias respondan mal: es que nadie está disponible a las diez de la noche, ni en fin de semana, ni mientras se está enseñando un piso.',
          'En las auditorías que hemos realizado, el patrón se repite con una consistencia notable: <strong>más del 90% del tiempo total de espera se concentra en los mensajes que entran fuera del horario de oficina</strong>. Un mensaje que llega a las 22:04 se responde a la mañana siguiente. Para entonces, esa persona ya ha hablado con otra inmobiliaria.',
        ],
      },
      {
        h2: 'La solución: un agente de IA que no cierra nunca',
        p: [
          'Diseñamos e implementamos agentes de inteligencia artificial a medida para cada agencia. Cada agente se entrena con el catálogo, el tono y la forma de trabajar de la agencia concreta, se integra con WhatsApp, la web, el CRM y el calendario, y responde en segundos a cualquier hora.',
          'No se limita a contestar: cualifica la consulta (zona, presupuesto, tipo de propiedad, comprar o alquilar), descarta lo que no encaja y agenda la visita directamente en el calendario del agente. El comercial deja de perder tiempo filtrando y solo habla con quien tiene intención real.',
        ],
      },
      {
        h2: 'Servicios',
        lista: [
          '<a href="/agentes-ia">Agentes de IA para inmobiliarias</a>: respuesta automática por WhatsApp, cualificación y agenda de visitas 24/7.',
          '<a href="/captacion-exclusivas">Captación de exclusivas</a>: campañas de Meta Ads combinadas con cualificación automática de propietarios.',
          '<a href="/diseno-web-inmobiliarias">Diseño web para inmobiliarias</a>: web profesional por 399€, precio cerrado, lista para conectar un agente de IA.',
        ],
      },
      {
        h2: 'Por qué SpeedProfit AI',
        lista: [
          'Sistema propio construido específicamente para el sector inmobiliario, no un CRM genérico adaptado.',
          'Datos medidos, no promesas: cada caso parte de una auditoría real de tiempo de respuesta antes y después. Puedes verlos en <a href="/testimonios">casos reales medidos</a>.',
          'Una sola agencia por zona: no trabajamos con la competencia directa de nuestros clientes.',
          'Se conecta a lo que ya usas: Idealista, Fotocasa, Habitaclia, Pisos.com, Inmoweb, HubSpot, Salesforce, Zoho CRM, Pipedrive, WhatsApp, Instagram, Facebook, Google Calendar, Calendly y Google Drive. Si tiene API, lo conectamos.',
          'Soporte 24/7 los 365 días del año y garantía de resultados a 30 días.',
          'Cumplimiento con el RGPD: datos cifrados y nunca compartidos con terceros.',
        ],
      },
      {
        h2: 'Cómo empezamos',
        p: [
          'El primer paso es una auditoría gratuita de tu canal de atención actual: enviamos mensajes reales a tu WhatsApp y formularios, medimos cuánto tardas en responder y te enseñamos el resultado con datos concretos. A partir de ahí sabes exactamente qué estás perdiendo y decidimos si tiene sentido trabajar juntos.',
          'Puedes ver <a href="/como-funciona">el proceso completo paso a paso</a> o escribirnos directamente desde la <a href="/contacto">página de contacto</a>.',
        ],
      },
    ],
  },

  '/agentes-ia': {
    title: 'Agentes de IA para inmobiliarias — SpeedProfit AI',
    description:
      'Agentes de inteligencia artificial que responden leads por WhatsApp al instante, cualifican consultas y agendan visitas automáticamente, 24 horas al día.',
    h1: 'Agentes de IA para inmobiliarias',
    secciones: [
      {
        p: [
          '<strong>Un agente de inteligencia artificial entrenado con el catálogo y el tono de tu agencia, que responde en segundos a cualquier hora del día.</strong> No es un chatbot con respuestas predefinidas: entiende lo que pregunta el cliente, responde con criterio y sabe cuándo pasar la conversación a una persona.',
        ],
      },
      {
        h2: 'Qué hace exactamente',
        lista: [
          '<strong>Responde al instante</strong>, a cualquier hora, todos los días del año. Sin turnos, sin vacaciones, sin fines de semana muertos.',
          '<strong>Cualifica cada consulta</strong>: zona de interés, presupuesto, número de habitaciones, si busca comprar o alquilar, si tiene una vivienda que vender primero.',
          '<strong>Agenda visitas</strong> directamente en el calendario del agente que corresponda, sin intermediarios ni llamadas de coordinación.',
          '<strong>Registra todo en el CRM</strong>: cada conversación queda documentada, con el lead cualificado y etiquetado.',
          '<strong>Filtra lo que no encaja</strong>: quien busca algo que la agencia no ofrece recibe una respuesta útil, y el comercial no pierde tiempo.',
          '<strong>Habla varios idiomas</strong> y funciona en cualquier zona horaria, útil para agencias con clientes extranjeros.',
        ],
      },
      {
        h2: 'Dónde funciona',
        p: [
          'El agente se conecta a los canales por los que ya te llegan los clientes: WhatsApp Business, el formulario de tu web, Instagram y Facebook. No hay que enseñar a nadie a usar una herramienta nueva, ni pedir al cliente que se descargue nada.',
          'También se integra con los portales inmobiliarios y con el CRM que ya utilices: Idealista, Fotocasa, Habitaclia, Pisos.com, Inmoweb, HubSpot, Salesforce, Zoho CRM o Pipedrive, entre otros. Si la herramienta tiene API, la conectamos.',
        ],
      },
      {
        h2: 'Qué cambia en la práctica',
        p: [
          'En las auditorías que hemos hecho a agencias españolas, el tiempo medio de primera respuesta ronda varias horas, y en los mensajes que entran fuera de horario la espera supera con frecuencia las trece horas. Con el agente activo, esos mismos mensajes reciben respuesta en segundos, con cualificación incluida.',
          'Puedes ver los datos concretos, medidos antes y después con el mismo método, en <a href="/testimonios">casos reales medidos</a>. Si quieres entender el proceso de implantación, está detallado en <a href="/como-funciona">cómo funciona</a>.',
        ],
      },
      {
        h2: 'Privacidad y cumplimiento',
        p: [
          'Todos los datos se tratan conforme al RGPD, van cifrados y no se comparten con terceros. Puedes consultar el detalle en nuestra <a href="/privacidad">política de privacidad</a>.',
        ],
      },
    ],
  },

  '/como-funciona': {
    title: 'Cómo funciona — SpeedProfit AI',
    description:
      'Cómo implementamos el sistema de respuesta y automatización con IA en tu agencia inmobiliaria: auditoría inicial, diseño del agente, integración y puesta en marcha.',
    h1: 'Cómo funciona el sistema de SpeedProfit AI',
    secciones: [
      {
        p: [
          '<strong>El proceso está pensado para que la agencia no tenga que parar ni cambiar de herramientas.</strong> Empezamos midiendo lo que ya ocurre, construimos el agente sobre esa realidad y lo dejamos funcionando integrado con lo que ya usas.',
        ],
      },
      {
        h2: '1. Auditoría de respuesta (antes de tocar nada)',
        p: [
          'Antes de proponer nada, medimos. Enviamos mensajes reales a los canales de contacto públicos de la agencia (WhatsApp, formulario web) en distintas franjas horarias y cronometramos cuánto se tarda en responder cada uno.',
          'El resultado es un informe con datos concretos: tiempo de respuesta por mensaje, media real, y qué porcentaje del tiempo de espera se concentra fuera del horario de oficina. No es una estimación del sector: son los números de tu agencia.',
        ],
      },
      {
        h2: '2. Diseño y entrenamiento del agente',
        p: [
          'Con la auditoría delante, construimos el agente: se entrena con el catálogo de propiedades, las zonas en las que trabajáis, el tono de la marca y las respuestas que da hoy vuestro mejor comercial. El objetivo no es que suene a robot, sino que suene a vosotros.',
          'Definimos también qué debe cualificar en cada conversación y en qué momento debe pasar el contacto a una persona.',
        ],
      },
      {
        h2: '3. Integración con vuestras herramientas',
        p: [
          'Conectamos el agente a WhatsApp, la web, el CRM, el email y el calendario. No hay migración: seguís usando exactamente las mismas herramientas de siempre. Trabajamos con los portales y CRMs habituales del sector, y con cualquier herramienta que disponga de API.',
        ],
      },
      {
        h2: '4. Puesta en marcha y medición',
        p: [
          'El agente entra en producción y volvemos a medir con el mismo método de la auditoría inicial: mismos mensajes, mismo canal, mismas franjas horarias. Así el antes y el después son comparables de verdad, no una impresión.',
          'A partir de ahí, ajustamos: qué preguntas cualifica mejor, dónde conviene que intervenga una persona antes, qué respuestas se pueden afinar.',
        ],
      },
      {
        h2: 'Qué necesitamos de ti',
        p: [
          'Muy poco: acceso a los canales que vamos a conectar y una conversación inicial para entender cómo trabajáis. El resto lo montamos nosotros.',
          'Si quieres ver qué resultados ha dado esto en agencias reales, están en <a href="/testimonios">casos reales medidos</a>. Para empezar por la auditoría gratuita, escríbenos desde <a href="/contacto">contacto</a>.',
        ],
      },
    ],
  },

  '/captacion-exclusivas': {
    title: 'Captación de Exclusivas con IA — SpeedProfit AI',
    description:
      'Servicio de captación de exclusivas inmobiliarias con Meta Ads e inteligencia artificial, para agencias locales y agentes independientes en España.',
    h1: 'Captación de exclusivas con inteligencia artificial',
    secciones: [
      {
        p: [
          '<strong>Campañas de captación de propietarios combinadas con un agente de IA que cualifica cada contacto en tiempo real</strong>, para que tu equipo solo dedique tiempo a quien tiene intención real de vender en exclusiva.',
        ],
      },
      {
        h2: 'El problema de la captación tradicional',
        p: [
          'Captar exclusivas por los métodos clásicos (puerta fría, listas, portales) consume una cantidad enorme de horas por cada firma conseguida. Y cuando se hace publicidad, el problema se desplaza: llegan muchos contactos, pero la mayoría no está realmente en disposición de vender, y filtrarlos a mano vuelve a comerse el tiempo del comercial.',
        ],
      },
      {
        h2: 'Cómo lo hacemos',
        lista: [
          '<strong>Campañas en Meta Ads</strong> dirigidas a propietarios de tu zona concreta, no a tráfico genérico.',
          '<strong>Cualificación automática</strong>: cada contacto entra en una conversación con el agente de IA, que averigua tipo de inmueble, zona, situación y plazos antes de que intervenga nadie.',
          '<strong>Solo llegan al comercial los propietarios con intención real</strong>, ya con la información recogida y la cita propuesta.',
          '<strong>Seguimiento automático</strong> de los que no están listos todavía, para que no se pierdan por falta de constancia.',
        ],
      },
      {
        h2: 'Exclusividad por zona',
        p: [
          'Solo trabajamos con una agencia por zona. Cuando alguien de tu área firma con nosotros, dejamos de aceptar clientes en esa zona: no tendría sentido optimizar las campañas de dos agencias que compiten por los mismos propietarios.',
        ],
      },
      {
        h2: 'Combinación con el sistema de respuesta',
        p: [
          'La captación funciona mucho mejor cuando el sistema de respuesta ya está montado: de nada sirve generar contactos si luego tardan horas en recibir respuesta. Por eso este servicio se apoya en los <a href="/agentes-ia">agentes de IA</a>, y el proceso completo está explicado en <a href="/como-funciona">cómo funciona</a>.',
          'Para hablar de tu zona y ver si sigue disponible, escríbenos desde <a href="/contacto">contacto</a>.',
        ],
      },
    ],
  },

  '/diseno-web-inmobiliarias': {
    title: 'Diseño Web para Inmobiliarias por 399€ — SpeedProfit AI',
    description:
      'Web profesional para tu agencia inmobiliaria, lista para conectar a un agente de IA desde el primer día. Precio cerrado: 399€, pago único, entrega en 5-7 días.',
    h1: 'Diseño web para inmobiliarias — 399€',
    secciones: [
      {
        p: [
          '<strong>Web profesional para tu agencia inmobiliaria por 399€, pago único, sin cuotas mensuales.</strong> Entrega en 5 a 7 días laborables, optimizada para SEO local y preparada desde el primer día para conectarse a un agente de inteligencia artificial.',
        ],
      },
      {
        h2: 'El problema con la mayoría de webs inmobiliarias',
        p: [
          'La mayoría de webs de agencias son una tarjeta de visita: bonitas, estáticas y sin ninguna forma real de convertir a quien las visita en un contacto cualificado. Sirven para existir, no para captar.',
          'Y cuando la agencia decide dar el paso de automatizar la respuesta, se encuentra con que su web no está preparada técnicamente para conectarse a nada, así que hay que rehacerla.',
        ],
      },
      {
        h2: 'Qué incluye por 399€',
        lista: [
          'Diseño a medida adaptado a tu marca, no una plantilla genérica.',
          'Hasta 6 páginas: inicio, propiedades, sobre nosotros, contacto y dos más a elegir.',
          'Formulario de contacto y botón directo de WhatsApp.',
          'Optimización SEO técnica de base: velocidad, metadatos y datos estructurados (schema.org) para que Google y los buscadores de inteligencia artificial entiendan quién eres y dónde operas.',
          'Diseño adaptado a móvil, donde llega la mayoría de tus visitas.',
          'Entrega en 5 a 7 días laborables desde que nos pasas los contenidos.',
          'Una ronda de ajustes incluida tras la entrega.',
          'Preparada para conectar tu agente de IA cuando quieras, sin rehacer nada.',
        ],
      },
      {
        h2: 'Qué no incluye',
        p: [
          'El dominio y el hosting no están incluidos, porque son costes de terceros (habitualmente entre 10 y 20€ al año). Te ayudamos a contratarlos y configurarlos sin cobrarte gestión por ello.',
        ],
      },
      {
        h2: 'Por qué este precio',
        p: [
          'Es nuestro producto de entrada. La mayoría de agencias que trabajan con nosotros empiezan aquí y, cuando ven el resultado, dan el paso a automatizar la respuesta con un <a href="/agentes-ia">agente de IA</a>. Por eso el precio es cerrado y público: no queremos que la web sea la barrera.',
          'El resto de servicios (sistema de respuesta 24h, captación) se presupuestan según el volumen de leads y los canales que haya que conectar, y ese número te lo damos en la auditoría inicial gratuita. Escríbenos desde <a href="/contacto">contacto</a>.',
        ],
      },
    ],
  },

  '/testimonios': {
    title: 'Casos reales medidos — SpeedProfit AI',
    description:
      'Casos de éxito documentados con auditorías de tiempo de respuesta antes y después, medidos con el mismo método: datos reales, no promesas.',
    h1: 'Casos reales, medidos con auditoría propia',
    secciones: [
      {
        p: [
          '<strong>Cada caso de esta página parte de una auditoría real.</strong> Medimos el tiempo de respuesta antes de tocar nada, y volvemos a medirlo con el sistema en marcha: mismos mensajes, mismo canal, mismo método. Los datos son nuestros y son verificables.',
        ],
      },
      {
        h2: 'Engel & Völkers Santa Cruz de Tenerife',
        p: [
          'La auditoría inicial midió <strong>29 horas y 4 minutos de espera acumulada en solo cuatro mensajes</strong>, con una media de 7 horas y 16 minutos por mensaje. El 93,3% de todo ese tiempo perdido se concentraba en los mensajes que entraban fuera del horario de oficina: los enviados a las 21:00 y las 22:04 no recibieron respuesta hasta la mañana siguiente.',
          'Con el agente de inteligencia artificial activo, los mismos mensajes reciben respuesta inmediata y con cualificación incluida, a cualquier hora del día.',
        ],
      },
      {
        h2: 'Constructora (caso anónimo por acuerdo)',
        p: [
          'Auditoría inicial: <strong>37 horas y 25 minutos de espera acumulada en cuatro mensajes</strong>, con una media de 9 horas y 21 minutos y el 94,1% del tiempo perdido fuera de horario.',
          'Tras automatizar WhatsApp e integrarlo con la web, el CRM, el email y el calendario, las consultas reciben respuesta inmediata y quedan cualificadas antes de llegar al equipo comercial.',
        ],
      },
      {
        h2: 'Arpamsolar (energía solar)',
        p: [
          'Antes de automatizar gestionaban cada contacto a mano: 4 instalaciones cerradas, sin sistema de captación, respondiendo y haciendo seguimiento manualmente.',
          'Con el sistema completo montado responden en <strong>menos de 30 segundos de forma verificada</strong>, con campañas activas que han generado 17.320 impresiones y un coste por lead de 16,99€.',
        ],
      },
      {
        h2: 'Cómo medimos',
        p: [
          'Usamos una metodología de mystery shopping propia: enviamos mensajes reales, desde fuera, sin avisar, en distintas franjas horarias, y cronometramos la respuesta. Llevamos 63 auditorías realizadas sobre agencias españolas.',
          'Si quieres saber cómo sería en tu caso, el proceso está explicado en <a href="/como-funciona">cómo funciona</a> y puedes pedir la tuya desde <a href="/contacto">contacto</a>.',
        ],
      },
    ],
  },

  '/sobre-nosotros': {
    title: 'Sobre nosotros — SpeedProfit AI',
    description:
      'Quiénes somos y por qué construimos SpeedProfit AI: automatización comercial con inteligencia artificial para el sector inmobiliario español.',
    h1: 'Sobre SpeedProfit AI',
    secciones: [
      {
        p: [
          '<strong>SpeedProfit AI es la marca comercial de SpeedProficient OÜ</strong>, sociedad constituida en Estonia con código de registro 17532333 y domicilio social en Pärnu mnt 105, Tallinn, Harju maakond, 11312, Estonia. En activo desde 2024.',
          'Estamos especializados en automatización comercial con inteligencia artificial para inmobiliarias locales y agentes independientes en España.',
        ],
      },
      {
        h2: 'Por qué existimos',
        p: [
          'Empezamos midiendo. Antes de vender nada a nadie, auditábamos cuánto tardaban realmente las agencias en responder a un cliente. El patrón que encontramos era tan consistente que se convirtió en la base del negocio: no es que las agencias respondan mal, es que nadie puede estar disponible a las once de la noche, y ahí es exactamente donde se pierde la mayor parte de las oportunidades.',
          'Llevamos <strong>63 auditorías de tiempo de respuesta</strong> realizadas sobre agencias inmobiliarias españolas con metodología de mystery shopping propia.',
        ],
      },
      {
        h2: 'Cómo trabajamos',
        lista: [
          '<strong>Datos antes que promesas.</strong> Cada caso que publicamos parte de una medición real, antes y después, con el mismo método.',
          '<strong>Una agencia por zona.</strong> No trabajamos con la competencia directa de nuestros clientes.',
          '<strong>Sin migraciones.</strong> Nos adaptamos a las herramientas que ya usa la agencia, no al revés.',
          '<strong>Soporte 24/7</strong> los 365 días del año, y garantía de resultados a 30 días.',
        ],
      },
      {
        h2: 'Qué hacemos',
        p: [
          'Trabajamos en tres frentes: <a href="/agentes-ia">agentes de IA</a> que responden y cualifican automáticamente, <a href="/captacion-exclusivas">captación de exclusivas</a> con campañas y cualificación automática, y <a href="/diseno-web-inmobiliarias">diseño web para inmobiliarias</a> como producto de entrada.',
          'Los resultados medidos están en <a href="/testimonios">casos reales</a>, y escribimos sobre el sector en el <a href="/blog">blog</a>.',
        ],
      },
      {
        h2: 'Contacto y transparencia',
        p: [
          'Puedes escribirnos a info@speedprofitai.com o desde la <a href="/contacto">página de contacto</a>. Nuestras condiciones están publicadas en <a href="/terminos">términos y condiciones</a> y el tratamiento de datos en la <a href="/privacidad">política de privacidad</a>.',
        ],
      },
    ],
  },

  '/contacto': {
    title: 'Contacto — SpeedProfit AI',
    description:
      'Habla con nosotros sobre cómo automatizar la respuesta y la captación de tu agencia inmobiliaria con inteligencia artificial. Auditoría inicial gratuita.',
    h1: 'Contacta con SpeedProfit AI',
    secciones: [
      {
        p: [
          '<strong>Cuéntanos sobre tu agencia y te respondemos con una auditoría de tu canal de contacto actual.</strong> Sin compromiso y sin coste: medimos cuánto tardas realmente en responder hoy y te enseñamos el resultado con datos concretos.',
        ],
      },
      {
        h2: 'Cómo contactar',
        lista: [
          'Email: <!--email_off-->info@speedprofitai.com<!--/email_off-->',
          'WhatsApp y teléfono: +34 722 842 925',
          'Atención los 365 días del año.',
        ],
      },
      {
        h2: 'Qué pasa después de escribirnos',
        p: [
          'Primero hacemos la auditoría de respuesta: enviamos mensajes reales a tus canales públicos en distintas franjas horarias y medimos cuánto se tarda en contestar cada uno. Con ese informe delante, te decimos con honestidad si tiene sentido trabajar juntos o no.',
          'Si encaja, definimos el alcance y el precio, que depende del volumen de leads y de los canales que haya que conectar. El único servicio con precio cerrado y público es el <a href="/diseno-web-inmobiliarias">diseño web para inmobiliarias, a 399€</a>.',
        ],
      },
      {
        h2: 'Qué información nos ayuda desde el primer mensaje',
        lista: [
          'El nombre de tu agencia y la zona en la que trabajáis.',
          'Cuántas personas sois en el equipo comercial.',
          'Por dónde os llegan hoy los contactos: WhatsApp, formulario web, portales, teléfono.',
          'Qué CRM usáis, si usáis alguno.',
          'Qué es lo que más os está costando ahora mismo: captar, atender o cerrar.',
        ],
      },
      {
        h2: 'Cuánto tardamos en responder',
        p: [
          'Sería difícil de justificar que una empresa dedicada al tiempo de respuesta tardara en contestar. Respondemos los 365 días del año, y en la práctica en cuestión de minutos, porque usamos internamente el mismo sistema que implantamos en las agencias.',
        ],
      },
      {
        h2: 'Trabajamos con una agencia por zona',
        p: [
          'Antes de avanzar comprobamos si tu zona está libre. No trabajamos simultáneamente con agencias que compiten directamente entre sí: no tendría sentido optimizar la captación de dos negocios que se disputan los mismos propietarios y los mismos compradores.',
          'Si tu zona ya está ocupada, te lo decimos en el primer mensaje en lugar de hacerte perder el tiempo.',
        ],
      },
      {
        h2: 'Antes de escribir, quizá te interese',
        p: [
          'Si quieres entender primero cómo funciona el sistema, está detallado paso a paso en <a href="/como-funciona">cómo funciona</a>. Si prefieres ver resultados medidos de otras agencias, están en <a href="/testimonios">casos reales</a>. Y si tienes dudas sobre qué hace exactamente un agente de inteligencia artificial en el día a día de una inmobiliaria, lo explicamos en <a href="/agentes-ia">agentes de IA</a>.',
          'También puedes leer sobre el sector en el <a href="/blog">blog</a> o conocer quiénes estamos detrás en <a href="/sobre-nosotros">sobre nosotros</a>.',
        ],
      },
    ],
  },

  '/blog': {
    title: 'Blog — SpeedProfit AI · Automatización con IA para inmobiliarias',
    description:
      'Artículos y análisis sobre automatización con IA, tiempo de respuesta y captación de leads para agencias inmobiliarias en España.',
    h1: 'Blog de SpeedProfit AI',
    secciones: [
      {
        p: [
          '<strong>Artículos, análisis y datos propios sobre automatización con inteligencia artificial en el sector inmobiliario español.</strong> Escribimos sobre lo que medimos: tiempo de respuesta, captación de leads y qué separa a las agencias que cierran de las que se quedan mirando.',
        ],
      },
      {
        h2: 'Sobre qué escribimos',
        lista: [
          'Tiempo de respuesta en el sector inmobiliario y su impacto real en las operaciones cerradas.',
          'Automatización de la atención al cliente con agentes de inteligencia artificial.',
          'Captación de leads y de exclusivas para agencias locales y agentes independientes.',
          'Datos propios de nuestras auditorías de respuesta sobre agencias españolas.',
        ],
      },
      {
        h2: 'Nuestro criterio editorial',
        p: [
          'No publicamos artículos genéricos sobre inteligencia artificial. Escribimos sobre lo que medimos directamente: llevamos 63 auditorías de tiempo de respuesta realizadas sobre agencias inmobiliarias españolas, y ese dataset propio es la base de casi todo lo que publicamos aquí.',
          'Cuando citamos una cifra, decimos de dónde sale. Cuando es una estimación, lo decimos también. En un sector donde abundan las promesas sin respaldo, preferimos publicar menos y publicar comprobable.',
        ],
      },
      {
        h2: 'El hallazgo que más se repite',
        p: [
          'De todas las auditorías realizadas, el patrón más consistente no es que las agencias respondan lentamente en general: es que <strong>más del 90% del tiempo total de espera se concentra en los mensajes que entran fuera del horario de oficina</strong>. Un mensaje que llega a las diez de la noche no se contesta hasta la mañana siguiente, y para entonces esa persona ya ha escrito a otras tres agencias.',
          'El problema no es de actitud ni de profesionalidad del equipo comercial. Es estructural: nadie puede estar disponible las veinticuatro horas, y precisamente esas horas concentran una parte enorme de las consultas de compradores que miran portales por la noche o el fin de semana.',
        ],
      },
      {
        h2: 'Artículos publicados',
        lista: [
          '<a href="/blog/coste-real-responder-tarde-leads-inmobiliarios">El coste real de responder tarde a tus leads inmobiliarios</a>: cuánto dinero deja de facturar una agencia por cada hora de retraso en la primera respuesta, con el cálculo desglosado.',
        ],
      },
      {
        h2: 'Más allá del blog',
        p: [
          'Si buscas algo más concreto que un artículo: los <a href="/testimonios">casos reales medidos</a> muestran cifras de antes y después de agencias reales, con el mismo método de medición aplicado en los dos momentos, y <a href="/como-funciona">cómo funciona</a> explica el proceso completo de implantación paso a paso.',
          'También puedes ver qué hacen exactamente los <a href="/agentes-ia">agentes de IA</a>, consultar el <a href="/diseno-web-inmobiliarias">diseño web para inmobiliarias</a> que es nuestro producto de entrada por 399€, o conocer al equipo en <a href="/sobre-nosotros">sobre nosotros</a>. Si prefieres hablarlo directamente, escríbenos desde <a href="/contacto">contacto</a> y empezamos por la auditoría gratuita de tu canal de atención.',
        ],
      },
    ],
  },

  '/privacidad': {
    title: 'Política de Privacidad — SpeedProfit AI',
    description:
      'Política de privacidad de SpeedProfit AI: responsable del tratamiento, finalidad, base legal, conservación de datos y ejercicio de derechos conforme al RGPD.',
    h1: 'Política de Privacidad',
    secciones: [
      {
        h2: 'Responsable del tratamiento',
        p: [
          'El responsable del tratamiento de tus datos es SpeedProfit AI, operado por SpeedProficient OÜ, sociedad constituida en Estonia con código de registro 17532333 y domicilio social en Pärnu mnt 105, Tallinn, Harju maakond, 11312, Estonia. Puedes contactar en info@speedprofitai.com.',
        ],
      },
      {
        h2: 'Qué datos tratamos y con qué finalidad',
        p: [
          'Tratamos los datos que nos facilitas voluntariamente al contactar con nosotros (nombre, email, teléfono y la información que incluyas en tu mensaje), con la finalidad de responder a tu consulta, elaborar la auditoría solicitada y, en su caso, gestionar la relación comercial.',
        ],
      },
      {
        h2: 'Base legal del tratamiento',
        p: [
          'La base legal es tu consentimiento al enviarnos el formulario o escribirnos, y la ejecución de un contrato o de medidas precontractuales cuando solicitas una auditoría o un presupuesto. En el caso de comunicaciones comerciales sobre nuestros propios servicios a clientes existentes, la base es el interés legítimo.',
        ],
      },
      {
        h2: 'Conservación y cesión',
        p: [
          'Conservamos los datos el tiempo necesario para atender tu solicitud y cumplir las obligaciones legales aplicables. Los datos van cifrados y no se comparten con terceros con fines comerciales. No vendemos datos personales bajo ninguna circunstancia.',
          'Cuando implantamos un agente de inteligencia artificial en la agencia de un cliente, ese cliente es el responsable de los datos de sus propios contactos y nosotros actuamos como encargado del tratamiento, con el contrato correspondiente firmado conforme al artículo 28 del RGPD.',
        ],
      },
      {
        h2: 'Transferencias internacionales',
        p: [
          'SpeedProficient OÜ está constituida en Estonia, dentro del Espacio Económico Europeo, por lo que el tratamiento se realiza bajo el marco del RGPD. Si alguna herramienta que utilizamos implicara transferencia fuera del EEE, se realizaría con las garantías previstas en el capítulo V del RGPD.',
        ],
      },
      {
        h2: 'Tus derechos',
        p: [
          'Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a nuestro correo de contacto. Responderemos en el plazo máximo previsto por la normativa.',
          'También tienes derecho a retirar tu consentimiento en cualquier momento y a presentar una reclamación ante la autoridad de control competente si consideras que el tratamiento no se ajusta a la normativa.',
        ],
      },
      {
        h2: 'Documentos relacionados',
        p: [
          'Consulta también nuestros <a href="/terminos">términos y condiciones</a> y la <a href="/cookies">política de cookies</a>. Para cualquier duda sobre el tratamiento de tus datos, escríbenos desde <a href="/contacto">contacto</a>. Puedes conocer más sobre la empresa en <a href="/sobre-nosotros">sobre nosotros</a>.',
        ],
      },
    ],
  },

  '/terminos': {
    title: 'Términos y Condiciones — SpeedProfit AI',
    description:
      'Términos y condiciones de contratación y uso de los servicios de SpeedProfit AI, operado por SpeedProficient OÜ.',
    h1: 'Términos y Condiciones',
    secciones: [
      {
        h2: 'Identificación de la empresa',
        p: [
          'SpeedProfit AI es una marca comercial operada por SpeedProficient OÜ, sociedad constituida en Estonia con código de registro 17532333 y domicilio social en Pärnu mnt 105, Tallinn, Harju maakond, 11312, Estonia. Es la entidad que factura y presta el servicio a clientes en España, el resto de Europa y el resto del mundo.',
          'Contacto: info@speedprofitai.com · Teléfono y WhatsApp: +34 722 842 925.',
        ],
      },
      {
        h2: 'Servicios y precios',
        p: [
          'El precio del servicio de configuración se determina en función del volumen mensual de leads y de los canales conectados, y se comunica por escrito al cliente antes de la contratación. El servicio de <a href="/diseno-web-inmobiliarias">diseño web para inmobiliarias</a> tiene un precio cerrado de 399€.',
          'Los importes no incluyen los impuestos aplicables, que se facturarán adicionalmente según la normativa vigente y la ubicación fiscal del cliente.',
        ],
      },
      {
        h2: 'Garantía',
        p: [
          'Ofrecemos garantía de resultados a 30 días en los términos acordados por escrito con cada cliente antes de la contratación. El alcance concreto de la garantía se define en la propuesta firmada, ya que depende del servicio contratado y del punto de partida de cada agencia.',
        ],
      },
      {
        h2: 'Exclusividad por zona',
        p: [
          'Para los servicios de captación trabajamos con una única agencia por zona geográfica. Esta exclusividad se concreta por escrito en la propuesta e implica que, mientras el contrato esté vigente, no prestaremos ese mismo servicio a agencias que compitan directamente en el área acordada.',
        ],
      },
      {
        h2: 'Obligaciones del cliente',
        p: [
          'Para poder prestar el servicio, el cliente debe facilitar el acceso a los canales que se vayan a conectar (WhatsApp Business, web, CRM, calendario) y la información necesaria para entrenar el agente. El cliente es responsable de que la información de su catálogo sea veraz y esté actualizada, y de disponer de las autorizaciones necesarias sobre los datos de sus propios contactos.',
        ],
      },
      {
        h2: 'Duración y cancelación',
        p: [
          'La duración y las condiciones de cancelación se establecen por escrito en cada propuesta antes de la contratación. No aplicamos permanencias ocultas: cualquier compromiso de duración se comunica de forma expresa antes de firmar.',
        ],
      },
      {
        h2: 'Legislación aplicable',
        p: [
          'La relación se rige por la legislación aplicable a SpeedProficient OÜ como entidad prestadora del servicio, sin perjuicio de los derechos que la normativa de consumo pueda reconocer al cliente según su lugar de residencia.',
        ],
      },
      {
        h2: 'Protección de datos',
        p: [
          'El tratamiento de datos personales se rige por nuestra <a href="/privacidad">política de privacidad</a> y por la <a href="/cookies">política de cookies</a>. Para cualquier consulta sobre estas condiciones, escríbenos desde <a href="/contacto">contacto</a>, o conoce más sobre la empresa en <a href="/sobre-nosotros">sobre nosotros</a>.',
        ],
      },
    ],
  },

  '/cookies': {
    title: 'Política de Cookies — SpeedProfit AI',
    description:
      'Política de cookies de speedprofitai.com: qué cookies utilizamos, para qué sirven y cómo puedes gestionarlas o desactivarlas.',
    h1: 'Política de Cookies',
    secciones: [
      {
        h2: 'Qué son las cookies',
        p: [
          'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Sirven para que la web funcione correctamente y, en algunos casos, para recopilar información sobre el uso del sitio.',
        ],
      },
      {
        h2: 'Qué cookies utilizamos',
        p: [
          'Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y, en su caso, cookies analíticas para entender de forma agregada cómo se navega por la web y poder mejorarla. No utilizamos cookies para vender datos a terceros ni para crear perfiles publicitarios cruzados entre sitios.',
        ],
      },
      {
        h2: 'Tipos de cookies según su finalidad',
        lista: [
          '<strong>Técnicas o necesarias</strong>: permiten la navegación y el uso de las funciones básicas del sitio. Sin ellas la web no funciona correctamente, por lo que no requieren consentimiento.',
          '<strong>Analíticas</strong>: recogen información agregada y anónima sobre cómo se usa el sitio (páginas más visitadas, tiempo de permanencia) para poder mejorarlo. Requieren tu consentimiento.',
          '<strong>De preferencias</strong>: recuerdan opciones que hayas elegido para no tener que volver a configurarlas en cada visita.',
        ],
      },
      {
        h2: 'Cookies de terceros',
        p: [
          'Algunas funcionalidades pueden apoyarse en servicios de terceros que instalen sus propias cookies, como proveedores de analítica o de mensajería. Estos terceros tienen sus propias políticas de privacidad, que te recomendamos consultar si quieres conocer el detalle de su tratamiento.',
        ],
      },
      {
        h2: 'Cómo gestionarlas o desactivarlas',
        p: [
          'Puedes configurar o desactivar las cookies desde los ajustes de tu navegador en cualquier momento. Todos los navegadores modernos (Chrome, Safari, Firefox, Edge) permiten bloquearlas, eliminarlas o recibir un aviso antes de que se instalen.',
          'Ten en cuenta que desactivar las cookies técnicas puede afectar al funcionamiento de algunas partes del sitio. Desactivar las analíticas no afecta a tu navegación.',
        ],
      },
      {
        h2: 'Documentos relacionados',
        p: [
          'Más información en nuestra <a href="/privacidad">política de privacidad</a> y en los <a href="/terminos">términos y condiciones</a>. Si tienes dudas sobre el uso de cookies en este sitio, escríbenos desde <a href="/contacto">contacto</a> o conoce más sobre la empresa en <a href="/sobre-nosotros">sobre nosotros</a>.',
        ],
      },
    ],
  },
}
