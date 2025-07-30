import React, { useState } from 'react';
import './SimpleTodo.css';

const SimpleTodo = () => {

    const [todoData, setTodoData] = useState([]);
    const [todoInput, setTodoInput] = useState("");


    const todoFormSubmitEvent = (e) => {
        e.preventDefault();
        //console.log(!todoInput.trim());
        if(!todoInput.trim()) return

        const newTodo = {
            id: Date.now(),
            todoTitle:todoInput,
            completed: false,
        };

        setTodoData([...todoData, newTodo]);
        setTodoInput("");
    }



  return (
    <>
    <div className='todo-app-page'>
      <h2>Simple Todo with LocalStorage</h2>

      <div className='simple-todo-full-box'>
        <div className='todo-form-section'>
            <form onSubmit={todoFormSubmitEvent}>
                <input
                type='text'
                value={todoInput}
                onChange={(e)=>setTodoInput(e.target.value)}
                />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
        <div className='todo-list-section'>
            {todoData.length === 0  && "No Todo found........"}
            {todoData.map((todo)=>(
                <div className='todo-box' key={todo.id}>
                    <input type="checkbox" />
                    <input type='text' value={todo.todoTitle} />
                    <div className='todo-btn-section'>
                        <button style={{margin: "0px 5px" }}>Edit</button>
                        <button style={{margin: "0px 5px" }}>Delete</button>
                    </div>    
                </div>
            ))}
            
        </div>
      </div>


      </div>
    </>
  )
}

export default SimpleTodo
