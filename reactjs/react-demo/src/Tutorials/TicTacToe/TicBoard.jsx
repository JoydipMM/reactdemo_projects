import React, { useState } from 'react'
import TicSquare from './TicSquare'
import './TicStyle.css';

const TicBoard = () => {

    const [ state, setState ] = useState(Array(9).fill(null));
    const [ isXturn, setIsXturn ] = useState(true)
    //console.log(state);


    const checkWinner =() => {
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        for(let logic of winnerLogic){
            const [a,b,c] = logic;
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
                return true
            }
        }

        return false;
    }
 
    const isWinner = checkWinner()

    const boxClickEvent = (index) =>{
        //console.log(index);
        const copyState = [...state];
       if(copyState[index] !== null){
        return;
       }
       copyState[index] = isXturn ? "X" : "O";
       //console.log(copyState)
       setState(copyState);
       setIsXturn((prev)=> !prev);
        
    }

  return (
    <>
    {/* {isWinner ? "X Winner" : "O Winner"} */}
    <div className='board'>
      <div className='board-sqaure-row'>
        <TicSquare onClick={() =>boxClickEvent(0)} value={state[0]}/>
        <TicSquare onClick={() =>boxClickEvent(1)} value={state[1]}/>
        <TicSquare onClick={() =>boxClickEvent(2)} value={state[2]}/>
      </div>
      <div className='board-sqaure-row'>
        <TicSquare onClick={() =>boxClickEvent(3)} value={state[3]}/>
        <TicSquare onClick={() =>boxClickEvent(4)} value={state[4]}/>
        <TicSquare onClick={() =>boxClickEvent(5)} value={state[5]}/>
      </div>
      <div className='board-sqaure-row'>
        <TicSquare onClick={() =>boxClickEvent(6)} value={state[6]}/>
        <TicSquare onClick={() =>boxClickEvent(7)} value={state[7]}/>
        <TicSquare onClick={() =>boxClickEvent(8)} value={state[8]}/>
      </div>
    </div>
    </>
    
  )
}

export default TicBoard
