import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const image2 = '/images/image2.jpg';

const Hero1 = () => {
  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = image2;
    
    // Add preload link for better browser support
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = image2;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return (
    <div 
      className="relative min-h-[80vh] flex items-center px-4 sm:px-6 lg:px-8 py-16 pt-48 sm:pt-40 -mt-20 overflow-visible"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(120, 53, 15, 0.85), rgba(146, 64, 14, 0.85)), url(${image2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text Content */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-10 group">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-50 font-['Playfair_Display'] tracking-wide relative z-10">
                <span className="relative inline-block">
                  <span className="relative z-10">
                    <span className="inline-block transform -rotate-2">E</span>choes 
                    <span className="text-amber-200/90 font-['Cormorant_Garamond'] font-normal italic">&</span> 
                    <span className="inline-block transform rotate-1">F</span>rames
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400/60 via-amber-300/40 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
                </span>
              </h1>
              <div className="absolute -bottom-3 left-0 w-full h-0.5 bg-amber-400/20"></div>
              <div className="absolute -bottom-5 left-1/4 w-1/2 h-0.5 bg-amber-400/10"></div>
              <div className="absolute -top-4 right-0 text-amber-200/30 text-sm font-light tracking-widest transform rotate-3">
                STORYTELLING REDEFINED
              </div>
            </div>
            <p className="text-xl md:text-2xl text-amber-100/90 mb-12 italic font-['Cormorant_Garamond'] tracking-wider relative pl-6 border-l-2 border-amber-400/30 transform transition-all duration-500 hover:border-amber-400/70 hover:pl-8">
              "Stories you can hear, feel, and see."
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                to="podcasts"
                smooth={true}
                duration={500}
                className="px-6 py-2.5 bg-amber-800/80 text-amber-50 rounded-full font-medium hover:bg-amber-700/90 transition-all duration-300 cursor-pointer border border-amber-600/50 hover:border-amber-400/50 tracking-wider text-sm uppercase font-['Playfair_Display'] shadow-sm hover:shadow-md"
              >
                Podcasts
              </Link>
              <Link
                to="audiobooks"
                smooth={true}
                duration={500}
                className="px-6 py-2.5 bg-amber-800/80 text-amber-50 rounded-full font-medium hover:bg-amber-700/90 transition-all duration-300 cursor-pointer border border-amber-600/50 hover:border-amber-400/50 tracking-wider text-sm uppercase font-['Playfair_Display'] shadow-sm hover:shadow-md"
              >
                Audiobooks
              </Link>
              <Link
                to="vlogs"
                smooth={true}
                duration={500}
                className="px-6 py-2.5 bg-amber-800/80 text-amber-50 rounded-full font-medium hover:bg-amber-700/90 transition-all duration-300 cursor-pointer border border-amber-600/50 hover:border-amber-400/50 tracking-wider text-sm uppercase font-['Playfair_Display'] shadow-sm hover:shadow-md"
              >
                Vlogs
              </Link>
            </div>
          </div>

          {/* Right side - Image with modern shape */}
          <div className="relative h-80 md:h-96 lg:h-[500px]">
            <div className="relative h-full w-full group perspective-1000">
              {/* 3D effect layers */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-700/30 to-amber-900/40 
                rounded-tl-[40%] rounded-tr-[60%] rounded-bl-[30%] rounded-br-[50%]
                -rotate-3 scale-95 group-hover:rotate-0 group-hover:scale-100 
                transition-all duration-700 ease-out"></div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-amber-800/20 to-amber-900/30 
                rounded-tl-[40%] rounded-tr-[60%] rounded-bl-[30%] rounded-br-[50%]
                rotate-3 scale-95 group-hover:rotate-0 group-hover:scale-100 
                transition-all duration-700 ease-out"></div>
              
              {/* Main image container */}
              <div className="relative h-full w-full overflow-hidden 
                rounded-tl-[40%] rounded-tr-[60%] rounded-bl-[30%] rounded-br-[50%]
                shadow-[15px_25px_50px_-12px_rgba(0,0,0,0.4)] 
                group-hover:shadow-[20px_35px_60px_-15px_rgba(0,0,0,0.35)] 
                transition-all duration-700 ease-out">
                
                <img
                  src={image2}
                  alt="Echoes & Frames"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 
                  bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-amber-400/30 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 border-2 border-amber-300/20 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      
     
    </div>
  );
};

export default Hero1;