import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services & Products', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/70 backdrop-blur-md border-b border-gray-800 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <NavLink to="/" className="flex-shrink-0">
            <h1 className="text-3xl font-extrabold font-sans bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 hover:opacity-80 transition-opacity">
              Creozen
            </h1>
          </NavLink>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium transition-all duration-300 font-sans ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white hover:opacity-90'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {/* Gradient underline for active */}
                    <span
                      className={`absolute left-0 bottom-0 w-full h-0.5 transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-purple-400 to-pink-500 scale-x-100'
                          : 'bg-transparent scale-x-0'
                      }`}
                      style={{ transformOrigin: 'left' }}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Placeholder for Mobile Hamburger */}
          <div className="md:hidden">
            {/* Add hamburger menu later if needed */}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
