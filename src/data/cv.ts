export const profile = {
  name: 'Jennifer Arabel',
  title: 'Frontend Developer',
  headline: 'Angular · TypeScript · Microfrontends',
  location: 'Curicó, Chile',
  email: 'jennifer.arabel@gmail.com',
  phone: '+56 9 3025 4223',
  linkedin: 'https://www.linkedin.com/in/jenniferarabel',
  github: 'https://github.com/JenniArabel',
  summary: [
    'Frontend Developer Junior con experiencia en Angular y arquitectura de microfrontends, enfocada en construir aplicaciones escalables, mantenibles y alineadas a buenas prácticas.',
    'Integro herramientas de Inteligencia Artificial en mi flujo de trabajo diario para optimizar el desarrollo, automatizar tareas y mejorar la productividad.',
    'Experiencia en desarrollo de interfaces modernas, integración de APIs REST y trabajo en entornos ágiles (Scrum), aplicando principios de Clean Code y SOLID.',
  ],
} as const

export type ExperienceItem = {
  role: string
  company: string
  period: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Frontend Developer Junior',
    company: 'Moby Digital',
    period: 'Junio 2025 – Actualidad',
    highlights: [
      'Desarrollo de aplicaciones bajo arquitectura de microfrontends con Angular y Single-SPA.',
      'Interfaces responsivas y reutilizables con HTML5, CSS3, TypeScript, Bootstrap y Tailwind CSS.',
      'Integración de APIs REST con gestión clara de datos y comunicación con backend.',
      'Buenas prácticas (Clean Code, SOLID) para mejorar la mantenibilidad del código.',
      'Equipos ágiles bajo Scrum (dailies, planning, retrospectivas).',
      'Control de versiones con Git, GitFlow y Bitbucket.',
      'IA para optimizar desarrollo, debugging y generación de código; automatización de tareas repetitivas.',
    ],
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
  },
]

export const skillGroups = [
  {
    label: 'Lenguajes',
    items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    label: 'Frameworks y UI',
    items: ['Angular', 'React', 'Tailwind CSS', 'Bootstrap', 'PrimeNG'],
  },
  {
    label: 'Backend y datos',
    items: ['Java', 'Spring Boot', 'MySQL', 'JPA', 'Hibernate'],
  },
  {
    label: 'Arquitectura e integración',
    items: ['Microfrontends', 'Single-SPA', 'REST APIs'],
  },
  {
    label: 'Herramientas y metodologías',
    items: [
      'Git',
      'GitFlow',
      'Bitbucket',
      'Postman',
      'DBeaver',
      'Trello',
      'n8n',
      'Scrum',
      'Kanban',
    ],
  },
  {
    label: 'IA y automatización',
    items: ['Asistencia con IA en código', 'Debugging asistido', 'Automatización de procesos'],
  },
] as const

export const education = {
  degree: 'Técnico Superior en Desarrollo de Software',
  institution: 'IES Manuel Belgrano 9-008',
  period: '2023 – 2025',
} as const

export const certifications = [
  'Angular: De Cero a Experto (Udemy, 2025)',
  'Bases de Datos con SQL (Platzi, 2025)',
  'TypeScript: Tipos avanzados y funciones (Platzi, 2024)',
  'Git y GitHub (Oracle + Alura LATAM, 2024)',
  'Drupal for Beginners (Udemy, 2026)',
] as const

export const softSkills = [
  'Trabajo en equipo',
  'Comunicación efectiva',
  'Adaptabilidad',
  'Resolución de problemas',
  'Aprendizaje continuo',
] as const

export const navLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Perfil' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'habilidades', label: 'Skills' },
  { id: 'formacion', label: 'Formación' },
  { id: 'contacto', label: 'Contacto' },
] as const
