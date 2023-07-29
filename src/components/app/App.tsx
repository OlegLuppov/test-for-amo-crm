import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.scss'
import { NavBar } from '../nav_panel/NavBar'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          {/* <Route element={<Home />} path="test1" /> */}
          {/* <Route element={<AboutPage />} path="test2" /> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
