import { useState } from 'react'
import { CounterShow, CounterAction } from '@/features/counter'
import { UserList } from '@/features/user'
import ThemeSwitch from '@/shared/ui/components/ThemeSwitch'
import { ProductsPage } from '@/features/products'
import { CartPage } from '@/features/cart'

function App() {

  return (
    <>
      <h1>App component</h1>
      <CartPage/>
      <ThemeSwitch/>
      <CounterShow/>
      <CounterAction/>
      <UserList />
      <ProductsPage/>
    </>
  )
}

export default App
