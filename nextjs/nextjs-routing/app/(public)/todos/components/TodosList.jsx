"use client";
import React from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { listTodo } from '@/actions/todoActions';
import TodoCard from './TodoCard';

const TodosList = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["get_todos"],
    queryFn: ()=> listTodo(),
    placeholderData: keepPreviousData,
  });
  const todos = data?.todolist || [];
  const todosmsg = data?.message || "";
  return (
    <div>
      <h2>TodosList</h2>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      <ul>
        {todos && todos.length === 0 && <p>No todos found</p>}
        {todos && todos.map((todo) => (
          <li key={todo._id}>
            {/* {todo.title} */}
            <TodoCard todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodosList