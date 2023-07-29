import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import './fonts.css'

import App from './components/app/App'

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
