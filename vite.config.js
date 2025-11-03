import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    sourcemap: false,
    cssMinify: 'esbuild',
    target: 'es2020',
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Split large libraries into separate chunks
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('chart.js') || id.includes('react-chartjs')) {
              return 'chart-vendor';
            }
            if (id.includes('bootstrap') || id.includes('flowbite')) {
              return 'ui-vendor';
            }
            if (id.includes('axios') || id.includes('sweetalert')) {
              return 'utils-vendor';
            }
            // Everything else goes to vendor
            return 'vendor';
          }
        }
      }
    }
  },
  server: {
    port: 5173
  }
  
})
