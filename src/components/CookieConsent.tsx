"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50">
      <div className="bg-white shadow-2xl p-6 md:p-8 max-w-lg mx-4 md:mx-auto">
        <h3 className="text-xl font-semibold text-[#100f0f] mb-4">We use cookies</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={acceptCookies}
            className="bg-[#357a39] text-white px-6 py-2 text-sm hover:bg-[#2d6830] transition-colors"
          >
            I agree
          </button>
          <button
            onClick={declineCookies}
            className="bg-[#357a39] text-white px-6 py-2 text-sm hover:bg-[#2d6830] transition-colors"
          >
            I decline
          </button>
          <button
            onClick={() => setShowConsent(false)}
            className="border border-gray-300 text-gray-700 px-6 py-2 text-sm hover:bg-gray-100 transition-colors"
          >
            Change my preferences
          </button>
        </div>
      </div>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 -z-10" onClick={() => setShowConsent(false)} />
    </div>
  );
}
