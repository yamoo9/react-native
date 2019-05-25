import React from 'react'
import './App.css'

import Movies from './components/Movies'

function App() {
  return (
    <div className="App">
      <div className="container" role="main">
        <nav class="navbar navbar-dark bg-primary fixed-top">
          <a class="navbar-brand" href="/">
            Movidly
          </a>
        </nav>
        <Movies />
      </div>
    </div>
  )
}

export default App
