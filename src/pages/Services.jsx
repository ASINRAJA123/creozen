import { motion } from "framer-motion";

// --- Content Array for Services ---
const services = [
  {
    title: "AI & ML Consulting",
    description:
      "End-to-end consulting for organizations adopting AI/ML technologies, from strategy to implementation.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 
             0v-2c0-.656-.126-1.283-.356-1.857M7 
             20H2v-2a3 3 0 015.356-1.857M7 
             20v-2c0-.656.126-1.283.356-1.857m0 
             0a5.002 5.002 0 019.288 0M15 
             7a3 3 0 11-6 0 3 3 0 016 0zm6 
             3a2 2 0 11-4 0 2 2 0 014 0zM7 
             10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Custom Product Development",
    description:
      "Building tailored AI/ML applications and software from the ground up to meet your specific business needs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Video Analytics Solutions",
    description:
      "Implementing real-time DeepStream and computer vision solutions for enterprise-level monitoring and analysis.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 
             8.618v6.764a1 1 0 01-1.447.894L15 
             14M5 18h8a2 2 0 002-2V8a2 2 0 
             00-2-2H5a2 2 0 00-2 2v8a2 2 0 
             002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Enterprise Integrations",
    description:
      "Deploying intelligent chatbots, automation tools, and internal knowledge systems to streamline your operations.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 9l4-4 4 4m0 6l-4 4-4-4"
        />
      </svg>
    ),
  },
  {
    title: "Events & Training",
    description:
      "Conducting AI workshops, hackathons, and corporate training sessions for businesses and institutions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 
                 0 01.665 6.479A11.952 11.952 0 
                 0012 20.055a11.952 11.952 0 
                 00-6.824-2.998 12.078 12.078 
                 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 
             5zm0 0l6.16-3.422a12.083 
             12.083 0 01.665 6.479A11.952 
             11.952 0 0012 20.055a11.952 
             11.952 0 00-6.824-2.998 
             12.078 12.078 0 01.665-6.479L12 
             14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
  },
];

// --- Reusable Animated Card Component ---
const ServiceCard = ({ title, description, icon }) => (
  <motion.div
    className="bg-primary p-6 rounded-2xl border border-gray-800 flex flex-col items-start text-left h-full shadow-lg cursor-pointe"
    variants={{
      hidden: { opacity: 0, y: 40, scale: 0.9 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100 },
      },
    }}
    whileHover={{
      y: -10,
      scale: 1.05,
      boxShadow: "0px 12px 30px rgba(128,0,255,0.2)",
      transition: { type: "spring", stiffness: 300 },
    }}
    whileTap={{ scale: 0.97 }}
  >
    <div className="text-accent mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm flex-grow">{description}</p>
  </motion.div>
);

// --- Main Page Component ---
const Services = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <motion.div
      className="relative pt-32 pb-24 bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* --- Glow Effects --- */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500/20 to-transparent rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute inset-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-purple-500/10 to-pink-500/10 filter blur-xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Expert solutions designed to accelerate your business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
