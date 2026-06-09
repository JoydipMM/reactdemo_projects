"use client"; 
import React, {useEffect, useState} from 'react'

const NoteAddPage = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [notes, setNotes] = useState([]);

  const getNotes = async() => {
    try{
      const res = await fetch('/api/notes', {
      method: 'GET',
      headers:{
          "content-type": "application/json",
        }
      });
      const data = await res.json();
      setNotes(data);
    }catch(err){

    }finally{

    }

  }

  const noteFormAction = async(e) => {
    e.preventDefault()
    console.log(title, content);

    if(!title || !content){
      setError("Title and Content are required");
      return;
    };

    try{
      setIsLoading(true);
      const res = await fetch('/api/notes', {
        method: 'POST',
        headers:{
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, content })
      })

      if(res.ok){
        setIsLoading(false);
        setSuccess("Note added successfully");
        getNotes();
        setTitle('');
        setContent('');
        setTimeout(() => {
          setSuccess('');
        }, 2000);
        const data = await res.json();
        console.log(data);
      }

    }catch(err){
      setError(err.message);
      setIsLoading(false);
    }finally{
      setIsLoading(false);
      setTitle('');
      setContent('');
    }
  }


  const noteEditAction = async (note) => {
    console.log(note);
  }

  const noteDeleteAction = async (id) => {
    console.log(id);
    if(!confirm("Are you sure you want to delete this note?")) return;
    try{
      const res = await fetch(`/api/notes/${id}`, {
        method:'DELETE',
        headers:{
          "content-type": "application/json",
        }
      });
      if(res.ok){
        getNotes();
      }
    }catch(err){
      console.log(err.message);
    }
  }

  


  useEffect(() => {
    getNotes();
  }, []);


  return (
    <div>
      <h2>NoteAddPage</h2>
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
      <form onSubmit={noteFormAction}>
        <div>
          <label>Title</label>
          <input type="text" value={title} placeholder='Title' name="title" onChange={(e)=> setTitle(e.target.value) } />
        </div>
        <div>
          <label>Content</label>
          <textarea rows={5} value={content} placeholder='Content' onChange={(e)=> setContent(e.target.value) }/>
        </div>
        <div>
          <input type='submit' disabled={isLoading} value="SUBMIT" />
        </div>
      </form>


      {notes.length === 0 ? (<>
      <h3>No notes</h3>
      </>) : (
        notes?.length > 0 && notes.map((note, index)=>(
        <div key={index}>
          <h4>{note.title}</h4>
          <p>{note.content}</p>
          <p>{new Date(note.createdAt).toLocaleString()}</p>
          <button onClick={() => noteEditAction(note)}>Edit</button>
          <button onClick={() => noteDeleteAction(note._id)}>Delete</button>
          <hr/>
        </div>
        ))
      ) }

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default NoteAddPage
