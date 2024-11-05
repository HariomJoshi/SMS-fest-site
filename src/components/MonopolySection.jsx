import React from "react";
import { motion } from "framer-motion";
import image from "../assets/components/monopoly.png";

const MonopolySection = ({ monopolyRef, eventsRegtrationRef }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="monopoly"
      ref={monopolyRef}
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white py-20 px-6"
    >
      <motion.section
        // id="monopoly"
        className="flex flex-col items-center justify-center min-h-screen bg-black text-white py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl sm:text-5xl font-bold text-center sm:text-left"
          variants={textVariants}
          // data-scroll
          // data-scroll-speed="2"
        >
          Monopoly
        </motion.h2>
        <motion.svg
          width="100"
          height="20"
          className="mt-2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
          // data-scroll-speed="1.5"
        >
          <path
            d="M0 10 Q30 0, 60 10 T120 10"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </motion.svg>

        {/* Container for text and image */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between mt-10 max-w-5xl w-full">
          {/* Left Text Section */}
          <motion.div
            className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4 sm:w-1/2"
            variants={textVariants}
            data-scroll
            data-scroll-speed="2"
          >
            <p className="italic text-lg sm:text-xl max-w-lg">
              "Show your own business acumen to the world around you and the
              transition that takes you from a novice."
            </p>

            <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 mt-4">
              <a
                href="https://instagram.com/Monopoly_MNNIT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mb-4 sm:mb-0 px-4 py-2 border border-white rounded-lg text-white hover:bg-gray-800"
              >
                <i className="px-2 fab fa-instagram"></i>
                @Monopoly_MNNIT
              </a>
              <a
                href="https://facebook.com/Monopoly_MNNIT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 border border-white rounded-lg text-white hover:bg-gray-800"
              >
                <i className="px-2 fab fa-facebook"></i>
                @Monopoly_MNNIT
              </a>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="flex items-center justify-center mt-8 scale-100 lg:scale-150 sm:mt-0 sm:ml-6 sm:w-1/2"
            variants={imageVariants}
            data-scroll
            data-scroll-speed="1"
          >
            <img
              src={image}
              onClick={() => {
                eventsRegtrationRef.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              alt="Monopoly"
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-lg object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
};

export default MonopolySection;
