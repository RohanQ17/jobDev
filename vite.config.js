import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy:{
      '/api':{
        target : 'https://my-json-server.typicode.com/RohanQ17/jobsapi',
        changeOrigin: true,
        rewrite: (path)=>path.replace(/^\/api/,'')

      }
    }
  },
})
