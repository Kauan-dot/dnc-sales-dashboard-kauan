import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './styles/globalStyle.ts'
import { AppThemeProvider } from './contexts/AppThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <GlobalStyle />
      <App />
    </AppThemeProvider>
  </React.StrictMode>
)
