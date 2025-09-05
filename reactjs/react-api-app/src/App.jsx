import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import MainLayout from '@/layout/MainLayout'
import Posts from '@/pages/Posts'
import Courses from '@/pages/Courses'
import Team from '@/pages/Team'
import Profile from '@/pages/Profile'
import NotFound from '@/pages/NotFound'
import BlankLayout from './layout/BlankLayout'

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/course' element={<Courses/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/posts' element={<Posts/>} />
        </Route>
        <Route element={<BlankLayout/>}>
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
