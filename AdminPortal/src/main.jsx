import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Content from './Dashboard/Content.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
      <Route path='/dashboard' element={<Content/>} />
      
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
