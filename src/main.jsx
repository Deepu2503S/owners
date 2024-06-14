import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import Cart from './Cart.jsx';
import Menu from './Menu.jsx';
import Home from './Home.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'Menu',
        element: <Menu />,
      },
      {
        path: 'SignUp',
        element: <SignUp />,
      },
      {
        path: 'Login',
        element: <Login />, 
      },
      {
        path : 'Cart',
        element : <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
