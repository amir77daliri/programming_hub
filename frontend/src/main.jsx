import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.module.css'
import ThemeProviderWrapper from "./HOC/themeProviderWrapper.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProviderWrapper>
          <App />
      </ThemeProviderWrapper>
  </React.StrictMode>,
)
