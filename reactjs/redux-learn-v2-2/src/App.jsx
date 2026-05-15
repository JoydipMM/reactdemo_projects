import { useState } from 'react'
import { CounterShow, CounterAction } from '@/features/counter'
import { UserList } from '@/features/user'

function App() {

  return (
    <>
      <h1>App component</h1>
      <CounterShow/>
      <CounterAction/>
      <UserList />
    </>
  )
}

export default App
