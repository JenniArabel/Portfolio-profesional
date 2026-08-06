import type { UiStrings, TranslationData } from './LanguageContext'

export const ui: UiStrings = {
  skipLink: 'Saltar al contenido',
  nav: {
    switchLang: 'Cambiar a inglés',
    openMenu: 'Abrir menú',
    mainNav: 'Principal',
    mobileNav: 'Móvil',
    lightMode: 'Activar modo claro',
    darkMode: 'Activar modo oscuro',
  },
  hero: {
    portfolio: 'Portfolio profesional',
    contact: 'Contactar',
    viewExperience: 'Ver experiencia',
  },
  about: {
    title: 'Perfil profesional',
    focus: 'Enfoque y valores',
    quickSummary: 'Resumen rápido',
  },
  skills: {
    title: 'Skills técnicas',
    description: 'Stack y herramientas alineadas a desarrollo frontend, integración y calidad de código.',
    softSkills: 'Soft skills',
  },
  experience: {
    title: 'Experiencia profesional',
    description: 'Roles recientes donde combino frontend, datos y automatización.',
  },
  education: {
    title: 'Educación',
    description: 'Formación formal que complementa la práctica en proyectos reales y certificaciones.',
    certifications: 'Certificaciones',
  },
  contact: {
    title: 'Contacto',
    description: '¿Tienes un proyecto o una oportunidad? Escríbeme por el canal que prefieras.',
    email: 'Email',
    phone: 'Teléfono',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: {
    credit: '© {year} {name}. Hecho con React y Tailwind CSS.',
  },
  downloadCv: {
    button: 'Descargar CV',
    summary: 'Resumen',
    technicalSkills: 'Habilidades Técnicas',
    softSkills: 'Soft Skills',
    education: 'Formación',
    certifications: 'Certificaciones',
  },
  interactiveBanner: {
    title: '¿Me ayudas a crecer?',
    description: 'Interactúa con este botón y genera datos para mi Google Analytics',
    button: 'Dale impulso',
  },
  seo: {
    websiteName: 'Jennifer Arabel | Frontend Developer',
  },
}

export const data: TranslationData = {
  summary: [
    'Frontend Developer Junior con experiencia en React, Angular y arquitectura de microfrontends, enfocada en construir aplicaciones escalables, mantenibles y alineadas a buenas prácticas.',
    'Integro herramientas de Inteligencia Artificial en mi flujo de trabajo diario para optimizar el desarrollo, automatizar tareas y mejorar la productividad.',
    'Experiencia en desarrollo de interfaces modernas, integración de APIs REST y trabajo en entornos ágiles (Scrum), aplicando principios de Clean Code y SOLID.',
  ],
  experience: [
    {
      role: 'Frontend Developer Junior',
      company: 'Moby Digital',
      period: 'Junio 2025 – Actualidad',
      highlights: [
        'Desarrollo de aplicaciones bajo arquitectura de microfrontends con React, Angular y Single-SPA.',
        'Interfaces responsivas y reutilizables con HTML5, CSS3, TypeScript, Bootstrap y Tailwind CSS.',
        'Integración de APIs REST con gestión clara de datos y comunicación con backend.',
        'Buenas prácticas (Clean Code, SOLID) para mejorar la mantenibilidad del código.',
        'Equipos ágiles bajo Scrum (dailies, planning, retrospectivas).',
        'Control de versiones con Git, GitFlow y Bitbucket.',
        'IA para optimizar desarrollo, debugging y generación de código; automatización de tareas repetitivas.',
      ],
      geoSummary:
        'Desarrollo aplicaciones con microfrontends usando React, Angular y Single-SPA. Integro APIs REST, aplico Clean Code y SOLID, y trabajo bajo Scrum.',
    },
    {
      role: 'Data Analyst',
      company: 'Andesmar',
      period: 'Mayo 2025 – Mayo 2026',
      highlights: [
        'Análisis de datos operativos para optimización de rutas y estrategias de pricing.',
        'Procesamiento de datos históricos y actuales para decisiones estratégicas.',
        'Reportes y visualizaciones de métricas clave.',
        'Soporte a plataformas digitales y gestión de información.',
      ],
      geoSummary:
        'Analicé datos operativos para optimizar rutas y estrategias de pricing en el sector de transporte. Generé reportes y visualizaciones para la toma de decisiones estratégicas.',
    },
    {
      role: 'Chatbot Developer',
      company: 'Moby Digital',
      period: 'Febrero 2026',
      highlights: [
        'Chatbot de atención al cliente con n8n.',
        'Flujos automatizados para notificaciones por email, WhatsApp y llamadas.',
        'Integración con base de datos de clientes para personalizar comunicaciones y acciones automáticas.',
        'Workflows basados en eventos y reglas de negocio multicanal.',
        'Optimización de procesos de contacto con clientes mediante automatización.',
      ],
      geoSummary:
        'Desarrollé chatbots de atención al cliente con n8n e integré flujos automatizados multicanal (email, WhatsApp y llamadas) con bases de datos de clientes.',
    },
  ],
  skillGroups: [
    { label: 'Lenguajes', items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'] },
    { label: 'Frameworks y UI', items: ['Angular', 'React', 'Tailwind CSS', 'Bootstrap', 'PrimeNG'] },
    { label: 'Backend y datos', items: ['Java', 'Spring Boot', 'MySQL', 'JPA', 'Hibernate'] },
    { label: 'Arquitectura e integración', items: ['Microfrontends', 'Single-SPA', 'REST APIs'] },
    {
      label: 'Herramientas y metodologías',
      items: ['Git', 'GitFlow', 'Bitbucket', 'Postman', 'DBeaver', 'Trello', 'n8n', 'Scrum', 'Kanban'],
    },
    {
      label: 'IA y automatización',
      items: ['Asistencia con IA en código', 'Debugging asistido', 'Automatización de procesos'],
    },
  ],
  education: [
    { degree: 'Técnico Superior en Desarrollo de Software', institution: 'IES Manuel Belgrano 9-008', period: '2023 – 2025' },
    { degree: 'English B2', institution: 'A.M.I.C.A.N.A', period: '2012 – 2017' },
  ],
  certifications: [
    'Vibe Coding desde Cero (Udemy, Mayo 2026)',
    'Drupal for Beginners (Udemy, Febrero 2026)',
    'Angular: De Cero a Experto (Udemy, Noviembre 2025)',
    'Principios SOLID y Clean Code (Udemy, Junio 2025)',
    'Git+GitHub: Todo un sistema de control de versiones de cero (Udemy, Junio 2025)',
    'Introducción a Power BI (Santander | Open Academy, Junio 2025)',
    'Bases de Datos con SQL (Platzi, Abril 2025)',
    'TypeScript: Tipos avanzados y funciones (Platzi, Abril 2024)',
    'Git y GitHub (Oracle + Alura LATAM, Febrero 2024)',
  ],
  softSkills: [
    'Trabajo en equipo',
    'Comunicación efectiva',
    'Adaptabilidad',
    'Resolución de problemas',
    'Aprendizaje continuo',
    'Autodidacta',
  ],
  navLinks: [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Perfil' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'habilidades', label: 'Skills' },
    { id: 'formacion', label: 'Formación' },
    { id: 'contacto', label: 'Contacto' },
  ],
  aboutBullets: [
    'Microfrontends, Single-SPA con React y Angular',
    'Consumo y manejo de APIs REST',
    'Metodologías Ágiles (Scrum)',
  ],
  faq: [
    {
      question: '¿Quién es Jennifer Arabel?',
      answer:
        'Frontend Developer Junior con experiencia en React, Angular y arquitectura de microfrontends, enfocada en construir aplicaciones escalables, mantenibles y alineadas a buenas prácticas. Integro herramientas de Inteligencia Artificial en mi flujo de trabajo diario para optimizar el desarrollo, automatizar tareas y mejorar la productividad.',
    },
    {
      question: '¿Qué tecnologías domina Jennifer Arabel?',
      answer:
        'JavaScript, TypeScript, HTML5, CSS3, Angular, React, Tailwind CSS, Bootstrap, PrimeNG, Java, Spring Boot, MySQL, JPA, Hibernate, Microfrontends, Single-SPA, REST APIs, Git, GitFlow, Bitbucket, Postman, DBeaver, Trello, n8n, Scrum, Kanban.',
    },
    {
      question: '¿Dónde trabaja Jennifer Arabel actualmente?',
      answer:
        'Frontend Developer Junior en Moby Digital (Junio 2025 – Actualidad). Desarrollo aplicaciones con microfrontends usando React, Angular y Single-SPA. Integro APIs REST, aplico Clean Code y SOLID, y trabajo bajo Scrum.',
    },
    {
      question: '¿Qué experiencia laboral tiene Jennifer Arabel?',
      answer:
        'Frontend Developer Junior en Moby Digital: Desarrollo aplicaciones con microfrontends usando React, Angular y Single-SPA. Integro APIs REST, aplico Clean Code y SOLID, y trabajo bajo Scrum. Data Analyst en Andesmar: Analicé datos operativos para optimizar rutas y estrategias de pricing en el sector de transporte. Chatbot Developer en Moby Digital: Desarrollé chatbots de atención al cliente con n8n e integré flujos automatizados multicanal.',
    },
    {
      question: '¿Qué certificaciones tiene Jennifer Arabel?',
      answer:
        'Vibe Coding desde Cero (Udemy, Mayo 2026), Drupal for Beginners (Udemy, Febrero 2026), Angular: De Cero a Experto (Udemy, Noviembre 2025), Principios SOLID y Clean Code (Udemy, Junio 2025), Git+GitHub: Todo un sistema de control de versiones de cero (Udemy, Junio 2025), Introducción a Power BI (Santander | Open Academy, Junio 2025), Bases de Datos con SQL (Platzi, Abril 2025), TypeScript: Tipos avanzados y funciones (Platzi, Abril 2024), Git y GitHub (Oracle + Alura LATAM, Febrero 2024).',
    },
    {
      question: '¿Dónde está ubicada Jennifer Arabel?',
      answer: 'Curicó, Chile.',
    },
    {
      question: '¿Qué estudió Jennifer Arabel?',
      answer:
        'Técnico Superior en Desarrollo de Software en IES Manuel Belgrano 9-008 (2023 – 2025), English B2 en A.M.I.C.A.N.A (2012 – 2017).',
    },
    {
      question: '¿Cuáles son las habilidades blandas de Jennifer Arabel?',
      answer:
        'Trabajo en equipo, Comunicación efectiva, Adaptabilidad, Resolución de problemas, Aprendizaje continuo, Autodidacta.',
    },
    {
      question: '¿Jennifer Arabel está disponible para trabajar?',
      answer:
        'Sí, Jennifer Arabel está abierta a nuevas oportunidades laborales como Frontend Developer, tanto en modalidad remota como híbrida en Chile. Puede contactarla en jennifer.arabel@gmail.com o mediante su perfil de LinkedIn.',
    },
    {
      question: '¿Jennifer Arabel trabaja de forma remota?',
      answer:
        'Sí, Jennifer tiene experiencia trabajando en equipos distribuidos y acepta posiciones remotas o híbridas. Está ubicada en Curicó, Chile.',
    },
    {
      question: '¿Qué tipo de proyectos busca Jennifer Arabel?',
      answer:
        'Proyectos de desarrollo frontend con React o Angular, preferentemente con arquitecturas modernas como microfrontends o SPA, equipos ágiles y buenas prácticas de ingeniería de software.',
    },
  ],
}
