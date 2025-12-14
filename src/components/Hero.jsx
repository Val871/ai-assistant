import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-linear-to-r from-blue-500 to-purple-600 text-white py-12 md:py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
          Welcome to AI Assistant
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Your intelligent companion for productivity and creativity.
        </p>
        <button className="bg-white text-blue-800 px-6 py-3 md:py-3 rounded-full font-semibold hover:bg-gray-900 transition text-sm md:text-base">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
