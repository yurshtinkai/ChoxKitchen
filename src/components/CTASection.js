import React from 'react';

const CTASection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden" id="contact">
      {/* Background overlay with transparency */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      {/* Shining gold accent elements */}
      <div className="absolute top-20 left-20 w-48 h-48 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-yellow-400/25 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-yellow-600/30 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-yellow-400">Order</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Join thousands of satisfied customers who trust CHOX Kitchen for their daily meals. 
              Download our app or order online now!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-4 px-8 rounded-full shadow-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl border border-yellow-400/30 flex items-center justify-center gap-3">
                <span role="img" aria-label="phone" className="text-xl">📱</span> 
                Download App
              </button>
              <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold py-4 px-8 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3">
                <span role="img" aria-label="cart" className="text-xl">🛒</span> 
                Order Online
              </button>
            </div>
            
            <div className="flex justify-center md:justify-start gap-8 md:gap-12">
              <div className="text-center group">
                <div className="text-4xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">10K+</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Happy Customers</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Menu Items</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">30min</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Avg Delivery</div>
              </div>
            </div>
          </div>
          
          <div className="relative h-80 hidden md:block">
            {/* Enhanced floating elements with gold accents */}
            <div className="absolute top-[10%] left-[20%] text-6xl animate-float animation-delay-0 filter drop-shadow-lg">
              <div className="relative">
                <div className="absolute -inset-2 bg-yellow-400/20 rounded-full blur animate-pulse"></div>
                <span className="relative z-10">🍕</span>
              </div>
            </div>
            <div className="absolute top-[30%] right-[20%] text-6xl animate-float animation-delay-800 filter drop-shadow-lg">
              <div className="relative">
                <div className="absolute -inset-2 bg-yellow-500/20 rounded-full blur animate-pulse"></div>
                <span className="relative z-10">🍔</span>
              </div>
            </div>
            <div className="absolute top-[60%] left-[10%] text-6xl animate-float animation-delay-1600 filter drop-shadow-lg">
              <div className="relative">
                <div className="absolute -inset-2 bg-yellow-600/20 rounded-full blur animate-pulse"></div>
                <span className="relative z-10">🍜</span>
              </div>
            </div>
            <div className="absolute bottom-[20%] right-[30%] text-6xl animate-float animation-delay-2400 filter drop-shadow-lg">
              <div className="relative">
                <div className="absolute -inset-2 bg-yellow-400/20 rounded-full blur animate-pulse"></div>
                <span className="relative z-10">🥗</span>
              </div>
            </div>
            <div className="absolute bottom-[10%] left-[50%] text-6xl animate-float animation-delay-3200 filter drop-shadow-lg">
              <div className="relative">
                <div className="absolute -inset-2 bg-yellow-500/20 rounded-full blur animate-pulse"></div>
                <span className="relative z-10">🍰</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
      
      {/* Animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animation-delay-0 { animation-delay: 0s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1600 { animation-delay: 1.6s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-2400 { animation-delay: 2.4s; }
        .animation-delay-3200 { animation-delay: 3.2s; }
      `}</style>
    </section>
  );
};

export default CTASection;