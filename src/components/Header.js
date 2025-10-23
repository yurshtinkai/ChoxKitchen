import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HamburgerMenuOverlay } from './lightswind/hamburger-menu-overlay.js';

const Header = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Home",
      href: "/",
      onClick: () => {
        navigate('/');
      }
    },
    {
      label: "Menu",
      href: "/menu",
      onClick: () => {
        navigate('/menu');
      }
    },
    {
      label: "About",
      href: "/about",
      onClick: () => {
        navigate('/about');
      }
    }
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md border-b border-gray-200 z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="nav-brand">
              <Link to="/" className="flex items-center gap-3 text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors">
                {/* Logo Image */}
                <img 
                  src="logo.jpg"
                  alt="CHOX KITCHEN Logo" 
                  className="h-8 md:h-10" 
                />
                {/* Brand Name */}
                <span>CHOX KITCHEN</span> 
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="flex gap-8">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">Home</Link>
              <Link to="/menu" className="text-gray-700 hover:text-indigo-600 font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">Menu</Link>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600 font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">About</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Header with Professional Hamburger Menu */}
      <div className="md:hidden">
        <div className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md border-b border-gray-200 z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="nav-brand">
                <Link to="/" className="flex items-center gap-3 text-lg font-bold text-gray-800 hover:text-indigo-600 transition-colors">
                  <img 
                    src="logo.jpg"
                    alt="CHOX KITCHEN Logo" 
                    className="h-8" 
                  />
                  <span>CHOX KITCHEN</span> 
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Professional Hamburger Menu Overlay - Right Side */}
        <HamburgerMenuOverlay
          items={menuItems}
          buttonTop="60px"
          buttonLeft="calc(100% - 30px)"
          buttonSize="md"
          buttonColor="#4f46e5"
          overlayBackground="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          textColor="#ffffff"
          fontSize="lg"
          fontFamily="'Inter', sans-serif"
          fontWeight="semibold"
          animationDuration={1.2}
          staggerDelay={0.15}
          menuAlignment="center"
          enableBlur={true}
          zIndex={1000}
          onOpen={() => console.log('Menu opened')}
          onClose={() => console.log('Menu closed')}
        />
      </div>
    </>
  );
};

export default Header;