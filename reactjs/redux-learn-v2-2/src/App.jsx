import { useState } from 'react'
import { CounterShow, CounterAction } from '@/features/counter'
import User from './features/User'

function App() {

  return (
    <>
      <h1>App component</h1>
      <CounterShow/>
      <CounterAction/>
      <User />
    </>
  )
}

export default App
