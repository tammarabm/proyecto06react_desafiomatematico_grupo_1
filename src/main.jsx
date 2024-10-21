import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Inicio from './components/Inicio.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Inicio />
  </StrictMode>,
)
