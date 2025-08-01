import React, { useState } from 'react';


const TodoForm = () => {


  return (
    <>
      <div className='todo-form-section'>
            <form>
                <input
                type='text'
                />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    </>
  )
}

export default TodoForm
