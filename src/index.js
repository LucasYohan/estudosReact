import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./index.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/home'
import NewPost from './routes/newPost'

import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path:"/new",
        element: <NewPost />
      }
    ]
  }
]) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();