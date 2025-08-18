import React from 'react';
import { Link } from 'react-scroll';

const Hero2 = () => {
  return (
    <div className="min-h-[30vh] bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 px-4 sm:px-6 lg:px-8 py-12 -mt-20 pt-20 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Content - Left Side */}
          <div className="relative h-96 md:h-[500px] order-1 md:order-1 flex items-center justify-center group w-full">
            <style jsx>{`
              @keyframes liquid {
                0%, 100% {
                  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                }
                50% {
                  border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
                }
              }
              .liquid-shape {
                animation: liquid 15s ease-in-out infinite;
              }
              .liquid-shape:hover {
                animation-duration: 8s;
              }
              @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
              .animate-float {
                animation: float 6s ease-in-out infinite;
              }
              .animation-delay-2000 {
                animation-delay: 2s;
              }
            `}</style>
            <div className="relative w-full h-full max-w-2xl">
              {/* Main liquid container */}
              <div className="absolute inset-0 overflow-hidden liquid-shape bg-gradient-to-br from-amber-200 to-amber-300 shadow-2xl transition-all duration-1000 group-hover:shadow-amber-200/40">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-amber-200/30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent"></div>
                <img
                  src="/images/image3.jpg"
                  alt="Cozy reading space"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Liquid highlights */}
                <div className="absolute top-1/4 -right-10 w-40 h-40 bg-amber-100/20 rounded-full mix-blend-overlay blur-xl animate-float"></div>
                <div className="absolute bottom-1/4 -left-10 w-48 h-48 bg-amber-200/15 rounded-full mix-blend-overlay blur-xl animate-float animation-delay-2000"></div>
              </div>
              
              {/* Reflective particles */}
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-amber-100/40"
                  style={{
                    width: `${Math.random() * 8 + 2}px`,
                    height: `${Math.random() * 8 + 2}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 5 + 5}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                    filter: 'blur(1px)'
                  }}
                ></div>
              ))}
            </div>
            
            {/* Background blobs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-100/20 rounded-full blur-3xl -z-10 transition-all duration-1000 group-hover:scale-110"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-amber-200/15 rounded-full blur-3xl -z-10 transition-all duration-1000 group-hover:scale-110"></div>
          </div>

          {/* Text Content - Right Side */}
          <div className="order-2 md:order-2 text-center lg:text-right">
            <div className="relative inline-block mb-10 group">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-50 font-['Playfair_Display'] tracking-wide relative z-10">
                <span className="relative inline-block">
                  <span className="relative z-10">
                    <span className="inline-block transform -rotate-2 font-['Cormorant_Garamond'] font-normal italic">L</span>ibrary
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400/60 via-amber-300/40 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
                </span>
              </h1>
              <div className="absolute -bottom-3 left-0 w-full h-0.5 bg-amber-400/20"></div>
              <div className="absolute -bottom-5 left-1/4 w-1/2 h-0.5 bg-amber-400/10"></div>
            </div>
            <p className="text-xl md:text-2xl text-amber-100/90 mb-12 italic font-['Cormorant_Garamond'] tracking-wider relative pl-6 border-l-2 border-amber-400/30 transform transition-all duration-500 hover:border-amber-400/70 hover:pl-8 mx-auto lg:ml-auto lg:mr-0 max-w-lg">
              "A quiet space to read, reflect, and grow."
            </p>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4">
              <Link
                to="explore"
                smooth={true}
                duration={500}
                className="px-6 py-2.5 bg-amber-800/80 text-amber-50 rounded-full font-medium hover:bg-amber-700/90 transition-all duration-300 cursor-pointer border border-amber-600/50 hover:border-amber-400/50 tracking-wider text-sm uppercase font-['Playfair_Display'] shadow-sm hover:shadow-md"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;