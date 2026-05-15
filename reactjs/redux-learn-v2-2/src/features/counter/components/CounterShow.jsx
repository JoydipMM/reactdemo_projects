import React from 'react'
//import { useSelector } from 'react-redux' // remove this
import { useCounter } from '@/features/counter/hooks/useCounter' // import counterValue from custom hook

function CounterShow() {
  // const counterValue = useSelector((state)=>state.counter.counterValue) // this is not required since we make custom hook for counter
  const { counter } = useCounter();
  const counterValue = counter;
  return (
    <div>
      <h4>Counter Value is: {counterValue} </h4>
    </div>
  )
}
export default CounterShow
