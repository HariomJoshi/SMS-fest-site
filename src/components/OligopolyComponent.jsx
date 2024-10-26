import React from "react";

function OligopolyComponent() {
  return (
    <div
      id="oligopoly"
      className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center space-y-8 py-10 px-4"
    >
      {/* Title Section */}
      <div className="relative text-5xl md:text-6xl font-bold flex items-center justify-center">
        <h1 className="text-white">Oligopoly</h1>
        <span className="text-red-500 text-6xl md:text-7xl font-bold absolute right-[-30px] top-[-30px]">
          .
        </span>
      </div>

      {/* Subtitle */}
      <p className="text-gray-400 italic text-lg md:text-xl max-w-3xl mx-auto px-4">
        "Show your own business acumen to the world around you and the
        transition that takes you from a novice to a leader."
      </p>

      {/* Events Button */}
      <div className="relative">
        <button className="bg-red-500 text-white px-6 py-2 rounded-full text-lg hover:bg-red-400 active:scale-95 transform transition duration-200">
          EVENTS
        </button>
      </div>

      {/* Image Section */}
      <div className="w-32 h-32 md:w-48 md:h-48 border border-white rounded-lg flex items-center justify-center p-4">
        <img
          src="your-image-url"
          alt="Oligopoly Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Social Media Links */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4">
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
      </div>
    </div>
  );
}

export default OligopolyComponent;
