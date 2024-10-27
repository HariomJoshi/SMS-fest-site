import React from "react";
import { motion } from "framer-motion";

function OligopolyComponent({ oligopolyRef }) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Slow transition for container
        when: "beforeChildren",
        staggerChildren: 0.5, // Stagger animations for child elements
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Slow transition for child elements
  };

  return (
    <section
      id="oligopoly"
      ref={oligopolyRef}
      className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center space-y-8 py-10 px-4"
    >
      <motion.div
        className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center space-y-8 py-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }} // Trigger every time section is 50% in view
        variants={containerVariants} // Apply container animation
      >
        {/* Title Section */}
        <motion.div
          className="relative text-5xl md:text-6xl font-bold flex items-center justify-center"
          variants={childVariants} // Apply child animation
        >
          <h1 className="text-white">Oligopoly</h1>
          <motion.span
            className="text-red-500 text-6xl md:text-7xl font-bold absolute right-[-30px] top-[-30px]"
            variants={childVariants}
          >
            .
          </motion.span>
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
          <button className="bg-red-500 text-white px-6 py-2 rounded-full text-lg hover:bg-red-400 active:scale-95 transform transition duration-200">
            EVENTS
          </button>
        </motion.div>

        {/* Image Section */}
        {/* <motion.div
          className="w-32 h-32 md:w-48 md:h-48 border border-white rounded-lg flex items-center justify-center p-4"
          variants={childVariants}
        >
          <img
            src="your-image-url"
            alt="Oligopoly Logo"
            className="w-full h-full object-contain"
          />
        </motion.div> */}

        {/* Social Media Links */}
        <motion.div
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4"
          variants={childVariants}
        >
          <motion.a
            href="https://instagram.com/Oligopoly_MNNIT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-gray-400 transition duration-200"
            variants={childVariants}
          >
            <i className="fab fa-instagram"></i>
            <span>@Oligopoly_MNNIT</span>
          </motion.a>
          <motion.a
            href="https://facebook.com/Oligopoly_MNNIT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-gray-400 transition duration-200"
            variants={childVariants}
          >
            <i className="fab fa-facebook"></i>
            <span>@Oligopoly_MNNIT</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default OligopolyComponent;
