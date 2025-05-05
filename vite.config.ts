import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

process.env.MUI_STYLED_ENGINE = 'styled-components'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@mui/material', '@mui/styled-engine-sc'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
