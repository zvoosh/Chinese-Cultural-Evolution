import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { HashRouter  } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter  basename='/Chinese-Cultural-Evolution/' >
      <App />
    </HashRouter >
  </React.StrictMode>,
  document.getElementById('root')
)
