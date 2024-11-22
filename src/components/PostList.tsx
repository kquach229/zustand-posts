import PostDetail from './PostDetail';
import AddPost from './AddPost';
import { Post } from '../store/Posts';
const PostList = ({ posts }: { posts: Post[] }) => {
  // Inline styles
  const listStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px', // Adds spacing between each post
    padding: '16px',
    maxWidth: '600px',
    margin: '0 auto', // Centers the list horizontally
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={listStyle}>
      <AddPost />
      <h6>Number of posts: {posts.length}</h6>
      {posts.map((post) => (
        <PostDetail key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
