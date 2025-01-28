import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function About() {
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
      <div className="flex flex-col items-center justify-center px-6 pt-32 pb-16">
        {/* Header */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About IT GRC Essentials
        </motion.h1>
        <motion.p
          className="max-w-4xl text-center text-gray-700 text-lg sm:text-xl leading-relaxed mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          IT GRC stands for <strong>Governance, Risk, and Compliance</strong>. It
          is a framework designed to help organizations manage their IT systems,
          align them with business goals, minimize risks, and ensure compliance
          with relevant standards and regulations.
        </motion.p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl w-full">
          {[
            {
              title: "Governance",
              description:
                "Establishes decision-making frameworks and policies to align IT operations with organizational goals.",
              icon: "🔧",
            },
            {
              title: "Risk Management",
              description:
                "Identifies, evaluates, and mitigates risks related to IT systems and processes, ensuring security and reliability.",
              icon: "⚠️",
            },
            {
              title: "Compliance",
              description:
                "Ensures adherence to legal, regulatory, and industry standards to avoid penalties and maintain trust.",
              icon: "✅",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="text-4xl mb-4 text-center">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          className="mt-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Benefits of IT GRC
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-left">
            <li>Improves decision-making by providing structured governance.</li>
            <li>Reduces risks associated with data breaches, system failures, or non-compliance.</li>
            <li>Builds trust with stakeholders by demonstrating commitment to security and compliance.</li>
            <li>
              Helps organizations meet international standards like ISO 27001,
              NIST, and PCI-DSS.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
