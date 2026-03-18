import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Calculator, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper function to check if a link is the current active page
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-calc-white/85 backdrop-blur-md border-b border-calc-lightGray shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* 1. Premium Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-calc-green text-calc-white p-2.5 rounded-xl group-hover:bg-calc-darkGreen transition-colors shadow-sm">
              <Calculator size={24} />
            </div>
            <span className="text-2xl font-extrabold text-calc-black tracking-tight">
              Calc<span className="text-calc-green">Pilot</span>
            </span>
          </Link>

          {/* 2. Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-base font-semibold transition-colors hover:text-calc-green ${
                isActive("/") ? "text-calc-green" : "text-calc-gray"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-base font-semibold transition-colors hover:text-calc-green ${
                isActive("/about") ? "text-calc-green" : "text-calc-gray"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-base font-semibold transition-colors hover:text-calc-green ${
                isActive("/contact") ? "text-calc-green" : "text-calc-gray"
              }`}
            >
              Contact
            </Link>
          </div>
          {/* 3. Desktop Call-to-Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="/#trending"
              className="bg-calc-green/10 text-calc-green border border-calc-green/20 px-6 py-2.5 rounded-full font-bold hover:bg-calc-green hover:text-calc-white transition-all duration-300 shadow-sm"
            >
              Explore Trending Calculators
            </a>
          </div>
          {/* 4. Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-calc-black hover:text-calc-green transition-colors p-2 focus:outline-none"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute w-full bg-calc-white border-b border-calc-lightGray shadow-xl transition-all duration-300 origin-top ${
          isOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
              isActive("/")
                ? "bg-calc-green/10 text-calc-green"
                : "text-calc-gray hover:bg-calc-beige hover:text-calc-black"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
              isActive("/about")
                ? "bg-calc-green/10 text-calc-green"
                : "text-calc-gray hover:bg-calc-beige hover:text-calc-black"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
              isActive("/contact")
                ? "bg-calc-green/10 text-calc-green"
                : "text-calc-gray hover:bg-calc-beige hover:text-calc-black"
            }`}
          >
            Contact
          </Link>
          <div className="pt-4 mt-2 border-t border-calc-lightGray">
            <a
              href="/#trending"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-calc-green text-calc-white px-6 py-3 rounded-lg font-bold hover:bg-calc-darkGreen transition-colors"
            >
              Explore Trending Calculators
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
