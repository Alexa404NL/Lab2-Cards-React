import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CustomHook } from './Components/CustomHook.jsx'
import App from './App.jsx'
import { PicHook } from './Components/PicHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PicHook/>
  </StrictMode>,
)
