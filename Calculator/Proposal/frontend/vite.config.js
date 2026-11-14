import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Point the dev proxy at the API. Defaults to the documented backend port;
// override with VITE_BACKEND_URL if the API runs elsewhere.
const backend = process.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': { target: backend, changeOrigin: true },
    },
  },
})
