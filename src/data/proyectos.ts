/**
 * Contenido de /proyectos y de cada caso /proyectos/[slug].
 *
 * Los textos salen de los PDF de "Contenido proyectos Portafolio"
 * (granix, greenti, hapi, roe-eu — versión 2.0, octubre 2026). La estructura
 * sigue las 7 secciones de esos documentos:
 * hero → contexto → problema → investigación → definición → resultado →
 * aprendizajes (o CTA final, en Roe & Eu).
 *
 * Respecto de la versión anterior:
 *  - Se eliminó la etapa "Diseño UI" (tipografía, paleta, componentes): los
 *    documentos nuevos no la traen. Las pantallas pasaron a vivir en dos
 *    lugares: `definition.image` cierra la etapa de Definición y
 *    `result.gallery` cierra la de Resultado.
 *  - `problem.highlight`, `research.insight`, `result.qualitative` y
 *    `learnings` son opcionales: no todos los casos los tienen.
 *
 * Las imágenes salen de `assets-originales/<proyecto>/` y están copiadas en
 * `public/images/` como `<proyecto>-01.webp` y `-02.webp` (1163×554).
 *
 * ⚠️ Pendiente: los CTA con `href: '#'` esperan la URL real (invitación en
 * vivo). Behance, hapi.trade y greenti.co ya apuntan al destino.
 */

export interface Cta {
  label: string;
  href: string;
  /** Abre en pestaña nueva y muestra el ícono de link externo */
  external?: boolean;
}

export interface MetaRow {
  label: string;
  value: string;
}

/** Tarjeta de contexto: ícono + título + cuerpo */
export interface ContextCard {
  icon: string;
  title: string;
  text: string;
}

export interface ProblemItem {
  n: string;
  title: string;
  text: string;
  tag: string;
}

export interface Quote {
  text: string;
  source: string;
}

export interface Method {
  label: string;
  title: string;
  paragraphs: string[];
  tags: string[];
}

export interface Finding {
  n: string;
  text: string;
}

/**
 * Bloques de la sección Definición. Cada caso resolvió esta etapa distinto,
 * así que el bloque es una unión: pasos, decisiones antes/después, mapa de
 * sitio o nota larga.
 */
export type DefinitionBlock =
  | {
      kind: 'steps';
      title: string;
      items: { label?: string; title: string; lines: string[] }[];
    }
  | {
      kind: 'decisions';
      title: string;
      items: { title: string; before: string; after: string; why: string }[];
      /** Cierre del bloque: el resultado al que llevaron las decisiones */
      result?: string;
    }
  | {
      kind: 'sitemap';
      title: string;
      groups: { title: string; items: string[] }[];
      total?: string;
    }
  | {
      kind: 'note';
      title: string;
      paragraphs: string[];
      subs?: { title: string; paragraphs: string[] }[];
    };

/** Mockup ancho (1163×554) que acompaña una etapa del caso */
export interface Shot {
  src: string;
  alt: string;
  caption?: string;
}

export interface Metric {
  value: string;
  label: string;
  text?: string;
}

export interface Learning {
  label?: string;
  title: string;
  paragraphs: string[];
}

export interface Heading {
  /** Primera línea, en color de tinta */
  top: string;
  /** Segunda línea, resaltada */
  em: string;
}

export interface ProjectDetail {
  metaTitle: string;
  metaDescription: string;
  keywords: string;

  hero: {
    eyebrow: string;
    /** Nombre grande del proyecto */
    name: string;
    title: Heading;
    text: string;
    ctas: Cta[];
    meta: MetaRow[];
  };

  context: {
    label: string;
    heading: Heading;
    paragraphs: string[];
    cards: ContextCard[];
  };

  problem: {
    label: string;
    heading: Heading;
    paragraphs: string[];
    quotes?: Quote[];
    items: ProblemItem[];
    /** Restricción o métrica de impacto. No todos los casos la traen. */
    highlight?: { value?: string; title?: string; text: string };
  };

  research: {
    label: string;
    heading: Heading;
    intro: string[];
    methods: Method[];
    /** Cita del hallazgo principal. Solo Granix y Greenti la tienen. */
    insight?: Quote;
    findingsTitle: string;
    findings: Finding[];
  };

  definition: {
    label: string;
    heading: Heading;
    paragraphs: string[];
    blocks: DefinitionBlock[];
    /** Mockup que cierra la etapa: así se ve lo definido, ya construido */
    image?: Shot;
  };

  result: {
    label: string;
    heading: Heading;
    intro?: string[];
    metrics: Metric[];
    qualitativeTitle?: string;
    qualitative?: { title: string; text: string }[];
    feedback?: { title: string; text: string };
    /** Galería. Con `images` vacío se dibujan placeholders con `shots`. */
    gallery: {
      title: string;
      images: Shot[];
      /** Fallback: si no hay imágenes, se dibujan placeholders con estos nombres */
      shots?: string[];
    };
  };

  /** Roe & Eu cierra con CTA, no con aprendizajes. */
  learnings?: {
    label: string;
    heading: Heading;
    items: Learning[];
    /** "Qué haría diferente": cierre honesto de la etapa */
    different?: { title: string; text: string };
  };

  closing: {
    heading: Heading;
    text: string;
    ctas: Cta[];
    next: { label: string; title: string; text: string; href: string };
  };
}

const BEHANCE = 'https://www.behance.net/eulogiocabrera';
const BEHANCE_GRANIX =
  'https://www.behance.net/gallery/246730709/Caso-de-estudio-Granix';

/** Copy de la grilla /proyectos */
export const proyectosPage = {
  metaTitle: 'Proyectos — Eulogio Cabrera | Casos de UX/UI, Framer y eCommerce',
  metaDescription:
    'Casos de diseño UX/UI, desarrollo en Framer y eCommerce: proceso, decisiones y resultados de cada proyecto en el que participé.',
  eyebrow: 'Portafolio',
  title: 'Proyectos en los que he participado',
  intro:
    'Cada caso muestra el problema de negocio, las decisiones de diseño que tomamos y cómo se resolvió. De la investigación al handoff.',
};

/** Detalle de cada caso, indexado por el `slug` definido en site.ts */
export const projectDetails: Record<string, ProjectDetail> = {
  /* =========================================================================
     ROE & EU — Invitación digital de boda
     ========================================================================= */
  'invitacion-digital-boda': {
    metaTitle: 'Invitación digital Roe & Eu · Eulogio Cabrera UX/UI',
    metaDescription:
      'Diseño y desarrollo de una invitación de boda digital en Framer, para 30–60 invitados, con cinco links de pases según la cantidad de personas por familia.',
    keywords:
      'invitación digital, boda, Framer, diseño personalizado, UX, caso de estudio, pases digitales',

    hero: {
      eyebrow: 'Framer · Diseño digital · Proyecto personal · 2026',
      name: 'Invitación digital de boda',
      title: { top: 'Invitación de boda,', em: 'Roe & Eu.' },
      text: 'Diseñar la invitación de tu propia boda tiene una capa de presión que ningún cliente puede darte: el estándar lo ponés vos mismo y no hay vuelta atrás. 30–60 personas, cada una con su propio link, su propio pase y su propio nombre en pantalla.',
      ctas: [
        { label: 'Ver invitación en vivo', href: '#', external: true },
        { label: 'Ver proceso completo', href: '#research' },
      ],
      meta: [
        { label: 'Rol', value: 'Diseño UI + Desarrollo Framer' },
        { label: 'Herramientas', value: 'Framer' },
        { label: 'Contexto', value: 'Proyecto personal — nuestra boda' },
        { label: 'Invitados', value: '30–60 personas' },
        { label: 'Pases', value: '5 links — hasta 5 personas por familia' },
        { label: 'Canal', value: 'WhatsApp — 100% mobile' },
      ],
    },

    context: {
      label: '02 — Contexto',
      heading: { top: 'El cliente más exigente', em: 'que tuve fue yo mismo.' },
      paragraphs: [
        'Cuando llegó el momento de organizar nuestra boda, la decisión de hacer la invitación digital fue inmediata. No por ser diseñador, sino porque una invitación en papel no podía hacer lo que necesitábamos: ser personalizada, fácil de compartir por WhatsApp, siempre disponible en el teléfono y actualizable si algo cambiaba de último momento.',
        'No era un cliente con brief claro y reuniones programadas. Era un proyecto paralelo a otros proyectos, con una fecha inamovible.',
      ],
      cards: [
        {
          icon: '💌',
          title: 'Una invitación que se sintiera única',
          text: 'No queríamos algo genérico. Queríamos que el invitado abriera el link y sintiera que esa invitación fue hecha para él o ella.',
        },
        {
          icon: '🔗',
          title: 'Cinco links para cinco tipos de pase',
          text: 'Se crearon 5 links para diferentes pases según la cantidad de personas por familia. La familia más grande contaba con máximo 5 personas: eso definió el límite de links.',
        },
        {
          icon: '⏱️',
          title: 'Un proyecto paralelo a la vida real',
          text: 'Diseñar tu propia boda mientras trabajás en otros proyectos no es lo mismo que un encargo de cliente.',
        },
      ],
    },

    problem: {
      label: '03 — El problema',
      heading: { top: 'El tiempo', em: 'estaba en contra.' },
      paragraphs: [
        'Queríamos crear una linda experiencia en la invitación de nuestra boda, en un tiempo relativamente rápido. Optamos por Framer para la construcción de la invitación. Siempre la pensamos 100% mobile, aunque también se adapta a desktop.',
      ],
      items: [
        {
          n: '01',
          title: 'Diseñar sin todo el contenido',
          text: 'Las fotos, el nombre del lugar y los textos llegaron en etapas. El diseño tenía que avanzar con placeholders inteligentes.',
          tag: 'Contenido · Proceso · Flexibilidad',
        },
        {
          n: '02',
          title: 'Mobile como único canal',
          text: 'Se pensó también para verse en desktop, pero la invitación iba a llegar por WhatsApp: el 100% de las aperturas iban a ser desde un teléfono.',
          tag: 'Mobile-first · WhatsApp · Contexto de uso',
        },
      ],
      highlight: {
        title: '¿Cómo se representa a una pareja en 390px?',
        text: 'Una invitación de papel tiene textura, tiene peso, tiene olor. Una invitación digital tiene pixeles. El desafío más interesante no fue técnico, fue emocional.',
      },
    },

    research: {
      label: '04 — Investigación',
      heading: { top: 'Un moodboard', em: 'antes que un wireframe.' },
      intro: [
        'Para este proyecto hubo benchmark de invitaciones que nos gustaron. Tomamos secciones de otras páginas que queríamos destacar en nuestra invitación: música, calendario, galería de fotos, mensaje de la pareja, entre otras.',
      ],
      methods: [
        {
          label: 'Método 01',
          title: 'Moodboard y dirección estética',
          paragraphs: [
            'El moodboard reunió referencias de invitaciones, fotografía con luz de hora dorada y tonos naturales, sitios editoriales con mucho espacio en blanco y tipografía serif con carácter.',
          ],
          tags: ['Moodboard', 'Brief visual', 'Dirección estética'],
        },
        {
          label: 'Método 02',
          title: 'Brief de contenido y sistema de pases',
          paragraphs: [
            'El contenido tuvo de 3 a 4 iteraciones para definir lugar, horas y detalles finales. El sistema de pases se definió en 5 links por temas de tiempo.',
          ],
          tags: ['Brief de contenido', 'Sistema de pases', 'Iteración'],
        },
        {
          label: 'Método 03',
          title: 'Exploración técnica en Framer',
          paragraphs: [
            'Framer permite construir una invitación rápido, de la misma manera en la que se construye una web.',
          ],
          tags: ['Framer', 'Personalización'],
        },
      ],
      findingsTitle: 'Hallazgos del research',
      findings: [
        {
          n: 'Hallazgo 1',
          text: 'El moodboard es el mejor brief para proyectos personales. Cuando el cliente sos vos mismo, las palabras no alcanzan.',
        },
        {
          n: 'Hallazgo 2',
          text: 'El contenido que llega en etapas no es un problema, es una condición de diseño. El layout tiene que ser flexible desde el inicio.',
        },
      ],
    },

    definition: {
      label: '05 — Definición',
      heading: { top: 'Una sola página,', em: 'con variable de pases.' },
      paragraphs: [
        'La decisión más importante fue también la más simple: una sola URL base con el número de invitados como parámetro.',
      ],
      blocks: [
        {
          kind: 'steps',
          title: 'Las seis secciones de la invitación',
          items: [
            {
              label: 'Sección 01',
              title: 'Cover personalizado',
              lines: [
                'Lo primero que ve el invitado es la foto de la pareja, la fecha y un botón de play para reproducir la música, lo que ayuda al recorrido de la invitación.',
              ],
            },
            {
              label: 'Sección 02',
              title: 'Frases de la pareja',
              lines: ['Palabras propias de Roe y Eulogio, no frases genéricas.'],
            },
            {
              label: 'Sección 03',
              title: 'Galería de fotos',
              lines: ['Fotos con la estética del moodboard: luz cálida, colores naturales.'],
            },
            {
              label: 'Sección 04',
              title: 'Fecha y lugar',
              lines: ['Link directo al mapa. Un tap para guardar la ubicación.'],
            },
            {
              label: 'Sección 05',
              title: 'Requisitos de la pareja',
              lines: ['Dress code presentado con el tono de la pareja.'],
            },
            {
              label: 'Sección 06',
              title: 'Pase del invitado',
              lines: ['Número de pases visible y claro.'],
            },
          ],
        },
      ],
      image: {
        src: '/images/boda-01.webp',
        alt: 'Tres pantallas de la invitación: el cover con la foto de la pareja y el reproductor de música, la galería de fotos con la fecha, y la sección de ubicaciones con la frase de la pareja.',
        caption: 'Cover, galería y pase: las secciones que ve el invitado al abrir su link.',
      },
    },

    result: {
      label: '06 — Resultado',
      heading: { top: 'La gente lo comentó.', em: 'Eso no pasa con cualquier invitación.' },
      intro: [
        'El mejor indicador de que algo funciona no es una métrica de conversión, es cuando la gente habla de ello sin que nadie se los pidiera.',
      ],
      metrics: [
        {
          value: '1',
          label: 'página en Framer',
          text: 'Alimentó toda la experiencia sin duplicar trabajo.',
        },
        {
          value: '100%',
          label: 'mobile',
          text: 'Todas las aperturas desde teléfono, vía WhatsApp, adaptable a desktop.',
        },
        {
          value: '0',
          label: 'impresiones, sobres ni papel',
          text: 'La invitación vivió en el teléfono de cada invitado.',
        },
      ],
      feedback: {
        title: 'Reacción de los invitados',
        text: 'La reacción fue muy positiva, la gente lo comentó. Varios preguntaron cómo estaba hecha. Algunos dijeron que era la primera invitación digital que se sentía tan personal.',
      },
      gallery: {
        title: 'Pantallas de la invitación',
        images: [
          {
            src: '/images/boda-02.webp',
            alt: 'Dos teléfonos con la invitación de Roe & Eu: el cover con la foto de la pareja y la sección de calendario, horarios de ceremonia y recepción con los links a las ubicaciones.',
            caption:
              'Calendario, horarios y ubicaciones: un tap para guardar el lugar en el mapa.',
          },
        ],
      },
    },

    closing: {
      heading: { top: '¿Tenés un evento, producto', em: 'o momento que merece más que un PDF?' },
      text: 'Con las herramientas correctas y las decisiones de diseño correctas, algo digital puede sentirse tan personal y tan especial como algo hecho a mano.',
      ctas: [
        { label: 'Hablemos de tu proyecto', href: '/#contacto' },
        { label: 'Ver invitación en vivo', href: '#', external: true },
      ],
      next: {
        label: 'Siguiente caso de estudio',
        title: 'Granix — Rediseño eCommerce',
        text: 'Análisis heurístico, card sorting con 8 usuarios y nueva arquitectura de información para el eCommerce de una marca argentina líder en alimentos saludables.',
        href: '/proyectos/granix',
      },
    },
  },

  /* =========================================================================
     GRANIX — Rediseño eCommerce
     ========================================================================= */
  granix: {
    metaTitle: 'Granix, Rediseño eCommerce · Eulogio Cabrera UX/UI',
    metaDescription:
      'Proceso UX completo: análisis heurístico, benchmark, card sorting con 8 usuarios, nueva arquitectura de información y UIKit mobile-first en Figma.',
    keywords:
      'UX design, ecommerce, card sorting, arquitectura de información, mobile-first, Figma',

    hero: {
      eyebrow: 'eCommerce · UX Research · UI Design · 2026',
      name: 'Granix',
      title: { top: 'Cuando la arquitectura', em: 'le habla al usuario.' },
      text: 'El sitio de Granix tenía identidad de marca pero ninguna lógica centrada en el usuario. Un proceso completo de research, card sorting y rediseño que cambió la forma en que los compradores navegan sus productos.',
      ctas: [
        { label: 'Ver en Behance', href: BEHANCE_GRANIX, external: true },
        { label: 'Ver proceso completo', href: '#research' },
      ],
      meta: [
        { label: 'Rol', value: 'UX Research · UI Design' },
        { label: 'Duración', value: '6 semanas' },
        { label: 'Equipo', value: 'Solo' },
        { label: 'Herramientas', value: 'Figma · FigJam · Maze · Optimal Workshop' },
        { label: 'Contexto', value: 'Proyecto académico con marca real' },
        { label: 'Entregable', value: 'Prototipo navegable + caso Behance' },
      ],
    },

    context: {
      label: '02 — Contexto',
      heading: { top: 'Un sitio', em: 'que nadie entendía.' },
      paragraphs: [
        'Granix es una marca argentina con décadas de historia en alimentos saludables. Reconocida, con identidad visual fuerte y presencia en casi todos los supermercados del país. Pero su sitio web contaba una historia diferente: navegar hasta un producto era un ejercicio de paciencia y desde el teléfono era una experiencia rota.',
        'Elegí Granix porque representa un problema real y frecuente: marcas establecidas con mucho producto, buena identidad, pero con una arquitectura digital construida desde adentro hacia afuera.',
      ],
      cards: [
        {
          icon: '📉',
          title: 'La web no vendía',
          text: 'Tráfico sin conversión. Sin mobile-first, sin filtros útiles y sin flujo de compra claro.',
        },
        {
          icon: '🧭',
          title: 'Arquitectura no centrada en el usuario',
          text: 'Categorías como Granola, Cereales, Barras. No como el usuario busca: Sin TACC, Vegano, Alto en proteína.',
        },
        {
          icon: '📱',
          title: 'El 70% llegaba desde mobile',
          text: 'Sin adaptación responsive real. En teléfono, la experiencia era inutilizable.',
        },
      ],
    },

    problem: {
      label: '03 — El problema',
      heading: { top: 'Mala experiencia', em: 'de usuario.' },
      paragraphs: [
        'Los tres problemas del sitio tenían la misma raíz: la web había sido construida siguiendo la lógica interna de la empresa, no la lógica mental del usuario.',
      ],
      items: [
        {
          n: '01',
          title: 'Navegación por categorías internas',
          text: 'Granola, Cereales, Barras, Snacks, Semillas. Útil para Granix, confuso para quien busca algo sin gluten para merendar.',
          tag: 'Arquitectura de información',
        },
        {
          n: '02',
          title: 'Sin filtros por necesidad dietaria',
          text: 'Celíacos, veganos y personas con dieta específica no tenían forma de filtrar directamente.',
          tag: 'Experiencia de usuario',
        },
      ],
    },

    research: {
      label: '04 — Investigación',
      heading: { top: 'Metodologías', em: 'de investigación.' },
      intro: [
        'La hipótesis inicial era rediseñar la homepage. El research reveló que el verdadero problema estaba tres niveles más abajo: en cómo estaban nombradas las categorías.',
      ],
      methods: [
        {
          label: 'Método 01',
          title: 'Análisis heurístico',
          paragraphs: [
            '10 heurísticas de Nielsen. 14 problemas detectados: 4 críticos, 6 graves, 4 menores. Los críticos: navegación y feedback en checkout.',
          ],
          tags: ['Heurísticas Nielsen', 'UX Audit'],
        },
        {
          label: 'Método 02',
          title: 'Benchmark',
          paragraphs: [
            '5 eCommerce de alimentos saludables en Argentina y Latam. Patrón en los de mejor conversión: filtros por atributo nutricional, no por línea de producto.',
          ],
          tags: ['Benchmark', 'Análisis competitivo'],
        },
        {
          label: 'Método 03',
          title: 'Card sorting con 8 usuarios',
          paragraphs: [
            '4 compradores habituales de productos saludables + 4 con restricciones dietarias. 32 productos para ordenar.',
            'Resultado: ninguno usó las categorías de Granix. Todos organizaron por momento de consumo y atributo nutricional.',
          ],
          tags: ['Card Sorting', '8 participantes', 'Optimal Workshop'],
        },
      ],
      insight: {
        text: 'Ninguno de los 8 participantes organizó los productos como Granix los tenía categorizados. Todos pensaron en "para qué momento" y "qué puedo comer".',
        source: 'Resultado del card sorting · 8 participantes',
      },
      findingsTitle: 'Hallazgos del research',
      findings: [
        {
          n: 'Hallazgo 1',
          text: 'Los usuarios no piensan en líneas de producto. Piensan en necesidades: qué puedo comer, cuándo y qué restricciones tengo.',
        },
        {
          n: 'Hallazgo 2',
          text: 'Los compradores con restricciones son los más activos y los más frustrados. Los que más tiempo pasaban navegando y más abandonaban.',
        },
      ],
    },

    definition: {
      label: '05 — Definición',
      heading: { top: 'Del hallazgo', em: 'a la decisión.' },
      paragraphs: [
        'El rediseño no era cosmético. Había que cambiar la estructura completa antes de cambiar un solo pixel visual.',
      ],
      blocks: [
        {
          kind: 'decisions',
          title: 'Tres decisiones estructurales',
          items: [
            {
              title: 'Arquitectura de categorías',
              before: 'Granola · Cereales · Barras · Snacks · Semillas',
              after:
                'Sin TACC · Vegano · Alto en proteína · Para el desayuno · Para el deporte · Para merendar',
              why: 'Los usuarios buscan por necesidad y momento, no por tipo de producto.',
            },
            {
              title: 'Flujo de checkout',
              before: '6 pasos con formularios separados',
              after: '3 momentos: qué comprás, dónde lo recibís, cómo pagás',
              why: 'Cada paso adicional en el checkout aumenta el abandono.',
            },
            {
              title: 'Enfoque responsive',
              before: 'Diseño desktop que se achicaba para mobile',
              after: 'Diseño mobile que se expande para desktop',
              why: 'El 70% del tráfico llegaba desde teléfono.',
            },
          ],
          result: 'Nueva arquitectura: de 6 clicks a 2 para llegar al producto objetivo.',
        },
      ],
      image: {
        src: '/images/granix-01.webp',
        alt: 'Notebook con la home de Granix rediseñada: buscador, menú de productos y el bloque principal sobre alimentación saludable.',
        caption: 'La home con la navegación nueva: búsqueda y categorías por necesidad al alcance.',
      },
    },

    result: {
      label: '06 — Resultado',
      heading: { top: 'Menos fricción.', em: 'Más claridad.' },
      metrics: [
        {
          value: '–67%',
          label: 'de clicks para llegar al producto',
          text: 'De 6 a 2 interacciones.',
        },
        {
          value: '40+',
          label: 'componentes en el UIKit',
          text: 'Con variants, estados y auto-layout.',
        },
        {
          value: '1ra',
          label: 'vez con diseño mobile-first',
          text: 'En la historia del sitio de Granix.',
        },
        {
          value: '3',
          label: 'pasos en el checkout rediseñado',
          text: 'Contra los 6 pasos originales.',
        },
      ],
      qualitativeTitle: 'Lo que cambió para el usuario',
      qualitative: [
        {
          title: 'Encontrar el producto en menos de 30 segundos',
          text: 'Los usuarios encontraron el producto objetivo en menos de 30 segundos en el 87% de los casos, contra 2 minutos y 40 segundos antes.',
        },
        {
          title: 'Filtrar por restricción desde la home',
          text: 'Usuarios con restricciones (celíacos, veganos) pueden filtrar directamente desde la home por primera vez.',
        },
        {
          title: 'Otra percepción de marca',
          text: 'Participantes del test post-rediseño describieron el sitio como más profesional, más fácil de usar y más parecido a las marcas que compran online.',
        },
      ],
      gallery: {
        title: 'Pantallas del rediseño',
        images: [
          {
            src: '/images/granix-02.webp',
            alt: 'Monitor de escritorio con la sección de recetas del sitio de Granix rediseñado, con una receta destacada de Avena Mix.',
            caption:
              'Contenido editorial de recetas: el momento de consumo como puerta de entrada al producto.',
          },
        ],
      },
    },

    learnings: {
      label: '07 — Aprendizajes',
      heading: { top: 'Lo que me llevo', em: 'de este proyecto.' },
      items: [
        {
          title: 'El card sorting no es un método opcional',
          paragraphs: [
            'Sin el card sorting hubiera rediseñado las categorías existentes haciéndolas más lindas. Con él, rediseñé la estructura completa desde la lógica mental del usuario.',
            'Hoy es el paso 2 de cualquier proyecto con contenido a organizar.',
          ],
        },
        {
          title: 'Los nombres importan más que el diseño',
          paragraphs: [
            '"Sin TACC" convierte mejor que "Especiales" aunque el diseño sea idéntico. El lenguaje del usuario tiene que ser el mismo que el del sitio.',
          ],
        },
      ],
    },

    closing: {
      heading: { top: '¿Tu producto tiene', em: 'el mismo problema?' },
      text: 'La mayoría de los sitios que no convierten no tienen un problema de diseño visual. Tienen un problema de arquitectura — y se resuelve hablando con los usuarios, no eligiendo mejores colores.',
      ctas: [
        { label: 'Hablemos de tu proyecto', href: '/#contacto' },
        { label: 'Ver en Behance', href: BEHANCE_GRANIX, external: true },
      ],
      next: {
        label: 'Siguiente caso de estudio',
        title: 'Hapi — App de inversión',
        text: 'App de inversión en bolsa. Siete flujos rediseñados para que alguien sin experiencia financiera pueda comprar su primera acción entendiendo cada paso.',
        href: '/proyectos/hapi-app-de-inversion',
      },
    },
  },

  /* =========================================================================
     HAPI — App de inversión
     ========================================================================= */
  'hapi-app-de-inversion': {
    metaTitle: 'Hapi App de inversión · Eulogio Cabrera UX/UI',
    metaDescription:
      'Rediseño completo de la app Hapi: onboarding, home, search, compra/venta de acciones, Hapi Prime, referidos y settings. Foco en simplificar el flujo de compraventa para usuarios sin experiencia financiera.',
    keywords:
      'UX fintech, app diseño, inversión en bolsa, onboarding, Hapi, diseño mobile, Figma',

    hero: {
      eyebrow: 'Fintech · App Mobile · UX/UI Design · 2024',
      name: 'Hapi',
      title: { top: 'Invierte en la bolsa', em: 'sin el miedo.' },
      text: 'Hapi es una app de inversión en la bolsa. Rediseñé todos los flujos con un foco claro: que cualquier persona sin experiencia financiera pudiera comprar su primera acción sin problemas, entendiendo cada paso.',
      ctas: [
        { label: 'Ver sitio de Hapi', href: 'https://hapi.trade/es', external: true },
        { label: 'Ver proceso completo', href: '#research' },
      ],
      meta: [
        { label: 'Rol', value: 'UX/UI Designer' },
        { label: 'Alcance', value: 'App completa' },
        { label: 'Herramientas', value: 'Figma' },
        { label: 'Research', value: 'Benchmark + reviews App Store / Play Store' },
        { label: 'Industria', value: 'Fintech · Inversión bursátil' },
        { label: 'País', value: 'Perú' },
      ],
    },

    context: {
      label: '02 — Contexto',
      heading: { top: 'Una app de la bolsa', em: 'para quien nunca invirtió.' },
      paragraphs: [
        'Hapi es una plataforma de inversión peruana que apuesta por la democratización del mercado de valores. El problema: "sin conocimientos previos" es fácil de prometer y muy difícil de diseñar. La bolsa tiene su propio idioma y cada término sin contexto en pantalla es una micro-barrera que aleja al usuario nuevo de hacer su primera operación.',
      ],
      cards: [
        {
          icon: '🌎',
          title: 'Mercado sin explorar',
          text: 'La mayoría de personas en LATAM nunca invirtió en bolsa. No por falta de interés sino por falta de acceso y claridad.',
        },
        {
          icon: '📊',
          title: 'La app intimidaba',
          text: 'El diseño anterior mostraba demasiada información desde el primer momento: gráficos de velas, índices, variaciones en tiempo real.',
        },
        {
          icon: '🏁',
          title: 'La competencia global ya lo resolvía',
          text: 'Robinhood en EEUU y Nubank Invest en Brasil demostraron que simplificar la inversión no significa simplificar el producto.',
        },
      ],
    },

    problem: {
      label: '03 — El problema',
      heading: { top: 'El problema no era la bolsa.', em: 'Era el diseño.' },
      paragraphs: [
        'El análisis del producto y las reviews de usuarios revelaron un patrón: los usuarios entendían qué hacía Hapi pero no sabían cómo empezar. La información correcta, en el lugar equivocado, en el momento equivocado y con el lenguaje equivocado.',
      ],
      items: [
        {
          n: '01',
          title: 'Onboarding sin guía real',
          text: 'Sin barra de progreso, sin explicar por qué se pide cada dato, sin saber si el proceso estaba cerca del final.',
          tag: 'Onboarding · Activación',
        },
        {
          n: '02',
          title: 'Flujo de compraventa confuso',
          text: 'Precio de mercado, precio límite, cantidad vs monto en soles. Sin contexto, sin ejemplos, con miedo a confirmar.',
          tag: 'Core flow · Conversión',
        },
        {
          n: '03',
          title: 'Home sin jerarquía clara',
          text: 'Portafolio, mercado, noticias, acciones y variaciones al mismo tiempo. Sin jerarquía visual ni acción clara.',
          tag: 'Home · Información',
        },
      ],
      highlight: {
        value: '4',
        title: 'flujos con fricción crítica',
        text: 'Identificados antes de rediseñar una sola pantalla.',
      },
    },

    research: {
      label: '04 — Investigación',
      heading: { top: 'Las reviews son investigación', em: 'de usuario gratuita.' },
      intro: [
        'Dos fuentes complementarias: benchmark de apps de inversión globales y card sorting. Además trabajamos user personas y proto personas para entender las necesidades de los usuarios, ya que la app no contaba con muchos usuarios en ese momento.',
      ],
      methods: [
        {
          label: 'Método 01',
          title: 'Benchmark de fintechs',
          paragraphs: [
            'Robinhood (EEUU), Nubank Invest (Brasil). Patrón común: ninguno explica la bolsa al usuario. Todos diseñan para que el usuario pueda actuar sin necesitar entenderla.',
          ],
          tags: ['Benchmark', 'Robinhood', 'Nubank', 'Buda'],
        },
        {
          label: 'Método 02',
          title: 'Card sorting para entender a los usuarios',
          paragraphs: [
            'Hicimos pruebas para saber cómo los usuarios ordenaban las pantallas existentes y las nuevas por salir.',
          ],
          tags: ['Card sorting', 'Optimal Workshop'],
        },
      ],
      findingsTitle: 'Hallazgo del research',
      findings: [
        {
          n: 'Hallazgo 1',
          text: 'El miedo a equivocarse es la barrera más grande antes de la primera compra. Cada pantalla debe responder: "¿Puedo deshacer esto si me equivoco?"',
        },
      ],
    },

    definition: {
      label: '05 — Definición',
      heading: { top: 'Siete flujos.', em: 'Una sola pregunta de diseño.' },
      paragraphs: [],
      blocks: [
        {
          kind: 'steps',
          title: 'Los siete flujos rediseñados',
          items: [
            {
              label: 'Flujo 01',
              title: 'Onboarding',
              lines: [
                'Progress bar siempre visible + explicación de por qué se pide cada dato (KYC) en el momento que se pide.',
              ],
            },
            {
              label: 'Flujo 02',
              title: 'Home',
              lines: [
                'Tres niveles: portafolio → acciones destacadas → mercado general. Todo lo demás es secundario.',
              ],
            },
            {
              label: 'Flujo 03',
              title: 'Search',
              lines: [
                'Categorías curadas (Tecnología, Energía, Consumo) + listas editoriales (Las más compradas esta semana).',
              ],
            },
            {
              label: 'Flujo 04 — el más importante',
              title: 'Compra',
              lines: [
                'Dos modos: Simple (monto en soles, la app calcula acciones) y Avanzado (precio límite, cantidad, tipo de orden).',
                'El usuario simple nunca ve el avanzado si no lo busca.',
              ],
            },
            {
              label: 'Flujo 05',
              title: 'Venta',
              lines: [
                'Simulador en tiempo real: el usuario ve el monto neto después de comisiones antes de confirmar.',
              ],
            },
            {
              label: 'Flujo 06',
              title: 'Hapi Prime',
              lines: [
                'Aparece como oferta contextual donde su beneficio es más relevante, no como paywall genérico.',
              ],
            },
            {
              label: 'Flujo 07',
              title: 'Referidos y Settings',
              lines: ['Reorganizados por jerarquía de uso real, no por categoría técnica.'],
            },
          ],
        },
      ],
      image: {
        src: '/images/hapi-01.webp',
        alt: 'Tres pantallas de la app Hapi: home con el portafolio y su gráfico, detalle del portafolio con el watchlist, y search con categorías curadas y listas de populares.',
        caption: 'Home, portafolio y search: los tres niveles de jerarquía que ordenan la app.',
      },
    },

    result: {
      label: '06 — Resultado',
      heading: { top: 'Un producto que', em: 'le habla al usuario nuevo.' },
      metrics: [
        {
          value: '7',
          label: 'flujos completos rediseñados',
          text: 'De onboarding a settings.',
        },
        {
          value: '2',
          label: 'modos de compra en un solo flujo',
          text: 'Simple para el usuario nuevo, Avanzado para quien quiere control.',
        },
        {
          value: '24+',
          label: 'pantallas entregadas',
          text: 'Con variants, estados y specs para desarrollo.',
        },
      ],
      qualitativeTitle: 'Lo que cambió para el usuario',
      qualitative: [
        {
          title: 'La compra, reducida a una pregunta',
          text: 'El modo simple redujo la decisión de compra a una pregunta: "¿Cuánto querés invertir?" Sin que el usuario necesite entender nada más.',
        },
        {
          title: 'Un onboarding que explica el porqué',
          text: 'El onboarding explicó el porqué de cada paso KYC: "Necesitamos tu DNI para verificar tu identidad y proteger tu dinero."',
        },
      ],
      gallery: {
        title: 'Pantallas de la app',
        images: [
          {
            src: '/images/hapi-02.webp',
            alt: 'Versión de escritorio y versión mobile de Hapi mostrando el detalle de una acción con su gráfico, el listado de activos del portafolio y la oferta de Hapi Prime.',
            caption:
              'El mismo sistema en desktop y mobile: portafolio, detalle de activo y Hapi Prime como oferta contextual.',
          },
        ],
      },
    },

    learnings: {
      label: '07 — Aprendizajes',
      heading: { top: 'Lo que me llevo', em: 'de este proyecto.' },
      items: [
        {
          title: 'Simplicidad y profundidad no son opuestos',
          paragraphs: [
            'El usuario avanzado lo encuentra un tap más abajo. El usuario nuevo nunca lo ve. Los dos están contentos cuando el diseño usa progresión en lugar de elección.',
          ],
        },
        {
          title: 'En fintech, el microcopy es diseño',
          paragraphs: [
            '"Comprar acciones" vs "Invertir en Apple" no es la misma frase. El lenguaje del usuario sin experiencia necesita ser el mismo en todo el flujo.',
          ],
        },
      ],
      different: {
        title: 'Qué haría diferente',
        text: 'Hubiera hecho testing con al menos 5 usuarios que nunca invirtieron, específicamente en el paso de confirmación de compra. El benchmark dio la dirección; el testing hubiera confirmado que el modo simple realmente eliminaba el miedo.',
      },
    },

    closing: {
      heading: { top: '¿Tu producto tiene', em: 'usuarios que no terminan de activarse?' },
      text: 'La mayoría de los problemas de activación en apps no son de marketing. Son de diseño. El usuario llega, no entiende qué hacer primero, y se va. Eso tiene solución — y se empieza entendiendo dónde se pierden.',
      ctas: [
        { label: 'Hablemos de tu producto', href: '/#contacto' },
        { label: 'Ver en Behance', href: BEHANCE, external: true },
      ],
      next: {
        label: 'Siguiente caso de estudio',
        title: 'Greenti — Una web nueva en un mes',
        text: 'Startup de tecnología que necesitaba una web nueva, rápida y administrable por su equipo de marketing. De cero estructura a sitio publicado en Framer.',
        href: '/proyectos/greenti-rediseno-web',
      },
    },
  },

  /* =========================================================================
     GREENTI — Rediseño web en Framer
     ========================================================================= */
  'greenti-rediseno-web': {
    metaTitle: 'Greenti, Rediseño web en Framer · Eulogio Cabrera UX/UI',
    metaDescription:
      'Rediseño completo del sitio de Greenti en Framer: home, servicios, landings, casos, blog, contacto y páginas SEO. De cero estructura a sitio publicado y administrable en 3–4 semanas.',
    keywords:
      'Framer, diseño web, rediseño, CMS, eCommerce, startup, SEO, marketing, caso de estudio',

    hero: {
      eyebrow: 'Diseño web · Framer · CMS · 2026',
      name: 'Greenti',
      title: { top: 'Una web nueva', em: 'en un mes.' },
      text: 'Greenti llevaba años con una web construida sin diseño previo: sin sistema, sin mobile, sin que el equipo de marketing pudiera tocarla. El desafío: rediseñar todo el sitio y publicarlo en Framer en 3–4 semanas, dejando al equipo autónomo para editarlo.',
      ctas: [
        { label: 'Ver sitio en vivo', href: 'https://greenti.co/', external: true },
        { label: 'Ver proceso completo', href: '#research' },
      ],
      meta: [
        { label: 'Rol', value: 'UI Design + Desarrollo Framer' },
        { label: 'Alcance', value: 'Sitio completo, 15+ páginas' },
        { label: 'Herramientas', value: 'Figma · Framer' },
        { label: 'Duración', value: '3–4 semanas' },
        { label: 'Industria', value: 'Tecnología · eCommerce' },
        { label: 'Entregable', value: 'Sitio publicado + equipo capacitado' },
      ],
    },

    context: {
      label: '02 — Contexto',
      heading: { top: 'Dos años trabajando juntos.', em: 'Una web que no los representaba.' },
      paragraphs: [
        'Greenti es una startup de soluciones tecnológicas para eCommerce con la que trabajo desde hace dos años. La web existente estaba desactualizada y el equipo necesitaba rapidez para crear landings e impulsar campañas.',
      ],
      cards: [
        {
          icon: '🎫',
          title: 'Marketing dependiente de tech',
          text: 'Cualquier cambio requería ticket al área técnica. En una startup que mueve rápido, eso es un cuello de botella estructural.',
        },
        {
          icon: '🪞',
          title: 'La web no representaba el producto',
          text: 'Greenti diseñaba eCommerce de alta calidad para clientes. Su propia web no tenía ese nivel.',
        },
        {
          icon: '🧩',
          title: 'Sin arquitectura ni sistema',
          text: 'Landings dispersas, sin componentes reutilizables. Cada página era un mundo aparte.',
        },
      ],
    },

    problem: {
      label: '03 — El problema',
      heading: { top: 'Demoras en los tiempos', em: 'de entrega.' },
      paragraphs: [
        'El sitio tenía identidad de marca. El problema era estructural: sin arquitectura (landings dispersas), sin sistema y sin autonomía. Tres capas que se retroalimentaban.',
      ],
      items: [
        {
          n: '01',
          title: 'Sin arquitectura de información',
          text: 'La web contaba con muchos servicios y landings dispersas que el usuario no podía encontrar fácilmente.',
          tag: 'Arquitectura · Userflow',
        },
        {
          n: '02',
          title: 'Equipo sin autonomía',
          text: 'Actualizar contenido requería intervención técnica. Freno directo a la velocidad del negocio.',
          tag: 'CMS · Autonomía · Marketing',
        },
      ],
      highlight: {
        value: '1 mes',
        title: 'Restricción clave',
        text: 'Un mes para diseñar, implementar, capacitar y publicar. Con el equipo disponible solo en sesiones semanales y con evolutivos constantes post lanzamiento.',
      },
    },

    research: {
      label: '04 — Investigación',
      heading: { top: 'Primero elegir', em: 'la herramienta correcta.' },
      intro: [
        'La primera pregunta no era "¿cómo debería verse el sitio?" sino "¿en qué plataforma tiene que vivir para que el equipo de marketing pueda administrarlo solo?"',
      ],
      methods: [
        {
          label: 'Método 01',
          title: 'Evaluación de plataformas',
          paragraphs: [
            'Webflow: potente pero curva alta y tiempos de desarrollo largos. WordPress: conocido pero mantenimiento técnico constante. Framer: más rápido, CMS visual fácil, performance excelente.',
            'La curva de aprendizaje era mía, no del cliente.',
          ],
          tags: ['Framer', 'Webflow', 'WordPress', 'Evaluación'],
        },
        {
          label: 'Método 02',
          title: 'Audit del sitio anterior',
          paragraphs: [
            'El 60% del contenido era reutilizable con ajustes. El 40% necesitaba crearse: landings de servicios individuales y páginas SEO que el sitio anterior no tenía.',
          ],
          tags: ['Content audit', 'Reutilización', 'Arquitectura'],
        },
      ],
      insight: {
        text: 'La decisión más importante del proyecto no fue de diseño. Fue elegir Framer. Esa elección determinó que el equipo de marketing pudiera editar solo.',
        source: 'Decisión de plataforma · semana 1',
      },
      findingsTitle: 'Hallazgos del research',
      findings: [
        {
          n: 'Hallazgo 1',
          text: 'La herramienta es parte del entregable. Un sitio que el equipo no puede editar es un entregable incompleto.',
        },
        {
          n: 'Hallazgo 2',
          text: 'El contenido existente vale más de lo que parece. Reorganizar fue más eficiente que reescribir todo desde cero.',
        },
        {
          n: 'Hallazgo 3',
          text: 'Las páginas SEO no eran un extra, eran la base del tráfico orgánico. El sitio anterior no tenía páginas optimizadas para búsquedas específicas.',
        },
      ],
    },

    definition: {
      label: '05 — Definición',
      heading: { top: 'Arquitectura primero.', em: 'Diseño después.' },
      paragraphs: [
        'Con la plataforma elegida y el audit completo, definimos la arquitectura completa antes de abrir Figma. Cuántas páginas, qué contenido, cómo se navegaba entre ellas y qué páginas nuevas crear.',
      ],
      blocks: [
        {
          kind: 'sitemap',
          title: 'La arquitectura del sitio',
          groups: [
            {
              title: 'Páginas principales',
              items: ['Home', 'Servicios', 'Casos de éxito', 'Blog', 'Contacto'],
            },
            {
              title: 'Contenido en CMS',
              items: ['Blog', 'Casos de éxito', 'Clientes'],
            },
          ],
          total: '15+ páginas + CMS para blog, casos de éxito y clientes.',
        },
        {
          kind: 'steps',
          title: 'Tres decisiones de diseño',
          items: [
            {
              label: 'Decisión 01',
              title: 'CTA en cada sección',
              lines: [
                'No solo al final de la página. El visitante puede contactar desde cualquier punto del recorrido.',
              ],
            },
            {
              label: 'Decisión 02',
              title: 'Casos con métricas visibles',
              lines: [
                'Resultado principal visible desde la grilla, no solo dentro del caso.',
              ],
            },
            {
              label: 'Decisión 03',
              title: 'Template como base, identidad como resultado',
              lines: [
                'Para respetar el plazo, trabajar sobre un template de Framer y adaptarlo al 90% con la identidad de Greenti.',
                'No es un atajo, es una decisión estratégica.',
              ],
            },
          ],
        },
      ],
      image: {
        src: '/images/greenti-01.webp',
        alt: 'Home de Greenti en mobile y desktop con el menú de servicios desplegado sobre el hero "Soluciones confiables y escalables".',
        caption: 'La home nueva y su menú de servicios, diseñada mobile-first y publicada en Framer.',
      },
    },

    result: {
      label: '06 — Resultado',
      heading: { top: 'Publicado', em: 'y editable.' },
      intro: [
        'El resultado más importante no es visual, es funcional. El equipo puede agregar un caso, publicar un artículo o actualizar un servicio sin abrir un ticket, sin esperar a un desarrollador y sin romper nada.',
      ],
      metrics: [
        {
          value: '6',
          label: 'semanas de kick-off a publicación',
          text: 'Con dominio, SSL y todas las páginas en vivo.',
        },
        {
          value: '15+',
          label: 'páginas diseñadas e implementadas',
          text: 'Incluyendo landings y páginas SEO desde cero.',
        },
        {
          value: 'Soporte',
          label: 'sesiones post-lanzamiento',
          text: 'Antes de que el equipo editara de forma autónoma.',
        },
        {
          value: '0',
          label: 'tickets al área técnica',
          text: 'Para editar contenido, desde la semana 3 post-lanzamiento.',
        },
      ],
      qualitativeTitle: 'Lo que cambió para el equipo',
      qualitative: [
        {
          title: 'La web ahora representa el producto',
          text: 'El nivel del sitio está alineado al nivel de eCommerce que Greenti desarrolla para sus clientes.',
        },
        {
          title: 'Publicar un caso pasó de días a minutos',
          text: 'De "ticket y esperar dos días" a "CMS de Framer y publicar en 15 minutos".',
        },
      ],
      gallery: {
        title: 'Pantallas del sitio',
        images: [
          {
            src: '/images/greenti-02.webp',
            alt: 'Página de Casos de éxito de Greenti en desktop y mobile, con el caso destacado de Pilucho y la grilla de otros casos.',
            caption:
              'Casos de éxito: contenido cargado desde el CMS por el propio equipo de marketing.',
          },
        ],
      },
    },

    learnings: {
      label: '07 — Aprendizajes',
      heading: { top: 'Lo que me llevo', em: 'de este proyecto.' },
      items: [
        {
          title: 'La herramienta correcta es parte del diseño',
          paragraphs: [
            'Elegir Framer primero, basado en el problema de autonomía, fue lo que hizo posible entregar en un mes con el cliente capacitado.',
            'Desde Greenti, la elección de plataforma es la primera conversación de cualquier proyecto web.',
          ],
        },
        {
          title: 'Capacitar al cliente es parte del entregable',
          paragraphs: [
            'Un sitio que el cliente no puede editar tiene vida útil limitada.',
          ],
        },
        {
          title: 'Trabajar con templates no es un atajo',
          paragraphs: [
            'La energía no gastada en estructura la invertí en calidad de contenido, configuración del CMS y sesiones de capacitación.',
            'El resultado fue mejor que si hubiera empezado desde cero con el mismo tiempo.',
          ],
        },
      ],
      different: {
        title: 'Qué haría diferente',
        text: 'Un cronograma de milestones por semana desde el inicio, no solo una fecha de entrega final. Eso mantiene al cliente alineado y da margen para absorber cambios sin afectar la publicación.',
      },
    },

    closing: {
      heading: { top: '¿Tu equipo pierde tiempo', em: 'esperando que tech edite la web?' },
      text: 'Ese es un problema de herramienta, no de diseñador. Con Framer y un sistema bien configurado, el equipo de marketing puede tomar control de su propio sitio — y vos podés enfocarte en lo que importa: crecer el negocio.',
      ctas: [
        { label: 'Hablemos de tu proyecto', href: '/#contacto' },
        { label: 'Ver sitio de Greenti', href: 'https://greenti.co/', external: true },
      ],
      next: {
        label: 'Siguiente caso de estudio',
        title: 'Invitación digital — Roe & Eu',
        text: 'Una invitación de boda hecha en Framer: una sola página, cinco links de pases y una experiencia pensada para abrirse desde WhatsApp.',
        href: '/proyectos/invitacion-digital-boda',
      },
    },
  },
};
