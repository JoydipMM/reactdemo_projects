import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../Pages/NotFound';
import Home from "../Pages/Home";
import Tutorials from '../Tutorials/Tutorials';
import TutorialLayout from '../Layout/TutorialLayout';
import SimpleCounter from '../Tutorials/SimpleCounter/SimpleCounter';
import GeneratePassword from '../Tutorials/GeneratePassword/GeneratePassword';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tutorials" element={<TutorialLayout/>}>
          <Route index element={<Tutorials/>} />
          {/* <Route path="simple-counter" element={<SimpleCounter/>} /> */}
          <Route path="simple-counter" element={<SimpleCounter />}>
            {/* <Route path="cc" element={<Count />} />
            <Route path="cc2" element={<Count2 />} /> */}
          </Route>
          <Route path="generate-password" element={<GeneratePassword />}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoutes
