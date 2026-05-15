import React from 'react'
import { useCounter } from '@/features/counter/hooks/useCounter'  

function CounterAction() {

  const { counter, handleIncrement, handleDecrement } = useCounter();
  const number = counter;

  return (
    <div>
      {/* <button onClick={() => dispatch(decrement())}>Decrement</button> */}
      <button onClick={handleDecrement}>Decrement</button>
      <input type="text" value={number} readOnly />
      {/* <button onClick={() => dispatch(increment())}>Increment</button> */}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default CounterAction
