import React from 'react'
import ReactDOM from 'react-dom/client'
import { Main } from './index.jsx' // Make sure the name matches the function name inside index.jsx
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
