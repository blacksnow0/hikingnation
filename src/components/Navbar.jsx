import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur shadow-md px-4 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/" className="hover:text-[#1b5e20]">
          <h1 className="text-xl font-bold text-[#1f2937] tracking-wide">
            Hiking Nation
          </h1>
        </Link>

        <div className="hidden md:flex space-x-6 text-sm font-semibold tracking-wide">
          <Link to="/" className="hover:text-[#1b5e20]">
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
          className="md:hidden focus:outline-none text-[#1f2937]"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div
          className="md:hidden px-4 mt-2 space-y-2 text-sm font-semibold tracking-wide
               transition-all duration-300 ease-in-out animate-slide-fade"
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
