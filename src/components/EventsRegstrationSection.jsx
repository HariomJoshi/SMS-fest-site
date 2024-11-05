// components/EventsRegistrationSection.js
import React from "react";
import { motion } from "framer-motion";
import chankyaNeeti from "../assets/components/chanakya.jpeg";
import stallMart from "../assets/components/stallMart.jpeg";
import navchar from "../assets/components/navchar.mp4";
import netriva from "../assets/components/netriva.mp4";

const EventsRegistrationSection = ({ eventsRegtrationRef }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Slow transition
        when: "beforeChildren",
        staggerChildren: 0.5, // Stagger children animations
      },
    },
  };

  const handleNewWindow = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Slow transition for child elements
  };

  return (
    <section
      id="events-registration"
      ref={eventsRegtrationRef}
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white py-20 px-6"
    >
      <motion.section
        // id="events-registration"

        className="flex flex-col items-center justify-center min-h-screen bg-black text-white py-20 px-6"
        initial="hidden"
        whileInView="visible" // Trigger animation on view
        viewport={{ once: false, amount: 0.2 }} // Trigger every time section is 50% in view
        variants={containerVariants}
      >
        <motion.h2
          // data-scroll
          // data-scroll-speed="1.5"
          className="text-4xl sm:text-5xl font-bold text-center"
          variants={childVariants} // Apply child variants
        >
          <span className="text-red-600">MONO</span>POLY
        </motion.h2>
        <motion.p
          className="mt-2 text-center text-lg sm:text-xl"
          variants={childVariants}
        >
          EVENTS-REGISTRATION
        </motion.p>
        <motion.svg
          width="100"
          height="20"
          className="mt-2"
          variants={childVariants}
        >
          <path
            d="M0 10 Q30 0, 60 10 T120 10"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </motion.svg>

        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-opacity-80 bg-gradient-to-r from-gray-800 to-gray-900 p-8 sm:p-10 rounded-lg shadow-md max-w-3xl w-full"
          variants={childVariants}
        >
          {[
            {
              name: "Chanakya Neeti",
              alt: "Chanakya Neeti",
              image: chankyaNeeti,
              nativeName: "चाणक्य नीति",
            },
            {
              name: "Netritva",
              alt: "Netritva",
              image: netriva,
              nativeName: "नेतृत्व",
            },
            {
              name: "Stall Mart",
              alt: "Stall Mart",
              image: stallMart,
              nativeName: "स्टाल मार्ट",
            },
            {
              name: "Navachar",
              alt: "Navachar",
              image: navchar,
              nativeName: "नवाचार",
            },
          ].map((event, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4"
              variants={childVariants} // Apply child variants for each event
            >
              {index % 2 == 0 && (
                <img
                  src={event.image}
                  alt={event.alt}
                  className="w-12 h-12 rounded-full"
                />
              )}
              {index % 2 == 1 && (
                <video
                  src={event.image}
                  alt={event.alt}
                  className="w-12 h-12 rounded-full"
                ></video>
              )}
              <div>
                <p className="text-lg font-semibold">{event.name}</p>
                <p className="text-sm text-gray-300">{event.nativeName}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          className="mt-8 px-6 py-3 bg-orange-500 text-black font-semibold rounded-lg shadow-md hover:bg-orange-600"
          variants={childVariants}
          onClick={() => {
            handleNewWindow(
              "https://docs.google.com/forms/d/e/1FAIpQLScHy6Ik0sMrGZwJkNEV75bY-wC4bpDUV8cWmZyQhG5jO_pHeA/viewform?usp=sf_link"
            );
          }}
        >
          REGISTRATION LINK
        </motion.button>

        <motion.div
          className="flex flex-col sm:flex-row space-x-0 sm:space-x-6 mt-10"
          variants={childVariants}
        >
          <motion.a
            href="https://instagram.com/Monopoly_MNNIT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-4 sm:mb-0 px-4 py-2 border border-white rounded-lg text-white hover:bg-gray-800"
            variants={childVariants}
          >
            <i className="px-2 fab fa-instagram"></i> @Monopoly_MNNIT
          </motion.a>
          <motion.a
            href="https://facebook.com/Monopoly_MNNIT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 border border-white rounded-lg text-white hover:bg-gray-800"
            variants={childVariants}
          >
            <i className="px-2 fab fa-facebook"></i> @Monopoly_MNNIT
          </motion.a>
        </motion.div>
      </motion.section>
    </section>
  );
};

export default EventsRegistrationSection;
