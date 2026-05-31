import { useState } from 'react'
import { CounterShow, CounterAction } from '@/features/counter'
import { UserList } from '@/features/user'
import Header from './shared/ui/Header'
import ThemeSwitch from './shared/ui/components/ThemeSwitch'

function App() {

  return (
    <>
      <h1>App component</h1>
      <ThemeSwitch/>
      <CounterShow/>
      <CounterAction/>
      <UserList />
    </>
  )
}

export default App
