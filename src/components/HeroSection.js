import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Professional BorderBeam component - Subtle and elegant
const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "#fbbf24",
  colorTo = "#f59e0b",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderThickness = 1,
  opacity = 1,
  glowIntensity = 0,
  beamBorderRadius,
  pauseOnHover = false,
  speedMultiplier = 1,
}) => {
  const actualDuration = speedMultiplier ? duration / speedMultiplier : duration;

  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden">
      <motion.div
        className={`absolute inset-0 rounded-[inherit] ${pauseOnHover ? 'group-hover:animation-play-state-paused' : ''} ${className || ''}`}
        style={{
          background: `linear-gradient(90deg, transparent, ${colorFrom}, ${colorTo}, transparent)`,
          opacity: opacity * 0.6, // More subtle opacity
          borderRadius: beamBorderRadius ? `${beamBorderRadius}px` : undefined,
          transform: 'translateX(-100%)',
          ...style,
        }}
        animate={{ 
          transform: ['translateX(-100%)', 'translateX(100%)']
        }}
        transition={{
          repeat: Infinity,
          ease: "easeInOut",
          duration: actualDuration,
          delay: -delay,
          ...transition,
        }}
      />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center" id="home">
      {/* Background overlay with transparency */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      {/* Gold accent elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400/15 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-600/25 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Text content */}
          <div className="text-center md:text-left py-12 md:py-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              <span className="block animate-slideInUp animation-delay-0">
                <span className="text-yellow-400">Delicious</span> Food
              </span>
              <span className="block animate-slideInUp animation-delay-200">
                Delivered <span className="text-yellow-400">Fresh</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fadeInUp animation-delay-400 leading-relaxed">
              Experience culinary excellence with our premium selection of dishes,
              crafted by expert chefs and delivered straight to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start animate-fadeInUp animation-delay-600 items-center">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-4 px-10 rounded-full shadow-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl border border-yellow-400/30 min-w-[160px]">
                Order Now
              </button>
              <div className="relative group">
                <Link to="/menu" className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold py-4 px-10 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:-translate-y-1 relative min-w-[160px] text-center">
                  View Menu
                </Link>
                <BorderBeam
                  duration={4}
                  colorFrom="#fbbf24"
                  colorTo="#f59e0b"
                  opacity={0.8}
                  speedMultiplier={1}
                />
              </div>
            </div>
          </div>

          {/* Image section */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative">
              {/* Gold frame effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-30 animate-pulse"></div>
              <img
                src="logo.jpg"
                alt="Delicious food served by CHOX Kitchen"
                className="relative rounded-xl shadow-2xl max-w-full h-auto max-h-[500px] object-cover border-2 border-yellow-400/20"
              />
              {/* Floating gold elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-500 rounded-full animate-bounce animation-delay-500"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
      
      {/* Animation styles */}
      <style>{`
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
};

export default HeroSection;