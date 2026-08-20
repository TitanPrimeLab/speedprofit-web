import PaginaLegal from './PaginaLegal'

// ⚠️ Contenido base RGPD — plantilla profesional basada en las prácticas
// estándar del Reglamento (UE) 2016/679 y la LOPDGDD 3/2018. Cubre lo
// exigido por Semrush y suficiente para cumplir el mínimo legal, pero
// ANTES DE PUBLICAR conviene que Bartu (o cualquier abogado) revise:
//   - Que la entidad legal indicada (OÜ/LLC) es la que quieres presentar
//     al cliente español, o si prefieres crear una SL
//   - Que el DPO/registro RGPD está declarado si aplica
//   - Que las herramientas listadas coinciden con las que usas hoy
// Ver CLAUDE.md, "Frente 1" (entidad legal).
const BLOQUES = [
  {
    parrafos: [
      'En SpeedProfit AI nos tomamos la privacidad de los datos muy en serio. Esta política explica de forma clara qué información recogemos, para qué la usamos, cómo la protegemos y qué derechos tienes sobre ella. Cumplimos con el Reglamento General de Protección de Datos (RGPD) de la Unión Europea y con la Ley Orgánica 3/2018 de Protección de Datos y Garantía de los Derechos Digitales.',
    ],
  },
  {
    titulo: 'Responsable del tratamiento',
    parrafos: [
      'El responsable del tratamiento de tus datos es SpeedProfit AI, operado por SpeedProficient OÜ, sociedad constituida en Estonia con código de registro 17532333 y domicilio social en Harju maakond, Tallinn, Kesklinna linnaosa, Pärnu mnt 105, 11312, Estonia.',
      'Puedes contactar con nosotros en cualquier momento por correo electrónico en info@speedprofitai.com o por WhatsApp en el +34 722 842 925 para cualquier cuestión relativa a esta política o al tratamiento de tus datos.',
    ],
  },
  {
    titulo: 'Datos que recogemos',
    parrafos: [
      'Recogemos únicamente los datos estrictamente necesarios para prestar nuestros servicios y responder a tus consultas. En concreto:',
      'Datos de contacto: nombre, apellidos, dirección de correo electrónico, número de teléfono y nombre de la agencia inmobiliaria, cuando los facilitas a través de nuestros canales de comunicación (WhatsApp, correo o formulario).',
      'Datos de comunicación: contenido de los mensajes que nos envías, historial de conversaciones y cualquier información que compartas voluntariamente durante el proceso comercial o de trabajo.',
      'Datos técnicos limitados: dirección IP y tipo de navegador únicamente si son necesarios para el funcionamiento del servicio. Esta web no utiliza herramientas de analítica ni píxeles de seguimiento de terceros.',
    ],
  },
  {
    titulo: 'Finalidad del tratamiento',
    parrafos: [
      'Utilizamos tus datos exclusivamente para las siguientes finalidades:',
      'Responder a tus consultas y proporcionarte la información que nos solicitas sobre nuestros servicios.',
      'Prestarte los servicios contratados de automatización con inteligencia artificial, incluyendo el desarrollo, configuración, mantenimiento y soporte de los agentes de IA.',
      'Enviarte comunicaciones relacionadas con nuestros servicios cuando exista una relación contractual previa o cuando hayas dado tu consentimiento expreso.',
      'Cumplir con nuestras obligaciones legales y fiscales.',
    ],
  },
  {
    titulo: 'Base legitimadora',
    parrafos: [
      'La base legal que nos permite tratar tus datos varía según la finalidad concreta:',
      'Para responder a tus consultas y ejecutar el servicio contratado, la base es la ejecución de un contrato o la aplicación de medidas precontractuales a tu solicitud (art. 6.1.b RGPD).',
      'Para el cumplimiento de obligaciones legales y fiscales, la base es el cumplimiento de una obligación legal (art. 6.1.c RGPD).',
      'Para envío de comunicaciones comerciales, cuando aplique, la base es tu consentimiento expreso (art. 6.1.a RGPD), que puedes retirar en cualquier momento.',
    ],
  },
  {
    titulo: 'Encargados del tratamiento',
    parrafos: [
      'Para poder prestarte el servicio, algunos de tus datos son procesados por proveedores tecnológicos externos que actúan como encargados del tratamiento en virtud del artículo 28 del RGPD. Estos proveedores están sujetos a acuerdos de tratamiento de datos y cuentan con las garantías necesarias, incluidas las cláusulas contractuales tipo de la Comisión Europea cuando el procesamiento se realiza fuera del Espacio Económico Europeo.',
      'Entre los principales encargados se encuentran los servicios de mensajería utilizados para las integraciones con WhatsApp Business API, los proveedores de modelos de inteligencia artificial que impulsan los agentes conversacionales, y las plataformas de automatización e integración con CRM.',
      'La relación concreta de encargados actualizada está disponible bajo petición escrita al correo indicado en esta política.',
    ],
  },
  {
    titulo: 'Conservación de los datos',
    parrafos: [
      'Conservaremos tus datos personales únicamente durante el tiempo necesario para cumplir con las finalidades para las que fueron recogidos, y siempre en cumplimiento de las obligaciones legales aplicables.',
      'Los datos de clientes activos se conservan durante toda la vigencia de la relación contractual. Una vez finalizada la relación, se conservarán bloqueados durante el tiempo necesario para atender posibles responsabilidades legales, fiscales o contractuales (habitualmente entre 4 y 6 años).',
      'Los datos de personas que solo han contactado con nosotros sin llegar a contratar el servicio se conservan durante un plazo máximo de 12 meses desde el último contacto, salvo que solicites su eliminación antes.',
    ],
  },
  {
    titulo: 'Derechos del usuario',
    parrafos: [
      'Como titular de los datos, tienes reconocidos los siguientes derechos, que puedes ejercer en cualquier momento de forma gratuita:',
      'Derecho de acceso, para saber qué datos tuyos tenemos y cómo los estamos tratando.',
      'Derecho de rectificación, para corregir cualquier dato inexacto o incompleto.',
      'Derecho de supresión ("derecho al olvido"), para solicitar la eliminación de tus datos cuando ya no sean necesarios.',
      'Derecho de oposición, para oponerte al tratamiento de tus datos en determinadas circunstancias.',
      'Derecho a la limitación del tratamiento, para pedir que suspendamos temporalmente su uso.',
      'Derecho a la portabilidad, para recibir tus datos en un formato estructurado o pedir que los transmitamos a otro responsable.',
      'Derecho a no ser objeto de decisiones automatizadas con efectos jurídicos significativos.',
      'Para ejercer cualquiera de estos derechos, escríbenos a info@speedprofitai.com indicando tu solicitud y adjuntando una copia de tu documento de identidad. Te responderemos en el plazo máximo de un mes.',
      'Si consideras que no hemos atendido correctamente tu solicitud, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
    ],
  },
  {
    titulo: 'Seguridad de los datos',
    parrafos: [
      'Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos frente a accesos no autorizados, pérdida, alteración o divulgación. Todas las comunicaciones se realizan a través de canales cifrados (HTTPS/TLS), y los datos almacenados están protegidos con cifrado en reposo.',
      'A pesar de nuestros esfuerzos, ningún sistema es 100% seguro. Si detectas cualquier vulnerabilidad o incidente de seguridad, agradecemos que nos lo comuniques a la mayor brevedad al correo indicado.',
    ],
  },
  {
    titulo: 'Cambios en esta política',
    parrafos: [
      'Podemos actualizar esta política de privacidad en cualquier momento para reflejar cambios en nuestros servicios, en la legislación aplicable o en las buenas prácticas del sector. Cuando esto ocurra, publicaremos la versión actualizada en esta misma página con la fecha de última revisión, y si el cambio es sustancial te lo notificaremos por los medios habituales de contacto.',
      'Esta política se complementa con nuestra Política de Cookies y con nuestros Términos de Servicio, que también forman parte del marco de tu relación con SpeedProfit AI.',
    ],
  },
]

export default function Privacidad() {
  return <PaginaLegal titulo="Política de Privacidad" actualizado="14 de agosto de 2026" bloques={BLOQUES} />
}
