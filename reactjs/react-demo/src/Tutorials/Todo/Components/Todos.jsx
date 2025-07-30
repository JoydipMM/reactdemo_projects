import React, { useState } from 'react'
import { useTodoContext } from '../Context';


const Todos = ({todo}) => {

    const { updateTodo, deleteTodo, toggleComplete } = useTodoContext();
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoText, setTodoTitle] = useState(todo.todo);

    const editTodoEvent = () => {
        updateTodo(todo.id, {...todo, todo: todoText});
        setIsTodoEditable(!isTodoEditable)
    }

  return (
    <>
      <div className={`todobox ${todo.completed ? "completed" : ""}`}>
        <input 
        type='checkbox'
        onChange={() =>toggleComplete(todo.id)}
        checked={todo.completed}
        />
        <input 
        type='text'
        value={todoText}
        onChange={(e) =>setTodoTitle(e.target.value)}
        readOnly={!isTodoEditable}
        className={`${isTodoEditable ? "editable" : "noteditable"}`}
        />
        <button onClick={editTodoEvent}>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </div>
    </>
  )
}

export default Todos