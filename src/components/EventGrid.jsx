import React from "react";
import adHole from "../assets/components/ad-hole.mp4";
import pitchers from "../assets/components/pitchers.mp4";
import soloLobo from "../assets/components/soloLobo.mp4";
import tradingS from "../assets/components/tradingS.mp4";

function EventGrid() {
  return (
    <section id="oligopoly-registration">
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center space-y-6 p-4">
        {/* Centering the grid container */}
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl">
            {/* First Card */}
            <div className="relative bg-red-800  p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <video
                src={adHole}
                alt="Ad-Hole"
                className="w-full h-48 object-cover rounded-md"
              />
              <p className="mt-4 text-white text-center">
                Avishkar Oligopoly - AD-HOLE
              </p>
            </div>

            {/* Second Card */}
            <div className="relative bg-red-200 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <video
                src={pitchers}
                alt="Pitchers"
                className="w-full h-48 object-cover rounded-md"
              />
              <p className="mt-4 text-black text-center">
                Avishkar Oligopoly - Pitchers
              </p>
            </div>

            {/* Third Card */}
            <div className="relative bg-red-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <video
                src={soloLobo}
                alt="Solo Lobo"
                className="w-full h-48 object-cover rounded-md"
              />
              <p className="mt-4 text-white text-center">
                Avishkar Oligopoly - Solo Lobo
              </p>
            </div>

            {/* Fourth Card */}
            <div className="relative bg-red-200 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <video
                src={tradingS}
                alt="Trading Strategist"
                className="w-full h-48 object-cover rounded-md"
              />
              <p className="mt-4 text-black text-center">
                Avishkar Oligopoly - Trading Strategist
              </p>
            </div>
          </div>
        </div>

        {/* Register Button */}
        <button className="mt-8 px-6 py-2 text-lg bg-yellow-400 text-black hover:bg-red-800 hover:text-white font-bold rounded-full shadow-lg transform transition duration-300 hover:scale-110">
          Register Now!
        </button>
      </div>
    </section>
  );
}

export default EventGrid;
