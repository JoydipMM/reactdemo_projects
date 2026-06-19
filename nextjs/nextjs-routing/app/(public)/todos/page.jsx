import React from 'react'
import TodosForm from '@/app/(public)/todos/components/TodosForm'
import TodosList from './components/TodosList'

const TodosPage = () => {
  return (
    <div>
        <h3>TodosPage</h3>
        <TodosForm/>
        <TodosList/>
        </div>
  )
}

export default TodosPage