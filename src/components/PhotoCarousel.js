import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 3D Marquee Background Component
const ThreeDMarqueeBackground = () => {
  const foodImages = [
    { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop&q=80', alt: 'Pizza' },
    { src: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop&q=80', alt: 'Burger' },
    { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop&q=80', alt: 'Pasta' },
    { src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop&q=80', alt: 'Salad' },
    { src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&q=80', alt: 'Dessert' },
    { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop&q=80', alt: 'Pancakes' },
    { src: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=600&fit=crop&q=80', alt: 'Sushi' },
    { src: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop&q=80', alt: 'Tacos' },
    { src: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop&q=80', alt: 'Steak' },
    { src: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=600&fit=crop&q=80', alt: 'Ramen' },
    { src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&q=80', alt: 'Cake' },
    { src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop&q=80', alt: 'Sandwich' }
  ];

  const duplicatedImages = [...foodImages, ...foodImages];
  const cols = 4;
  const groupSize = Math.ceil(duplicatedImages.length / cols);
  const imageGroups = Array.from({ length: cols }, (_, index) =>
    duplicatedImages.slice(index * groupSize, (index + 1) * groupSize)
  );

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <div
        className="flex w-full h-full items-center justify-center"
        style={{
          transform: "rotateX(55deg) rotateY(0deg) rotateZ(45deg)",
        }}
      >
        <div className="w-full overflow-hidden scale-90 sm:scale-100">
          <div className="relative grid h-full w-full origin-center grid-cols-2 sm:grid-cols-4 gap-6">
            {imageGroups.map((imagesInGroup, idx) => (
              <motion.div
                key={`column-${idx}`}
                animate={{ y: idx % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: idx % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="flex flex-col items-center gap-8 relative"
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-white/20" />
                {imagesInGroup.map((image, imgIdx) => (
                  <div key={`img-${imgIdx}`} className="relative">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-white/20" />
                    <motion.img
                      whileHover={{ y: -10, scale: 1.05 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className="aspect-[4/3] w-full max-w-[200px] rounded-xl object-cover ring-2 ring-white/10 shadow-2xl hover:shadow-white/20"
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PhotoCarousel = () => {
  const photos = [
    { id: 1, image: '🍕', title: 'Authentic Italian Pizza', description: 'Hand-tossed dough with fresh mozzarella and basil' },
    { id: 2, image: '🍔', title: 'Gourmet Burgers', description: 'Juicy beef patties with premium toppings and artisanal buns' },
    { id: 3, image: '🍜', title: 'Asian Fusion', description: 'Traditional recipes with modern culinary techniques' },
    { id: 4, image: '🥗', title: 'Fresh Salads', description: 'Crisp greens with seasonal vegetables and house dressings' },
    { id: 5, image: '🍰', title: 'Decadent Desserts', description: 'Sweet treats crafted by our pastry chefs' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        setIsTransitioning(false);
      }, 300); // Transition duration
    }, 3000); // Slide duration

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
    <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      {/* 3D Marquee Background */}
      <ThreeDMarqueeBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 text-white relative z-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">Our Signature Dishes</h2>
          <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto drop-shadow-md">
            Discover our most popular and delicious creations
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Carousel Slide */}
          <div className={`bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-70 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <div className="text-8xl md:text-9xl animate-bounce">{photos[currentIndex].image}</div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{photos[currentIndex].title}</h3>
                <p className="text-gray-600 mb-6">{photos[currentIndex].description}</p>
                {/* Tailwind button */}
                <button className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-indigo-700 transition duration-300 transform hover:-translate-y-1">
                  Order This Dish
                </button>
              </div>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {photos.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white bg-opacity-50'}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4 md:-px-8 pointer-events-none">
            <button 
              className="w-12 h-12 rounded-full bg-white bg-opacity-90 backdrop-blur-sm shadow-lg text-2xl text-gray-700 hover:bg-opacity-100 hover:scale-110 transition duration-300 pointer-events-auto flex items-center justify-center"
              onClick={() => goToSlide((currentIndex - 1 + photos.length) % photos.length)}
              aria-label="Previous slide"
            >
              &#8249; {/* Left arrow */}
            </button>
            <button 
              className="w-12 h-12 rounded-full bg-white bg-opacity-90 backdrop-blur-sm shadow-lg text-2xl text-gray-700 hover:bg-opacity-100 hover:scale-110 transition duration-300 pointer-events-auto flex items-center justify-center"
              onClick={() => goToSlide((currentIndex + 1) % photos.length)}
              aria-label="Next slide"
            >
              &#8250; {/* Right arrow */}
            </button>
          </div>
        </div>
      </div>
        {/* Add keyframes for animation if not already defined globally or via Tailwind config */}
        <style>{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
          .animate-bounce { animation: bounce 2s ease-in-out infinite; }
        `}</style>
    </section>
  );
};

export default PhotoCarousel;