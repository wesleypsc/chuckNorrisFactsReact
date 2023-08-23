import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ThemeSwitcher from './components/ThemeSwitcher'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeSwitcher />
    <App />
  </React.StrictMode>,
)
