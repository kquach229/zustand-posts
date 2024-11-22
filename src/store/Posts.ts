import { create } from 'zustand';

export interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsStore {
  posts: Post[];
  fetchPosts: () => Promise<void>;
  deletePost: (postId: number) => void;
  updatePost: (
    postId: number,
    updatedData: { title: string; body: string }
  ) => void;
  addPost: (dataObj: { title: string; body: string }) => void;
}

export const usePostsStore = create<PostsStore>((set, get) => ({
  posts: [],
  fetchPosts: async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_page=1&_limit=18'
      );
      const data = await response.json();
      set(() => ({ posts: data }));
    } catch (err) {
      console.error(err);
    }
  },
  deletePost: (postId) => {
    const { posts } = get();
    const filteredPosts = posts.filter((post) => post.id !== postId);
    set({ posts: filteredPosts });
  },
  updatePost: (postId, updatedData) => {
    const { posts } = get();
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, ...updatedData } : post
    );
    set({ posts: updatedPosts });
  },
  addPost: (dataObj) => {
    const randomId = Math.floor(Math.random() * 1000 + 1);

    const newPost = {
      id: randomId,
      title: dataObj.title,
      body: dataObj.body,
    };

    set((state) => ({
      posts: [newPost, ...state.posts],
    }));
  },
}));
