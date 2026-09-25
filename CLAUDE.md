# speedprofitai.com — Instrucciones del proyecto

Reconstrucción de la web de SpeedProfit AI para salir de Base44 y alojarla
gratis en Cloudflare Pages. Este archivo es el contexto para Claude Code.

---

## Qué es esto

SpeedProfit AI es una agencia que implanta agentes de IA y campañas de Meta Ads
para **agencias inmobiliarias independientes en España**. La web es comercial:
su único trabajo es que el visitante acabe escribiendo por WhatsApp.

La web original estaba construida en **Base44** (React + Vite + Tailwind +
shadcn/ui sobre su plataforma). Se reconstruye desde cero, sin dependencias de
Base44, manteniendo la identidad visual y el contenido.

**No hay formularios.** Toda la conversión va a WhatsApp o email directo. Esto
es intencionado: el cliente confirma que entran más contactos por el botón
flotante de WhatsApp que por cualquier otra vía.

---

## Stack

- **React 18** + **Vite 5** + **React Router 6**
- **Tailwind CSS 3** (sin shadcn/ui — no hace falta, se eliminó esa dependencia)
- **lucide-react** para iconos
- Sin backend, sin base de datos, sin analítica de terceros
- Despliegue: **Cloudflare Pages** (gratis)

---

## Reglas del proyecto

### 1. Todo el texto vive en `src/contenido.js`
Es la fuente única de verdad. Los componentes **no llevan texto escrito a mano**.
Si hay que cambiar un copy, se cambia ahí y solo ahí.

### 2. El número de WhatsApp solo se escribe en un sitio
Está en `EMPRESA.telefonoWhatsApp` dentro de `contenido.js`. Todos los enlaces
se construyen con el helper `waLink(mensaje)`. **Nunca escribir un número de
teléfono a pelo en un componente.**

> ⚠️ El sitio antiguo tenía el número **incorrecto** (`722852924`) en varios
> sitios. El correcto es **`722842925`**. Ya está corregido en `contenido.js`.

### 3. Los colores salen de las variables CSS
Definidas en `src/index.css` bajo `:root`. Paleta:

| Token | Valor |
|---|---|
| `--gold` | `#C9A84C` |
| `--gold-light` | `#E8C96A` |
| `--gold-dark` | `#A07830` |
| `--gold-bright` | `#F5DC8A` |
| `--ink` (fondo) | `#0A0A0A` |
| `--bone` (texto claro) | `#F2EDE4` |
| `--text-muted` | `rgba(200,190,175,0.7)` |
| Fondo tarjeta | `rgba(255,255,255,0.03)` |
| Borde tarjeta | `rgba(201,168,76,0.15)` |

La clase `.btn-gold` reproduce **exactamente** el botón del sitio original
(degradado 135°, doble sombra, `translateY(-1px)` en hover). No modificarla.

### 4. No añadir dependencias sin motivo
Prioridad del cliente: gratis y open source antes que de pago; self-hosted
antes que SaaS. Nada de librerías de animación, UI kits ni analítica de pago.

### 5. Accesibilidad — suelo mínimo no negociable
- Responsive hasta móvil
- Foco de teclado visible (ya está en `index.css`)
- `prefers-reduced-motion` respetado (chat y animaciones)
- El chat simulado del hero es `aria-hidden` (es decorativo)

---

## Estructura

```
src/
  contenido.js          ← TODO el texto. Empieza siempre por aquí.
  index.css             ← Tokens de diseño y .btn-gold
  App.jsx               ← Rutas + redirecciones SEO desde URLs antiguas
  main.jsx
  componentes/
    ui.jsx              ← BotonOro, Seccion, Tarjeta, Icono, CierreCTA...
    Nav.jsx             ← Nav fija, cambia a sólida al hacer scroll, menú móvil
    Footer.jsx
    Layout.jsx          ← Nav + main + Footer + botón WhatsApp + scroll-to-top
    BotonWhatsApp.jsx   ← Flotante, esquina inferior derecha, z-index 9999
    ChatSimulado.jsx    ← Chat animado del hero (ver aviso abajo)
    Acordeon.jsx        ← FAQ
    VolverAlInicio.jsx
  paginas/
    Home.jsx  AgentesIA.jsx  ComoFunciona.jsx  CaptacionExclusivas.jsx
    Testimonios.jsx  SobreNosotros.jsx  Contacto.jsx
    Privacidad.jsx  Terminos.jsx  PaginaLegal.jsx  NoEncontrada.jsx
public/
  _redirects            ← SPA fallback para Cloudflare Pages (NO borrar)
  robots.txt  sitemap.xml
  img/                  ← Aquí van las imágenes (ver abajo)
```

---

## ⚠️ Bug conocido heredado — el scroll del chat

En el sitio original, el chat animado del hero tenía un bug: su scroll interno
**arrastraba la página entera hacia arriba** cada vez que aparecía un mensaje.

Ya está resuelto en `ChatSimulado.jsx` con tres medidas juntas:
1. Altura fija (`h-[420px]`) + `overflow-y-auto`
2. `overscroll-behavior: contain` en el contenedor
3. Scroll con `nodo.scrollTop = nodo.scrollHeight` — **nunca `scrollIntoView()`**,
   que es lo que causaba el bug.

**No cambiar a `scrollIntoView` bajo ningún concepto.**

---

## 🔁 Regresión que ya ha ocurrido DOS veces — leer antes de tocar animaciones

El chat del hero se ha roto dos veces por el mismo motivo, y las dos veces el
causante fue añadir un corte por `prefers-reduced-motion` en `ChatSimulado.jsx`:

| Commit | Qué hizo |
|---|---|
| `a4506d0` | Quitó el corte. Chat arreglado. |
| `7b53e6b` | **Lo volvió a meter** (y borró el comentario que lo explicaba). Chat roto otra vez. |

**Motivo comprobado en el navegador de Ángel:** `matchMedia('(prefers-reduced-motion: reduce)')`
devuelve `true` aunque él no haya activado nada a propósito — Windows 11 lo pone
así al desactivar los "efectos de animación" o en modo ahorro de energía. Con ese
corte, el chat salía estático con los 9 mensajes de golpe.

**Regla:** en `ChatSimulado.jsx` no va ningún condicional de movimiento reducido.
El chat es decorativo (`aria-hidden`) y sus mensajes solo *aparecen* — no hay
deslizamiento ni zoom, que es lo que WCAG 2.3.3 pide evitar.

---

## Aparición al hacer scroll (toda la web)

Todo el contenido aparece progresivamente al bajar, mediante el componente
`Revelar` de `componentes/ui.jsx`.

- `<Revelar retraso={i * 90}>` encadena en cascada los elementos de una fila.
- `como="p"` / `como="li"` / `como="section"` evita meter un `<div>` extra donde
  rompería el marcado o el layout.
- `CabeceraSeccion` y `CierreCTA` ya se revelan solos — no hace falta envolverlos.

### ⚠️ La red de seguridad — no quitarla

Los elementos `.revelar` arrancan en `opacity: 0`. Si el JavaScript fallara,
**la web entera se vería en blanco**. Por eso el ocultado está condicionado a la
clase `animaciones`, que añade un script en línea en el `<head>` de `index.html`:

```
sin JS → sin clase → nada se oculta → la web se ve entera
```

Ese script va **en línea y en el `<head>` a propósito**: si se mueve a un archivo
aparte o a React, llega tarde y el contenido pega un salto (aparece, se esconde y
vuelve a aparecer). `Revelar` lleva además dos salvaguardas propias: muestra el
contenido de inmediato si no existe `IntersectionObserver`, y no espera al
observador para lo que ya está en la primera pantalla.

Sobre `prefers-reduced-motion`: **no** se matan todas las transiciones (eso es lo
que congelaba la web entera). Se quita el desplazamiento y se conserva el fundido
de opacidad, que es seguro para quien sufre mareo por movimiento.

---

## Imágenes que faltan

El cliente las tiene guardadas. Hay que colocarlas en `public/img/`:

| Archivo | Qué es | Dónde se usa |
|---|---|---|
| `fondo.png` | Fondo negro con triángulos dorados y destellos | `body` en `index.css` |
| `logo.png` | Logo SpeedProfit AI | Nav, footer, favicon |
| `og-image.png` | Imagen para compartir en redes (1200×630) | metas de `index.html` |

Opcionales (estaban en el sitio original, ahora no se usan — decidir si se
recuperan): imagen del collage de agentes IA, captura del dashboard, foto de
equipo.

**Antes de subirlas: comprimir.** Un PNG de fondo a pantalla completa sin
comprimir puede pesar 3-4 MB y arruinar la velocidad de carga. Convertir a WebP
o comprimir con TinyPNG. Objetivo: fondo < 300 kB.

---

## Decisiones pendientes — NO publicar sin resolver

### 1. Textos legales (bloqueante)
`Privacidad.jsx` y `Terminos.jsx` tienen bloques `[PENDIENTE]`. Hay que pegar el
texto legal real de la web actual. **No publicar con placeholders**: son páginas
de cumplimiento normativo (RGPD).

### 2. Testimonios (importante — riesgo real)
Los testimonios del sitio actual llevaban **nombre completo + empresa concreta**
(«Carlos Martínez, Inmobiliaria Luxe Madrid»). En `contenido.js` ya se han
cambiado a **inicial + apellido abreviado + cargo genérico + ciudad**, que es lo
que el cliente había decidido en su momento por riesgo de credibilidad.

Sigue habiendo un problema de fondo: si estos testimonios no corresponden a
clientes reales que hayan dado su consentimiento, no deberían publicarse tal
cual. Hablarlo con el cliente antes de publicar. Lo ideal: sustituirlos por 2-3
testimonios reales verificables (tiene clientes activos). Un testimonio real con
nombre y permiso vale más que seis genéricos, y es la ventaja competitiva más
defendible en este sector, donde ningún competidor tiene prueba social real.

### 3. Coherencia de las cifras
Hay números que no cuadran entre páginas y conviene unificarlos:
- ROI: la Home dice **x8**, Testimonios dice **x6.4**, Sobre Nosotros dice **x6**
- «+50 empresas activas» vs «+50 inmobiliarias» — decidir una fórmula
- «100% de clientes recuperan la inversión en el primer mes»: afirmación muy
  fuerte y difícil de sostener. Ya se ha suavizado en `contenido.js`
  (sustituida por la garantía de 30 días, que sí es verificable).

Elegir una cifra por métrica y usarla en toda la web.

---

## Añadidos de la segunda ronda — AEO/confianza

Estos 5 añadidos responden a un problema concreto: al preguntar a ChatGPT y
Gemini si convenía contratar SpeedProfit AI, ambos recomendaban a la
competencia (Inmovilla, Witei...) por falta de señales de confianza
verificables — sin precio público, sin reseñas de terceros, sin datos
estructurados que puedan leer. Esto ataca la parte que sí depende de la web;
el resto del plan (Google Business Profile, Trustpilot, LinkedIn empresa,
entidad legal) lo lleva el cliente aparte y no toca este repositorio.

### 1. Schema.org (`index.html` + `Home.jsx`)
- `LocalBusiness` + `Offer` con el precio, en `index.html`. **No rellenar
  `sameAs` (redes) con más enlaces de los reales, ni inventar
  `aggregateRating`** — un dato estructurado que no coincide con la fuente
  real (ej. Google Business Profile) penaliza la confianza en toda la web
  más que no tenerlo. Añadir cada campo cuando exista de verdad.
- `FAQPage` inyectado dinámicamente en el componente `Faq` de `Home.jsx`,
  generado a partir de `HOME.faq.preguntas` — si añades una pregunta al FAQ,
  el schema se actualiza solo.

### 2. Precio público (`PRECIO` en `contenido.js`, componente `componentes/Precio.jsx`)
1.500€, con lo que incluye y la garantía de 30 días. Esto es directamente lo
que las IAs comparaban con el precio público de Inmovilla (79€/mes) y usaban
como argumento de opacidad.

**Vive en "Cómo funciona", no en la Home.** Decisión deliberada: un visitante
escéptico que ve 1.500€ antes de entender qué compra, cierra la pestaña. El
dato que necesitan las IAs no depende de en qué página esté la tarjeta visual
— vive en dos sitios que no se mueven: el `schema.org Offer` de `index.html`
(presente en toda la web, es la plantilla única del SPA) y la respuesta del
FAQ en la Home ("¿Cuánto cuesta?"). Si algún día se quiere mover el precio
otra vez, `Precio.jsx` es un componente independiente — se importa donde
haga falta, no hay que reescribirlo.

### 3. FAQ ampliado (`HOME.faq.preguntas` en `contenido.js`)
5 preguntas nuevas que responden literalmente a las objeciones que planteaban
las tres IAs: RGPD/encargado del tratamiento, hablar con clientes reales,
qué herramientas hay detrás, demo en directo. No son copy de relleno — cada
una tapa un hueco real que se vio en las conversaciones con Gemini y ChatGPT.

### 4. Invitación a dejar reseña (`TESTIMONIOS.dejaResena`, en `Testimonios.jsx`)
Bloque tras la grid de testimonios. **El enlace todavía va a WhatsApp** —
está marcado con un `TODO` en `contenido.js`: en cuanto exista Google
Business Profile o Trustpilot (ver más abajo, este mismo documento no las
crea, las gestiona el cliente aparte), cambiar `dejaResena.ctaMensaje` por
un `href` directo a esa reseña.

### 5. Calculadora de comisiones perdidas (`componentes/Calculadora.jsx`)
La pieza más delicada de las cinco: hace afirmaciones sobre dinero real, así
que la fórmula está comentada línea a línea en el propio archivo y no debe
tocarse sin entender el porqué. Resumen:

- Usa **los mismos datos que ya están en el resto de la web** (40% de leads
  fuera de horario, +40% de mejora en tasa de cierre) — no inventa cifras
  nuevas.
- Tiene un desplegable "Cómo lo calculamos" visible para cualquiera, con el
  texto en `CALCULADORA.transparencia.texto`. **Si cambias la fórmula en el
  código, cambia también ese texto** — deben decir siempre lo mismo.
- Lleva un disclaimer visible: no es una promesa de resultados.
- El CTA del hero ("Ver cuánto estoy perdiendo") ya no abre WhatsApp
  directamente — hace scroll a la calculadora (`hero.ctaHref: '#calculadora'`
  en `contenido.js`). El WhatsApp se abre al final, con el resultado ya
  calculado metido en el mensaje.

Esta pieza es la respuesta directa a la crítica más dura que hizo una de las
IAs: que las cifras de retorno prometidas ("ROI 3x", "300% de crecimiento")
son "promesas comerciales sin contrastar". Aquí pasa lo contrario: el
visitante ve la fórmula, mete sus propios números, y la propia web le dice
que no es una garantía.

### 6. Política de Cookies (`paginas/PoliticaCookies.jsx`, ruta `/cookies`)
No existía en el sitio original ni estaba pedida por las IAs — se añadió
aparte, a petición del cliente, por transparencia. A diferencia de
Privacidad y Términos, **este contenido SÍ es real y no un placeholder**:
refleja el estado técnico actual (sin Analytics, **Meta Pixel solo con
consentimiento**, YouTube en modo `nocookie`). Si se añade otra herramienta
de seguimiento, ver el apartado "Meta Pixel y consentimiento" más abajo:
hay que colgarla del mismo consentimiento y actualizar los tres textos
legales.

### 6b. Meta Pixel y consentimiento (sep 2026) — NO pegar el snippet en index.html
El píxel de Meta (ID en `EMPRESA.metaPixelId`, `contenido.js`) **no está en el
`<head>`**. Lo carga `src/consentimiento.js` y **solo si el visitante pulsa
«Aceptar»** en el aviso (`componentes/BannerCookies.jsx`, montado en `Layout`).

Por qué no va en `index.html`, como sugiere Meta: en España (RGPD + art. 22.2
LSSI) el píxel de publicidad exige consentimiento previo, y en el `<head>`
cargaría para todos desde el primer segundo. Tampoco se usa el
`<noscript><img>` del snippet: dispararía el evento sin JS y, por tanto, sin
consentimiento posible.

- **Aceptar y Rechazar pesan igual** (mismo tamaño y nivel). Rechazar tiene que
  ser tan fácil como aceptar; no convertirlo en un enlace de texto.
- **Retirar el consentimiento:** enlace «Configurar cookies» en el `Footer`.
  Rechazar envía `fbq('consent','revoke')` y borra `_fbp`/`_fbc`.
- La elección se guarda en `localStorage` (`sp_consentimiento_publicidad`:
  `si`/`no`). Si el almacenamiento falla, se vuelve a preguntar; nunca se
  asume un «sí».
- **PageViews entre páginas:** `fbevents.js` ya detecta los cambios de URL
  (`pushState`) y dispara un PageView por navegación. **No añadir PageViews
  manuales** al cambiar de ruta: saldrían duplicados.
- El banner va por debajo del botón de WhatsApp (`z-[9998]` vs `z-[9999]`) y
  elevado en móvil, para no tapar nunca el canal por el que entran los contactos.
- `public/whatsapp.html` (página puente del formulario de Meta) **no lleva
  píxel**: redirige al instante y no puede pedir consentimiento.

Al añadir cualquier otra herramienta de medición (Analytics, TikTok...):
1. colgarla del mismo consentimiento en `src/consentimiento.js`,
2. añadir su bloque en `paginas/PoliticaCookies.jsx`,
3. mencionarla en `paginas/Privacidad.jsx` y en `scripts/contenido-estatico.mjs`
   (bloques `/cookies` y `/privacidad`, que es lo que ven buscadores y sin JS).

### 7. llms.txt (`public/llms.txt`)
Estándar nuevo (2024-2026, llmstxt.org) — el equivalente de robots.txt pero
para que ChatGPT/Claude/Gemini lean un resumen limpio de la web sin tener
que rastrear todo el HTML. Markdown puro: H1 + blockquote de resumen +
secciones con enlaces a cada página. Si se añaden o cambian páginas, hay
que actualizar este archivo también — no se genera solo.

### 8. Fix de accesibilidad/SEO: h1 en todas las páginas
`AgentesIA.jsx`, `ComoFunciona.jsx` y `Testimonios.jsx` usaban `<h2>` como
título de apertura (vía `CabeceraSeccion`) y no tenían ningún `<h1>` en la
página. Se añadió una prop `esH1` a `CabeceraSeccion` (en `componentes/ui.jsx`)
que renderiza `<h1>` en vez de `<h2>` cuando se pasa. Si se crea una página
nueva, comprobar que su título de apertura use `esH1` — cada página necesita
exactamente un `<h1>`.

### 9. Calculadora rediseñada (`componentes/Calculadora.jsx`)
Reescrita al estilo de calculadora moderna con dos columnas: inputs a la
izquierda, resultados en vivo a la derecha. **Cambios clave respecto a la
versión anterior:**
- Valores por defecto pre-rellenados (48 leads, 350k€ ticket, etc.) — el
  usuario ve un resultado en cuanto entra, cero fricción.
- Cálculo en tiempo real sin botón "calcular". Cambias un input, cambia el
  resultado inmediatamente (via `useMemo`).
- Fórmula nueva basada en penalización por tiempo de respuesta (curva
  documentada en el propio archivo).
- ROI calculado sobre la inversión de 1.500€.
- Bloque "¿Cómo calculamos esto?" desplegable con 3 puntos + fuentes +
  enlace al artículo de blog correspondiente.

### 10. Estadísticas del sector (`componentes/EstadisticasSector.jsx`)
Fila de 3 números grandes (78% / 21x / 6h) debajo de la calculadora.
Refuerza los datos del sector que la calculadora acaba de usar. Todo el
copy en `CALCULADORA.estadisticasSector`.

### 11. Diferenciadores (`componentes/Diferenciadores.jsx`)
Bloque de 4 tarjetas: mercados globales (8 idiomas), privacidad/RGPD, IA
transparente, velocidad. Va entre "La solución" y "El proceso" en la Home.
Copy en `DIFERENCIADORES` en `contenido.js`.

### 12. Blog (Fase 1) — sistema completo de artículos en Markdown

**Arquitectura:**
- Los artículos viven en `src/blog/*.md` — un archivo por artículo.
- Cada archivo tiene frontmatter YAML al principio con los metadatos
  (título, slug, descripción, fecha, autor, categoría, imagen, palabras
  clave).
- `src/blog/index.js` los lee todos vía `import.meta.glob` de Vite, parsea
  el frontmatter, y expone `listarArticulos()` y `obtenerArticulo(slug)`.
- El markdown se renderiza a HTML con `marked` (dependencia nueva, ~30kb).

**Rutas:**
- `/blog` → listado (`paginas/Blog.jsx`).
- `/blog/:slug` → artículo individual (`paginas/BlogArticulo.jsx`).

**SEO por artículo:**
- El título, meta description, canonical, Open Graph y JSON-LD (`Article`
  + `BreadcrumbList`) se actualizan dinámicamente al cargar cada artículo.
- Ver funciones helper al final de `BlogArticulo.jsx`.

**Estilos del cuerpo:**
- Clase `.prose-blog` en `index.css` — tipografía, listas, blockquotes,
  código, tablas. Todo con los tokens de la web.

**Cómo añadir un artículo nuevo:**
1. Crea un archivo `.md` en `src/blog/` (nombre libre, pero el `slug` del
   frontmatter es lo que va en la URL).
2. Copia la estructura del frontmatter del artículo de ejemplo
   (`coste-real-responder-tarde-leads-inmobiliarios.md`).
3. Escribe el contenido en Markdown normal.
4. Añade la URL al `sitemap.xml` y al `llms.txt`.
5. `git add`, `commit`, `push` — Cloudflare redespliega automáticamente.

**Todavía por hacer (fase 2):**
- Sistema de categorías con filtro.
- Autopublicación desde n8n/Make (montar cuando el flujo esté aceitado).
- Sincronización con carruseles de Instagram.

### 13. Metadatos SEO/AEO máximos (`index.html`)
Reescrito con set completo de metadatos para máximo posicionamiento en
buscadores y motores de IA:
- Robots directives específicas (`max-snippet:-1`, `max-image-preview:large`).
- Meta author, publisher, copyright, rating, language.
- hreflang para es-ES, es y x-default.
- Geo tags (region, country, ICBM, position).
- Preconnect a youtube-nocookie y wa.me.
- Open Graph completo (con image:width/height/alt y locale:alternate).
- Twitter Card completo.
- Schema.org `@graph` con 4 tipos combinados: Organization, LocalBusiness,
  Service, WebSite — con IDs internos para que se referencien entre sí.
- Manifest.webmanifest para PWA básica.

**IMPORTANTE:** Los campos `sameAs` y `aggregateRating` se dejan fuera
deliberadamente. Añadirlos con datos que no existan aún (Google Business
Profile, Trustpilot) penaliza más que ayudarlos — un motor de IA que
contrasta el dato con la fuente y no lo encuentra, deja de confiar en la
web entera. Añadirlos SOLO cuando esos perfiles existan de verdad.

## Añadidos nuevos respecto al sitio original

El cliente pidió reforzar dos mensajes. Ya están integrados:

1. **Soporte 24/7, 365 días al año**, con equipo real detrás de sus +50 empresas
   activas → aparece en: tarjeta nueva en «La solución» (Home), pregunta nueva
   en el FAQ, diferenciador reescrito en «Cómo funciona», insignia y valor nuevo
   en «Sobre nosotros», y nota en Contacto.

2. **Trato personalizado e individual** como diferenciador frente a la
   competencia → tarjeta nueva en «La solución», diferenciador nuevo en «Cómo
   funciona», y valor «Hecho para ti, no para todos» reforzado en «Sobre
   nosotros».

---

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor local en http://localhost:5173
npm run build    # compilar a dist/
npm run preview  # previsualizar el build
```

---

## Despliegue en Cloudflare Pages

1. Subir el repo a GitHub.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Configuración de build:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Custom domains → añadir `speedprofitai.com` y `www.speedprofitai.com`.
5. Verificar que `public/_redirects` está en el build (es lo que hace que las
   rutas tipo `/contacto` funcionen al recargar; sin él salta 404).

A partir de ahí, cada `git push` redespliega solo. Gratis, sin límite práctico
de tráfico para un sitio de este tamaño.

### Antes de cancelar Base44
Comprobar en producción, una por una:
- [ ] Las 9 páginas cargan y se ven bien en móvil y escritorio
- [ ] El chat del hero anima sin mover la página
- [ ] El vídeo de YouTube reproduce
- [ ] El botón flotante de WhatsApp abre el número **correcto** (722842925)
- [ ] Todos los CTAs abren WhatsApp con su mensaje preescrito
- [ ] Las URLs antiguas (`/Home`, `/AgentesIA`…) redirigen bien
- [ ] Textos legales reales publicados
- [ ] El dominio apunta a Cloudflare y carga por HTTPS

Solo cuando todo esto esté verde, cancelar la suscripción de Base44.
