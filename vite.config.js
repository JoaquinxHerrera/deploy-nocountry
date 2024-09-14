// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Esto redirige las solicitudes hechas a /api al servidor backend
      '/api': {
        target: 'https://saludvital-production.up.railway.app',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''), // Elimina el prefijo /api al hacer la solicitud al backend
      }
    }
  }
})