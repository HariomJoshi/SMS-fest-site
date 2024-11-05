import React from "react";
import { motion } from "framer-motion";

const OligopolyComponent = ({ oligopolyRef, eventsGridRef }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      id="oligopoly"
      ref={oligopolyRef}
      className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center space-y-8 py-10 px-4"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }} // Adjusted to trigger when 50% in view
      variants={containerVariants}
    >
      {/* Title Section */}
      <motion.div
        className="relative text-5xl md:text-6xl font-bold flex items-center justify-center"
        variants={childVariants}
      >
        <h1 className="text-white">Oligopoly</h1>
        <span className="text-red-500 text-6xl md:text-7xl font-bold absolute right-[-30px] top-[-30px]">
          .
        </span>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="text-gray-400 italic text-lg md:text-xl max-w-3xl mx-auto px-4"
        variants={childVariants}
      >
        "Show your own business acumen to the world around you and the
        transition that takes you from a novice to a leader."
      </motion.p>

      {/* Events Button */}
      <motion.div className="relative" variants={childVariants}>
        <button
          onClick={() =>
            eventsGridRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-red-500 text-white px-6 py-2 rounded-full text-lg hover:bg-red-400 active:scale-95 transform transition duration-200"
        >
          EVENTS
        </button>
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4"
        variants={childVariants}
      >
        <a
          href="https://instagram.com/Oligopoly_MNNIT"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-gray-400 transition duration-200"
        >
          <i className="fab fa-instagram"></i>
          <span>@Oligopoly_MNNIT</span>
        </a>
        <a
          href="https://facebook.com/Oligopoly_MNNIT"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-gray-400 transition duration-200"
        >
          <i className="fab fa-facebook"></i>
          <span>@Oligopoly_MNNIT</span>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default OligopolyComponent;
