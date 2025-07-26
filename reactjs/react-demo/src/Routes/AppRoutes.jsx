import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../Pages/NotFound';
import Tutorials from '../Tutorials/Tutorials'
import TutorialLayout from '../Layout/TutorialLayout'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<TutorialLayout/>}>
            <Route path="/" element={<Tutorials/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoutes
