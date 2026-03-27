import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans antialiased bg-white flex flex-col relative w-full min-h-screen overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
