// pages/index.js
import { useEffect } from 'react';
import { usePostsStore } from './store/Posts.ts';
import PostList from './components/PostList.js';
const App = () => {
  const { posts, fetchPosts } = usePostsStore();
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <div>
        <PostList posts={posts} />
      </div>
      {posts.length === 0 ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '500px',
          }}>
          <h5>Create Some Posts</h5>
        </div>
      ) : null}
    </div>
  );
};

export default App;
