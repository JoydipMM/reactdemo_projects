import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoCard from './TodoCard';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <h3>Todo list</h3>
      {todos.map((todo)=> <div key={todo.id}>
        <TodoCard todo={todo} />
      </div>)}
    </div>
  )
}

export default TodoList
