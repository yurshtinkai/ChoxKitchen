import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import PhotoCarousel from './PhotoCarousel';
import CTASection from './CTASection';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <PhotoCarousel />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;
