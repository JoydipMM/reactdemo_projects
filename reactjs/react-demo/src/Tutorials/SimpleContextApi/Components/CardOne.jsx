import React, { useContext } from 'react';
import CounterContext from '../Context/CounterContext';

const CardOne = () => {
    const {counter, setCounter} = useContext(CounterContext)
  return (
    <>
      <h4>Card One Component</h4>
      Conuter: {counter}<br/>
      <button onClick={()=>setCounter((counter)=> counter+1)} >Counter Button</button>
    </>
  )
}

export default CardOne
