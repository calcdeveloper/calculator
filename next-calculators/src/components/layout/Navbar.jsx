"use client";

import Link from "next/link";
import { Calculator, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-calc-white/85 backdrop-blur-md border-b border-calc-lightGray shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center shrink-0 group py-1" onClick={() => setIsOpen(false)}>
            <img
              src="/logo.png?v=6"
              alt="ToolsWizard"
              width={280}
              height={80}
              className="h-[4.5rem] sm:h-[5rem] w-auto max-w-[min(100%,280px)] object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-semibold text-calc-gray transition-colors hover:text-gray-900"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href="/#trending"
              className="bg-white text-gray-900 border border-gray-200 px-6 py-2.5 rounded-full font-bold hover:bg-gray-50 hover:shadow-md transition-all duration-300 shadow-sm"
            >
              Explore Trending Tools
            </Link>
          </div>

          <div className="md:hidden relative" ref={menuRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-calc-black hover:text-calc-green transition-colors p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-4 w-[calc(100vw-2rem)] sm:w-72 bg-calc-white border border-calc-lightGray rounded-lg shadow-xl p-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg text-lg font-medium text-calc-gray hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-calc-lightGray">
                  <Link
                    href="/#trending"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    Explore Trending Tools
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
