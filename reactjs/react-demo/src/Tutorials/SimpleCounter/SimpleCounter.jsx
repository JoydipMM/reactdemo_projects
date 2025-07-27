import React, { useState } from 'react';
// import { Link, Outlet, Route, Routes } from 'react-router-dom';

const SimpleCounter = () => {

  //let counter = 5;
  const [counter, setCounter] = useState(0)

  const CountIncrease = () =>{
    //console.log("value added", Math.random());
    setCounter(counter + 1); // with this increase 1 counter with every click
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1); // result 1
    // with above code also increase 1 counter with every click because All four calls to setCounter(counter + 1) are using the same stale value of counter  (the value at the start of the function). React batches them together and treats them as essentially one update, so you only get +1. So ensures each update gets the latest value, not the original counter from the first render of the function we can use the below code.
    setCounter(prev => prev + 1);
    setCounter(prev => prev + 1);
    setCounter(prev => prev + 1);
    setCounter(prev => prev + 1); // result 5
    // or we can make like below
    setCounter(prev => prev + 4); // result : 9 (1+4+4)
  }
  const CountDecrease = () =>{
    //console.log("value decreased", Math.random());
    if(counter > 0) setCounter(counter - 1);
  }


  return (
    <div>
      <h3>Counter {counter}</h3>
      <button onClick={CountDecrease}>Count -</button>
      <button onClick={CountIncrease}>Count +</button>
      {/* <Outlet/> */}


    </div>
  )
}

export default SimpleCounter
