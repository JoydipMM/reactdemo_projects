import React, { useState } from 'react'

const TodoList = () => {

  return (
    <>
      <div className={`todo-box`}>
        <input type="checkbox"
        />
        <input 
        type='text'
        />
        <div className='todo-btn-section'>
            <button
            style={{ margin: "0px 5px" }}
            >
            Edit
            </button>
            <button style={{margin: "0px 5px" }}>Delete</button>
        </div>    
    </div>
    </>
  )
}

export default TodoList
