import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './styles/styles.css'
import { CharactersProvider } from './context/CharactersContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CharactersProvider>
      <App />
    </CharactersProvider>
  </StrictMode>,
);