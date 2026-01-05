import React, { useState } from 'react'

const Calculator = () => {

  const [oparentA, setOparentA] = useState('');
  const [oparentB, setOparentB] = useState('');
  const [result, setResult] = useState('');
  const [oparation, setOparation] = useState('');
  const [currentNumber, setCurrentNumber] = useState('');



  const ADD = "+";
  const SUB = "-";
  const MULT = "*";
  const DIVI = "/";
  const EQAL = "=";

  const oparations = [ADD, SUB, MULT, DIVI, EQAL];

  const numberList = new Array(10);

  function onInput(value) {
    //console.log(value);
    setCurrentNumber(value);
    //let remender = value % 10;
    //console.log(remender)

  }

    const btnEvent = (e) => {
    //console.log('clicked');
    return () => {
      console.log(e)
      setCurrentNumber(Number(currentNumber) * 10 + Number(e));
    }
  }


  function oparationHandler(e){

    // this is one option to get oparation data
    /*
    console.log(e.target.dataset.oparation);
    console.log(e.target.getAttribute('data-oparation'));
    setOparation(e.target.dataset.oparation);
    */

    // this is another option using currying [Currying is a technique where a function takes one argument at a time instead of all arguments at once.] 
    return ()=>{
      console.log("oparation: ",e);
      setOparation(e);
      if(oparentA){
        setOparentB(currentNumber);
        setCurrentNumber('');
      }else{
        setOparentA(currentNumber);
        setCurrentNumber('');
      }

      
      if(oparation == EQAL){
        if(oparentA){
          setOparentB(currentNumber);
          let res = Number(oparentA) + Number(oparentB);
          console.log(res);
          setResult(res);
          setOparentA(res);
          setCurrentNumber(result);
        }
      }
    


    }
  }

  return (
    <div>
      <h2>Calculator</h2>


        <Input placeholder='Enter Number' value={currentNumber} onInput={onInput}/>

        <br/>{ `Selected Oparation: ${oparation}` }
        <br/>{ `User given number: ${currentNumber}` }
        <br/>{ `oparentA : ${oparentA}` }
        <br/>{ `oparentB : ${oparentB}` }
        <br/>{ `result : ${result}` }
        <br/>

        {[...numberList].map((_, index) => (<ActionButton key={index} label={index} onClick={btnEvent(index)}/>))}

        {oparations.map((o)=>
        // this is one option to get oparation data using dataset
        // <ActionButton key={o} className='bg-sky-500 text-white' label={o} onClick={oparationHandler} dataOparation={o}/>

        // this is another option to get oparation data using currying
        <ActionButton key={o} className='bg-sky-500 text-white' label={o} onClick={oparationHandler(o)} />
        ) }


    </div>
  )
}




export const Input = ({value, placeholder='', onInput=()=>{}}={}) => {
    const handelInput = (e) => {
      onInput(Number(e.target.value)); // this send direct value
    }
    return (
        <div>
            <input type="text" value={value} onInput={handelInput} className='card h-11' placeholder={placeholder} />
        </div>
    )
}





export const ActionButton = ({className='', label='', dataOparation, onClick=()=>{}}={}) => {
    return (
      /* 
      // this is one option
      <button data-oparation={dataOparation} className={`card w-11 h-11 p-2 cursor-pointer m-1 ${className ? className : ''}`} onClick={onClick}>{label}</button>
      */
     // this is another option using currying
      <button className={`card w-11 h-11 p-2 cursor-pointer m-1 ${className ? className : ''}`} onClick={onClick}>{label}</button>
    )
}



export default Calculator;
