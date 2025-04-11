import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Header from './components/Header/Header'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>

      { showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></> }

      <Header setShowLogin={setShowLogin}/>
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/cart'} element={<Cart/>} />
        <Route path={'/placeorder'} element={<PlaceOrder/>} />
      </Routes>
    </div>
  )
}

export default App
