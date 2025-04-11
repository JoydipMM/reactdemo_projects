import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import { Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import FoodAdd from './pages/FoodAdd/FoodAdd'
import FoodList from './pages/FoodList/FoodList'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "http://localhost:4000";
  return (
    <div>
      <ToastContainer />
      <Sidebar></Sidebar>
      <Routes>
        <Route path="" element={<Dashboard url={url} />}  />
        <Route path="/list-food" element={<FoodList url={url}/>}  />
        <Route path="/add-food" element={<FoodAdd url={url}/>}  />
      </Routes>
    </div>
  )
}

export default App

