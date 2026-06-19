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
npm run build  # Compilación para producción
npm run preview # Previsualiza el build localmente
npm run lint   # Ejecuta ESLint
```

## SEO

| Recurso | Ubicación | Descripción |
|---------|-----------|-------------|
| Meta tags (OG, Twitter, canonical) | `index.html` | Definidos estáticamente en el `<head>` |
| Structured data (JSON-LD) | `src/components/Seo.tsx` | Schema `Person` y `WebSite`, datos desde `src/data/cv.ts` |
| `robots.txt` | `public/robots.txt` | Permite crawlers, apunta al sitemap |
| `sitemap.xml` | `public/sitemap.xml` | Una entrada con prioridad 1.0 |

Para validar el structured data: [Rich Results Test](https://search.google.com/test/rich-results).

## Desarrollo

Tras `npm install`, ejecuta `npm run dev` y abre la URL que indique la terminal (por defecto suele ser `http://localhost:5173`).
