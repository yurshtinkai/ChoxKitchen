import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './AboutPage.css';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Chef Maria Rodriguez',
      role: 'Head Chef',
      image: '👩‍🍳',
      description: '15 years of culinary experience with expertise in Mediterranean cuisine'
    },
    {
      name: 'Chef James Chen',
      role: 'Sous Chef',
      image: '👨‍🍳',
      description: 'Specializes in Asian fusion and modern cooking techniques'
    },
    {
      name: 'Sarah Johnson',
      role: 'Pastry Chef',
      image: '👩‍🍳',
      description: 'Creates amazing desserts with a focus on seasonal ingredients'
    },
    {
      name: 'Mike Thompson',
      role: 'Restaurant Manager',
      image: '👨‍💼',
      description: 'Ensures exceptional service and customer satisfaction'
    }
  ];

  const milestones = [
    { year: '2018', title: 'Restaurant Founded', description: 'Started with a vision to serve quality food' },
    { year: '2019', title: 'First Award', description: 'Won Best New Restaurant in the city' },
    { year: '2020', title: 'Online Delivery', description: 'Launched online ordering and delivery service' },
    { year: '2021', title: 'Expansion', description: 'Opened second location downtown' },
    { year: '2022', title: 'Sustainability', description: 'Committed to eco-friendly practices' },
    { year: '2023', title: 'Innovation', description: 'Introduced farm-to-table concept' },
    { year: '2024', title: 'Digital Platform', description: 'Launched modern ordering platform' }
  ];

  const values = [
    {
      icon: '🌱',
      title: 'Fresh Ingredients',
      description: 'We source only the freshest, highest quality ingredients from local suppliers and farms.'
    },
    {
      icon: '👨‍🍳',
      title: 'Expert Chefs',
      description: 'Our talented chefs bring years of experience and passion to every dish they create.'
    },
    {
      icon: '❤️',
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We listen to feedback and continuously improve.'
    },
    {
      icon: '🌍',
      title: 'Sustainability',
      description: 'We\'re committed to eco-friendly practices and supporting our local community.'
    }
  ];

  return (
    <div className="about-page">
      <Header />
      
      <main className="about-main">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">About FoodHub</h1>
              <p className="hero-description">
                We're passionate about creating exceptional dining experiences 
                that bring people together through the love of great food.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section">
          <div className="container">
            <div className="story-content">
              <div className="story-text">
                <h2 className="section-title">Our Story</h2>
                <p className="story-paragraph">
                  Founded in 2018, FoodHub began as a small family restaurant with a simple mission: 
                  to serve delicious, high-quality food made with love and care. What started as a 
                  humble kitchen has grown into a beloved dining destination that serves thousands 
                  of satisfied customers.
                </p>
                <p className="story-paragraph">
                  Our journey has been marked by continuous innovation, from introducing farm-to-table 
                  concepts to launching our modern digital ordering platform. We believe that great 
                  food brings people together and creates lasting memories.
                </p>
                <p className="story-paragraph">
                  Today, we're proud to serve our community with the same dedication to quality and 
                  service that has defined us from the beginning. Every dish tells a story, and we're 
                  honored to be part of yours.
                </p>
              </div>
              <div className="story-image">
                <div className="image-placeholder">
                  <div className="restaurant-emoji">🏪</div>
                  <div className="floating-elements">
                    <div className="floating-element">🍽️</div>
                    <div className="floating-element">👨‍🍳</div>
                    <div className="floating-element">🥘</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="container">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="container">
            <h2 className="section-title">Meet Our Team</h2>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="member-image">{member.image}</div>
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-description">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <div className="container">
            <h2 className="section-title">Our Journey</h2>
            <div className="timeline">
              {milestones.map((milestone, index) => (
                <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">{milestone.year}</div>
                    <h3 className="timeline-title">{milestone.title}</h3>
                    <p className="timeline-description">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Menu Items</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">6</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Team Members</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Experience FoodHub?</h2>
              <p className="cta-description">
                Join thousands of satisfied customers and discover why we're the city's favorite restaurant.
              </p>
              <div className="cta-buttons">
                <button className="btn-primary btn-large">View Our Menu</button>
                <button className="btn-secondary btn-large">Make a Reservation</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
