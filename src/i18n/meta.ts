export type LocaleMeta = {
  title: string
  description: string
  ogLocale: string
}

const TITLE = 'Jennifer Arabel | Frontend Developer — React & Angular'

export const meta: Record<'es' | 'en', LocaleMeta> = {
  es: {
    title: TITLE,
    description:
      'Jennifer Arabel — Frontend Developer especializada en React, Angular y TypeScript. Experiencia en microfrontends, Single-SPA y APIs REST. Curicó, Chile.',
    ogLocale: 'es_CL',
  },
  en: {
    title: TITLE,
    description:
      'Jennifer Arabel — Frontend Developer specialized in React, Angular and TypeScript. Experience in microfrontends, Single-SPA and REST APIs. Available for remote work.',
    ogLocale: 'en_US',
  },
}
