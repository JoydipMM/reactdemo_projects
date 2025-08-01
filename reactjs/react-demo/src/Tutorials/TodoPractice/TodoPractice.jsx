import React, { useState } from 'react'
import './TodoPractice.css';
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'

const TodoPractice = () => {
  return (
    <>
    <div className='todo-app-page'>
      <h2>Todo Practice</h2>
      <div className='simple-todo-full-box'>
        <TodoForm/>
        <div className='todo-list-section'>
            <div className="todo-box-row">
                <TodoList/>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default TodoPractice
