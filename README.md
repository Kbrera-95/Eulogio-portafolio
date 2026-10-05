# eulogio — portfolio en Astro

Home estática reconstruida en **Astro 7.1.6** a partir del sitio en Framer.
Sin frameworks de UI ni Tailwind: CSS scopeado por componente + tokens globales.

## Arrancar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # salida en dist/
npm run preview
```

El dev server de Astro 7 corre en segundo plano (daemon):

```bash
npx astro dev status   # ver si está levantado y en qué puerto
npx astro dev logs     # seguir el log
npx astro dev stop     # detenerlo
```

## Estructura

```
src/
  data/site.ts          ← todo el contenido (textos, links, proyectos, FAQ)
  styles/global.css     ← tokens, tipografía, botones, utilidades
  layouts/Base.astro    ← head, fuentes, scripts de animación
  components/
    Nav.astro           barra flotante + menú móvil
    Hero.astro          titular + foto + tarjeta "Disponible para proyectos"
    Projects.astro      grilla 2×2 + banner Behance
    Services.astro      3 tarjetas
    Process.astro       4 pasos
    About.astro         bio, chips y contadores animados
    Faq.astro           acordeón (<details>)
    Footer.astro        marca, links, legal
    ArrowIcon.astro     flecha inline reutilizable
    ServiceIcon.astro   íconos de servicio (por `name`)
  data/proyectos.ts     ← copy de /proyectos y de cada caso de estudio
  pages/
    index.astro         compone las secciones de la home
    servicios.astro     landing de servicios (/servicios)
    proyectos.astro     grilla de proyectos (/proyectos)
    proyectos/
      [slug].astro      detalle de cada caso (/proyectos/<slug>)
public/images/          assets del sitio
```

## Proyectos

`/proyectos` lista las cuatro cards en grilla 2×2 (una columna en mobile).
Cada card enlaza a `/proyectos/<slug>`, generado por `pages/proyectos/[slug].astro`
con `getStaticPaths`: se crea una página por cada proyecto de `site.ts` que tenga
un caso escrito en `data/proyectos.ts`.

El detalle es un caso de estudio largo con las nueve secciones de los documentos de
`Contenido proyectos Portafolio/`:

| # | Sección | Qué muestra |
|---|---|---|
| 01 | Hero | eyebrow, título en dos líneas, bajada, dos CTAs, imagen y ficha de datos |
| 02 | Contexto | prosa + tres tarjetas con ícono |
| 03 | El problema | prosa, reviews (si las hay), problemas numerados y highlight oscuro |
| 04 | Research | métodos en tarjetas con tags, insight destacado y tres hallazgos |
| 05 | Definición | bloques flexibles: pasos, decisiones antes/después, sitemap, comparativa o nota |
| 06 | Diseño UI | tipografía, paleta con chips de color, componentes, pantallas y galería |
| 07 | Resultado | cuatro métricas grandes, mejoras cualitativas, entregables y feedback |
| 08 | Aprendizajes | lista numerada con el "qué haría diferente" al final |
| 09 | Cierre | CTA oscuro, card del siguiente caso y vuelta a la grilla |

Los bloques de la sección Definición son una unión de tipos (`DefinitionBlock`):
`steps`, `decisions`, `sitemap`, `compare` y `note`. Cada caso usa los que le sirven —
Granix usa `decisions` + `compare`, Greenti `sitemap` + `steps`, Hapi `steps` + `note`.

**Para sumar un proyecto**: agregá el item en `projects.items` (`site.ts`) con su
`slug`, y una entrada con ese mismo slug en `projectDetails` (`data/proyectos.ts`).
Sin la segunda, el proyecto aparece en la grilla pero no se genera su página.

## Tokens tomados del sitio original

| Token | Valor |
|---|---|
| Fondo página | `#F7F7F8` |
| Superficie | `#FFFFFF` |
| Texto principal | `#121218` / `#1B1B21` |
| Texto secundario | `#44454C` |
| Acento | `#1C57EB` |
| Display | Space Grotesk (600 / 500) |
| Body | Inter (400) — el original usa *Inter Display* |
| Contenedor | 1200px |
| Radios | 24 / 16 / 12 px, botones pill |

Escala tipográfica: H1 56/64 `-1.12px` · H2 36/40 `-0.72px` · H3 24/32 `-0.48px` ·
H4 20/30 `-0.8px` · body 18/28 `-0.36px` y 16/24 `-0.32px`.

Las fuentes son self-hosted vía `@fontsource-variable` (sin llamadas a Google Fonts).

## Qué falta reemplazar

1. **Imagen Open Graph**: `Base.astro` apunta a `/images/og.jpg` y ese archivo **no existe**
   todavía — al compartir el link no se ve preview. Exportá una de 1200×630 a `public/images/og.jpg`.
2. **SVG viejos sin uso**: `cover-boda|granix|hapi|greenti.svg` quedaron huérfanos al
   entrar las portadas reales, igual que `eulogio.svg`. Se pueden borrar.
3. **Galería de cada caso**: `gallery.images` está vacío en los cuatro casos, así que
   se dibujan placeholders que **nombran la captura que falta** (`gallery.shots`, tomado
   de "Imágenes que necesitás cargar" de cada documento). Cargá `{ src, alt }` en
   `images` y los placeholders desaparecen solos.
4. **URLs de los CTAs del hero**: en `data/proyectos.ts` quedaron con `href: '#'` los
   destinos que todavía no existen — invitación de boda en vivo y los prototipos de
   Figma de Granix y Hapi. Behance apunta al perfil real y Greenti a `https://greenti.co`
   (confirmá que sea el dominio final).
5. **Textos de la home**: los párrafos de `src/data/site.ts` (hero, about, FAQ) siguen
   siendo el resumen editable — los casos de `/proyectos` ya usan el contenido definitivo.
6. **Contadores**: `about.stats` está en 30+ proyectos y 6+ años. Ajustar.
7. **Links**: LinkedIn, Behance, Instagram y el destino de cada proyecto están en `site.ts`.
8. **Ilustraciones de Servicios**: hoy son formas CSS abstractas
   (`.service__art`), pensadas para cambiarse por los assets reales.

## Portadas de proyecto

Las cuatro portadas son mockups 16:9 servidos en WebP desde `public/images/`, en dos
medidas por proyecto — `cover-<key>-1600.webp` y `-800.webp` — que `site.ts` expone
como `cover` y `coverSmall`. Los tres lugares donde se renderizan (stack de la home,
grilla de `/proyectos` y hero del detalle) las sirven con `srcset` + `sizes`, así la
grilla baja a la versión de 800w y sólo el hero pide la de 1600w.

Los PNG originales de 1920×1080 (~1.5 MB cada uno) quedaron en `assets-originales/`,
fuera de `src` y de `public` para que no entren al build. Para regenerar las portadas
tras cambiar un original, con `sharp` (ya viene con Astro):

```js
await sharp(origen).resize({ width: 1600 }).webp({ quality: 82 }).toFile(destino);
```

## Animaciones

- Fade-up al hacer scroll con `IntersectionObserver` (clase `.reveal`, delay por `--delay`).
- Contadores animados con `requestAnimationFrame`.
- Hover con `translateY` en tarjetas y botones.
- Todo respeta `prefers-reduced-motion`.

## Accesibilidad y SEO

`lang="es"`, jerarquía H1→H5 correcta, foco visible, menú móvil con `aria-expanded`,
FAQ con `<details name="faq">` (acordeón nativo, un panel abierto por vez),
meta description + Open Graph en `Base.astro`. Ajustá `site` en `astro.config.mjs`
al dominio final para que el canonical salga bien.
