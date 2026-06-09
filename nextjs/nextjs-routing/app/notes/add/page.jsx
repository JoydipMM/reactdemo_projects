"use client"; 
import React, {useState} from 'react'

const NoteAddPage = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

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
    </div>
  )
}

export default NoteAddPage
