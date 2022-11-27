import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import linaria from '@linaria/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    linaria({
      sourceMap: process.env.NODE_ENV !== 'production',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.ts',
    outputFile: './testResults.json',
  },
})
