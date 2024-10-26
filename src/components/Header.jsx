import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/components/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-black text-white py-4 px-8 flex justify-between items-center z-10">
      <img src={logo} alt="Avishkar Logo" className="w-16 h-16 scale-150" />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        <a href="#introduction" className="hover:text-gray-400">
          Introduction
        </a>
        <a href="#monopoly" className="hover:text-gray-400">
          Monopoly
        </a>
        <a href="#events-registration" className="hover:text-gray-400">
          Monopoly Registration
        </a>
        <a href="#oligopoly" className="hover:text-gray-400">
          Oligopoly
        </a>
        <a href="#oligopoly-registration" className="hover:text-gray-400">
          Oligopoly Registration
        </a>
      </nav>

      {/* Hamburger Icon */}
      <div className="md:hidden cursor-pointer z-20 px-5" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          className={`absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center space-y-8 md:hidden
                      transition-opacity duration-500 ${
                        menuOpen ? "opacity-100" : "opacity-0"
                      }
                    `}
        >
          <a
            href="#introduction"
            className="text-xl hover:text-gray-400"
            onClick={toggleMenu}
          >
            Introduction
          </a>
          <a
            href="#monopoly"
            className="text-xl hover:text-gray-400"
            onClick={toggleMenu}
          >
            Monopoly
          </a>
          <a
            href="#events-registration"
            className="text-xl hover:text-gray-400"
            onClick={toggleMenu}
          >
            Monopoly Registration
          </a>
          <a
            href="#oligopoly"
            className="text-xl hover:text-gray-400"
            onClick={toggleMenu}
          >
            Oligopoly
          </a>
          <a
            href="#oligopoly-registration"
            className="text-xl hover:text-gray-400"
            onClick={toggleMenu}
          >
            Oligopoly Registration
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
