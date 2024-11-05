import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/components/logo.png";

const Header = ({
  herosectionRef,
  monopolyRef,
  eventsRegtrationRef,
  oligopolyRef,
  eventsGridRef,
  scrollInstance,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const handleScroll = (target) => {
  //   if (scrollInstance) {
  //     scrollInstance.scrollTo(target, {
  //       offset: -100, // adjust as needed for any fixed header height
  //       duration: 800,
  //     });
  //   }
  //   toggleMenu(); // close the menu on mobile after navigating
  // };

  return (
    <header className="fixed top-0 w-full bg-black text-white py-4 px-8 flex justify-between items-center z-10">
      <img src={logo} alt="Avishkar Logo" className="w-16 h-16 scale-150" />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        <span
          onClick={() =>
            herosectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="hover:text-gray-400 cursor-pointer"
        >
          Introduction
        </span>
        <span
          onClick={() =>
            monopolyRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="hover:text-gray-400 cursor-pointer"
        >
          Monopoly
        </span>
        <span
          onClick={() =>
            eventsRegtrationRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="hover:text-gray-400 cursor-pointer"
        >
          Monopoly Registration
        </span>
        <span
          onClick={() =>
            oligopolyRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="hover:text-gray-400 cursor-pointer"
        >
          Oligopoly
        </span>
        <span
          onClick={() =>
            eventsGridRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="hover:text-gray-400 cursor-pointer"
        >
          Oligopoly Registration
        </span>
      </nav>

      {/* Hamburger Icon */}
      <div className="md:hidden cursor-pointer z-20 px-5" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center space-y-8 md:hidden transition-opacity duration-500 opacity-100">
          <span
            onClick={() => {
              herosectionRef.current.scrollIntoView({ behavior: "smooth" });
              toggleMenu();
            }}
            className="text-xl hover:text-gray-400 cursor-pointer"
          >
            Introduction
          </span>
          <span
            onClick={() => {
              monopolyRef.current.scrollIntoView({ behavior: "smooth" });
              toggleMenu();
            }}
            className="text-xl hover:text-gray-400 cursor-pointer"
          >
            Monopoly
          </span>
          <span
            onClick={() => {
              eventsRegtrationRef.current.scrollIntoView({
                behavior: "smooth",
              });
              toggleMenu();
            }}
            className="text-xl hover:text-gray-400 cursor-pointer"
          >
            Monopoly Registration
          </span>
          <span
            onClick={() => {
              oligopolyRef.current.scrollIntoView({ behavior: "smooth" });
              toggleMenu();
            }}
            className="text-xl hover:text-gray-400 cursor-pointer"
          >
            Oligopoly
          </span>
          <span
            onClick={() => {
              eventsGridRef.current.scrollIntoView({ behavior: "smooth" });
              toggleMenu();
            }}
            className="text-xl hover:text-gray-400 cursor-pointer"
          >
            Oligopoly Registration
          </span>
        </nav>
      )}
    </header>
  );
};

export default Header;
