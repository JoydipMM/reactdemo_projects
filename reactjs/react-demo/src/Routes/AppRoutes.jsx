import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../Pages/NotFound';
import Tutorials from '../Tutorials/Tutorials'
import TutorialLayout from '../Layout/TutorialLayout'
import SimpleCounter from '../Tutorials/SimpleCounter/SimpleCounter';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/tutorials" element={<TutorialLayout/>}>
          <Route index element={<Tutorials/>} />
          <Route path="simple-counter" element={<SimpleCounter/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoutes
