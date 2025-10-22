import React, { useState, useEffect } from 'react';

const PhotoCarousel = () => {
  const photos = [
    {
      id: 1,
      image: '🍕',
      title: 'Authentic Italian Pizza',
      description: 'Hand-tossed dough with fresh mozzarella and basil'
    },
    {
      id: 2,
      image: '🍔',
      title: 'Gourmet Burgers',
      description: 'Juicy beef patties with premium toppings and artisanal buns'
    },
    {
      id: 3,
      image: '🍜',
      title: 'Asian Fusion',
      description: 'Traditional recipes with modern culinary techniques'
    },
    {
      id: 4,
      image: '🥗',
      title: 'Fresh Salads',
      description: 'Crisp greens with seasonal vegetables and house dressings'
    },
    {
      id: 5,
      image: '🍰',
      title: 'Decadent Desserts',
      description: 'Sweet treats crafted by our pastry chefs'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        setIsTransitioning(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [photos.length]);

  const goToSlide = (index) => {
    if (index !== currentIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <section className="photo-carousel-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Signature Dishes</h2>
          <p className="section-description">
            Discover our most popular and delicious creations
          </p>
        </div>
        
        <div className="carousel-container">
          <div className={`carousel-slide ${isTransitioning ? 'transitioning' : ''}`}>
            <div className="slide-content">
              <div className="slide-image">
                <div className="food-emoji">{photos[currentIndex].image}</div>
              </div>
              <div className="slide-info">
                <h3 className="slide-title">{photos[currentIndex].title}</h3>
                <p className="slide-description">{photos[currentIndex].description}</p>
                <button className="btn-primary">Order This Dish</button>
              </div>
            </div>
          </div>
          
          <div className="carousel-indicators">
            {photos.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          
          <div className="carousel-navigation">
            <button 
              className="nav-btn prev-btn"
              onClick={() => goToSlide((currentIndex - 1 + photos.length) % photos.length)}
            >
              ‹
            </button>
            <button 
              className="nav-btn next-btn"
              onClick={() => goToSlide((currentIndex + 1) % photos.length)}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
