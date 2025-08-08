import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/boardgames/stylesheets/index.css'
import { Navigate } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div>
    Website has moved to <a href="https://nerdytoolbox.github.io/">NerdyToolbox.github.io</a>
  </div>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
