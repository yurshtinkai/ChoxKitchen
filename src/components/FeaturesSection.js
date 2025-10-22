import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Get your food delivered in 30 minutes or less with our express delivery service.'
    },
    {
      icon: '🍽️',
      title: 'Fresh Ingredients',
      description: 'We use only the freshest, highest quality ingredients sourced from local suppliers.'
    },
    {
      icon: '👨‍🍳',
      title: 'Expert Chefs',
      description: 'Our dishes are prepared by professional chefs with years of culinary experience.'
    },
    {
      icon: '💳',
      title: 'Easy Payment',
      description: 'Secure and convenient payment options including digital wallets and card payments.'
    }
  ];

  return (
    <section className="features-section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose CHOX?</h2>
          <p className="section-description">
            We're committed to providing you with the best dining experience possible
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
