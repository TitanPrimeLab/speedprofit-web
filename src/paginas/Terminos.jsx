import PaginaLegal from './PaginaLegal'

// Texto legal real, recuperado de la web anterior (speedprofitai.com/Terminos,
// última actualización febrero 2026). Ver CLAUDE.md.
const BLOQUES = [
  {
    titulo: 'Identificación del prestador',
    parrafos: [
      'Titular: Ángel Valen (autónomo).',
      'Nombre comercial: SpeedProfit AI.',
      'Domicilio: Calle Pablo Serrano nº11, 50794.',
      'Contacto: info.angelspeedprofit@gmail.com · Web: speedprofitai.com',
      'NIF/CIF: facilitado en documentación contractual.',
    ],
  },
  {
    titulo: 'Objeto y ámbito de aplicación',
    parrafos: [
      'Los presentes Términos regulan el acceso y uso del sitio web speedprofitai.com (en adelante, "el Sitio") y la contratación de los servicios de automatización e inteligencia artificial ofrecidos bajo la marca SpeedProfit AI. El acceso al Sitio atribuye la condición de usuario e implica la aceptación de estos Términos en su versión vigente.',
    ],
  },
  {
    titulo: 'Descripción de los servicios',
    parrafos: [
      'SpeedProfit AI ofrece soluciones de automatización e inteligencia artificial para empresas y profesionales, entre las que se incluyen: agentes IA para call center (entrante y saliente), agentes IA vendedor por chat (WhatsApp y web), agentes IA setter para prospección activa, agentes IA de soporte por chat, soluciones IA a medida según requerimientos del cliente e integración con CRM, calendarios y herramientas externas.',
      'Las características específicas de cada servicio se detallarán en la propuesta o contrato correspondiente.',
    ],
  },
  {
    titulo: 'Proceso de contratación',
    parrafos: [
      '1. Solicitud: el cliente solicita información o una auditoría a través de los formularios del Sitio o por email.',
      '2. Propuesta: SpeedProfit AI remite una propuesta personalizada con el alcance, precio y condiciones del servicio.',
      '3. Aceptación: el contrato se perfecciona con la aceptación expresa de la propuesta por parte del cliente (firma, confirmación por escrito o pago inicial, según el caso).',
      '4. Inicio del servicio: una vez formalizado el acuerdo, se procede a la configuración e implementación según el calendario acordado.',
    ],
  },
  {
    titulo: 'Precios, facturación y pago',
    parrafos: [
      'Los precios de los servicios se indicarán en la propuesta comercial y serán en euros (€) salvo pacto en contrario. SpeedProfit AI se reserva el derecho de modificar sus tarifas, siendo los cambios aplicables únicamente a nuevas contrataciones o renovaciones.',
      'El pago se realizará según los plazos y condiciones recogidos en la propuesta/contrato. El impago en los plazos acordados podrá dar lugar a la suspensión del servicio y al cobro de intereses legales. Las facturas se emitirán a nombre del cliente con los datos fiscales proporcionados por este.',
    ],
  },
  {
    titulo: 'Obligaciones del cliente',
    parrafos: [
      'Proporcionar información veraz, actualizada y completa necesaria para la prestación del servicio.',
      'Utilizar los servicios conforme a la legislación vigente, la buena fe y el presente documento.',
      'No utilizar los servicios para actividades ilegales, fraudulentas, spam masivo no consentido o que vulneren derechos de terceros.',
      'Notificar cualquier incidencia o cambio relevante que pueda afectar al correcto funcionamiento del servicio.',
      'Asumir la responsabilidad sobre el contenido, scripts y datos que facilite a SpeedProfit AI para la configuración de los agentes.',
    ],
  },
  {
    titulo: 'Propiedad intelectual',
    parrafos: [
      'Todos los contenidos del Sitio (textos, imágenes, logotipos, diseño, código fuente) son propiedad de SpeedProfit AI o de sus licenciantes y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.',
      'Las soluciones y configuraciones de agentes desarrolladas a medida para el cliente son propiedad del cliente una vez satisfecho el pago íntegro acordado, salvo que se acuerde expresamente otra cosa por escrito.',
    ],
  },
  {
    titulo: 'Limitación de responsabilidad',
    parrafos: [
      'SpeedProfit AI no garantiza resultados específicos de ventas, captación de leads o conversiones, ya que estos dependen de múltiples factores externos. La responsabilidad por daños directos quedará limitada al importe abonado por el cliente en los tres (3) meses anteriores al hecho causante.',
      'En ningún caso SpeedProfit AI será responsable de daños indirectos, lucro cesante o pérdida de datos causados por: uso indebido por parte del cliente o terceros; fallos de plataformas o servicios de terceros (Meta, WhatsApp, GoHighLevel, etc.); interrupciones de servicio fuera del control de SpeedProfit AI (fuerza mayor).',
    ],
  },
  {
    titulo: 'Confidencialidad',
    parrafos: [
      'Ambas partes se comprometen a mantener la confidencialidad de la información comercial, técnica y estratégica intercambiada durante la relación contractual, y a no divulgarla a terceros sin consentimiento expreso, salvo obligación legal. Esta obligación subsistirá tras la finalización de los servicios.',
    ],
  },
  {
    titulo: 'Duración y resolución',
    parrafos: [
      'La duración del servicio será la acordada en cada contrato. Cualquiera de las partes podrá resolver el contrato mediante notificación escrita con el preaviso estipulado.',
      'SpeedProfit AI podrá suspender o resolver el servicio de forma inmediata en caso de: impago reiterado; uso contrario a la ley o a estos Términos; solicitud de uso del servicio para actividades fraudulentas o spam.',
    ],
  },
  {
    titulo: 'Protección de datos',
    parrafos: [
      'El tratamiento de datos personales se rige por nuestra Política de Privacidad, que forma parte integrante de estos Términos y cumple con el RGPD (UE) 2016/679 y la LOPDGDD.',
    ],
  },
  {
    titulo: 'Modificaciones de los Términos',
    parrafos: [
      'SpeedProfit AI se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones serán publicadas en el Sitio y, cuando afecten a clientes activos, se comunicarán con un preaviso razonable. El uso continuado del Sitio o el servicio tras la publicación implica la aceptación de los cambios.',
    ],
  },
  {
    titulo: 'Ley aplicable y jurisdicción',
    parrafos: [
      'Estos Términos se rigen por la legislación española. Para la resolución de controversias, las partes se someten a los Juzgados y Tribunales del domicilio del prestador, salvo que la normativa aplicable establezca un fuero imperativo distinto.',
    ],
  },
  {
    titulo: 'Contacto',
    parrafos: [
      'Para cualquier consulta sobre estos Términos puedes contactarnos en info.angelspeedprofit@gmail.com',
    ],
  },
]

export default function Terminos() {
  return (
    <PaginaLegal titulo="Términos de Servicio" actualizado="febrero 2026" bloques={BLOQUES} />
  )
}
