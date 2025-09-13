// src/pages/Products.jsx
"use client";

import { useState } from 'react';
// 1. Import AnimatePresence from framer-motion
import { motion, AnimatePresence } from 'framer-motion';
import { GlowingEffect } from '../components/ui/glowing-effect';
import { ClipboardCheck, GitFork, Bot, Users, CheckSquare } from 'lucide-react';

// 2. Define animation variants for the container and its items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Animate each card with a 0.1s delay
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};


// 3. --- ProductCard Component ---
//    - Changed <li> to motion.li
//    - Added the itemVariants to orchestrate the animation
const ProductCard = ({ area, icon, title, description }) => (
  <motion.li className={`list-none ${area}`} variants={itemVariants}>
    <div className="relative h-full rounded-2xl border border-neutral-800 bg-primary-900 p-2 md:rounded-3xl md:p-3">
      {/* Glowing effect */}
      <GlowingEffect
        spread={200}
        glow={true}
        disabled={false}
        proximity={100}
        inactiveZone={0.01}
        borderWidth={5}
        color="rgba(0, 200, 255, 0.9)"
      />

      {/* Inner content card */}
      <div className="relative flex h-full flex-col justify-between gap-6 overflow-visible rounded-xl bg-primary p-4 shadow-[0px_0px_27px_0px_#151515] md:p-6">
        <div className="flex flex-1 flex-col gap-3">
          {/* Icon */}
          <div className="w-fit rounded-lg border border-neutral-700 p-2">{icon}</div>

          {/* Text */}
          <div className="space-y-2 md:space-y-3">
            <h3 className="pt-0.5 font-sans text-xl font-semibold text-white md:text-2xl">{title}</h3>
            <div className="space-y-1 text-sm text-neutral-400 md:text-base">{description}</div>
          </div>
        </div>
      </div>
    </div>
  </motion.li>
);

// --- Product Categories Data ---
const productCategories = {
  university: [
    {
      area: 'md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]',
      icon: <ClipboardCheck className="h-5 w-5 text-neutral-400" />,
      title: 'Assessly – Smart Assessment Platform',
      description: (
        <>
          <p>• Designed for educational & corporate institutions.</p>
          <p>• Supports MCQ tests, coding challenges, and recruitment.</p>
          <p>• Auto-generates questions and includes a Python compiler.</p>
        </>
      ),
    },
    {
      area: 'md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]',
      icon: <GitFork className="h-5 w-5 text-neutral-400" />,
      title: 'SkillSync – Full Coding Test Ecosystem',
      description: (
        <>
          <p>• End-to-end platform for institutional coding evaluations.</p>
          <p>• Covers slot booking, test setup, and database management.</p>
          <p>• For universities & companies with large-scale tests.</p>
        </>
      ),
    },
    {
      area: 'md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]',
      icon: <Bot className="h-5 w-5 text-neutral-400" />,
      title: 'IntraQuest – AI Knowledge Assistant',
      description: (
        <>
          <p>• Context-aware chatbot for internal organizational knowledge.</p>
          <p>• Integrates with schools, hospitals, and enterprises.</p>
          <p>• Boosts productivity with instant, secure answers.</p>
        </>
      ),
    },
    {
      area: 'md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]',
      icon: <Users className="h-5 w-5 text-neutral-400" />,
      title: 'Mock Bridge – AI + Human Mock Interviews',
      description: (
        <>
          <p>• Interview prep for IT, law, management, and more.</p>
          <p>• Connect with human interviewers for realistic practice.</p>
          <p>• Get combined AI and human feedback to improve.</p>
        </>
      ),
    },
    {
      area: 'md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]',
      icon: <CheckSquare className="h-5 w-5 text-neutral-400" />,
      title: 'AttendEase – Smart Attendance System',
      description: (
        <>
          <p>• Paperless, tamper-proof attendance via session OTPs.</p>
          <p>• Students enter a brief on-screen code to mark presence.</p>
          <p>• Saves time and ensures transparent, accurate records.</p>
        </>
      ),
    },
  ],

  smartAnalytics: [
    {
      area: 'md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]',
      icon: <ClipboardCheck className="h-5 w-5 text-neutral-400" />,
      title: 'People Analytics – Real-Time Monitoring',
      description: (
        <>
          <p>• Counting & tracking people in real-time.</p>
          <p>• Waiting time calculation and queue management.</p>
          <p>• Re-Identification (ReID) for up to 10 people via face & body embeddings.</p>
          <p>• Custom AI models optimized for client environments.</p>
        </>
      ),
    },
    {
      area: 'md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]',
      icon: <GitFork className="h-5 w-5 text-neutral-400" />,
      title: 'Vehicle Analytics – Detection & Tracking',
      description: (
        <>
          <p>• Real-time vehicle counting & tracking.</p>
          <p>• License plate detection and automated logging.</p>
          <p>• Custom AI models tuned for multiple vehicle types, lighting, and angles.</p>
        </>
      ),
    },
    {
      area: 'md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]',
      icon: <Bot className="h-5 w-5 text-neutral-400" />,
      title: 'Computer Vision Analytics – Product Inspection',
      description: (
        <>
          <p>• Steel identification: measures size, type, and defects in real-time.</p>
          <p>• Turmeric holes identification for quality assurance.</p>
          <p>• Custom-trained AI models for high precision in manufacturing or food processing.</p>
        </>
      ),
    },
    {
      area: 'md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]',
      icon: <Users className="h-5 w-5 text-neutral-400" />,
      title: 'Customer Care – ARC Transportation',
      description: (
        <>
          <p>• AI-powered fleet & personnel management with real-time tracking.</p>
          <p>• Natural language Text-to-SQL queries for shipment, vehicle, or staff info.</p>
          <p>• Role-based workflow, automated reporting, predictive analytics, and scalable architecture.</p>
        </>
      ),
    },
    {
      area: 'md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]',
      icon: <CheckSquare className="h-5 w-5 text-neutral-400" />,
      title: 'Industry Analytics & Invoice Processing',
      description: (
        <>
          <p>• Product & bolt counting, dimension measurement, and defect detection.</p>
          <p>• AI-driven invoice processing: extracts text & structured data from PDFs/scans.</p>
          <p>• Automates quality control, inventory management, and financial record keeping.</p>
        </>
      ),
    },
  ],
};

// --- Main Products Component ---
const Products = () => {
  const [category, setCategory] = useState('smartAnalytics'); // default category

  const productData = productCategories[category];

  return (
    <motion.div
      className="relative min-h-screen overflow-hidden bg-black pt-32 pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute top-0 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent filter blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tl from-pink-500/20 to-transparent filter blur-3xl"></div>
      <div className="pointer-events-none absolute inset-1/4 h-1/2 w-1/2 rounded-full bg-gradient-to-tr from-purple-500/10 to-pink-500/10 filter blur-xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
            Our Products
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Intelligent software built to solve real-world challenges.
          </p>
        </motion.div>

        {/* Category Buttons */}
                {/* Category Buttons */}
        <div className="mb-8 -mt-4 flex justify-center gap-4">
          <button
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-300 shadow-sm ${
              category === 'university'
                ? 'bg-accent text-white shadow-blue-400/50'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105'
            }`}
            onClick={() => setCategory('university')}
          >
            University Package
          </button>

          <button
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-300 shadow-sm ${
              category === 'smartAnalytics'
                ? 'bg-accent text-white shadow-blue-400/50'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105'
            }`}
            onClick={() => setCategory('smartAnalytics')}
          >
            Smart Analytics
          </button>
        </div>


        {/* 4. Products Grid - Wrapped with AnimatePresence */}
        <AnimatePresence mode="wait">
          {/* 5. The ul is now a motion component with a key, variants, and exit animation */}
          <motion.ul
            key={category} // This tells AnimatePresence to animate when the category changes
            className="grid grid-cols-1 grid-rows-none gap-8 md:grid-cols-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {productData.map((product, index) => (
              <ProductCard
                key={index}
                area={product.area}
                icon={product.icon}
                title={product.title}
                description={product.description}
              />
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Products;