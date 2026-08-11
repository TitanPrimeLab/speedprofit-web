import PaginaLegal from './PaginaLegal'

// Texto legal real, recuperado de la web anterior (speedprofitai.com/Privacidad,
// última actualización febrero 2026). Ver CLAUDE.md.
const BLOQUES = [
  {
    titulo: 'Responsable del tratamiento',
    parrafos: [
      'Responsable: Ángel Valen (autónomo).',
      'Nombre comercial: SpeedProfit AI.',
      'NIF/CIF: facilitado en documentación contractual y/o facturas previa solicitud legítima.',
      'Domicilio: Calle Pablo Serrano nº11, 50794.',
      'Contacto: info.angelspeedprofit@gmail.com · speedprofitai.com',
    ],
  },
  {
    titulo: 'Datos personales que tratamos',
    parrafos: [
      'Datos identificativos y de contacto: nombre y apellidos, email, teléfono (incluido WhatsApp si lo proporcionas), empresa, cargo, sector.',
      'Datos comerciales y de uso del servicio: información aportada en formularios (leads/mes, canales, CRM, necesidades), historial de comunicaciones (mensajes, emails, llamadas), citas y confirmaciones (fecha/hora, notas operativas).',
      'Datos técnicos: dirección IP, identificadores de dispositivo/navegador, páginas visitadas, origen de tráfico, eventos (si se habilita analítica/cookies).',
      'Datos de consentimiento: evidencia de consentimiento (texto aceptado, fecha/hora, origen, canal).',
    ],
  },
  {
    titulo: 'Finalidades del tratamiento',
    parrafos: [
      'Gestionar solicitudes de información, auditorías, demos y contacto.',
      'Agendar y confirmar citas y enviar comunicaciones operativas relacionadas (p. ej. recordatorios).',
      'Prestar nuestros servicios (Agentes IA + CRM, automatizaciones, reporting) cuando exista relación contractual.',
      'Realizar comunicaciones no comerciales necesarias para la prestación del servicio o la gestión de tu solicitud.',
      'Mejorar la experiencia y seguridad del sitio web y prevenir fraude/abusos.',
      'Cumplir obligaciones legales aplicables.',
    ],
  },
  {
    titulo: 'Base jurídica del tratamiento',
    parrafos: [
      'Consentimiento (art. 6.1.a RGPD): cuando completas formularios y aceptas recibir comunicaciones por canales como SMS/WhatsApp/email.',
      'Medidas precontractuales (art. 6.1.b RGPD): cuando solicitas una auditoría/demo o información para contratar.',
      'Ejecución de contrato (art. 6.1.b RGPD): si contratas nuestros servicios.',
      'Interés legítimo (art. 6.1.f RGPD): seguridad, prevención de fraude, mejora de procesos y comunicaciones necesarias para responder a tu solicitud.',
      'Obligación legal (art. 6.1.c RGPD): facturación, obligaciones fiscales y requerimientos de autoridades.',
    ],
  },
  {
    titulo: 'Comunicaciones por WhatsApp / SMS / Email',
    parrafos: [
      'Si lo autorizas, podremos enviarte mensajes no comerciales relacionados con: agendado y confirmaciones de auditoría/demo, recordatorios e información operativa necesaria.',
      'Siempre podrás revocar el consentimiento y darte de baja respondiendo STOP (si aplica) o escribiendo a info.angelspeedprofit@gmail.com.',
      'Importante: si deseas recibir comunicaciones comerciales/marketing, se gestionará con un consentimiento separado (opt-in explícito).',
    ],
  },
  {
    titulo: 'Conservación de los datos',
    parrafos: [
      'Leads / solicitudes: hasta 12 meses desde el último contacto, salvo que solicites su supresión antes.',
      'Clientes: durante la vigencia del contrato y, posteriormente, durante los plazos legales aplicables (obligaciones fiscales/contables).',
      'Pruebas de consentimiento: mientras sea necesario para acreditar el cumplimiento y durante plazos legales de prescripción.',
    ],
  },
  {
    titulo: 'Destinatarios y encargados del tratamiento',
    parrafos: [
      'GoHighLevel (HighLevel) — CRM / Automatización / Formularios / Calendario: gestión de contactos, automatizaciones, agenda y comunicaciones.',
      'Proton Mail — Email: buzón de contacto asociado a info.angelspeedprofit@gmail.com.',
      'Servicios integrados en GoHighLevel — Mensajería: telefonía/SMS nativa tipo LeadConnector/LC-Phone, según configuración.',
      'Transferencias internacionales: algunos proveedores pueden estar ubicados fuera del EEE. Aplicaremos garantías adecuadas (Cláusulas Contractuales Tipo — SCC). GoHighLevel indica el uso de SCC para transferencias a EE. UU.',
    ],
  },
  {
    titulo: 'Decisiones automatizadas e IA',
    parrafos: [
      'Podemos utilizar automatizaciones e IA para clasificar solicitudes (p. ej. "lead scoring"), enrutar mensajes y proponer respuestas operativas. No tomamos decisiones automatizadas con efectos legales o significativamente similares sin intervención humana, salvo que se informe expresamente y exista base legal.',
    ],
  },
  {
    titulo: 'Seguridad',
    parrafos: [
      'Aplicamos medidas técnicas y organizativas razonables para proteger los datos: control de accesos, cifrado cuando procede, registros y minimización de datos. Aun así, ningún sistema es 100% infalible.',
    ],
  },
  {
    titulo: 'Derechos de las personas',
    parrafos: [
      'Tienes derecho de acceso, rectificación, supresión, oposición, limitación y portabilidad.',
      'Para ejercerlos, escribe a info.angelspeedprofit@gmail.com indicando tu solicitud y acreditando tu identidad si es necesario. También puedes retirar el consentimiento en cualquier momento sin afectar tratamientos previos.',
      'Si consideras que no hemos tratado tus datos correctamente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).',
    ],
  },
  {
    titulo: 'Cookies y analítica',
    parrafos: [
      'Si utilizamos cookies/tecnologías similares, lo informaremos en la Política de Cookies y solicitaremos consentimiento cuando sea necesario.',
    ],
  },
  {
    titulo: 'Menores',
    parrafos: [
      'Nuestros servicios están dirigidos a profesionales y empresas. No recopilamos intencionalmente datos de menores.',
    ],
  },
  {
    titulo: 'Cambios en esta política',
    parrafos: [
      'Podremos actualizar esta Política para reflejar cambios legales o de servicio. La versión vigente estará siempre disponible en esta página.',
    ],
  },
]

export default function Privacidad() {
  return (
    <PaginaLegal titulo="Política de Privacidad" actualizado="febrero 2026" bloques={BLOQUES} />
  )
}
