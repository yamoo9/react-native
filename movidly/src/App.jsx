import React from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Movies from './components/Movies'

function App() {
  return (
    <div className="App">
      <div className="container" role="main">
        <Navbar />
        <Movies />
      </div>
    </div>
  )
}

export default App
