import React, { useEffect, useState } from 'react'
import Todos from './Components/Todos'
import TodoForm from './Components/TodoForm'
import { TodoContextProvider } from './Context';
import './Todo.css';

const Todo = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
    }

    const updateTodo = (id, todo) => {
        setTodos((prev)=> prev.map((prevTodo)=>(
            prevTodo.id === id ? todo : prevTodo 
        )))
    }

    const deleteTodo = (id) => {
        setTodos((prevTodo) => prevTodo.filter((todo)=> todo.id !== id ));
    }

    const toggleComplete = (id) => {
        setTodos((prev)=> prev.map((prevtodo)=> prevtodo.id === id ? {...prevtodo, completed: !prevtodo.completed } : prevtodo))
    }

    useEffect(()=>{
        const todos = JSON.parse(localStorage.getItem("reactDemoTodos"));
        if(todos && todos.length > 0 ){
            setTodos(todos)
        } 
    },[])

    useEffect(()=>{
        localStorage.setItem("reactDemoTodos", JSON.stringify(todos))
    }, [todos])

  return (
    <>
      <h2>Todo</h2>
      <TodoContextProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <TodoForm/>

      {todos.map((todo)=>(
        <div key={todo.id}>
            <Todos todo={todo}/>
        </div>
        ))}
      
      </TodoContextProvider>
    </>
  )
}

export default Todo
