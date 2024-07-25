import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Root from './App/Root.jsx'
import AuthProvider from './context/AuthContext.jsx'
import StarsProvider from './context/StarsContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
     <AuthProvider>
      <StarsProvider>
        <Root/>  
      </StarsProvider>
     </AuthProvider>
    </BrowserRouter>

  </div>
  
)
