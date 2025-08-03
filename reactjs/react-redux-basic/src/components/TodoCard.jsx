import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, editTodo  } from '../redux/todoSlice';

const TodoCard = ({todo}) => {
    const dispatch = useDispatch();
    const [isEditable, setIsEditable] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);
    const editEvent = () => {
        setIsEditable((prev)=> !prev)
        setEditedText(todo.text)
    }
    const UpdateEvent = () => {
      if (editedText.trim() !== '') {
        dispatch(editTodo({id: todo.id, text:editedText}))
      }
        setIsEditable(false);
    }
  return (
    <div>
      {todo.text} 
      {isEditable && 
      <input 
      type="text"
      value={editedText}
      onChange={(e)=>setEditedText(e.target.value)}
      /> 
      }
      {isEditable ? <>
      <button onClick={UpdateEvent}>Save</button>
      <button onClick={editEvent}>Cancel</button>
      </> : <button onClick={editEvent}>Edit</button> }
      <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
    </div>
  )
}

export default TodoCard
