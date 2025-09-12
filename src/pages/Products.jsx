import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Reusable Icon Components for clarity ---
const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const ChevronIcon = ({ isExpanded }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-purple-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
    animate={{ rotate: isExpanded ? 90 : 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </motion.svg>
);


// --- Refactored ProductCategoryCard (Child Component) ---
// This component is now "dumb". It receives its state from the parent.
const ProductCategoryCard = ({ category, isExpanded, onToggle }) => {
  return (
    <motion.div
      layout
      // The main container has a subtle purple border on the left to match the design
      className="bg-[#16181D] p-6 lg:p-8 rounded-xl transition-colors duration-300"
    >
      <motion.div layout className="cursor-pointer" onClick={onToggle}>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{category.title}</h2>
          <ChevronIcon isExpanded={isExpanded} />
        </div>
        <p className="text-gray-300 mt-4 leading-relaxed">{category.description}</p>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            layout
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", marginTop: '24px' },
              collapsed: { opacity: 0, height: 0, marginTop: '0px' },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="space-y-4 overflow-hidden"
          >
            {category.products.map((p, i) => (
              <motion.div
                key={i}
                variants={{
                  open: { opacity: 1, y: 0 },
                  collapsed: { opacity: 0, y: 20 },
                }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-slate-800/50 rounded-lg border border-slate-700"
              >
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{p.short}</p>
                {/* <a
                  href={p.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                  onClick={(e) => e.stopPropagation()} // Prevents card from closing when link is clicked
                >
                  <LinkIcon />
                  More Details
                </a> */}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


// --- Main Products Page (Parent Component) ---
const Products = () => {
  // ✨ STATE IS LIFTED UP to the parent component ✨
  // We store the title of the currently open category. null means none are open.
  const [openCategory, setOpenCategory] = useState('Education & Productivity Tools'); // Start with the first one open

  const handleToggle = (categoryTitle) => {
    // If the clicked category is already open, close it. Otherwise, open the new one.
    setOpenCategory(prev => prev === categoryTitle ? null : categoryTitle);
  };

  const productData = [
    {
      title: 'Education & Productivity Tools',
      description: 'Comprehensive AI-driven platforms designed to simplify assessments, streamline communication, enhance learning outcomes, and automate tasks. These solutions empower organizations with intelligent automation and productivity tools.',
      products: [
        { title: 'Assessly', short: 'Auto-generate assessments with coding challenges.' },
        { title: 'IntraQuest', short: 'Internal chatbot for instant student/employee answers.' },
        { title: 'Mock Bridge', short: 'AI + human interview practice with feedback.' },
        { title: 'AttendEase', short: 'Smart OTP-based attendance system.' },
      ]
    },
    {
      title: 'AI-Powered Video Analytics',
      description: 'Advanced real-time video intelligence platform that processes live streams instantly, delivering actionable insights for businesses, sports, security, and agriculture. From anomaly detection to summarization, it helps organizations make data-driven decisions quickly.',
      products: [
         { title: "Real-time Video Processing", short: "Ensures instant analysis of video streams without lag." },
         { title: "Object Counting & Re-identification", short: "Tracks objects, recognizing repeat appearances." },
         { title: "Waiting Time Calculation", short: "Measures how long people/objects wait in a location." },
         { title: "Video Summarization", short: "Compresses hours of footage into key highlights." }
      ]
    },
  ];

  return (
    <motion.div
      className="relative pt-32 pb-24 min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* --- Glow Effects --- */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-50 h-96 bg-gradient-to-br from-purple-500/20 to-transparent filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500/20 to-transparent rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute inset-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-purple-500/10 to-pink-500/10 filter blur-xl pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Our Products
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Intelligent software built to solve real-world challenges.
          </p>
        </motion.div>

        {/* --- Main Product Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {productData.map((category) => (
            <ProductCategoryCard
              key={category.title}
              category={category}
              // Pass down whether this specific card should be expanded
              isExpanded={openCategory === category.title}
              // Pass down the function to call when this card is clicked
              onToggle={() => handleToggle(category.title)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Products;