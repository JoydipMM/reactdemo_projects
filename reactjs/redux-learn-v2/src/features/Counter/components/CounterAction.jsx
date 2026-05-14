import React from 'react'
// first import the actions from the slice
import { decrement, increment } from '../../counter/slices/counterSlice'; 
// then import useDispatch from react-redux which is used to dispatch actions and that action calls the reducer
import { useDispatch, useSelector } from 'react-redux'

function CounterAction() {

  // we store the dispatch function in a variable
  const dispatch = useDispatch();

  //const [ number, setNumber ] = React.useState(0); // this is not required since we get this value from the store

  const number = useSelector(state => state.counter.counterValue);

  /*
  this component event handlers are not required since we update the counter value in the store with the actions
  const counterEventHandler = (type) => {
    if(type === 'increment') {
      setNumber(number + 1);
    } else {
      if(number > 0) {
        setNumber(number - 1);
      }
    }
  }
  */

  return (
    <div>
      {/* <button onClick={() => counterEventHandler('decrement')}>Decrement</button> */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input type="text" value={number} readOnly />
      {/* <button onClick={() => counterEventHandler('increment')}>Increment</button> */}
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  )
}

export default CounterAction
