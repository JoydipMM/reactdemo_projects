"use client"; 
import React, {useEffect, useState} from 'react'

const NoteAddPage = () => {

  // this are the list of states with default values
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [notes, setNotes] = useState([]);
  const [editid, setEditId] = useState(null);

  // get notes function start
  const getNotes = async() => {
    try{
      // here we are using fetch api, for that method is need to be declared
      const res = await fetch('/api/notes', {
      method: 'GET',
      headers:{
          "content-type": "application/json",
        }
      });
      const data = await res.json();
      setNotes(data);
      setIsLoading(false);
    }catch(err){
      console.log(err.message);
    }finally{
      setIsLoading(false);
    }
  }

  const noteFormAction = async(e) => {
    e.preventDefault()
    console.log(title, content);

    // validation for title and content
    if(!title || !content){
      setError("Title and Content are required");
      return;
    };

    // if above validation is true then we need to call api
    try{
      setIsLoading(true);
      setEditId(null);

      if(editid){

        // edit note
        const res = await fetch(`/api/notes/${editid}`, {
          method: "PUT",
          headers: {
            "content-type" : "application/json",
          },
          body: JSON.stringify({ title, content })
        })

        if(res.ok){
          setIsLoading(false);
          setSuccess("Note update successfully");
          getNotes();
          setTitle('');
          setContent('');
          setEditId(null);
          setTimeout(() => {
            setSuccess('');
          }, 2000);
        }

      }else{

        // add note 
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

  // edit note function start
  const noteEditAction = async (note) => {
    console.log(note);
    setEditId(note._id);
    setTitle(note.title);
    setContent(note.content);
  }
  // edit note function ended

  // cancel edit function start
  const cancelEditAction = () => {
    setEditId(null);
    setTitle('');
    setContent('');
  }
  // cancel edit function ended


  // delete note function start
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
        getNotes(); // if delete is success then we need to call getNotes function to show the updated notes
      }
    }catch(err){
      console.log(err.message);
    }
  }
  // delete note function ended


  // update note status start
  const updateNoteStatusAction = async (id, notestatus) => {
    console.log(id);
    //if(!confirm("Are you sure you want to delete this note?")) return;
    try{
      const res = await fetch(`/api/notes/${id}`, {
        method:'PATCH',
        headers:{
          "content-type": "application/json",
        },
        body: JSON.stringify({
          notestatus: notestatus,
        }),
      });
      if(res.ok){
        getNotes(); // if delete is success then we need to call getNotes function to show the updated notes
      }
    }catch(err){
      console.log(err.message);
    }
  }
  // update note status ended
  

  // call get all note function on page load/refresh
  useEffect(() => {
    getNotes();
  }, []);


  return (
    <div>
      <h2>NoteAddPage</h2>
      {/* notes add/edit section start */}
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
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
          <button type='submit' disabled={isLoading}>
            {isLoading ? "Adding..." : editid ? "Update Note" : "Add Note"}
          </button>
          {editid && <button onClick={cancelEditAction}>Cancel</button>}
        </div>
      </form>
      {/* notes add/edit section ended */}


      {/* notes list section start */}
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
          <button
          className={`py-2 px-2 mx-1 ${note.notestatus === "read" ? "bg-green-500" : "bg-red-500"}`}
            onClick={() =>
              updateNoteStatusAction(
                note._id,
                note.notestatus === "read"
                  ? "unread"
                  : "read"
              )
            }
          >
            {note.notestatus === "read"
              ? "Mark as unread"
              : "Mark as read"}
          </button>
          <hr/>
        </div>
        ))
      ) }
      {/* notes list section start */}

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
