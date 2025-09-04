import React from 'react'
import './TicStyle.css';

const TicSquare = ({value, onClick}) => {
  return (
    <div onClick={onClick} className='board-sqaure'>
      {value}
    </div>
  )
}

export default TicSquare
