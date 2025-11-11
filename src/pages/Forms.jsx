import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    otherDesignation: "",
    email: "",
    company: "",
    sampleVideo: "",
    description: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://api-form-prod.creozen.co.uk/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formType: "Apply for Demo",
          finalDesignation:
            formData.designation === "Others"
              ? formData.otherDesignation
              : formData.designation,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("✅ Your response has been recorded successfully!");
        setFormData({
          name: "",
          designation: "",
          otherDesignation: "",
          email: "",
          company: "",
          sampleVideo: "",
          description: "",
        });
      } else {
        setStatus(`❌ ${result.message || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("🚨 Connection error. Please try again.");
    } finally {
      setTimeout(() => setStatus(""), 5000);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="pt-32 pb-24 bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Apply for Demo
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Submit your details below and we’ll get back to you soon.
          </p>
        </motion.div>

        {/* Form */}
        <div className="bg-primary p-8 rounded-lg border border-gray-800">
          <AnimatePresence mode="wait">
            <motion.form
              key="demoForm"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-background border-gray-700 rounded-md py-2 px-3 text-white focus:ring-accent focus:border-accent transition"
                />
              </div>

              {/* Designation */}
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Designation
                </label>
                <select
                  name="designation"
                  required
                  value={formData.designation}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-background border-gray-700 rounded-md py-2 px-3 text-white focus:ring-accent focus:border-accent transition"
                >
                  <option value="">Select</option>
                  <option value="Student">Student</option>
                  <option value="Employee">Employee</option>
                  <option value="Business Owner">Business Owner</option>
                  <option value="Others">Others</option>
                </select>

                {formData.designation === "Others" && (
                  <motion.input
                    type="text"
                    name="otherDesignation"
                    placeholder="Please specify"
                    required
                    value={formData.otherDesignation}
                    onChange={handleChange}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-2 block w-full bg-background border-gray-700 rounded-md py-2 px-3 text-white focus:ring-accent focus:border-accent transition"
                  />
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-background border-gray-700 rounded-md py-2 px-3 text-white focus:ring-accent focus:border-accent transition"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-background border-gray-700 rounded-md py-2 px-3 text-white focus:ring-accent focus:border-accent transition"
                />
              </div>

              {/* Sample Video */}
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Paste your sample video (Google Drive link with all access)
                </label>
                <input
                  type="url"
                  name="sampleVideo"
                  required
                  value={formData.sampleVideo}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-background border-gray-700 rounded-md py-2 px-3 text-white focus:ring-accent focus:border-accent transition"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Description
                </label>
                <textarea
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full bg-background border-gray-700 rounded-md py-2 px-3 text-white focus:ring-accent focus:border-accent transition"
                />
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 rounded-md text-sm font-medium text-white bg-accent hover:bg-accent-hover transition"
                >
                  Submit
                </button>
                <div className="mt-4 h-5">
                  {status && (
                    <p
                      className={`text-sm ${
                        status.includes("success")
                          ? "text-green-400"
                          : status.includes("❌") || status.includes("🚨")
                          ? "text-red-400"
                          : "text-gray-400"
                      }`}
                    >
                      {status}
                    </p>
                  )}
                </div>
              </div>
            </motion.form>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Forms;
