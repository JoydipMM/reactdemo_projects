import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import MainLayout from '@/layout/MainLayout'
import Posts from '@/pages/Posts'
import Blog from '@/pages/Blog'
import Courses from '@/pages/Courses'
import Team from '@/pages/Team'
import Profile from '@/pages/Profile'
import NotFound from '@/pages/NotFound'
import ApiPage from '@/pages/ApiPage'
import BlankLayout from './layout/BlankLayout'

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          {/* <Route path='/' element={<ApiPage/>} /> */}
          <Route path='/' element={<Home/>} />
          <Route path='/course' element={<Courses/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/posts' element={<Posts/>} />
          <Route path='/apipage' element={<ApiPage/>} />
          <Route path='/blog' element={<Blog/>} />
        </Route>
        <Route element={<BlankLayout/>}>
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
