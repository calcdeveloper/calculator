import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ADD THIS BUILD BLOCK TO FIX THE WARNING:
  build: {
    chunkSizeWarningLimit: 1500, // This increases the limit to 1500 kB
  }
})