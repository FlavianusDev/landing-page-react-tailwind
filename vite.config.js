import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Import plugin

// https://vitejs.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. Tambahkan ke dalam array plugins
  ],
})
