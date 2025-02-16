"use client";

import React, { useEffect, useState } from "react";

const ParticleText = () => {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 2 + 3,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative group">
      {/* Animated Title */}
      <h1
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold px-4 py-2 mb-8 text-transparent bg-clip-text"
        style={{
          backgroundImage: `linear-gradient(to right, #0f9d58, #4285f4)`, // Solid Green to Blue
          textShadow: `
            0 0 10px rgba(15, 157, 88, 0.5), 
            0 0 20px rgba(66, 133, 244, 0.5)
          `,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Skepsis x GFG Event
      </h1>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="absolute rounded-full opacity-0"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: `rgba(15, 157, 88, 0.4)`, // Solid green particles
              boxShadow: `0 0 6px rgba(66, 133, 244, 0.6)`, // Blue glow effect
              animation: `particle-float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes particle-float {
          0% {
            opacity: 0;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: translateY(-40px) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
};

export default ParticleText;
