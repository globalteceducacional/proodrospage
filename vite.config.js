import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// A publicação estática continua lendo a pasta dist (.openai/hosting.json).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
