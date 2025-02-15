// Refer for more :  https://dev.to/rebeccapeltz/react-18-react-router-v6-sidebar-navigation-and-a-sandpack-component-5c02

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Updated import to 'react-router-dom' (correct package for routing)
import App from './App'
import LiveStream from './LiveStream'

const rootElement = document.getElementById('root')

// Ensure `rootElement` is not null using a type guard
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/live-stream" element={<LiveStream />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  )
} else {
  console.error('Root element not found.')
}
