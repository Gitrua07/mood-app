import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home'
import Entries from './Entries'
//import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/journal">Journal</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/journal" element={<Entries />}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
