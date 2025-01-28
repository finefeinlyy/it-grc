import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function NIST() {
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
          NIST Cybersecurity Framework
        </motion.h1>
        <motion.p
          className="max-w-4xl text-center text-gray-700 text-lg sm:text-xl leading-relaxed mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          The NIST Cybersecurity Framework provides a structured approach to
          managing and reducing cybersecurity risks, ensuring organizations can
          effectively respond to cyber threats while aligning with best practices.
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
                title: "Identify",
                description:
                  "Understand organizational risks, assets, and vulnerabilities to set priorities.",
                icon: "🔍",
              },
              {
                title: "Protect",
                description:
                  "Implement safeguards like access controls, firewalls, and training programs.",
                icon: "🛡️",
              },
              {
                title: "Detect",
                description:
                  "Identify cybersecurity events quickly through monitoring and detection systems.",
                icon: "📡",
              },
              {
                title: "Respond",
                description:
                  "Develop processes to contain and mitigate the effects of cyber incidents.",
                icon: "⚙️",
              },
              {
                title: "Recover",
                description:
                  "Plan recovery efforts to restore operations and reduce future risks.",
                icon: "🔄",
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

        {/* History Section */}
        <motion.div
  className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-8"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* History Section */}
  <div className="text-left space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800">
      History of NIST Cybersecurity Framework
    </h2>
    <p className="text-gray-700 text-lg leading-relaxed">
      The NIST Cybersecurity Framework was introduced in 2014 by the National
      Institute of Standards and Technology (NIST) in response to an executive
      order by President Obama. Its aim was to improve critical infrastructure
      cybersecurity across industries. Over the years, it has evolved to
      address modern challenges, including supply chain and cloud security.
    </p>
  </div>

  {/* Benefits Section */}
  <div className="text-left space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800">
      Benefits of Using NIST
    </h2>
    <ul className="list-disc pl-6 space-y-3 text-gray-700">
      <li>Improves resilience to cyber threats with a structured approach.</li>
      <li>
        Aligns IT and security teams with organizational goals and compliance
        requirements.
      </li>
      <li>Enhances trust with stakeholders through proven standards.</li>
      <li>Supports scalable implementation for organizations of all sizes.</li>
      <li>
        Helps organizations achieve compliance with industry regulations.
      </li>
    </ul>
  </div>
</motion.div>
      </div>
    </div>
  );
}

export default NIST;
