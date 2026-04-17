"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { href: "/why-wrapping", label: "Why Wrapping" },
  { href: "/products", label: "Products" },
  { href: "/installers", label: "Installers" },
  { href: "/blog", label: "Blogs" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#100f0f]">
      {/* Main nav row */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Hamburger menu for mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white hover:text-[#86776a] transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation - left side */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm hover:text-[#86776a] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo - center */}
        <Link href="/" className="flex items-center space-x-2">
          <svg
            className="w-8 h-8 text-white"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 4L4 36H14L20 24L26 36H36L20 4Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M20 14L14 26H26L20 14Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <div className="text-white">
            <span className="text-lg font-medium tracking-wider">ARCHITEXTURAL</span>
            <span className="text-[10px] block -mt-1 tracking-widest text-gray-400">Surface Designed</span>
          </div>
        </Link>

        {/* Desktop navigation - right side */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm hover:text-[#86776a] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Buy a sample button */}
        <Link
          href="/shop"
          className="bg-[#357a39] text-white text-sm px-4 py-2 hover:bg-[#2d6830] transition-colors"
        >
          Buy a sample
        </Link>
      </div>

      {/* Search bar */}
      <div className="bg-[#100f0f] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1a1918] text-white text-sm py-2 pl-10 pr-4 rounded focus:outline-none focus:ring-1 focus:ring-[#86776a] placeholder-gray-500"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#100f0f] border-t border-gray-800">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-sm px-6 py-3 hover:bg-[#1a1918] hover:text-[#86776a] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
