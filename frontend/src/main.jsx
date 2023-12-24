import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.module.css'
import ThemeProviderWrapper from "./HOC/themeProviderWrapper.jsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from "./pages/Dashboard/Dashboard.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProviderWrapper>
          <RouterProvider router={router} />
      </ThemeProviderWrapper>
  </React.StrictMode>,
)
