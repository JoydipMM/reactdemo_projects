import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import DefaultLayout from './layout/DefaultLayout'
import AfterLoginLayout from './layout/AfterLoginLayout'
import NotFound from './pages/NotFound'
import Connections from './pages/Connections'
import Profile from './pages/Profile'
import Requests from './pages/Requests'

function App() {

  return (
    <>
      <BrowserRouter basename={"/"}>
        <Routes>

          <Route element={<DefaultLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<AfterLoginLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
