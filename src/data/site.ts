/**
 * Contenido de la home.
 * Todo el texto vive acá: editar este archivo cambia la página completa,
 * sin tocar los componentes.
 *
 * NOTA: los párrafos largos están escritos como resumen editable.
 * Reemplazalos por los textos definitivos del sitio original.
 */

export const site = {
  name: 'eulogio',
  title: 'Eulogio Cabrera — Diseñador UX/UI Freelance | Figma & Framer',
  description:
    'Diseñador UX/UI freelance. Diseño y desarrollo de productos digitales: eCommerce, apps y sitios web en Argentina, Perú y Chile.',
  linkedin: 'https://www.linkedin.com/in/eulogio-cabrera-417900124/',
  behance: 'https://www.behance.net/eulogiocabrera',
  instagram: 'https://www.instagram.com/soyeulogio/',
  ctaLabel: 'Inicia tu proyecto',
  ctaHref: '/#contacto',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Sobre mi', href: '/#sobremi' },
];

export const hero = {
  title: 'Prueba Diseño UX/UI con foco en producto',
  text: 'Diseño y desarrollo de productos digitales con Framer. Diseñador UX/UI freelance disponible para nuevos proyectos de eCommerce, apps y sitios web en Argentina, Perú y Chile.',
  primary: { label: 'Ver proyectos', href: '/#proyectos' },
  secondary: { label: 'Hablemos de tu proyecto', href: '/#contacto' },
  photo: '/images/Img-banner-eu.webp',
  card: {
    eyebrow: '¿Estas listo?',
    title: 'Disponible para proyectos',
    text: 'Comparta algunos detalles y le responderé con una dirección clara.',
    href: '/#contacto',
  },
};

export const projects = {
  eyebrow: 'Proyectos',
  title: 'Proyectos en los que aporté.',
  // `cover` (1600w) y `coverSmall` (800w) son la misma imagen 16:9 para srcset;
  // `logo` se mantiene para otros usos.
  items: [
    {
      name: 'Roe & Eu, invitación digital',
      category: 'Diseño web',
      year: '2026',
      text: '30–60 invitados, cada uno con su propio link, su propio pase y su propio nombre en pantalla. Una sola página en Framer, pensada para abrirse desde WhatsApp.',
      tags: ['Framer', 'Diseño digital', 'Proyecto personal'],
      slug: 'invitacion-digital-boda',
      cover: '/images/cover-boda-1600.webp',
      coverSmall: '/images/cover-boda-800.webp',
      logo: '/images/proyecto-boda.svg',
      bg: '#F3EFE7',
      href: '/proyectos/invitacion-digital-boda',
    },
    {
      name: 'Granix',
      category: 'eCommerce',
      year: '2026',
      text: 'Research, card sorting con 8 usuarios y una arquitectura de información nueva: de 6 clicks a 2 para llegar al producto.',
      tags: ['UX Research', 'Card sorting', 'UI Design'],
      slug: 'granix',
      cover: '/images/cover-granix-1600.webp',
      coverSmall: '/images/cover-granix-800.webp',
      logo: '/images/proyecto-granix.svg',
      bg: '#FFF4E3',
      href: '/proyectos/granix',
    },
    {
      name: 'Hapi, App de inversión',
      category: 'Producto digital',
      year: '2024',
      text: 'Siete flujos rediseñados para que alguien sin experiencia financiera compre su primera acción entendiendo cada paso: modo simple y modo avanzado en un mismo flujo.',
      tags: ['Fintech', 'App mobile', 'UX/UI Design'],
      slug: 'hapi-app-de-inversion',
      cover: '/images/cover-hapi-1600.webp',
      coverSmall: '/images/cover-hapi-800.webp',
      logo: '/images/proyecto-hapi.svg',
      bg: '#EAFAFB',
      href: '/proyectos/hapi-app-de-inversion',
    },
    {
      name: 'Greenti rediseño web',
      category: 'Sitio corporativo',
      year: '2026',
      text: '15+ páginas rediseñadas y publicadas en Framer en un mes, con CMS para que el equipo de marketing edite el sitio sin depender del área técnica.',
      tags: ['Diseño web', 'Framer', 'CMS'],
      slug: 'greenti-rediseno-web',
      cover: '/images/cover-greenti-1600.webp',
      coverSmall: '/images/cover-greenti-800.webp',
      logo: '/images/proyecto-greenti.svg',
      bg: '#1B0033',
      href: '/proyectos/greenti-rediseno-web',
    },
  ],
  banner: {
    title: 'Conoce mas proyectos en mi behance',
    text: 'Casos completos de UX/UI, Framer y eCommerce, con el detalle de cada proceso.',
    cta: 'Ver más proyectos',
  },
};

export const services = {
  eyebrow: 'Servicios',
  title: '3 formas de trabajar juntos.',
  text: 'Desde una auditoría UX rápida hasta el diseño y desarrollo completo en Framer. Elegí el que mejor se adapte al momento de tu proyecto.',
  items: [
    {
      title: 'Diseño UX/UI de productos digitales',
      text: 'Convierto ideas en productos digitales intuitivos: web, apps y eCommerce con foco en usabilidad y conversión desde el primer wireframe.',
      art: 'ux',
      image: '/images/servicio-ux-800.webp',
      imageSmall: '/images/servicio-ux-400.webp',
    },
    {
      title: 'Desarrollo en Framer',
      text: 'Sitios rápidos, sin código y 100% editables por tu equipo, con animaciones que elevan la percepción de marca.',
      art: 'framer',
      image: '/images/servicio-framer-800.webp',
      imageSmall: '/images/servicio-framer-400.webp',
    },
    {
      title: 'Auditoría UX',
      text: 'Diagnóstico accionable de tu producto, con hallazgos priorizados y un roadmap de mejoras claro en 2 semanas.',
      art: 'audit',
      image: '/images/servicio-audit-800.webp',
      imageSmall: '/images/servicio-audit-400.webp',
    },
  ],
};

/** Contenido de la página /servicios */
export const serviciosPage = {
  title: 'Servicios — Eulogio Cabrera | Diseño UX/UI, Framer y Auditoría UX',
  description:
    'Diseño UX/UI de productos digitales, desarrollo en Framer y auditoría UX. Servicios de diseño freelance para eCommerce, apps y sitios web.',
  eyebrow: 'Servicios de diseño UX/UI',
  heading: 'Servicios',
  intro:
    'Diseño, desarrollo e investigación centrados en un solo objetivo: que tu producto digital funcione mejor para tu negocio.',
  items: [
    {
      icon: 'pen',
      title: 'Diseño UX/UI de productos digitales',
      text: 'Convierto ideas en productos digitales intuitivos web, apps y eCommerce con foco en usabilidad y conversión desde el primer wireframe. Trabajo con metodologías ágiles como Scrum y Atomic Design, diseñando sistemas escalables en Figma que tu equipo de desarrollo puede implementar sin fricción.',
      cta: '¿Tenés un producto en mente?',
      includes: [
        'Investigación y arquitectura de información',
        'Wireframes y prototipado interactivo',
        'Diseño UI con sistema de componentes (Design System)',
        'Testing y validación con usuarios',
        'Documentación lista para desarrollo',
      ],
      forWho:
        'Founders y equipos que están lanzando un producto nuevo o rediseñando uno existente y necesitan una base sólida de UX antes de escribir una sola línea de código.',
    },
    {
      icon: 'screen',
      title: 'Desarrollo en Framer',
      text: 'Sitios rápidos, sin código y 100% editables por tu equipo, con animaciones cinematográficas que elevan la percepción de marca. Diseño e implemento directamente en Framer, así lo que ves en el prototipo es exactamente lo que se publica sin pérdida entre diseño y desarrollo.',
      cta: '¿Ya tenés un proyecto en mente?',
      includes: [
        'Diseño e implementación end-to-end en Framer',
        'Animaciones y microinteracciones a medida',
        'Panel de edición simple para que tu equipo actualice contenido sin depender de un developer',
        'Optimización de velocidad y SEO técnico',
        'Capacitación para que puedas mantener el sitio vos mismo/a',
      ],
      forWho:
        'Marcas y agencias que necesitan un sitio con estética premium, publicado rápido, y que no quieren depender de un desarrollador para cada cambio de texto o imagen.',
    },
    {
      icon: 'chart',
      title: 'Auditoría UX',
      text: 'Diagnóstico accionable de tu producto, con hallazgos priorizados y un roadmap de mejoras claro en 2 semanas. Reviso tu producto actual con una mirada externa y objetiva, identificando qué está frenando la conversión, la retención o la claridad de la experiencia y te dejo un plan concreto para resolverlo.',
      cta: '¿Querés saber qué está fallando?',
      includes: [
        'Revisión heurística completa del producto',
        'Priorización de hallazgos por impacto y esfuerzo',
        'Roadmap de mejoras con próximos pasos claros',
        'Sesión de presentación de resultados',
        'Documento entregable para compartir con tu equipo o inversores',
      ],
      forWho:
        'Equipos que ya tienen un producto en producción pero sienten que "algo no cierra" en la experiencia, y necesitan datos concretos antes de invertir en un rediseño.',
    },
  ],
  includesLabel: 'Qué incluye',
  closing: {
    title: '¿Aún no sabés qué servicio necesitás?',
    text: 'Contame en qué etapa está tu proyecto y te ayudo a definir el mejor punto de partida sin costo ni compromiso.',
    cta: 'Hablemos de tu proyecto',
    href: '/#contacto',
  },
};

export const process = {
  eyebrow: 'Proceso',
  title: 'Mi proceso de diseño UX/UI, en 4 pasos',
  text: 'Cada proyecto pasa por las mismas cuatro etapas, con metodologías ágiles como Scrum y Atomic Design, y entregables claros en cada momento.',
  steps: [
    {
      title: 'Entender el problema real',
      text: 'Entrevistas, análisis de datos, benchmarking y definición de objetivos medibles.',
    },
    {
      title: 'Claridad antes de diseñar',
      text: 'Arquitectura de información, flujos de usuario y criterios de éxito acordados con el equipo.',
    },
    {
      title: 'Del wireframe al pixel',
      text: 'Prototipado iterativo, sistema de diseño en Figma y pruebas de usabilidad con usuarios reales.',
    },
    {
      title: 'Handoff sin fricciones',
      text: 'Specs de desarrollo, tokens de diseño y acompañamiento durante la implementación en Framer.',
    },
  ],
};

export const about = {
  eyebrow: 'Hola, soy Eulogio Cabrera',
  title: 'Diseño UX/UI que convierte visitas en clientes.',
  photo: '/images/img-seccion-soy-eu.png',
  tags: ['Figma', 'Framer', 'Notion', 'Atomic Design', 'Diseño Web', 'Diseño app'],
  paragraphs: [
    'Diseñador UX/UI freelance con más de 6 años de experiencia diseñando productos digitales, sitios web y eCommerce que resuelven problemas reales de negocio. Trabajo con metodologías ágiles y llevo cada proyecto desde la investigación hasta la implementación en Figma y Framer.',
    'Colaboro con marcas y equipos de Argentina, Perú y Chile, combinando diseño centrado en el usuario con una mirada estratégica: cada decisión visual busca mejorar la conversión, la claridad y la escalabilidad del producto.',
  ],
  // Ajustar los valores reales del contador
  stats: [
    { value: 30, suffix: '+', label: 'Proyectos realizados' },
    { value: 6, suffix: '+', label: 'Años de experiencia' },
  ],
};

export const faq = {
  title: 'Explore our FAQs',
  text: 'Answers to questions about process, pricing, timelines, and project details',
  items: [
    {
      q: '¿Como comenzar tu proyecto?',
      a: 'Escribime contando el objetivo del proyecto y el plazo que tenés en mente. Agendamos una llamada de 30 minutos y te envío una propuesta con alcance, etapas y precio.',
    },
    {
      q: '¿Cuánto dura un proyecto típico?',
      a: 'Una auditoría UX toma 2 semanas. Un sitio en Framer, entre 3 y 5 semanas. Un producto digital completo depende del alcance y lo definimos juntos antes de arrancar.',
    },
    {
      q: '¿Trabajo solo o con equipo?',
      a: 'Trabajo de forma directa en diseño y desarrollo en Framer, y sumo especialistas (contenido, desarrollo a medida, SEO) cuando el proyecto lo necesita.',
    },
    {
      q: '¿Que necesito para arrancar?',
      a: 'Con tus objetivos de negocio, la marca y una idea de los contenidos alcanza. El resto lo ordenamos en la etapa de descubrimiento.',
    },
    {
      q: '¿Por qué desarrollar mi sitio web en Framer?',
      a: 'Permite pasar del diseño al sitio publicado sin reescribir todo, con hosting incluido y un editor que tu equipo puede usar sin saber código.',
    },
    {
      q: '¿En Framer mi sitio estará optimizado para SEO?',
      a: 'Sí: metadatos por página, jerarquía semántica, sitemap y buen rendimiento en Core Web Vitals vienen resueltos desde el inicio.',
    },
    {
      q: '¿Framer es una buena opción para mi empresa?',
      a: 'Si necesitás publicar y iterar rápido, sí. Para lógica de negocio compleja o integraciones profundas evaluamos una arquitectura headless.',
    },
  ],
};

export const footer = {
  tagline: 'Eulogio Cabrera, diseñador UX/UI freelance',
  columns: [
    {
      title: 'Pages',
      links: [
        { label: 'Inicio', href: '/' },
        { label: 'Proyectos', href: '/proyectos' },
        { label: 'Servicios', href: '/servicios' },
        { label: 'Contacto', href: '/#contacto' },
      ],
    },
    {
      title: 'Social',
      links: [
        { label: 'Linkedin', href: site.linkedin },
        { label: 'Behance', href: site.behance },
        { label: 'Instagram', href: site.instagram },
      ],
    },
  ],
  legal: '© Eulogio. | Created by Eulogio Cabrera',
};
