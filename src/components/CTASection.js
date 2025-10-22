import React from 'react';

const CTASection = () => {
  return (
    // Replace gradient with solid color or pattern
    <section className="py-16 md:py-24 bg-indigo-700 relative overflow-hidden" id="contact">
      {/* Optional: Add background elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Example pattern or image */}
        {/* <img src="/path/to/pattern.svg" className="w-full h-full object-cover" alt=""/> */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Order?</h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg mx-auto md:mx-0">
              Join thousands of satisfied customers who trust FoodHub for their daily meals. 
              Download our app or order online now!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
              {/* Tailwind buttons */}
              <button className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-100 transition duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <span role="img" aria-label="phone">📱</span> Download App
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-indigo-600 transition duration-300 flex items-center justify-center gap-2">
                <span role="img" aria-label="cart">🛒</span> Order Online
              </button>
            </div>
            
            <div className="flex justify-center md:justify-start gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm opacity-80">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-80">Menu Items</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">30min</div>
                <div className="text-sm opacity-80">Avg Delivery</div>
              </div>
            </div>
          </div>
          
          <div className="relative h-80 hidden md:block">
            {/* Floating elements remain similar */}
            <div className="absolute top-[10%] left-[20%] text-5xl animate-float animation-delay-0">🍕</div>
            <div className="absolute top-[30%] right-[20%] text-5xl animate-float animation-delay-800">🍔</div>
            <div className="absolute top-[60%] left-[10%] text-5xl animate-float animation-delay-1600">🍜</div>
            <div className="absolute bottom-[20%] right-[30%] text-5xl animate-float animation-delay-2400">🥗</div>
            <div className="absolute bottom-[10%] left-[50%] text-5xl animate-float animation-delay-3200">🍰</div>
          </div>
        </div>
      </div>
        {/* Add keyframes for animation if not already defined globally or via Tailwind config */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float { animation: float 4s ease-in-out infinite; }
          .animation-delay-0 { animation-delay: 0s; }
          .animation-delay-800 { animation-delay: 0.8s; }
          .animation-delay-1600 { animation-delay: 1.6s; }
          .animation-delay-2400 { animation-delay: 2.4s; }
          .animation-delay-3200 { animation-delay: 3.2s; }
        `}</style>
    </section>
  );
};

export default CTASection;