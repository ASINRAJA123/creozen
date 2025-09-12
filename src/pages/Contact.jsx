import { motion } from 'framer-motion';

// --- Reusable Component for Contact Info Items ---
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
  // We no longer need useState for form data or status when using FormSubmit.

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

          {/* Left Column: Info */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* InfoItem components remain the same */}
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
            {/* --- UPDATED FORM TAG --- */}
            <form 
              action="https://formsubmit.co/creozen.ai@gmail.com" 
              method="POST" 
              target="_blank" 
              className="space-y-6"
            >
              {/* Optional: Add a hidden input for a custom email subject */}
              <input type="hidden" name="_subject" value="New Submission from Creozen Website!"></input>

              {/* Optional: Disable CAPTCHA if you find it intrusive */}
              <input type="hidden" name="_captcha" value="false"></input>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                {/* Removed value and onChange props */}
                <input type="text" name="name" id="name" required className="mt-1 block w-full bg-background border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-accent focus:border-accent transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                {/* Removed value and onChange props */}
                <input type="email" name="email" id="email" required className="mt-1 block w-full bg-background border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-accent focus:border-accent transition" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                 {/* Removed value and onChange props */}
                <input type="text" name="subject" id="subject" required className="mt-1 block w-full bg-background border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-accent focus:border-accent transition" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                {/* Removed value and onChange props */}
                <textarea name="message" id="message" rows="4" required className="mt-1 block w-full bg-background border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-accent focus:border-accent transition"></textarea>
              </div>
              <div>
                <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-hover transition-colors">
                  Send Message
                </button>
                {/* Removed the status message */}
              </div>
            </form>
          </motion.div>
          
        </div>

      </div>
    </motion.div>
  );
};

export default Contact;