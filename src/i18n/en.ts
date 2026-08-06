import type { UiStrings, TranslationData } from './LanguageContext'

export const ui: UiStrings = {
  skipLink: 'Skip to content',
  nav: {
    switchLang: 'Switch to Spanish',
    openMenu: 'Open menu',
    mainNav: 'Main',
    mobileNav: 'Mobile',
    lightMode: 'Switch to light mode',
    darkMode: 'Switch to dark mode',
  },
  hero: {
    portfolio: 'Professional Portfolio',
    contact: 'Contact',
    viewExperience: 'View Experience',
  },
  about: {
    title: 'Professional Profile',
    focus: 'Approach & Values',
    quickSummary: 'Quick Summary',
  },
  skills: {
    title: 'Technical Skills',
    description: 'Stack and tools aligned with frontend development, integration, and code quality.',
    softSkills: 'Soft Skills',
  },
  experience: {
    title: 'Professional Experience',
    description: 'Recent roles where I combine frontend, data, and automation.',
  },
  education: {
    title: 'Education',
    description: 'Formal education complemented by hands-on projects and certifications.',
    certifications: 'Certifications',
  },
  contact: {
    title: 'Contact',
    description: 'Have a project or opportunity? Reach out through your preferred channel.',
    email: 'Email',
    phone: 'Phone',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: {
    credit: '© {year} {name}. Built with React and Tailwind CSS.',
  },
  downloadCv: {
    button: 'Download CV',
    summary: 'Summary',
    technicalSkills: 'Technical Skills',
    softSkills: 'Soft Skills',
    education: 'Education',
    certifications: 'Certifications',
  },
  interactiveBanner: {
    title: 'Help me grow?',
    description: 'Click this button to generate data for my Google Analytics',
    button: 'Give a boost',
  },
  seo: {
    websiteName: 'Jennifer Arabel | Frontend Developer',
  },
}

export const data: TranslationData = {
  summary: [
    'Junior Frontend Developer with experience in React, Angular, and microfrontends architecture, focused on building scalable, maintainable applications aligned with best practices.',
    'I integrate Artificial Intelligence tools into my daily workflow to optimize development, automate tasks, and improve productivity.',
    'Experience in modern UI development, REST API integration, and work in agile environments (Scrum), applying Clean Code and SOLID principles.',
  ],
  experience: [
    {
      role: 'Junior Frontend Developer',
      company: 'Moby Digital',
      period: 'June 2025 – Present',
      highlights: [
        'Application development under microfrontends architecture with React, Angular and Single-SPA.',
        'Responsive and reusable interfaces with HTML5, CSS3, TypeScript, Bootstrap and Tailwind CSS.',
        'REST API integration with clear data management and backend communication.',
        'Best practices (Clean Code, SOLID) to improve code maintainability.',
        'Agile teams under Scrum (dailies, planning, retrospectives).',
        'Version control with Git, GitFlow and Bitbucket.',
        'AI for optimizing development, debugging and code generation; automation of repetitive tasks.',
      ],
      geoSummary:
        'Develop applications with microfrontends using React, Angular and Single-SPA. Integrate REST APIs, apply Clean Code and SOLID, and work under Scrum.',
    },
    {
      role: 'Data Analyst',
      company: 'Andesmar',
      period: 'May 2025 – May 2026',
      highlights: [
        'Analysis of operational data for route optimization and pricing strategies.',
        'Processing of historical and current data for strategic decision-making.',
        'Reports and visualizations of key metrics.',
        'Support for digital platforms and information management.',
      ],
      geoSummary:
        'Analyzed operational data to optimize routes and pricing strategies in the transportation sector. Generated reports and visualizations for strategic decision-making.',
    },
    {
      role: 'Chatbot Developer',
      company: 'Moby Digital',
      period: 'February 2026',
      highlights: [
        'Customer service chatbot with n8n.',
        'Automated flows for email, WhatsApp and call notifications.',
        'Integration with customer database to personalize communications and automatic actions.',
        'Event-based and multi-channel business rule workflows.',
        'Optimization of customer contact processes through automation.',
      ],
      geoSummary:
        'Developed customer service chatbots with n8n and integrated multi-channel automated flows (email, WhatsApp, and calls) with customer databases.',
    },
  ],
  skillGroups: [
    { label: 'Languages', items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'] },
    { label: 'Frameworks & UI', items: ['Angular', 'React', 'Tailwind CSS', 'Bootstrap', 'PrimeNG'] },
    { label: 'Backend & Data', items: ['Java', 'Spring Boot', 'MySQL', 'JPA', 'Hibernate'] },
    { label: 'Architecture & Integration', items: ['Microfrontends', 'Single-SPA', 'REST APIs'] },
    {
      label: 'Tools & Methodologies',
      items: ['Git', 'GitFlow', 'Bitbucket', 'Postman', 'DBeaver', 'Trello', 'n8n', 'Scrum', 'Kanban'],
    },
    {
      label: 'AI & Automation',
      items: ['AI-assisted coding', 'Assisted debugging', 'Process automation'],
    },
  ],
  education: [
    { degree: 'Higher Technician in Software Development', institution: 'IES Manuel Belgrano 9-008', period: '2023 – 2025' },
    { degree: 'English B2', institution: 'A.M.I.C.A.N.A', period: '2012 – 2017' },
  ],
  certifications: [
    'Vibe Coding from Scratch (Udemy, May 2026)',
    'Drupal for Beginners (Udemy, February 2026)',
    'Angular: From Zero to Expert (Udemy, November 2025)',
    'SOLID Principles and Clean Code (Udemy, June 2025)',
    'Git+GitHub: A Complete Version Control System from Scratch (Udemy, June 2025)',
    'Introduction to Power BI (Santander | Open Academy, June 2025)',
    'SQL Databases (Platzi, April 2025)',
    'TypeScript: Advanced Types and Functions (Platzi, April 2024)',
    'Git and GitHub (Oracle + Alura LATAM, February 2024)',
  ],
  softSkills: [
    'Teamwork',
    'Effective Communication',
    'Adaptability',
    'Problem Solving',
    'Continuous Learning',
    'Self-taught',
  ],
  navLinks: [
    { id: 'inicio', label: 'Home' },
    { id: 'sobre-mi', label: 'About' },
    { id: 'experiencia', label: 'Experience' },
    { id: 'habilidades', label: 'Skills' },
    { id: 'formacion', label: 'Education' },
    { id: 'contacto', label: 'Contact' },
  ],
  aboutBullets: [
    'Microfrontends, Single-SPA with React and Angular',
    'REST API consumption and management',
    'Agile Methodologies (Scrum)',
  ],
  faq: [
    {
      question: 'Who is Jennifer Arabel?',
      answer:
        'Junior Frontend Developer with experience in React, Angular, and microfrontends architecture, focused on building scalable, maintainable applications aligned with best practices. I integrate Artificial Intelligence tools into my daily workflow to optimize development, automate tasks, and improve productivity.',
    },
    {
      question: 'What technologies does Jennifer Arabel master?',
      answer:
        'JavaScript, TypeScript, HTML5, CSS3, Angular, React, Tailwind CSS, Bootstrap, PrimeNG, Java, Spring Boot, MySQL, JPA, Hibernate, Microfrontends, Single-SPA, REST APIs, Git, GitFlow, Bitbucket, Postman, DBeaver, Trello, n8n, Scrum, Kanban.',
    },
    {
      question: 'Where does Jennifer Arabel currently work?',
      answer:
        'Junior Frontend Developer at Moby Digital (June 2025 – Present). Develop applications with microfrontends using React, Angular and Single-SPA. Integrate REST APIs, apply Clean Code and SOLID, and work under Scrum.',
    },
    {
      question: 'What work experience does Jennifer Arabel have?',
      answer:
        'Junior Frontend Developer at Moby Digital: Develop applications with microfrontends using React, Angular and Single-SPA. Data Analyst at Andesmar: Analyzed operational data to optimize routes and pricing strategies. Chatbot Developer at Moby Digital: Developed customer service chatbots with n8n and integrated multi-channel automated flows.',
    },
    {
      question: 'What certifications does Jennifer Arabel have?',
      answer:
        'Vibe Coding from Scratch (Udemy, May 2026), Drupal for Beginners (Udemy, February 2026), Angular: From Zero to Expert (Udemy, November 2025), SOLID Principles and Clean Code (Udemy, June 2025), Git+GitHub: A Complete Version Control System from Scratch (Udemy, June 2025), Introduction to Power BI (Santander | Open Academy, June 2025), SQL Databases (Platzi, April 2025), TypeScript: Advanced Types and Functions (Platzi, April 2024), Git and GitHub (Oracle + Alura LATAM, February 2024).',
    },
    {
      question: 'Where is Jennifer Arabel located?',
      answer: 'Curicó, Chile.',
    },
    {
      question: 'What did Jennifer Arabel study?',
      answer:
        'Higher Technician in Software Development at IES Manuel Belgrano 9-008 (2023 – 2025), English B2 at A.M.I.C.A.N.A (2012 – 2017).',
    },
    {
      question: 'What are Jennifer Arabel\'s soft skills?',
      answer: 'Teamwork, Effective Communication, Adaptability, Problem Solving, Continuous Learning, Self-taught.',
    },
    {
      question: 'Is Jennifer Arabel available for hire?',
      answer:
        'Yes, Jennifer Arabel is open to new opportunities as a Frontend Developer, both remote and hybrid positions in Chile or internationally. Contact her at jennifer.arabel@gmail.com or via LinkedIn.',
    },
    {
      question: 'Does Jennifer Arabel work remotely?',
      answer:
        'Yes, Jennifer has experience working with distributed teams and is available for remote or hybrid positions. She is based in Curicó, Chile.',
    },
    {
      question: 'What kind of projects is Jennifer Arabel looking for?',
      answer:
        'Frontend development projects with React or Angular, preferably with modern architectures such as microfrontends or SPA, agile teams, and software engineering best practices.',
    },
  ],
}
