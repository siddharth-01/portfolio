import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set to your GitHub repo name for GitHub Pages deployment
  // e.g., if repo is github.com/username/portfolio → base: '/portfolio/'
  base: '/portfolio/',
})
