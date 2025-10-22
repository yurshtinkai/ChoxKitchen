import React from 'react';

const HeroSection = () => {
  return (
    // Keep the main section styling as updated previously
    <section className="relative overflow-hidden bg-indigo-600 min-h-screen flex items-center" id="home">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Text content remains the same */}
          <div className="text-center md:text-left py-12 md:py-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              <span className="block animate-slideInUp animation-delay-0">Delicious Food</span>
              <span className="block animate-slideInUp animation-delay-200">Delivered Fresh</span>
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 mb-8 animate-fadeInUp animation-delay-400">
              Experience culinary excellence with our premium selection of dishes,
              crafted by expert chefs and delivered straight to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadeInUp animation-delay-600">
              <button className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-100 transition duration-300 transform hover:-translate-y-1">
                Order Now
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-indigo-600 transition duration-300">
                View Menu
              </button>
            </div>
          </div>

          {/* Image section - Replace the floating cards div */}
          <div className="hidden md:flex justify-center items-center">
            {/*  */}
            <img
              // Use %PUBLIC_URL% to reference the image in the public folder
              src="open.jpg" // <-- CHANGE THIS to your image path
              alt="Delicious food served by FoodHub"
              // Tailwind classes for styling the image:
              className="rounded-lg shadow-xl max-w-full h-auto max-h-[500px] object-cover" 
              // Adjust max-h-[...] or add width classes (w-full, w-3/4, etc.) as needed
            />
          </div>
        </div>
      </div>
      {/* Optional background elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent"></div>
    </section>
  );
};

// Keyframes (ensure these are defined either here, in index.css or tailwind.config.js)
const keyframes = `
  @keyframes slideInUp { /* ... */ }
  @keyframes fadeInUp { /* ... */ }
  @keyframes float { /* ... */ }
  /* ... animation delay classes ... */
  /* ... animation utility classes ... */
`;
// ... (code to inject keyframes if needed) ...

export default HeroSection;