// components/EventsRegistrationSection.js
import React from "react";

const EventsRegistrationSection = () => {
  return (
    <section
      id="events-registration"
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white py-20 px-6"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center">
        <span className="text-red-600">MONO</span>POLY
      </h2>
      <p className="mt-2 text-center text-lg sm:text-xl">EVENTS-REGISTRATION</p>
      <svg width="100" height="20" className="mt-2">
        <path
          d="M0 10 Q30 0, 60 10 T120 10"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-opacity-80 bg-gradient-to-r from-gray-800 to-gray-900 p-8 sm:p-10 rounded-lg shadow-md max-w-3xl w-full">
        <div className="flex items-center space-x-4">
          <img
            src="path-to-chanakya-image"
            alt="Chanakya Neeti"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="text-lg font-semibold">Chanakya Neeti</p>
            <p className="text-sm text-gray-300">चाणक्य नीति</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="path-to-netritva-image"
            alt="Netritva"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="text-lg font-semibold">Netritva</p>
            <p className="text-sm text-gray-300">नेतृत्व</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="path-to-stall-mart-image"
            alt="Stall Mart"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="text-lg font-semibold">Stall Mart</p>
            <p className="text-sm text-gray-300">स्टाल मार्ट</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="path-to-navachar-image"
            alt="Navachar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="text-lg font-semibold">Navachar</p>
            <p className="text-sm text-gray-300">नवाचार</p>
          </div>
        </div>
      </div>

      <button className="mt-8 px-6 py-3 bg-orange-500 text-black font-semibold rounded-lg shadow-md hover:bg-orange-600">
        REGISTRATION LINK
      </button>

      <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-6 mt-10">
        <a
          href="https://instagram.com/Monopoly_MNNIT"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mb-4 sm:mb-0 px-4 py-2 border border-white rounded-lg text-white hover:bg-gray-800"
        >
          <i className=" px-2 fab fa-instagram"></i> @Monopoly_MNNIT
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
    </section>
  );
};

export default EventsRegistrationSection;
