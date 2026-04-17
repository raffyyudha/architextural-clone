"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://ext.same-assets.com/3334648824/10745190.jpeg",
    title: "Enjoy a durable, easy-to-clean surface that stands up to daily wear and tear",
    cta: { label: "View the range", href: "/products" },
  },
  {
    image: "https://ext.same-assets.com/3334648824/2235859391.jpeg",
    title: "Transform your spaces with premium vinyl wrapping solutions",
    cta: { label: "Explore now", href: "/products" },
  },
  {
    image: "https://ext.same-assets.com/3334648824/1054469706.jpeg",
    title: "Sustainable, stylish, and cost-effective interior redesign",
    cta: { label: "Learn more", href: "/why-wrapping" },
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 font-light">
                  {slide.title}
                </h1>
                <Link
                  href={slide.cta.href}
                  className="inline-block bg-[#86776a] text-white px-8 py-4 text-sm tracking-wide hover:bg-[#756658] transition-colors"
                >
                  {slide.cta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={48} strokeWidth={1} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={48} strokeWidth={1} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
        {/* Extra dots for visual effect */}
        {[...Array(5)].map((_, i) => (
          <span
            key={`extra-${i}`}
            className="w-2 h-2 rounded-full bg-white/20"
          />
        ))}
      </div>
    </section>
  );
}
