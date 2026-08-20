import PaginaLegal from './PaginaLegal'

// ⚠️ Contenido base de Términos y Condiciones — plantilla profesional que
// cubre lo esencial para una agencia de servicios de IA en España. Antes de
// publicar, conviene que Bartu revise:
//   - Cláusula de jurisdicción (Estonia OÜ, Wyoming LLC, o SL española)
//   - Cláusulas fiscales (IVA, retenciones)
//   - Precio y política de reembolso concretos que quieras aplicar
// Ver CLAUDE.md, "Frente 1" (entidad legal).
const BLOQUES = [
  {
    parrafos: [
      'Estos Términos de Servicio (en adelante, "Términos") regulan el acceso y uso de los servicios prestados por SpeedProfit AI (en adelante, "SpeedProfit", "nosotros") a través del sitio web speedprofitai.com y de los canales de comunicación asociados. Al contratar cualquiera de nuestros servicios o al utilizar esta web, aceptas quedar vinculado por estos Términos en su totalidad.',
    ],
  },
  {
    titulo: 'Identificación de la empresa',
    parrafos: [
      'SpeedProfit AI es una marca comercial operada por SpeedProficient OÜ, sociedad constituida en Estonia con código de registro 17532333 y domicilio social en Harju maakond, Tallinn, Kesklinna linnaosa, Pärnu mnt 105, 11312, Estonia. Es la entidad que factura y presta el servicio a clientes en España, el resto de Europa y el resto del mundo.',
      'Los datos de contacto son: correo electrónico info@speedprofitai.com y teléfono/WhatsApp +34 722 842 925.',
    ],
  },
  {
    titulo: 'Objeto del servicio',
    parrafos: [
      'SpeedProfit desarrolla e implementa agentes de inteligencia artificial personalizados para agencias inmobiliarias independientes. El servicio incluye el análisis previo, la configuración, el entrenamiento, la integración con las herramientas del cliente (WhatsApp, web, CRM) y el soporte técnico durante la vigencia del servicio.',
      'El alcance concreto de cada implementación se detalla en la propuesta comercial aceptada por escrito o por medio digital equivalente entre las partes.',
    ],
  },
  {
    titulo: 'Precio y forma de pago',
    parrafos: [
      'El precio del servicio de configuración se determina en función del volumen mensual de leads y de los canales conectados, y se comunica por escrito al cliente antes de la contratación. El servicio de diseño web para inmobiliarias tiene un precio cerrado de 399 € (trescientos noventa y nueve euros). Los importes no incluyen impuestos aplicables (IVA u otros), que se facturarán adicionalmente según la normativa vigente y la ubicación fiscal del cliente.',
      'El precio podrá revisarse para nuevos contratos, pero cualquier variación no afectará a las condiciones acordadas con clientes que ya hayan formalizado la contratación.',
      'El pago se realiza mediante transferencia bancaria u otros métodos electrónicos habilitados. La factura se emite tras la recepción del pago.',
    ],
  },
  {
    titulo: 'Garantía de resultados',
    parrafos: [
      'Ofrecemos una garantía de satisfacción de 30 días desde la puesta en marcha del sistema. Si durante ese periodo el cliente considera que el servicio no cumple con las expectativas razonables descritas en la propuesta comercial, puede solicitar la devolución del importe abonado siguiendo el procedimiento que se le indicará por escrito.',
      'La garantía no cubre situaciones ajenas al servicio prestado, tales como: falta de cooperación del cliente durante la fase de entrenamiento, cambios en el negocio del cliente que impidan el funcionamiento normal del sistema, o incumplimiento por parte del cliente de las condiciones técnicas mínimas para el funcionamiento (acceso a WhatsApp Business, disponibilidad de un catálogo estructurado, etc.).',
    ],
  },
  {
    titulo: 'Obligaciones del cliente',
    parrafos: [
      'El cliente se compromete a facilitar de forma veraz y en plazo razonable toda la información necesaria para el correcto entrenamiento y configuración del agente de IA. Esto incluye, sin limitación: catálogo de propiedades, procesos comerciales internos, tono de comunicación deseado, y credenciales de acceso a las herramientas necesarias.',
      'El cliente es responsable de mantener actualizada la información facilitada y de comunicar cualquier cambio relevante que pueda afectar al funcionamiento del sistema.',
      'El cliente utilizará el servicio conforme a la ley, respetando los derechos de sus propios clientes y usuarios, y no empleará el sistema para fines fraudulentos, engañosos o ilícitos.',
    ],
  },
  {
    titulo: 'Propiedad intelectual',
    parrafos: [
      'La propiedad intelectual del software, código, algoritmos, arquitectura, documentación y marca de SpeedProfit AI pertenece exclusivamente a SpeedProfit. El cliente adquiere un derecho de uso limitado y no exclusivo del sistema configurado para su agencia, durante la vigencia de la relación contractual.',
      'La información aportada por el cliente (catálogo, mensajes, historial, etc.) sigue siendo propiedad del cliente en todo momento. SpeedProfit únicamente la utiliza para prestar el servicio contratado y no reclama derecho alguno sobre ella.',
    ],
  },
  {
    titulo: 'Confidencialidad',
    parrafos: [
      'Ambas partes se comprometen a mantener la confidencialidad de toda información no pública a la que tengan acceso como consecuencia de esta relación contractual, tanto durante la vigencia del servicio como después de su finalización.',
      'Esta obligación no se aplica a la información que sea de dominio público por causa no imputable a la parte receptora, ni a la que deba revelarse por obligación legal o requerimiento de autoridad competente.',
    ],
  },
  {
    titulo: 'Limitación de responsabilidad',
    parrafos: [
      'SpeedProfit prestará el servicio con la diligencia profesional exigible y aplicará los medios técnicos razonables para asegurar su continuidad, pero no puede garantizar de forma absoluta la ausencia de errores, interrupciones o resultados comerciales específicos, al depender parte del funcionamiento de servicios de terceros (WhatsApp Business API, proveedores de modelos de IA, plataformas de integración) sobre los que no ejercemos control directo.',
      'La responsabilidad total de SpeedProfit por cualquier reclamación derivada de este contrato queda limitada al importe efectivamente abonado por el cliente en los 12 meses anteriores a la reclamación.',
      'En ningún caso SpeedProfit será responsable de daños indirectos, lucro cesante, pérdida de oportunidades comerciales o daños reputacionales del cliente frente a terceros.',
    ],
  },
  {
    titulo: 'Duración y terminación',
    parrafos: [
      'El servicio de configuración se considera prestado con la entrega del sistema funcional al cliente. Los servicios de soporte y mantenimiento tienen la duración pactada en la propuesta comercial.',
      'Cualquiera de las partes puede resolver la relación contractual comunicándolo por escrito con una antelación mínima de 30 días. La terminación por incumplimiento grave de la otra parte se regirá por la legislación aplicable.',
      'En caso de terminación, SpeedProfit entregará al cliente, en formato razonable, la información que le pertenece (historial de conversaciones, configuraciones) y procederá a la eliminación o devolución del resto de datos personales conforme a la política de privacidad.',
    ],
  },
  {
    titulo: 'Ley aplicable y jurisdicción',
    parrafos: [
      'Estos Términos y cualquier controversia relacionada con ellos se regirán por la legislación española.',
      'Las partes se someten expresamente a los Juzgados y Tribunales del domicilio del cliente cuando este tenga la condición de consumidor. En el resto de casos, las partes se someten a los Juzgados y Tribunales que resulten competentes conforme a la normativa aplicable.',
    ],
  },
  {
    titulo: 'Modificación de los Términos',
    parrafos: [
      'SpeedProfit podrá actualizar estos Términos en cualquier momento para reflejar cambios en el servicio, en la legislación aplicable o en las buenas prácticas del sector. Las modificaciones se publicarán en esta misma página con la fecha correspondiente, y se comunicarán a los clientes activos por los canales habituales.',
      'Los cambios no aplicarán con carácter retroactivo a servicios ya prestados ni contratos ya en ejecución bajo condiciones anteriores.',
      'Estos Términos deben leerse conjuntamente con nuestra Política de Privacidad y nuestra Política de Cookies, que forman parte integral del marco contractual entre las partes.',
    ],
  },
]

export default function Terminos() {
  return <PaginaLegal titulo="Términos de Servicio" actualizado="14 de agosto de 2026" bloques={BLOQUES} />
}
