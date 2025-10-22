import React from 'react';

const Footer = () => {
  return (
    // Tailwind classes for footer
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Section 1: Brand */}
          <div>
            {/* Tailwind gradient text (optional, simpler text color below) */}
            {/* <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">🍽️ FoodHub</h3> */}
            <h3 className="text-2xl font-bold mb-4 text-indigo-400">🍽️ FoodHub</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Delicious food delivered fresh to your doorstep. 
              Experience culinary excellence with every bite.
            </p>
            <div className="flex gap-4 text-2xl">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-indigo-400 transition-colors">📘</a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-indigo-400 transition-colors">📷</a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-indigo-400 transition-colors">🐦</a>
              <a href="#" aria-label="Email" className="text-gray-400 hover:text-indigo-400 transition-colors">📧</a>
            </div>
          </div>
          
          {/* Section 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#menu" className="text-gray-400 hover:text-indigo-400 transition-colors">Menu</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</a></li>
              <li><a href="#delivery" className="text-gray-400 hover:text-indigo-400 transition-colors">Delivery Info</a></li>
            </ul>
          </div>
          
          {/* Section 3: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📞 09276402119 </p>
              <p>📧 info@choxkitchen.com</p>
              <p>📍 Blk 2 lot 49 Camella Lessandra Miramonte, Cebu City</p>
            </div>
          </div>
          
          {/* Section 4: Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Hours</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Monday - Friday: 10AM - 10PM</p>
              <p>Saturday - Sunday: 9AM - 11PM</p>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="text-center pt-8 border-t border-gray-700 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} CHOX KITCHEN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;