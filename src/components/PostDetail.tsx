import { useState } from 'react';
import { usePostsStore } from '../store/Posts.ts';
import { Post } from '../store/Posts';

const PostDetail = ({ post }: { post: Post }) => {
  const { title, body, id } = post;
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedBody, setUpdatedBody] = useState(body);

  const { deletePost, updatePost } = usePostsStore();

  // Inline style objects
  const containerStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '12px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '8px',
  };

  const bodyStyle = {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.5',
  };

  const deleteButtonStyle = {
    marginTop: '12px',
    padding: '8px 16px',
    backgroundColor: '#ff6b6b',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  };

  const editButtonStyle = {
    marginTop: '12px',
    padding: '8px 16px',
    backgroundColor: 'teal',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'teal 0.3s ease',
  };

  const handleDelete = (id: number) => {
    deletePost(id);
  };

  const handleSave = () => {
    updatePost(id, { title: updatedTitle, body: updatedBody });
    setIsEditing(false);
  };
  return (
    <div style={containerStyle}>
      {isEditing ? (
        <>
          <input
            type='text'
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            style={{ display: 'block', marginBottom: '8px', padding: '8px' }}
          />
          <textarea
            value={updatedBody}
            onChange={(e) => setUpdatedBody(e.target.value)}
            style={{
              display: 'block',
              width: '100%',
              padding: '8px',
              marginBottom: '8px',
            }}
          />
          <button onClick={handleSave} style={editButtonStyle}>
            Save
          </button>
          <button onClick={() => setIsEditing(false)} style={deleteButtonStyle}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <h5 style={titleStyle}>{title}</h5>
          <span style={bodyStyle}>{body}</span>
          <div style={{ marginTop: '12px' }}>
            <button onClick={() => setIsEditing(true)} style={editButtonStyle}>
              Edit
            </button>
            <button onClick={() => handleDelete(id)} style={deleteButtonStyle}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetail;
