import React from "react";
import { motion } from "framer-motion";
import smsImage from "../assets/components/smsImg.jpeg";
import mnnitImage from "../assets/components/mnnitImage.jpg";

const HeroSection = () => {
  // Define staggered fade-in animation properties
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.7, // Adjust delay between each element
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 30 }, // Start from below
    visible: { opacity: 1, y: 0 }, // Move to original position
  };

  return (
    <section
      id="introduction"
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white pt-20 md:pt-32 px-4 space-y-6 md:space-y-8"
    >
      <motion.div
        data-scroll
        className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.img
          src={smsImage}
          alt="Building"
          className="w-24 h-32 md:w-32 md:h-48 rounded-lg object-cover"
          variants={child}
        />
        <motion.div className="flex-col" variants={child}>
          <h1 className="text-3xl md:text-6xl">
            School of <br /> Management
            <br />
            <div className="flex">
              Studies{" "}
              <div className="flex px-8 text-red-600 text-5xl md:text-8xl font-brusher font-bold block mt-2 md:mt-0">
                presents
              </div>
            </div>
          </h1>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.button
          className="px-6 md:px-8 py-3 md:py-4 bg-transparent border border-white text-white rounded-full hover:bg-gray-700 transition"
          variants={child}
        >
          Oligopoly
        </motion.button>
        <motion.button
          className="px-6 md:px-8 py-3 md:py-4 bg-transparent border border-white text-white rounded-full hover:bg-gray-700 transition"
          variants={child}
        >
          Monopoly
        </motion.button>
      </motion.div>

      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.img
          src={mnnitImage}
          alt="Lower Image"
          className="w-40 h-24 md:w-64 rounded-lg object-cover mt-6 md:mt-8"
          variants={child}
        />
        <motion.p
          className="mt-4 text-base md:text-lg font-light text-center"
          variants={child}
        >
          We craft experiences; we don’t plan events
        </motion.p>
        <motion.div className="mt-4" variants={child}>
          <svg
            width="100"
            height="16"
            md:width="120"
            md:height="20"
            className="text-white"
          >
            <path
              d="M0 10 Q30 0, 60 10 T120 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
