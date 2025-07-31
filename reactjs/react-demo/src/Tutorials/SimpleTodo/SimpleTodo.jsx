import React, { useEffect, useState } from 'react';
import './SimpleTodo.css';

const SimpleTodo = () => {

    const [todoData, setTodoData] = useState([]);
    const [todoInput, setTodoInput] = useState("");
    const [editableTodoId, setEditableTodoId] = useState(null);

    const addNewTodo = (todoTitle)=>{
        const newTodo = {
            id: Date.now(),
            todoTitle:todoTitle,
            completed: false,
        };
        setTodoData([...todoData, newTodo]);
    }

    const updateTodo = (id, todoTitle) => {
        setTodoData((prevTodos)=> prevTodos.map((todo)=>(
            todo.id === id ? {...todo, todoTitle: todoTitle} : todo
        )))
    }

    const deleteTodo = (id) => {
        setTodoData((prev)=>prev.filter((prevtodo)=>prevtodo.id !== id))
    }

    const completedTodo = (id)=> {
        setTodoData((prev)=>prev.map((todo)=>todo.id === id ? {...todo, completed:!todo.completed} : todo))
    }

    const todoFormSubmitEvent = (e) => {
        e.preventDefault();
        //console.log(!todoInput.trim());
        if(!todoInput.trim()) return
        addNewTodo(todoInput);
        setTodoInput("");
    }

    useEffect(()=>{
        const todos = JSON.parse(localStorage.getItem("localTodos"));
        if(todos && todos.length > 0){
            setTodoData(todos);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("localTodos", JSON.stringify(todoData))
    },[todoData])



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
            {todoData.map((todo)=>{
                const isEditable = editableTodoId === todo.id;
                //console.log("Todo ID ",todo.id, " Editable: ",isEditable);
                
                return(
                <div className={`todo-box ${todo.completed? "completed" :""}`} key={todo.id}>
                    <input type="checkbox" 
                    checked={todo.completed}
                    onChange={()=>completedTodo(todo.id)}
                    />
                    <input 
                    type='text' 
                    value={todo.todoTitle} 
                    readOnly={!isEditable}
                    onChange={(e)=>updateTodo(todo.id, e.target.value)}
                    className={`${!isEditable? "": "editable"}`}
                    />
                    <div className='todo-btn-section'>
                        <button
                        style={{ margin: "0px 5px" }}
                        onClick={() =>isEditable ? setEditableTodoId(null) : setEditableTodoId(todo.id)}
                        disabled={todo.completed}
                        >
                        {isEditable ? "Save" : "Edit"}
                        </button>
                        <button style={{margin: "0px 5px" }} onClick={()=>deleteTodo(todo.id)}>Delete</button>
                    </div>    
                </div>
                )
                })
            }
            
        </div>
      </div>


      </div>
    </>
  )
}

export default SimpleTodo
