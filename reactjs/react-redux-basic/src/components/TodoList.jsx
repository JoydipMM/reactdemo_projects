import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../redux/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Todo list</h3>
      {todos.map((todo)=> <div key={todo.id}>
        {todo.text} <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
      </div>)}
    </div>
  )
}

export default TodoList
