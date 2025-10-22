import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <Link to="/" className="logo-link">
            <h1 className="logo">🍽️ FoodHub</h1>
          </Link>
        </div>
        
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/about" className="nav-link">About</Link>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        
        <div className="nav-actions">
          <Link to="/menu" className="btn-primary">Order Now</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;