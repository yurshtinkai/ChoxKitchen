import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">🍽️ FoodHub</h3>
            <p className="footer-description">
              Delicious food delivered fresh to your doorstep. 
              Experience culinary excellence with every bite.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📧</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#delivery">Delivery Info</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="contact-info">
              <p>📞 +1 (555) 123-4567</p>
              <p>📧 info@foodhub.com</p>
              <p>📍 123 Food Street, City, State 12345</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Hours</h4>
            <div className="hours">
              <p>Monday - Friday: 10AM - 10PM</p>
              <p>Saturday - Sunday: 9AM - 11PM</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 FoodHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
