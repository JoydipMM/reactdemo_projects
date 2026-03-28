import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './components/Body'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <>
     <BrowserRouter basename={"/"}>
      <Routes element={<Body />}>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
