import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../App.tsx'
import '../index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

try {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} catch (error) {
  console.error('Error rendering app:', error)
  rootElement.innerHTML = `
    <div style="padding: 20px; text-align: center; color: white; background: #0a0e27; min-height: 100vh; display: flex; align-items: center; justify-content: center; flex-direction: column;">
      <h1>Error al cargar la aplicación</h1>
      <p>Por favor, recarga la página o contacta al administrador.</p>
      <pre style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 5px; margin-top: 20px; text-align: left; overflow: auto; max-width: 80%;">${error instanceof Error ? error.message : String(error)}</pre>
    </div>
  `
}

