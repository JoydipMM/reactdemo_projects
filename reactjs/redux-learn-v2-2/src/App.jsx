import { useState } from 'react'
import { CounterShow, CounterAction } from '@/features/counter'
import { UserList } from '@/features/user'
import ThemeSwitch from '@/shared/ui/components/ThemeSwitch'
import { ProductsPage } from '@/features/products'
import { CartPage, useCart } from '@/features/cart'

function App() {

  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <>
      <h1>App component</h1>
      <ProductsPage addToCart={addToCart}/>
      <CartPage cart={cart} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} total={total}/>

      <ThemeSwitch/>
      <CounterShow/>
      <CounterAction/>
      <UserList />
    </>
  )
}

export default App
