// pages/index.tsx
import React from 'react';
import PostList from '../app/PostList';
import PostForm from '../app/PostForm';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Blog Post</h1>
      <PostForm />
      <PostList />
    </div>
  );
};

export default HomePage;
