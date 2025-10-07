import { motion } from "framer-motion";
import { BarChart3, Brain, Code2, Package, Wifi, Workflow } from "lucide-react";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Web and App Development",
    description:
      "We build high-performance, scalable, and secure web and mobile applications tailored to your business needs. Our development process is collaborative and transparent, ensuring the end product not only meets but exceeds your expectations.",
    points: [
      "Custom UI/UX Design & Prototyping",
      "Responsive Web & Mobile Applications",
      "E-commerce & CMS Solutions",
      "API Integration & Development",
      "Ongoing Maintenance & Support",
    ],
    icon: <Code2 className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "AI-Based Smart Analytics",
    description:
      "Unlock the power of your data with our advanced AI analytics solutions to gain actionable insights and predict trends. From real-time monitoring to computer vision, we help you optimize operations and uncover new opportunities.",
    points: [
      "Real-Time Data Monitoring & Dashboards",
      "Predictive Modeling & Forecasting",
      "Computer Vision for Inspection & Monitoring",
      "Natural Language Processing (NLP)",
      "Custom Machine Learning Model Development",
    ],
    icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Custom Product Development",
    description:
      "From idea to launch, we are your dedicated partner in building bespoke AI, software, and IoT products. Our full-cycle development covers research, design, agile development, and successful deployment.",
    points: [
      "Full-Cycle Product Development",
      "MVP & PoC Creation",
      "Scalable Cloud Architecture",
      "IoT Product & Firmware Development",
      "Go-to-Market Strategy & Support",
    ],
    icon: <Package className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "AI-Based Training",
    description:
      "Empower your team with tailored corporate training programs and hands-on workshops led by industry experts. We ensure your team is equipped to drive innovation from within.",
    points: [
      "Customized Corporate Workshops",
      "Hands-On AI & Machine Learning Sessions",
      "Executive & Leadership AI Briefings",
      "Specialized Training in NLP & Computer Vision",
      "Certification & Skill Assessment",
    ],
    icon: <Brain className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Enterprise-Level Automations",
    description:
      "Streamline workflows, reduce costs, and enhance productivity with our intelligent automation solutions. From chatbots to RPA, we build secure and scalable systems that free your team for strategic initiatives.",
    points: [
      "Intelligent Chatbot & Voice Assistant Development",
      "Robotic Process Automation (RPA)",
      "Automated Workflow Optimization",
      "Internal Knowledge Management Systems",
      "AI-Powered Invoice & Document Processing",
    ],
    icon: <Workflow className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Smart IoT & Connected Solutions",
    description:
      "We build intelligent, connected ecosystems that bridge the physical and digital worlds for real-time control. Our IoT solutions deliver seamless integration, efficiency, and new user experiences.",
    points: [
      "Custom IoT Device & Sensor Development",
      "Firmware & Embedded Systems Engineering",
      "IoT Cloud Platform Integration",
      "Real-Time Data Visualization & Control",
      "Web & Mobile App Integration",
    ],
    icon: <Wifi className="w-8 h-8 text-indigo-600" />,
  },
];

// --- Services Page ---
const Services = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="relative pt-32 pb-24 bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500/20 to-transparent rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Page Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our range of innovative solutions designed to accelerate your business growth.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-start gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 text-6xl text-accent">
                {service.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6 whitespace-pre-line">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 text-gray-300">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheck className="text-accent text-sm" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <motion.button
            onClick={() => navigate("/contact")}
            className="flex items-center gap-2 rounded-lg px-6 py-3 text-lg font-semibold transition-all duration-300 shadow-sm border-2 border-accent group"
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
