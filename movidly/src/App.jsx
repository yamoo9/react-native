import React from 'react'
import './App.css'

import Navbar from './components/Navbar'
import MoviesContainer from './containers/MoviesContainer'

function App() {
  return (
    <div className="App">
      <div className="container" role="main">
        <Navbar />
        <MoviesContainer />
      </div>
    </div>
  )
}

export default App
