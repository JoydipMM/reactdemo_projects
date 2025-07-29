import React, { useContext } from 'react';
import CounterContext from '../Context/CounterContext';

const CardTwo = () => {
    const { counter } = useContext(CounterContext);
  return (
    <>
      <h4>Card Two Component</h4>
      Counter: {counter}
    </>
  )
}

export default CardTwo
