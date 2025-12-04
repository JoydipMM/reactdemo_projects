import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,        // allows "test", "expect" without imports
    environment: 'jsdom', // simulates a browser
    setupFiles: './src/setupTests.js'
  }
})
