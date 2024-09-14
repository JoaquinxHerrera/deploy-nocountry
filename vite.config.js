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
        target: 'http://backend-sin-auth-production.up.railway.app',
        changeOrigin: true, // Cambia el origen para que coincida con el backend
        secure: true,       // Asegúrate de que sea seguro para HTTPS
        rewrite: (path) => path.replace(/^\/api/, ''), // Elimina el prefijo /api al hacer la solicitud al backend
      }
    }
  }
})