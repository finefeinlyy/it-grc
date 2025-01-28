import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { FaQuestionCircle, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#f4f4f8] min-h-screen flex flex-col items-center justify-center text-gray-900 font-sans overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Graphics */}
      <motion.div
        className="absolute top-16 left-10 w-40 h-40 bg-gradient-to-br from-green-400 to-teal-400 opacity-40 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [-10, 10, -10] }}
        transition={{ duration: 12, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-30 blur-3xl"
        animate={{ scale: [1, 1.3, 1], y: [10, -10, 10] }}
        transition={{ duration: 15, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-teal-400 to-blue-400 opacity-40 blur-2xl"
        animate={{ scale: [1, 1.4, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-br from-cyan-300 to-blue-300 opacity-30 blur-3xl"
        animate={{ scale: [1, 1.3, 1], rotate: [360, 0, 360] }}
        transition={{ duration: 20, repeat: Infinity }}
      ></motion.div>

      {/* Main Content */}
      <motion.div
        className="text-center w-full max-w-3xl px-6 py-8 bg-white/50 backdrop-blur-lg rounded-2xl shadow-lg mx-6 sm:mx-12 lg:mx-20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header Section */}
        <motion.div
          className="text-5xl mb-4 text-green-500 flex justify-center items-center gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          <FaQuestionCircle />
        </motion.div>
        <motion.h1
          className="text-4xl font-semibold text-gray-900 leading-snug"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          What is IT GRC?
        </motion.h1>
        <motion.p
          className="mt-4 text-[clamp(0.875rem, 1.5vw, 1.125rem)] text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Ensure your IT systems align with business goals, mitigate risks, and
          meet compliance standards with confidence.
        </motion.p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <motion.button
            onClick={() => navigate("/about")}
            className="px-5 py-2 bg-green-500 text-white rounded-full font-medium shadow-lg hover:bg-green-600 transition flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More <FaArrowRight />
          </motion.button>

          <motion.button
            onClick={() => navigate("/framework")}
            className="px-5 py-2 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Frameworks <FaArrowRight />
          </motion.button>
        </div>
      </motion.div>

      {/* Call to Action */}
      <div className="mt-12 text-center text-sm text-gray-600">
        Ready to learn more? Explore IT GRC frameworks and elevate your
        organization's security.
      </div>
    </div>
  );
};

export default Home;
