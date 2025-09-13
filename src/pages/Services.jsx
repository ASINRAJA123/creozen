import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


// --- Content Array for Services ---
const services = [
  {
    title: "Web and App Development",
    description:
      "Designing and developing responsive websites and mobile applications with seamless user experiences and robust performance.",
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
          d="M3 12h18M3 6h18M3 18h18"
        />
      </svg>
    ),
  },
  {
    title: "AI-Based Smart Analytics for Event Management",
    description:
      "Leveraging AI and machine learning to provide real-time insights, crowd analytics, and predictive event management solutions.",
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
          d="M9 17v-6h6v6M12 3v4m6 4h4M2 7h4m6 6h4"
        />
      </svg>
    ),
  },
  {
    title: "Custom Product Development",
    description:
      "Building tailored AI, software, and IoT products to meet specific business goals, from ideation to deployment.",
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
    title: "AI-Based Training",
    description:
      "Conducting corporate training, workshops, and hands-on sessions focused on AI and machine learning technologies for upskilling teams.",
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
  {
    title: "Enterprise-Level Automations",
    description:
      "Implementing intelligent automation solutions, including chatbots, workflow optimization, and internal knowledge systems for enterprises.",
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
    title: "Smart IoT & Connected Solutions",
    description:
      "Creating connected ecosystems through IoT devices and intelligent systems that integrate seamlessly with web, mobile, and enterprise applications.",
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
          d="M12 8c-1.105 0-2 .895-2 2s.895 2 2 2 
             2-.895 2-2-.895-2-2-2zm0 10c-4.418 
             0-8-3.582-8-8s3.582-8 8-8 8 3.582 
             8 8-3.582 8-8 8z"
        />
      </svg>
    ),
  },
];

// --- Reusable Animated Card Component ---
const ServiceCard = ({ title, description, icon }) => (
  <motion.div
    className="bg-primary p-6 rounded-2xl border border-gray-800 flex flex-col items-start text-left h-full shadow-lg cursor-pointer"
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
  const navigate = useNavigate();

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

        {/* Get a Quote Button */}

        <div className="mt-16 flex justify-center">
          <motion.button
            onClick={() => navigate("/contact")}
            className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-lg font-medium transition-all duration-300 shadow-sm border-2 border-accent group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2 text-gray-400 transition-colors duration-300 group-hover:text-accent">
              Get a Quote
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
