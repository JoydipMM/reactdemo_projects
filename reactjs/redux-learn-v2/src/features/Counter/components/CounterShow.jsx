import React from 'react'
import { useSelector } from 'react-redux'

function CounterShow() {
  // we get the counter value from the store.
  // So when the counter value changes, this component will re-render
  const counterValue = useSelector((state)=>state.counter.counterValue)
  return (
    <div>
      <h4>Counter Value is: {counterValue} </h4>
    </div>
  )
}
export default CounterShow
