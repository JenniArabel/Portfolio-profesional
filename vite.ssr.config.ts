import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Builds the server-side entry used by scripts/prerender.mjs.
// No tailwind plugin needed here: the SSR output only renders markup strings.
export default defineConfig({
  plugins: [react()],
  build: {
    ssr: 'src/entry-ssr.tsx',
    outDir: 'dist-server',
    emptyOutDir: true,
    copyPublicDir: false,
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: 'entry-ssr.js',
      },
    },
  },
})
