import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Globe from 'react-globe.gl';
import CountUp from 'react-countup';
import { FaBrain, FaEye, FaLaptopCode, FaUniversity, FaMapMarkerAlt } from 'react-icons/fa';

// --- Content Arrays (no changes here) ---
const philosophyItems = [
  { title: "Simplicity", description: "Technology should be seamless and easy to adopt." },
  { title: "Precision", description: "Intelligent solutions must be accurate & reliable." },
  { title: "Innovation", description: "Continuously pushing the boundaries of AI & ML." }
];

const focusAreas = [
  { title: "Generative AI", icon: <FaBrain size={28} />, desc: "Next-gen content, assistants, and productivity tools." },
  { title: "Computer Vision", icon: <FaEye size={28} />, desc: "Real-time video analytics and object tracking." },
  { title: "Web & App Development", icon: <FaLaptopCode size={28} />, desc: "Building scalable, AI-powered applications." },
  { title: "AI for Education", icon: <FaUniversity size={28} />, desc: "Revolutionizing assessments, learning & engagement." },
];

const locations = [
  { city: "London HQ", desc: "Global Clients Hub", lat: 51.5074, lng: -0.1278 },
  { city: "Chennai Branch", desc: "AI R&D Hub", lat: 13.0827, lng: 80.2707 }
];

// --- About Component ---
export default function About() {
  const globeEl = useRef();

  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 4.5;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableRotate = true;
      globeEl.current.pointOfView({ lat: 25, lng: 30, altitude: 2.8 }, 1000);
    }
  }, []);

  return (
    <motion.section
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-background text-gray-100 min-h-screen overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* --- Corner Gradient Rings --- */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500/20 to-transparent rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Hero */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About <span className="text-accent">Creozen</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-base md:text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We are pioneers in Generative AI and Computer Vision, delivering real-world impact through innovation.
          </motion.p>
        </div>

        {/* 2. Who We Are & Globe */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
          {/* Left Column (Text) */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">A Global AI & ML Innovation Company</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Creozen is driven by the philosophy of Zen-crafted intelligence. We create solutions that combine Generative AI, Computer Vision, and Intelligent Automation, helping industries reimagine workflows, education, and enterprise efficiency.
              </p>
            </div>
            <div className="space-y-4">
              {locations.map((location, i) => (
                <div key={i} className="bg-background/50 p-5 rounded-lg border border-gray-800 flex items-start space-x-4 hover:border-accent transition-colors backdrop-blur-sm">
                  <div className="text-accent mt-1"><FaMapMarkerAlt size={20} /></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{location.city}</h3>
                    <p className="text-gray-400 text-sm">{location.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column (Globe) */}
          <motion.div
            // --- FINAL MOBILE FIX: Hide on mobile, show on large screens ---
            className="hidden lg:block w-full max-w-md aspect-square relative lg:-ml-[420px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Globe
              ref={globeEl}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              backgroundColor="rgba(0,0,0,0)"
              pointsData={locations}
              pointLat="lat"
              pointLng="lng"
              pointLabel={(d) => `<div class="bg-background/70 backdrop-blur-sm border border-accent rounded-md p-2 text-white"><b>${d.city}</b><br/>${d.desc}</div>`}
              pointColor={() => '#8A2BE2'}
              pointRadius={0.2}
              pointAltitude={0.02}
              arcsData={[{ startLat: 51.5074, startLng: -0.1278, endLat: 13.0827, endLng: 80.2707 }]}
              arcColor={() => '#8A2BE2'}
              arcDashLength={0.4}
              arcDashGap={0.8}
              arcStroke={0.5} // <-- smaller value = thinner line
              arcDashAnimateTime={3000}
            />
            {/* Glow behind globe */}
            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-tr from-purple-500/10 to-pink-500/10 filter blur-2xl pointer-events-none"></div>
          </motion.div>
        </div>

        {/* (Rest of the component is unchanged) */}

        {/* 3. Stats Section */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center mb-16 lg:mb-24 py-8 md:py-12 bg-background/50 rounded-xl border border-gray-800 backdrop-blur-sm" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent"><CountUp end={10} duration={3} />+</h2><p className="text-gray-400 mt-2 text-sm">Clients</p></div>
          <div><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent"><CountUp end={6} duration={3} />+</h2><p className="text-gray-400 mt-2 text-sm">Deployed Products</p></div>
          <div><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent">2</h2><p className="text-gray-400 mt-2 text-sm">Global Offices</p></div>
          <div><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent">7</h2><p className="text-gray-400 mt-2 text-sm">Impact</p></div>
        </motion.div>

        {/* 4. Core Focus Areas */}
        <div className="mb-16 lg:mb-24">
          <motion.h2 className="text-2xl md:text-3xl font-bold text-center mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Core Focus Areas
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, i) => (
              <motion.div key={i} className="bg-background/50 p-6 rounded-lg border border-gray-800 hover:border-accent hover:-translate-y-1 transition-all duration-300 group backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="text-accent mb-4 group-hover:text-purple-400 transition-colors duration-300">{area.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{area.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 5. Philosophy */}
        <div>
          <motion.h2 className="text-2xl md:text-3xl font-bold text-center mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Our Philosophy
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {philosophyItems.map((item, idx) => (
              <motion.div key={idx} className="bg-background/50 p-8 rounded-lg border border-gray-800 text-center backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.15 }}>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}