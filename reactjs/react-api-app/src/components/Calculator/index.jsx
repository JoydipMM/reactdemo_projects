import React from 'react'

const Calculator = () => {
  return (
    <div>
      <h2>Calculator</h2>


        <Input/>


    </div>
  )
}


export const Input = () => {
    return (
        <div>
            <input type="text" className='card' placeholder='input' />
        </div>
    )
}



export default Calculator
