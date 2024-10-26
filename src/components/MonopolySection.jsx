import React from "react";
import image from "../assets/components/monopoly.png";

const MonopolySection = () => {
  return (
    <section
      id="monopoly"
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white py-20 px-6"
    >
      <h2 className="text-3xl sm:text-5xl font-bold text-center sm:text-left">
        Monopoly
      </h2>
      <svg width="100" height="20" className="mt-2">
        <path
          d="M0 10 Q30 0, 60 10 T120 10"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      {/* Container for text and image */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between mt-10 max-w-5xl w-full">
        {/* Left Text Section */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4 sm:w-1/2">
          <p className="italic text-lg sm:text-xl max-w-lg">
            "Show your own business acumen to the world around you and the
            transition that takes you from a novice."
          </p>

          {/* Social Links */}
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
              <i className=" px-2 fab fa-facebook"></i>
              @Monopoly_MNNIT
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex items-center justify-center mt-8 sm:mt-0 sm:ml-6 sm:w-1/2">
          <img
            src={image}
            alt="Monopoly"
            className="w-48 h-48 sm:w-64 sm:h-64 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default MonopolySection;
