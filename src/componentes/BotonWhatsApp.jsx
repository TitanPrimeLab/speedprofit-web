import { waLink } from '../contenido'

// Botón flotante fijo, esquina inferior derecha, siempre visible
export default function BotonWhatsApp() {
  return (
    <a
      href={waLink('Hola Ángel, me gustaría hablar sobre SpeedProfit AI')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14 md:w-15 md:h-15 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:scale-110 transition-transform duration-200"
      style={{ width: 60, height: 60 }}
    >
      <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white" aria-hidden="true">
        <path d="M16.004 0h-.008C7.174 0 .001 7.176.001 16c0 3.5 1.128 6.744 3.046 9.376L1.05 31.29l6.116-1.956A15.9 15.9 0 0 0 16.004 32C24.83 32 32 24.822 32 16S24.83 0 16.004 0zm9.31 22.594c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.702-1.948-7.73-6.726-7.966-7.036-.226-.31-1.9-2.53-1.9-4.826s1.166-3.424 1.636-3.904c.386-.394.84-.574 1.32-.574.156 0 .296.008.422.014.47.02.706.048 1.016.79.386.93 1.326 3.226 1.438 3.462.114.236.228.556.068.866-.15.32-.282.462-.518.734-.236.272-.46.48-.696.772-.216.254-.46.526-.188.996.272.46 1.21 1.992 2.59 3.222 1.782 1.586 3.226 2.092 3.744 2.308.386.16.846.122 1.128-.178.358-.386.8-1.026 1.25-1.656.32-.452.724-.508 1.148-.348.432.15 2.718 1.28 3.188 1.514.47.236.78.348.894.546.112.198.112 1.132-.274 2.222z" />
      </svg>
    </a>
  )
}
