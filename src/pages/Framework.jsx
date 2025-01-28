import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaCogs, FaCreditCard } from "react-icons/fa";

const Frameworks = () => {
  const frameworks = [
    {
      name: "NIST",
      path: "/frameworks/nist",
      description:
        "A flexible framework for managing and reducing cybersecurity risks.",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      icon: <FaShieldAlt className="text-blue-500 text-4xl" />,
    },
    {
      name: "ISO 27001",
      path: "/frameworks/iso27001",
      description:
        "An international standard for managing information security.",
      buttonColor: "bg-green-500 hover:bg-green-600",
      icon: <FaLock className="text-green-500 text-4xl" />,
    },
    {
      name: "COBIT",
      path: "/frameworks/cobit",
      description:
        "A framework for IT governance and management, aligning IT with business goals.",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      icon: <FaCogs className="text-yellow-500 text-4xl" />,
    },
    {
      name: "PCI-DSS",
      path: "/frameworks/pci-dss",
      description:
        "A standard ensuring secure credit card transactions and data protection.",
      buttonColor: "bg-red-500 hover:bg-red-600",
      icon: <FaCreditCard className="text-red-500 text-4xl" />,
    },
  ];

  return (
    <div className="relative bg-[#f4f4f8] min-h-screen text-gray-900 font-sans overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Graphics */}
      <motion.div
        className="absolute top-16 left-10 w-40 h-40 bg-green-400 opacity-40 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [-10, 10, -10] }}
        transition={{ duration: 12, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 right-20 w-60 h-60 bg-blue-400 opacity-30 blur-3xl"
        animate={{ scale: [1, 1.3, 1], y: [10, -10, 10] }}
        transition={{ duration: 15, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-teal-400 opacity-40 blur-2xl"
        animate={{ scale: [1, 1.4, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute top-10 right-10 w-48 h-48 bg-cyan-300 opacity-30 blur-3xl"
        animate={{ scale: [1, 1.3, 1], rotate: [360, 0, 360] }}
        transition={{ duration: 20, repeat: Infinity }}
      ></motion.div>

      {/* Main Content */}
      <div className="flex flex-col items-center pt-24 px-6">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-12 text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Frameworks
        </motion.h1>

        {/* Framework Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl w-full">
          {frameworks.map((framework, index) => (
            <motion.div
              key={index}
              className="relative bg-white/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="flex items-center justify-between mb-4">
                {framework.icon}
                <h2 className="text-xl font-semibold text-gray-800">
                  {framework.name}
                </h2>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                {framework.description}
              </p>
              <Link
                to={framework.path}
                className={`absolute bottom-4 right-4 px-4 py-2 text-sm text-white rounded-full shadow-md transition ${framework.buttonColor}`}
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frameworks;
