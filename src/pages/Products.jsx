// src/pages/Products.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlowingEffect } from "../components/ui/glowing-effect";
import { ClipboardCheck, GitFork, Bot, Users, CheckSquare } from "lucide-react";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- ProductCard ---
const ProductCard = ({ icon, title, description }) => (
  <motion.li
    className="list-none flex w-full md:w-[360px]"
    variants={itemVariants}
  >
    <div className="relative flex flex-col h-full w-full rounded-2xl border border-neutral-800 bg-primary-900 p-4 md:p-6">
      <GlowingEffect
        spread={200}
        glow={true}
        disabled={false}
        proximity={100}
        inactiveZone={0.01}
        borderWidth={6}
        color="rgba(0, 200, 255, 0.9)"
      />

      <div className="relative flex flex-col gap-4 h-full rounded-xl bg-primary p-6 shadow-[0px_0px_27px_0px_#151515]">
        {/* Icon */}
        <div className="w-fit rounded-lg border border-purple-700 p-2">
          {icon}
        </div>
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>
        {/* Description List */}
        <div className="flex-grow text-sm md:text-base text-neutral-400">
          <ul className="space-y-1.5 list-outside list-disc pl-4">
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </motion.li>
);

// --- Categories ---
// CHANGE: Updated icon color from `text-neutral-400` to `text-accent` for all icons.
const productCategories = {
  university: [
    {
      icon: <ClipboardCheck className="h-6 w-6 text-accent" />,
      title: "Assessly – Smart Assessment Platform",
      description: [
        "Designed for educational & corporate institutions.",
        "Supports MCQ tests, coding challenges, and recruitment.",
        "Auto-generates questions and includes a Python compiler.",
      ],
    },
    {
      icon: <GitFork className="h-6 w-6 text-accent" />,
      title: "SkillSync – Full Coding Test Ecosystem",
      description: [
        "End-to-end platform for institutional coding evaluations.",
        "Covers slot booking, test setup, and database management.",
        "For universities & companies with large-scale tests.",
      ],
    },
    {
      icon: <Bot className="h-6 w-6 text-accent" />,
      title: "IntraQuest – AI Knowledge Assistant",
      description: [
        "Context-aware chatbot for internal organizational knowledge.",
        "Integrates with schools, hospitals, and enterprises.",
        "Boosts productivity with instant, secure answers.",
      ],
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Mock Bridge – AI + Human Mock Interviews",
      description: [
        "Interview prep for IT, law, management, and more.",
        "Connect with human interviewers for realistic practice.",
        "Get combined AI and human feedback to improve.",
      ],
    },
    {
      icon: <CheckSquare className="h-6 w-6 text-accent" />,
      title: "AttendEase – Smart Attendance System",
      description: [
        "Paperless, tamper-proof attendance via session OTPs.",
        "Students enter a brief on-screen code to mark presence.",
        "Saves time and ensures transparent, accurate records.",
      ],
    },
  ],

  smartAnalytics: [
    {
      icon: <ClipboardCheck className="h-6 w-6 text-accent" />,
      title: "People Analytics – Real-Time Monitoring",
      description: [
        "Counting & tracking people in real-time.",
        "Waiting time calculation and queue management.",
        "Re-Identification (ReID) for up to 10 people via embeddings.",
      ],
    },
    {
      icon: <GitFork className="h-6 w-6 text-accent" />,
      title: "Vehicle Analytics – Detection & Tracking",
      description: [
        "Real-time vehicle counting & tracking.",
        "License plate detection and automated logging.",
        "Works across lighting and angles.",
      ],
    },
    {
      icon: <Bot className="h-6 w-6 text-accent" />,
      title: "Computer Vision Analytics – Product Inspection",
      description: [
        "Steel & turmeric quality inspection.",
        "Custom-trained AI for high precision.",
      ],
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Customer Care – ARC Transportation",
      description: [
        "AI-powered fleet & personnel management.",
        "Natural language Text-to-SQL queries.",
      ],
    },
    {
      icon: <CheckSquare className="h-6 w-6 text-accent" />,
      title: "Industry Analytics & Invoice Processing",
      description: [
        "Product counting & defect detection.",
        "AI-driven invoice processing.",
      ],
    },
  ],
};

// --- Main Component ---
const Products = () => {
  const [category, setCategory] = useState("smartAnalytics");
  const productData = productCategories[category];

  return (
    <motion.div
      className="relative min-h-screen overflow-hidden bg-black pt-32 pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Title */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
          Our Products
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Intelligent software built to solve real-world challenges.
        </p>
      </motion.div>

      {/* Category Buttons */}
      <div className="mb-8 flex justify-center gap-4">
        <button
          className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-300 shadow-sm border-2 border-accent ${
            category === "university"
              ? "bg-accent text-white shadow-blue-400/50"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105"
          }`}
          onClick={() => setCategory("university")}
        >
          University Package
        </button>
        <button
          className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-300 shadow-sm border-2 border-accent ${
            category === "smartAnalytics"
              ? "bg-accent text-white shadow-blue-400/50"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105"
          }`}
          onClick={() => setCategory("smartAnalytics")}
        >
          Smart Analytics
        </button>
      </div>

      {/* Product Grid */}
      <AnimatePresence mode="wait">
        <motion.ul
          key={category}
          className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          {productData.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
            />
          ))}
        </motion.ul>
      </AnimatePresence>
    </motion.div>
  );
};

export default Products;