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
    </div>
  );
};

export default App;
