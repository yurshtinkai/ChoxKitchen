import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md border-b border-gray-200 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3"> {/* Adjusted padding slightly */}
          <div className="nav-brand">
            <Link to="/" className="flex items-center gap-3 text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors">
               {/* Logo Image */}
               <img 
                 // Use %PUBLIC_URL% to reference the image in the public folder
                 src="logo.jpg" // <-- **** REPLACE with your logo file name ****
                 alt="CHOX KITCHEN Logo" 
                 // Adjust height (h-...) as needed, width will scale automatically
                 className="h-8 md:h-10" 
               />
               {/* Brand Name */}
               <span>CHOX KITCHEN</span> 
            </Link>
          </div>
          
          <nav className="hidden md:flex gap-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-indigo-600 font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">Menu</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">About</Link>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">Contact</a>
          </nav>
          
          <div className="nav-actions">
            <Link to="/menu" className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-indigo-700 transition duration-300 transform hover:-translate-y-0.5">
              Order Now
            </Link>
          </div>
          
          {/* Add mobile menu button here if needed */}
          
        </div>
      </div>
    </header>
  );
};

export default Header;