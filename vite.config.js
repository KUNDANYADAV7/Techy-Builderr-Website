import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import inject from '@rollup/plugin-inject';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss({
      darkMode: 'class'
    }),
    react(),
    inject({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
})
