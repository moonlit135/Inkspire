import React from 'react';
import { Link } from 'react-router-dom';

const image5 = '/images/image5.jpg'; // Path to image in public directory

const Hero4 = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 px-4 sm:px-6 lg:px-8 py-16 -mt-20 pt-32 overflow-visible">
      {/* Vintage paper texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYzZWIiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-20"></div>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text Content */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-10 group">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-50 font-['Playfair_Display'] tracking-wide relative z-10">
                <span className="relative inline-block">
                  <span className="relative z-10">
                    <span className="text-amber-200/90 font-['Cormorant_Garamond'] font-normal italic">Welcome to Writer’s Studio</span>
                    
                    
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400/60 via-amber-300/40 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
                </span>
              </h1>
              
              
            </div>
            <p className="text-xl md:text-2xl text-amber-100/90 mb-12 italic font-['Cormorant_Garamond'] tracking-wider relative pl-6 border-l-2 border-amber-400/30 transform transition-all duration-500 hover:border-amber-400/70 hover:pl-8">
            “A world where every word finds a home.”
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center [&>*]:backdrop-blur-sm">
          <Link 
            to="/publish" 
            className="inline-block bg-white/5 border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm md:text-base hover:bg-white/10 hover:border-white/80 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Publish</span>
            <span className="absolute inset-0 bg-white/10 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </Link>
          <Link 
            to="/library" 
            className="inline-block bg-white/5 border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm md:text-base hover:bg-white/10 hover:border-white/80 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Start Reading</span>
            <span className="absolute inset-0 bg-white/10 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
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
                  src={image5}
                  alt="Writer's Studio"
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

export default Hero4;