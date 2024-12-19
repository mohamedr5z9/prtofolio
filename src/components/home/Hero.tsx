import React from 'react';
import Terminal from '../Terminal';

const Hero = () => {
  return (
    <div 
      className="min-h-screen relative flex items-center justify-center pt-16"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
            Mohamed Tarek
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Aspiring Penetration Tester | Security Researcher
          </p>
          <Terminal />
        </div>
      </div>
    </div>
  );
};

export default Hero;