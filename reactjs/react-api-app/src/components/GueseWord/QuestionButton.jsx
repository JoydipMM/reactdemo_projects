import React from 'react'

const QuestionButton = ({ label, buttonEvent }={}) => {

    const buttonEventHandler = (label) => {
        buttonEvent(label);
    }
  return (
    <>
      <button className='card w-11 h-11 p-2 cursor-pointer m-1' onClick={()=>buttonEventHandler(label)}>{label}</button>
    </>
  )
}

export default QuestionButton
