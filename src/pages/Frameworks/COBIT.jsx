import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function COBIT() {
  const carouselRef = useRef(null);

  // Scroll Functions
  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative bg-[#f4f4f8] min-h-screen text-gray-900 font-sans overflow-hidden">
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

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

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6 pt-32 pb-16">
        {/* Header */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          COBIT Framework
        </motion.h1>
        <motion.p
          className="max-w-4xl text-center text-gray-700 text-lg sm:text-xl leading-relaxed mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          COBIT (Control Objectives for Information and Related Technology) is a
          comprehensive framework for IT governance and management, helping
          organizations align IT strategy with business goals and optimize resources.
        </motion.p>

        {/* Cards Carousel with Buttons */}
        <div className="relative w-full px-6">
          {/* Scroll Buttons */}
          <div className="absolute inset-y-0 left-4 flex items-center z-10">
            <button
              onClick={scrollLeft}
              className="bg-gray-200 p-3 rounded-full shadow-lg hover:bg-gray-300 transition flex items-center justify-center"
            >
              <FaChevronLeft className="text-gray-600 text-lg" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-4 flex items-center z-10">
            <button
              onClick={scrollRight}
              className="bg-gray-200 p-3 rounded-full shadow-lg hover:bg-gray-300 transition flex items-center justify-center"
            >
              <FaChevronRight className="text-gray-600 text-lg" />
            </button>
          </div>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex space-x-4 overflow-x-scroll scrollbar-hidden pt-4"
          >
            {[
              {
                title: "Address Stakeholder Needs",
                description:
                  "Ensures systematic identification and fulfillment of stakeholder needs.",
                icon: "📋",
              },
              {
                title: "End-to-End Coverage",
                description:
                  "Provides comprehensive governance across all IT systems.",
                icon: "🌐",
              },
              {
                title: "Integrated Frameworks",
                description:
                  "Supports communication between software applications.",
                icon: "🔗",
              },
              {
                title: "Holistic Approach",
                description:
                  "Looks at IT systems as a whole to address overall needs.",
                icon: "🏢",
              },
              {
                title: "Governance vs. Management",
                description:
                  "Separates governance from management for effective decision-making.",
                icon: "⚖️",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="min-w-[250px] max-w-[300px] bg-white/70 backdrop-blur-lg p-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* History and Benefits Section */}
        <motion.div
          className="mt-16 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* History */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              History of COBIT Framework
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              COBIT was first published in 1996 by the IT Governance Institute
              (ITGI). It has been instrumental in aligning IT systems with business
              goals and improving governance practices. COBIT has since evolved to
              address modern IT challenges and compliance requirements.
            </p>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Benefits of COBIT Framework
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Enhances IT governance and management capabilities.</li>
              <li>Optimizes resource allocation and reduces inefficiencies.</li>
              <li>
                Improves alignment of IT strategies with business objectives.
              </li>
              <li>
                Supports regulatory compliance and risk management efforts.
              </li>
              <li>Provides a unified framework for decision-making processes.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default COBIT;
