import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // root: resolve(__dirname, 'src'),
  // build: {
  //   outDir: '../dist'
  // },
  // server: {
  //   port: 5173
  // }
  
})
