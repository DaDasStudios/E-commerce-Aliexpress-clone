import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// ROUTER
import { BrowserRouter } from 'react-router-dom'

// CSS & BULMA 
import 'bulma/css/bulma.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>

)
