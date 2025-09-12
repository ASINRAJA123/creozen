import { motion } from 'framer-motion';

// --- Reusable Card Components for consistent styling ---

const ServiceCard = ({ title, description, icon }) => (
  <motion.div
    className="bg-primary p-6 rounded-lg border border-gray-800 flex flex-col items-start text-left h-full"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
  >
    <div className="text-accent mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm flex-grow">{description}</p>
  </motion.div>
);

const ProductCard = ({ title, description }) => (
  <motion.div
    className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-accent transition-colors duration-300"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
  >
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
);

// --- Content Arrays for easy management ---

const services = [
  {
    title: "AI & ML Consulting",
    description: "End-to-end consulting for organizations adopting AI/ML technologies, from strategy to implementation.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  },
  {
    title: "Custom Product Development",
    description: "Building tailored AI/ML applications and software from the ground up to meet your specific business needs.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
  },
  {
    title: "Video Analytics Solutions",
    description: "Implementing real-time DeepStream and computer vision solutions for enterprise-level monitoring and analysis.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
  },
  {
    title: "Enterprise Integrations",
    description: "Deploying intelligent chatbots, automation tools, and internal knowledge systems to streamline your operations.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
  },
  {
    title: "Events & Training",
    description: "Conducting AI workshops, hackathons, and corporate training sessions for businesses and institutions.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
  }
];

const educationProducts = [
  {
    title: "Assessly",
    description: "Simplifies assessments and evaluations by auto-generating questions and coding challenges. Includes compiler, timed exams, and recruitment testing tools."
  },
  {
    title: "IntraQuest",
    description: "An internal chatbot that integrates with organizational systems to answer employee/student queries instantly."
  },
  {
    title: "Mock Bridge",
    description: "AI + human-powered interview practice platform with feedback to boost confidence and readiness."
  },
  {
    title: "AttendEase",
    description: "Smart attendance system using OTPs for schools & colleges — quick, paperless, and tamper-proof."
  }
];

const videoAnalyticsSolutions = [
  { title: "Real-time Video Processing", description: "Ensures instant analysis of video streams without lag." },
  { title: "Object Counting & Re-identification", description: "Tracks up to 15 people/objects, recognizing repeat appearances." },
  { title: "Waiting Time Calculation", description: "Measures how long people/objects wait in a location (e.g., queues, tolls)." },
  { title: "Anomaly Waiting Detection", description: "Identifies unusual waiting behavior and triggers alerts." },
  { title: "AI Employee Management", description: "Monitors employee activity for productivity insights." },
  { title: "Animal & Poultry Tracking", description: "Identifies farm animals, counts poultry automatically." },
  { title: "Sports Player Activity Tracking", description: "Tracks player activity duration (e.g., tennis, football)." },
  { title: "Video Summarization", description: "Compresses hours of footage into highlights, retaining only key moments." }
];

// --- Main Page Component ---
const ServicesProducts = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      className="pt-32 pb-24 bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Services & Products
          </h1>
          <p className="mt-4 text-lg text-gray-400">Intelligent solutions tailored for your success.</p>
        </motion.div>

        {/* 1. Services We Offer */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 border-l-4 border-accent pl-4">Services We Offer</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => <ServiceCard key={index} {...service} />)}
          </motion.div>
        </section>

        {/* 2. Education & Productivity Tools */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 border-l-4 border-accent pl-4">Education & Productivity Tools</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {educationProducts.map((product, index) => <ProductCard key={index} {...product} />)}
          </motion.div>
        </section>

        {/* 3. AI-Powered Video Analytics */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-10 border-l-4 border-accent pl-4">AI-Powered Video Analytics</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {videoAnalyticsSolutions.map((solution, index) => <ProductCard key={index} {...solution} />)}
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default ServicesProducts;