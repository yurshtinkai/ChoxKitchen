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
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden" id="about">
      {/* Background overlay with transparency */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      {/* Shining gold accent elements */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-yellow-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-yellow-600/25 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-yellow-400">CHOX</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We're committed to providing you with the best dining experience possible
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative group bg-black/40 backdrop-blur-md border border-yellow-400/20 rounded-2xl p-8 hover:bg-black/60 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gold glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shining gold elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-yellow-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
    </section>
  );
};

export default FeaturesSection;