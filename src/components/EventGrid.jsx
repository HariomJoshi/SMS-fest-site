import React from "react";
import { motion } from "framer-motion";
import adHole from "../assets/components/ad-hole.mp4";
import pitchers from "../assets/components/pitchers.mp4";
import soloLobo from "../assets/components/soloLobo.mp4";
import tradingS from "../assets/components/tradingS.mp4";

const EventGrid = ({ eventsGridRef }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const handleNewWindow = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="oligopoly-registration"
      ref={eventsGridRef}
      className="bg-black text-white min-h-screen flex flex-col items-center justify-center space-y-6"
    >
      <motion.section
        // id="oligopoly-registration"
        className="bg-black text-white min-h-screen flex flex-col items-center justify-center space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={containerVariants}
      >
        {/* Centering the grid container */}
        <div className="flex justify-center w-full">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl"
            variants={containerVariants}
          >
            {/* First Card */}
            <motion.div
              className="relative bg-red-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              variants={cardVariants}
            >
              <video
                src={adHole}
                alt="Ad-Hole"
                className="w-full h-48 object-cover rounded-md"
                autoPlay
                loop
                muted
              />
              <p className="mt-4 text-white text-center">
                Avishkar Oligopoly - AD-HOLE
              </p>
            </motion.div>

            {/* Second Card */}
            <motion.div
              className="relative bg-red-200 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              variants={cardVariants}
            >
              <video
                src={pitchers}
                alt="Pitchers"
                className="w-full h-48 object-cover rounded-md"
                autoPlay
                loop
                muted
              />
              <p className="mt-4 text-black text-center">
                Avishkar Oligopoly - Pitchers
              </p>
            </motion.div>

            {/* Third Card */}
            <motion.div
              className="relative bg-red-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              variants={cardVariants}
            >
              <video
                src={soloLobo}
                alt="Solo Lobo"
                className="w-full h-48 object-cover rounded-md"
                autoPlay
                loop
                muted
              />
              <p className="mt-4 text-white text-center">
                Avishkar Oligopoly - Solo Lobo
              </p>
            </motion.div>

            {/* Fourth Card */}
            <motion.div
              className="relative bg-red-200 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              variants={cardVariants}
            >
              <video
                src={tradingS}
                alt="Trading Strategist"
                className="w-full h-48 object-cover rounded-md"
                autoPlay
                loop
                muted
              />
              <p className="mt-4 text-black text-center">
                Avishkar Oligopoly - Trading Strategist
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Register Button */}
        <motion.button
          className="mt-8 px-6 py-2 text-lg bg-yellow-400 text-black hover:bg-red-800 hover:text-white font-bold rounded-full shadow-lg transform transition duration-300 mb-10"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => handleNewWindow("https://forms.gle/5CfPQkJJsJeEL3et6")}
        >
          Register Now!
        </motion.button>
      </motion.section>
    </section>
  );
};

export default EventGrid;
