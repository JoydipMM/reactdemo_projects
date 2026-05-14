import React from 'react'
import CounterAction from './components/CounterAction'
import CounterShow from './components/CounterShow'

function Counter() {
  return (
    <div>
      <h3>Counter UI</h3>
      <CounterShow />
      <CounterAction />
    </div>
  )
}

export default Counter
