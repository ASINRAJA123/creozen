import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import the new, separated page components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services'; // <-- UPDATED
import Products from './pages/Products'; // <-- NEW
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* --- UPDATED ROUTES --- */}
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} /> 
            {/* ---------------------- */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;