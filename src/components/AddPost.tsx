import { useState } from 'react';
import { usePostsStore } from '../store/Posts.ts';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { addPost } = usePostsStore();

  const handleAddPost = () => {
    if (title && body) {
      addPost({ title, body });
      setTitle('');
      setBody('');
    }
  };

  const containerStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '12px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    marginBottom: '8px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <h3>Add New Post</h3>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Post title'
        style={inputStyle}
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder='Post body'
        style={{ ...inputStyle, height: '100px' }}
      />
      <button onClick={handleAddPost} style={buttonStyle}>
        Add Post
      </button>
    </div>
  );
};

export default AddPost;
