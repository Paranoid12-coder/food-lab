import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base нужен для GitHub Pages: сайт будет на /food-lab/
export default defineConfig({
  plugins: [react()],
  base: '/food-lab/',
})