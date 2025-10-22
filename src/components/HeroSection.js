import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Delicious Food</span>
              <span className="title-line">Delivered Fresh</span>
            </h1>
            <p className="hero-description">
              Experience culinary excellence with our premium selection of dishes, 
              crafted by expert chefs and delivered straight to your door.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary btn-large">Order Now</button>
              <button className="btn-secondary btn-large">View Menu</button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="floating-card card-1">
              <div className="card-icon">🍕</div>
              <div className="card-text">Fresh Pizza</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">🍔</div>
              <div className="card-text">Gourmet Burgers</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">🍜</div>
              <div className="card-text">Asian Cuisine</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
