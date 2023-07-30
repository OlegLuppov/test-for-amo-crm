import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.scss'
import { NavBar } from '../nav_panel/NavBar'
import { TaskOne } from '../pages/task_one/TaskOne'
import { TaskTwo } from '../pages/task_two/TaskTwo'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          <Route element={<TaskOne />} path="task_1" />
          <Route element={<TaskTwo />} path="task_2" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
