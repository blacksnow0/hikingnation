import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-white py-10 px-6 border-t border-[#1aac83]/20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        {/* Logo or Title */}
        <div className="text-xl font-semibold tracking-wider uppercase text-white">
          Hiking Nation
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col sm:flex-row gap-4 text-sm text-white/80">
          <Link to="/" className="hover:text-brand transition">
            Home
          </Link>
          <Link to="/destinations" className="hover:text-brand transition">
            Destinations
          </Link>
          <Link to="/about" className="hover:text-brand transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-brand transition">
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 text-white/70 text-sm">
          <a
            href="https://www.instagram.com/hikingnation2025/profilecard/?igsh=MWU1amV6bHV0ejQ1eA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand"
          >
            <FaFacebookF size={18} />
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Hiking Nation. All rights reserved.
      </div>
    </footer>
  );
}
