import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./index.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home/Home'
import Posts from './routes/Posts/Posts'
import NewPost from "./routes/Posts/NewPosts"
import OldPosts from "./routes/Posts/OldPosts"

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
        path:"/Posts",
        element: <Posts />,
        children: [ {
          path: "NewPosts",
          element: <NewPost />
        },
        {
          path: "OldPosts",
          element: <OldPosts />
        }
        ]
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