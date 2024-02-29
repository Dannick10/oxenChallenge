import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  plugins: [
    react(),
  ],
  css: {
    modules: {},
    preprocessorOptions: {
    },
  },
  optimizeDeps: {
    include: [
      '@progress/kendo-react-grid',
      '@progress/kendo-react-data-tools',
      '@progress/kendo-react-intl',
    ],
  },
};