"use client"
import React, { useEffect, useState } from 'react';
import { fetchPosts, Post } from '../app/PostService';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await fetchPosts();
        setPosts(posts);
      } catch (error) {
        setError('Failed to load posts');
      }
    };
    getPosts();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Daftar Post</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>Created at: {new Date(post.created_at).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

