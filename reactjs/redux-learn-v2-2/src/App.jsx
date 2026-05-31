import { useState } from 'react'
import { CounterShow, CounterAction } from '@/features/counter'
import { UserList } from '@/features/user'
import Header from './shared/ui/Header'
import ThemeSwitch from './shared/ui/components/ThemeSwitch'
import { ProductsPage } from './features/products'

function App() {

  return (
    <>
      <h1>App component</h1>
      <ThemeSwitch/>
      <CounterShow/>
      <CounterAction/>
      <UserList />
      <ProductsPage/>
    </>
  )
}

export default App
