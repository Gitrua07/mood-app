import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import Entries from './pages/Entries'
import HomePic from './assets/Home.png'
import News from './assets/news.png'

function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-5 px-9 py-4 text-center bg-neutral-300 justify-start items-center">
          <Link to="/">
            <div className="p-3 bg-neutral-50 hover:outline-neutral-50 hover:outline-3 hover:outline-offset-2 rounded-xl">
              <img className="w-10 bg-neutral-50" src={HomePic} alt="home icon"/>
            </div>
          </Link>
          <Link to="/journal">
            <div className="p-3 bg-neutral-50 rounded-xl hover:outline-neutral-50 hover:outline-3 hover:outline-offset-2">
              <img className="w-10 bg-neutral-50" src={News} alt="news icon"/>
            </div>
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/journal" element={<Entries />}/>
        </Routes>  
          
    </BrowserRouter>
  )
}

export default App


