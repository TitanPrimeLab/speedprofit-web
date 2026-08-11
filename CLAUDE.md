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

### 2. Precio público (`PRECIO` en `contenido.js`, sección `Precio` en `Home.jsx`)
1.500€, con lo que incluye y la garantía de 30 días. Esto es directamente lo
que las IAs comparaban con el precio público de Inmovilla (79€/mes) y usaban
como argumento de opacidad.

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
