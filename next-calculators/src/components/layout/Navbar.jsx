import Link from "next/link";
import { Calculator, Menu } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-calc-white/85 backdrop-blur-md border-b border-calc-lightGray shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center shrink-0 group py-1">
            <img
              src="/logo.png"
              alt="ToolsWizard"
              className="h-[4.5rem] sm:h-[5rem] w-auto max-w-[min(100%,280px)] object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-semibold text-calc-gray transition-colors hover:text-calc-green"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href="/#trending"
              className="bg-calc-green/10 text-calc-green border border-calc-green/20 px-6 py-2.5 rounded-full font-bold hover:bg-calc-green hover:text-calc-white transition-all duration-300 shadow-sm"
            >
              Explore Trending Tools
            </Link>
          </div>

          <details className="md:hidden relative">
            <summary className="list-none cursor-pointer text-calc-black hover:text-calc-green transition-colors p-2 focus:outline-none">
              <Menu size={30} />
            </summary>
            <div className="absolute right-0 mt-4 w-72 bg-calc-white border border-calc-lightGray rounded-lg shadow-xl p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 rounded-lg text-lg font-medium text-calc-gray hover:bg-calc-white hover:text-calc-black transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-calc-lightGray">
                <Link
                  href="/#trending"
                  className="block w-full text-center bg-calc-green text-calc-white px-6 py-3 rounded-lg font-bold hover:bg-calc-darkGreen transition-colors"
                >
                  Explore Trending Tools
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
