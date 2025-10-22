import React from 'react';

const CTASection = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-background">
        <div className="gradient-overlay"></div>
      </div>
      
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">Ready to Order?</h2>
            <p className="cta-description">
              Join thousands of satisfied customers who trust FoodHub for their daily meals. 
              Download our app or order online now!
            </p>
            
            <div className="cta-buttons">
              <button className="btn-primary btn-large">
                📱 Download App
              </button>
              <button className="btn-secondary btn-large">
                🛒 Order Online
              </button>
            </div>
            
            <div className="cta-stats">
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Menu Items</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">30min</div>
                <div className="stat-label">Avg Delivery</div>
              </div>
            </div>
          </div>
          
          <div className="cta-visual">
            <div className="floating-elements">
              <div className="floating-element element-1">🍕</div>
              <div className="floating-element element-2">🍔</div>
              <div className="floating-element element-3">🍜</div>
              <div className="floating-element element-4">🥗</div>
              <div className="floating-element element-5">🍰</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
