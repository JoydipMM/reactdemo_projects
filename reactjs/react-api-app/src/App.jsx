import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layout/MainLayout'
import Posts from './pages/Posts'

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/posts' element={<Posts/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
