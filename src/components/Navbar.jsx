import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur shadow-md px-4 py-4 ${
        isHome ? "bg-white/20" : "bg-green-900/80"
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/" className="flex items-center gap-2 hover:text-[#1b5e20]">
          <img
            src={logo}
            alt="Hiking Nation Logo"
            className="w-20 h-10 object-contain"
          />
        </Link>

        <div className="hidden md:flex space-x-6 text-sm font-semibold tracking-wide">
          <Link to="/" className=" hover:text-[#1b5e20]">
            Home
          </Link>
          <Link to="/destinations" className="hover:text-[#1b5e20]">
            Destinations
          </Link>
          <Link to="/about" className="hover:text-[#1b5e20]">
            About
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className={`md:hidden focus:outline-none ${
            isHome ? " text-[#1f2937]" : "text-white"
          }`}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div
          className="md:hidden px-4 mt-2 space-y-2 text-sm font-semibold tracking-wide
               transition-all duration-300 ease-in-out animate-slide-fade "
        >
          <Link
            to="/"
            onClick={toggleMenu}
            className="block px-2 py-2 rounded hover:bg-brand/10 hover:text-brand transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/destinations"
            onClick={toggleMenu}
            className="block px-2 py-2 rounded hover:bg-brand/10 hover:text-brand transition-colors duration-200"
          >
            Destinations
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="block px-2 py-2 rounded hover:bg-brand/10 hover:text-brand transition-colors duration-200"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
