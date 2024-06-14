import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';  
import { Link } from 'react-router-dom';
import { BsCart4 } from "react-icons/bs";

function App() {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div className="main">
      <div className="welcome-message">
        Welcome {username}!!
      </div>
      <div >
        <Link to="/Cart" className="cart"><BsCart4 /></Link>
      </div>
      <Outlet />
      <nav className="navbar">
        <div className="div1">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/Menu" className="nav-link">Menu</Link>
          <Link to="/" className="nav-link">Contact</Link>
          <Link to="/Login" className="nav-link">Login</Link>
        </div>
      </nav>
    </div>
  );
}

export default App;
