import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import Orb from '../components/Orb';

// --- Page Content ---
const companyName = "Creozen";
const mainTagline = "Zen-crafted intelligence – delivering intelligent AI solutions with simplicity and precision.";

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
      <svg className="w-8 h-8 mb-4 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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


const techStack = [ "Machine Learning", "Deep Learning", "Computer Vision", "DeepStream", "React", "Node.js", "Python", "NLP", "Generative AI" ];

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
            className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {companyName}
          </motion.h1>

          <motion.p
            className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {mainTagline}
          </motion.p>

          {/* Explore Products Button */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/products"
              className="px-6 py-3 text-lg font-semibold rounded-full 
                        bg-accent text-white shadow-lg 
                        hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              Explore Products
            </Link>
          </motion.div>
        </div>
      </section>


      {/* 2. Services Section (The 3 Cards) */}
      {/* 2. Services Section (Animated Cards) */}
      <section id="services" className="py-24 bg-background overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
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

                <motion.h3
                  className="text-xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.1, duration: 0.6 }}
                >
                  {card.title}
                </motion.h3>

                <motion.p
                  className="text-gray-400 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
                >
                  {card.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
      {/* 3. Tech Stack Section */}
      <section id="tech-stack" className="py-20 bg-background overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Technology Stack</h2>
        <Marquee gradient={true} gradientColor={[10, 10, 10]} speed={40}>
          {techStack.map(tech => <span key={tech} className="text-2xl font-bold text-gray-600 mx-12">{tech}</span>)}
        </Marquee>
        <Marquee gradient={true} gradientColor={[10, 10, 10]} speed={40} direction="right" className="mt-4">
          {techStack.map(tech => <span key={tech} className="text-2xl font-bold text-gray-600 mx-12">{tech}</span>)}
        </Marquee>
      </section>

    </motion.div>
  );
};

export default Home;
