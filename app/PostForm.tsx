"use client"
import React, { useState } from 'react';
import { addPost } from '../app/PostService';

const PostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addPost(title, content);
      setMessage('Post berhasil ditambahkan!');
      setTitle('');
      setContent('');
    } catch {
      setMessage('Gagal menambahkan post');
    }
  };

  return (
    <div>
      <h2>Tambah Post Baru</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Judul:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Konten:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
};

export default PostForm;
