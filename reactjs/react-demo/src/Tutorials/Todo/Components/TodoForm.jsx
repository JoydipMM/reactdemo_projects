import React, { useState } from 'react'
import { useTodoContext } from '../Context';

const TodoForm = () => {

    const [todo, setTodo] = useState("");
    const {addTodo} = useTodoContext();

    const add = (e) => {
        e.preventDefault();
        if(!todo) return
        addTodo({todo:todo, completed: false});
        setTodo("");
    }

  return (
    <>
      <h4>Todo Form</h4>
      <form onSubmit={add}>

        <input
        type="text"
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
        />
        <button type='sumbit'>Add</button>
      </form>
    </>
  )
}

export default TodoForm
