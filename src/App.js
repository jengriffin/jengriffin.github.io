import ThemeSwitcher from './ThemeSwitcher'
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Test from './compontents/Test'

function App() {
  return (
    <div className="App min-vh-100 d-flex justify-content-center align-items-center">
      {/* <div>
        <ThemeSwitcher />
      </div> */}

      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </div>
  )
}

export default App
