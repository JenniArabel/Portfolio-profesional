# Portfolio profesional

Sitio web de portfolio personal: presentación profesional, experiencia, habilidades, formación y contacto. Interfaz en modo oscuro con acentos en fucsia y diseño adaptable a distintos tamaños de pantalla.

## Tecnologías

El proyecto está construido con:

| Área | Tecnología |
|------|------------|
| Interfaz | [React](https://react.dev/) |
| Lenguaje | [TypeScript](https://www.typescriptlang.org/) |
| Estilos | [Tailwind CSS](https://tailwindcss.com/) v4 (integración con Vite mediante `@tailwindcss/vite`) |
| Herramienta de desarrollo y build | [Vite](https://vite.dev/) |
| Plugin React en Vite | [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) |
| Calidad de código | [ESLint](https://eslint.org/) con [typescript-eslint](https://typescript-eslint.io/) y reglas para React Hooks y React Refresh |

Tipografías del sitio: [DM Sans](https://fonts.google.com/specimen/DM+Sans) y [Sora](https://fonts.google.com/specimen/Sora) (Google Fonts).

## Requisitos

- [Node.js](https://nodejs.org/) (recomendado: versión LTS actual)

## Scripts

```bash
npm install    # Instala dependencias
npm run dev    # Servidor de desarrollo con recarga en caliente
npm run build  # Compilación para producción (client + SSR bundle + prerender estático por idioma)
npm run preview # Previsualiza el build localmente
npm run lint   # Ejecuta ESLint
```

## Rutas por idioma y prerender (SEO)

El sitio sirve dos URLs indexables por Google:

| Ruta | Idioma | HTML servido |
|------|--------|--------------|
| `/` | Español (canonical) | `dist/index.html` |
| `/en` | Inglés | `dist/en/index.html` |

- El idioma se detecta desde la URL (`localeFromPathname`), con fallback a `localStorage['locale']`.
- El toggle ES/EN en `Navbar` cambia la URL con `history.replaceState` y el contenido al instante.
- `npm run build` genera HTML estático por idioma con `lang`, meta (og:locale, canonical, hreflang), JSON-LD (`Person`, `WebSite`, `FAQPage`) y contenido visible ya renderizado (mejor indexación y GEO).
- `vercel.json` configura los rewrites para `/en` y el fallback SPA.

## SEO

| Recurso | Ubicación | Descripción |
|---------|-----------|-------------|
| Meta tags (OG, Twitter, canonical) | `index.html` + `src/i18n/meta.ts` | Definidos estáticamente y por idioma |
| Structured data (JSON-LD) | `src/seo/schemas.ts` | Schema `Person`, `WebSite` y `FAQPage`, consumido por `Seo.tsx` y el prerender |
| Optimización GEO / IA | `public/llms.txt` | Markdown estructurado para crawlers de ChatGPT, Claude y Perplexity |
| `robots.txt` | `public/robots.txt` | Permite crawlers, apunta al sitemap |
| `sitemap.xml` | `public/sitemap.xml` | Dos URLs con alternates `hreflang` |

Para validar el structured data: [Rich Results Test](https://search.google.com/test/rich-results).

## Dominio

El dominio canónico es `https://portfolio-jennifer-arabel.vercel.app/`. Si cambia, actualizar en `index.html` (canonical + OG), `public/robots.txt`, `public/sitemap.xml`, `src/seo/schemas.ts` y `src/i18n/meta.ts`.

## Optimización para IA generativa (GEO)

Este portfolio está optimizado para motores de IA generativa (ChatGPT, Claude, Perplexity, Google AI Overviews):

| Recurso | Propósito |
|---------|-----------|
| `public/llms.txt` | Archivo de lectura para crawlers de IA (`/llms.txt`) |
| `FAQPage` schema | 8 preguntas y respuestas extraíbles por motores generativos |
| `geoSummary` en `cv.ts` | Resúmenes en prosa por experiencia para citas textuales de IA |

## Desarrollo

Tras `npm install`, ejecuta `npm run dev` y abre la URL que indique la terminal (por defecto suele ser `http://localhost:5173`).
