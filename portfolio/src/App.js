import './App.scss'

import { Route, Routes } from 'react-router-dom'

import React from 'react'

// import logo from './Assets/images/Logo.png'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  )
}

export default App
