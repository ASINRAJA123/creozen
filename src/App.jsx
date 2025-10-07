// src/App.jsx
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

// Import components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

// Import pages
import About from './pages/About';
import Contact from './pages/Contact';
import Forms from './pages/Forms';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollToTop /> {/* Scroll to top on route change */}
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/forms" element={<Forms />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;
