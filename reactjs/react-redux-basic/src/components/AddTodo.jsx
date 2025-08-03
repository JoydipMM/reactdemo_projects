import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddTodo = () => {
    const [todoInput, setTodoInput] = useState("");
    const dispatch = useDispatch();
    const addTodoEvent = (e) => {
        e.preventDefault();
        dispatch(addTodo(todoInput));
        setTodoInput("");
    }
  return (
    <div>
      <div className='todo-form-section'>
            <form onSubmit={addTodoEvent}>
                <input
                type='text'
                value={todoInput}
                onChange={(e)=>setTodoInput(e.target.value)}
                />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    </div>
  )
}

export default AddTodo
