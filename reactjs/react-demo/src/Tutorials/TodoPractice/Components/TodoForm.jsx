import React, { useState } from 'react';


const TodoForm = () => {
 const [todoInput, setTodoInput] = useState("");
  const addTodoEvent = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <div className='todo-form-section'>
            <form onSubmit={addTodoEvent}>
                <input
                type='text'
                value={todoInput}
                onChange={(e)=>setTodoInput(e.target.value)}
                />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    </>
  )
}

export default TodoForm
