import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/',
    build: {
    outDir: 'docs' // so GitHub can serve directly
  },
  server: {
    port: 3000,
    open: true
  }
})

