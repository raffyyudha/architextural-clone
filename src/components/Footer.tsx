import Link from "next/link";
import { Instagram, Youtube, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#100f0f]">
      {/* Divider line */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="border-t border-gray-700" />
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <svg
              className="w-12 h-12 text-white"
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
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-sm">Tel:</span>
              <a href="tel:+441833690305" className="text-sm hover:text-white transition-colors">
                +44 (0) 1833 690305
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Email:</span>
              <a href="mailto:info@architextural.co.uk" className="text-sm hover:text-white transition-colors">
                info@architextural.co.uk
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/_Architextural"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.x.com/_Architextural"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/WilliamSmith1832"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="http://www.youtube.com/williamsmith1832"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://www.linkedin.com/showcase/architextural/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-600">
              <span>Copyright © Architextural 2026. All Rights Reserved.</span>
              <div className="flex items-center gap-4">
                <Link href="/privacy-policy" className="hover:text-[#100f0f] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-conditions" className="hover:text-[#100f0f] transition-colors">
                  Terms & Conditions
                </Link>
                <span>
                  Website by{" "}
                  <a
                    href="https://landdigital.agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#100f0f]"
                  >
                    land.digital
                  </a>
                </span>
              </div>
            </div>

            {/* William Smith Group Logo */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500 uppercase tracking-wider">Part of</span>
              <span className="text-sm font-bold text-[#100f0f] tracking-wide">WILLIAM SMITH GROUP 1832</span>
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-6 bg-[#100f0f] transform -skew-x-12 ml-0.5"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
