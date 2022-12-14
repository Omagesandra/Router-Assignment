import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import App from './App'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	  <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
        <App/>
          </BrowserRouter>
      </ErrorBoundary>
  </React.StrictMode> 
         
)
