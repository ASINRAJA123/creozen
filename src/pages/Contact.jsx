import { useState } from 'react';
import { motion } from 'framer-motion';

// --- Reusable Component for Contact Info Items (No changes here) ---
const InfoItem = ({ icon, title, value, href }) => (
  <motion.div 
    className="flex items-start space-x-4"
    variants={{
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 }
    }}
  >
    <div className="text-accent flex-shrink-0 mt-1">{icon}</div>
    <div>
      <h3 className="text-md font-semibold text-gray-300">{title}</h3>
      <a href={href} className="text-gray-400 hover:text-white transition-colors">{value}</a>
    </div>
  </motion.div>
);

// --- Main Contact Page Component ---
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://formsubmit.co/ajax/creozen.ai@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setStatus('Your message has been sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Oops! Something went wrong. Please try again.');
        console.error("FormSubmit Error:", result);
      }

    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('Oops! Something went wrong. Please check your connection.');
    } finally {
      setTimeout(() => setStatus(''), 5000);
    }
  };


  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };

  return (
    <motion.div
      className="pt-32 pb-24 bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-400">We'd love to hear from you. Let's build something amazing together.</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Column: Info (No changes here) */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <InfoItem 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>} 
              title="London HQ, UK" 
              value="124 City Road, London, EC1V 2NX"
              href="#"
            />
            <InfoItem 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
              title="Chennai Branch, India" 
              value="GST Road, Chennai, Tamil Nadu"
              href="#"
            />
            <InfoItem 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} 
              title="Email" 
              value="info@creozen.com"
              href="mailto:info@creozen.com"
            />
            <InfoItem 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
              title="Phone" 
              value="+44 20 1234 5678 (London) / +91 44 1234 5678 (Chennai)"
              href="tel:+442012345678"
            />
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            className="bg-primary p-8 rounded-lg border border-gray-800"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-background border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-accent focus:border-accent transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-background border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-accent focus:border-accent transition" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                <input type="text" name="subject" id="subject" required value={formData.subject} onChange={handleChange} className="mt-1 block w-full bg-background border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-accent focus:border-accent transition" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea name="message" id="message" rows="4" required value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-background border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-accent focus:border-accent transition"></textarea>
              </div>

              {/* ========================================================== */}
              {/* --- ✨ UPDATED BUTTON AND STATUS MESSAGE AREA ✨ --- */}
              {/* ========================================================== */}
              <div>
                <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-hover transition-colors">
                  Send Message
                </button>
                
                {/* Status Message Container: Reserves space to prevent layout shift */}
                <div className="mt-4 h-5">
                  {status && (
                    <p className={`text-sm ${
                      status.includes('successfully') ? 'text-green-400' :
                      status.includes('Oops') ? 'text-red-400' :
                      'text-gray-400' // Default for "Sending..."
                    }`}>
                      {status}
                    </p>
                  )}
                </div>
              </div>

            </form>
          </motion.div>
          
        </div>

      </div>
    </motion.div>
  );
};

export default Contact;