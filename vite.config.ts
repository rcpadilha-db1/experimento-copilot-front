import { configDefaults } from 'vitest/config'

/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    exclude:[...configDefaults.exclude, 'src/**/*.tsx'],
    globals: true,
  },
})
