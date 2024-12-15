import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/


export default defineConfig({
  plugins: [react()],
  base: "https://evgprog-dev.github.io/Social",
  server: {
    proxy: {
      '/api': {
        target: 'https://social-network.samuraijs.com/api/1.0',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''), 
        headers: {
          "API-KEY": "440f636a-680f-4a16-b885-15c5d95cad4c",
        },
      },
    },
  },
});
