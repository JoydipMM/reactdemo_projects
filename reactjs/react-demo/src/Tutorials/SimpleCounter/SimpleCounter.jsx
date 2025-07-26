import React, { useState } from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

const SimpleCounter = () => {

  //let counter = 5;
  const [counter, setCounter] = useState(0)

  const CountIncrease = () =>{
    //console.log("value added", Math.random());
    setCounter(counter + 1);
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
