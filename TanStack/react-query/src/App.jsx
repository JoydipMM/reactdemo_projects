import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ProductsPage from './pages/ProductsPage'
import DefaultLayout from './layout/DefaultLayout'
import ProductDetail from './pages/ProductDetail'
import ParalalQueryPage from './pages/ParalalQueryPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route baseName='/' element={<DefaultLayout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:productid' element={<ProductDetail />} />
          <Route path ="/paralal-query" element={<ParalalQueryPage />} />
          <Route path ="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
