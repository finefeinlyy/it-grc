import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ISO27001() {
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
          ISO 27001: Information Security Management System
        </motion.h1>
        <motion.p
          className="max-w-4xl text-center text-gray-700 text-lg sm:text-xl leading-relaxed mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          ISO 27001 provides a systematic approach to managing sensitive company
          information, ensuring confidentiality, integrity, and availability
          through an effective ISMS (Information Security Management System).
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
                title: "Risk Assessment",
                description:
                  "Identify, evaluate, and mitigate risks to sensitive information.",
                icon: "⚠️",
              },
              {
                title: "Security Controls",
                description:
                  "Implement controls to protect data from unauthorized access.",
                icon: "🔒",
              },
              {
                title: "Continuous Improvement",
                description:
                  "Monitor and update the ISMS to address evolving threats.",
                icon: "🔄",
              },
              {
                title: "Compliance",
                description:
                  "Ensure adherence to legal, regulatory, and contractual requirements.",
                icon: "📜",
              },
              {
                title: "Certification",
                description:
                  "Achieve certification to demonstrate commitment to security.",
                icon: "🏅",
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

        {/* How It Works Section */}
        <motion.div
          className="mt-16 max-w-5xl text-left p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How ISO 27001 Works
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            ISO 27001 requires a systematic approach to managing information
            security risks, designing and implementing controls, and ensuring
            continuous improvement. The standard emphasizes a risk-based
            approach to security and integrates human, physical, and IT security
            measures.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              Examine the organization's information security risks, including
              threats, vulnerabilities, and impacts.
            </li>
            <li>
              Implement a suite of controls and risk treatments to mitigate
              unacceptable risks.
            </li>
            <li>
              Continuously monitor and adapt the ISMS to address evolving
              threats.
            </li>
          </ul>
        </motion.div>

        {/* History Section */}
        <motion.div
          className="mt-16 max-w-5xl text-left p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            History of ISO 27001
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            ISO 27001 evolved from BS 7799, a British Standard developed in
            1995. The standard became internationally recognized as ISO 27001 in
            2005. It has undergone multiple revisions to address modern security
            challenges, making it a cornerstone for global information security
            management.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ISO27001;
