import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import Orb from '../components/Orb';
import { BrainCircuit, Zap, ShieldCheck, ClipboardCheck, Users } from 'lucide-react';

// --- Page Content ---
const companyName = "Creozen";
const mainTagline = "Zen-crafted intelligence – delivering intelligent<br />AI solutions with simplicity and precision.";

const serviceCards = [
  {
    icon: (
      <svg className="w-8 h-8 mb-4 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI Solutions",
    description: "Developing intelligent systems that learn, adapt, and automate processes."
  },
  {
    icon: (
      <svg className="w-8 h-8 mb-4 text-accent" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10m16-10v10M9 3h6m-6 18h6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 12a2 2 0 112 2h-2v-2zM12 10a2 2 0 11-2-2v2h2z"/>
      </svg>
    ),
    title: "Machine Learning",
    description: "Building predictive models from complex data to drive insightful decisions."
  },
  {
    icon: (
      <svg className="w-8 h-8 mb-4 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Computer Vision",
    description: "Enabling systems to interpret and understand the visual world from images and video."
  }
];

const philosophyItems = [
    {
      icon: <BrainCircuit size={32} className="text-accent" />,
      title: "Simplicity",
      description: "Technology should be seamless and easy to adopt, not a complex barrier.",
    },
    {
      icon: <ShieldCheck size={32} className="text-accent" />,
      title: "Precision",
      description: "Intelligent solutions must be accurate, reliable, and deliver measurable results.",
    },
    {
      icon: <Zap size={32} className="text-accent" />,
      title: "Innovation",
      description: "We are constantly pushing the boundaries of what's possible with AI and ML.",
    },
];

const featuredProducts = [
    {
        icon: <ClipboardCheck className="h-8 w-8 text-accent" />,
        title: "Assessly – Smart Assessment Platform",
        description: "An AI-powered platform for educational and corporate institutions to conduct secure tests, coding challenges, and recruitment assessments.",
    },
    {
        icon: <Users className="h-8 w-8 text-accent" />,
        title: "People Analytics – Real-Time Monitoring",
        description: "Leverage computer vision for real-time people counting, queue management, and re-identification to optimize spaces and operations.",
    },
]

const techStack = [ "Machine Learning", "Deep Learning", "Computer Vision", "DeepStream", "React", "Node.js", "Python", "NLP", "Generative AI" ];

// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// --- Home Component ---
const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      
      {/* 1. Hero Section (Orb + Name + Tagline + Button) */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Orb hoverIntensity={0.3} />
        </div>
        <div className="relative z-10 p-4">
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {companyName}
          </motion.h1>
          <motion.div
            className="mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="block md:hidden text-base sm:text-lg text-gray-300">
              Zen-crafted intelligence
            </p>
            <p
              className="hidden md:block text-lg md:text-xl text-gray-300"
              dangerouslySetInnerHTML={{ __html: mainTagline }}
            />
          </motion.div>
          <motion.div
            className="mt-6 md:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#intro"
              className="inline-block px-5 py-2.5 text-base md:px-6 md:py-3 md:text-lg font-semibold rounded-full bg-accent text-white shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <motion.section 
        id="intro" 
        className="py-24 bg-background text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pioneers in Generative AI & Computer Vision
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Creozen is driven by the philosophy of Zen-crafted intelligence. We create bespoke solutions that merge Generative AI, Computer Vision, and Intelligent Automation, empowering industries to redefine workflows, enhance education, and boost enterprise efficiency.
          </p>
        </div>
      </motion.section>

      {/* 3. Services Section */}
      <section id="services" className="py-24 bg-background/70 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
            <motion.h2 
                className="text-3xl font-bold text-center text-white mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                What We Offer
            </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {serviceCards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-background/70 border border-gray-800 rounded-xl p-6 text-left backdrop-blur-sm shadow-lg hover:shadow-2xl hover:border-accent transition-all duration-500 cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="text-accent mb-4"
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 120 }}
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Our Philosophy Section */}
      <motion.section 
        className="py-24 bg-background"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Core Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {philosophyItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-background/50 p-8 rounded-lg border border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

       {/* 5. Featured Products Section */}
       <section id="featured-products" className="py-24 bg-background/70 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Featured Products
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                className="bg-background/70 border border-gray-800 rounded-xl p-8 text-left backdrop-blur-sm flex flex-col items-start"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="mb-5">{product.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-block px-8 py-3 text-lg font-semibold rounded-full bg-accent text-white shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              Explore All Products
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Tech Stack Section */}
      <section id="tech-stack" className="py-20 bg-background overflow-hidden ">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Technology Stack</h2>
        <Marquee gradient={true} gradientColor={[10, 10, 10]} speed={40}>
          {techStack.map(tech => <span key={tech} className="text-2xl font-bold text-gray-600 mx-12">{tech}</span>)}
        </Marquee>
        <Marquee gradient={true} gradientColor={[10, 10, 10]} speed={40} direction="right" className="mt-4">
          {techStack.map(tech => <span key={tech} className="text-2xl font-bold text-gray-600 mx-12">{tech}</span>)}
        </Marquee>
      </section>

      {/* 7. Call to Action Section */}
      <motion.section 
        className="py-24 bg-gradient-to-r from-purple-900/50 via-background to-pink-900/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create intelligent solutions that drive growth and innovation for your business.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-lg font-bold rounded-full bg-white text-gray-900 shadow-2xl hover:scale-105 hover:shadow-fuchsia-400/30 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </motion.section>

    </motion.div>
  );
};

export default Home;