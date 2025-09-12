import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClasses = (isActive, mobile = false) =>
    mobile
      ? `block px-3 py-2 rounded-lg text-base font-medium transition-all ${
          isActive
            ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500'
            : 'text-gray-300 hover:text-white hover:bg-gray-800'
        }`
      : `relative px-3 py-2 text-sm font-medium transition-all duration-300 font-sans ${
          isActive ? 'text-white' : 'text-gray-300 hover:text-white hover:opacity-90'
        }`;

  const underlineClasses = (isActive) =>
    `absolute left-0 bottom-0 w-full h-0.5 transition-all duration-300 ${
      isActive ? 'bg-gradient-to-r from-purple-400 to-pink-500 scale-x-100' : 'bg-transparent scale-x-0'
    }`;

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/70 backdrop-blur-md border-b border-gray-800 shadow-lg' : 'bg-transparent border-b border-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0">
            <h1 className="text-3xl font-extrabold font-sans bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 hover:opacity-80 transition-opacity">
              Creozen
            </h1>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={({ isActive }) => linkClasses(isActive)}>
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    <span className={underlineClasses(isActive)} style={{ transformOrigin: 'left' }} />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none text-2xl">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-gray-800 shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path} onClick={() => setIsOpen(false)} className={({ isActive }) => linkClasses(isActive, true)}>
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
