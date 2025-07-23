import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const NewPost = ({ setPosts }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");

  const slugTitle=(title)=>{
    return title.toLowerCase().toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')   // Remove special characters
    .replace(/\s+/g, '-')       // Replace spaces with hyphens
    .replace(/--+/g, '-');      // Replace multiple dashes with single;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedSlug = slugTitle(title);

    setPosts(prev => [
      ...prev,
      {
        id: Date.now(),
        title,
        slug: generatedSlug,
        content,
      }
    ]);

    navigate("/");
  };


  return (
    <div className="new-post">
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        {slugTitle(title)}
        <textarea
          placeholder="Post content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">Publish</button>
      </form>
    </div>
  )
}

export default NewPost
