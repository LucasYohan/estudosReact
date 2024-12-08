import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import "./Posts.css"

const Posts = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Página de Posts</h1>
      <div>
        <button onClick={() => navigate('NewPosts')}>Novo Post</button>
        <button onClick={() => navigate('OldPosts')}>Posts Antigos</button>
      </div>

      <Outlet />
    </div>
  );
};

export default Posts;
