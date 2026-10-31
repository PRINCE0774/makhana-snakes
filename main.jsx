import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

const params = new URLSearchParams(window.location.search)
const restoredPath = params.get('p')
if (restoredPath?.startsWith('/') && !restoredPath.startsWith('//')) {
  window.history.replaceState(null, '', `${restoredPath}${window.location.hash}`)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
