import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ParticleText = dynamic(() => import("../miniCompo/ParticleTest"), { ssr: false });
const Countdown = dynamic(() => import("./CountDown"), { ssr: false });

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center px-4 sm:px-8 md:px-12">
      {/* Full-Screen Gradient Background */}
      <div
        className="absolute inset-0 opacity-85"
        style={{
          background: "linear-gradient(90deg, rgba(0, 255, 163, 0.8) 0%, rgba(0, 168, 255, 0.8) 100%)",
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center space-y-2 mt-2">
        {/* Title with Particle Effect */}
        <ParticleText />

        {/* Event Date */}
        <p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mt-1"
          style={{ textShadow: "0 0 10px rgba(0,0,0,0.4)" }}
        >
          February 16 - March 23, 2025
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center items-center mt-1">
          <div className="relative z-20 backdrop-blur-lg bg-white/10 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
            <Countdown />
          </div>
        </div>

        {/* Register Button */}
        <div className="mt-2 z-30">
          <a href="https://lu.ma/rm1ln6ks" target="_blank" rel="noopener noreferrer">
            <button
              className="px-6 py-3 text-lg font-semibold text-white rounded-lg transition-all duration-300 shadow-md 
              bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transform hover:scale-110"
            >
              Register Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
