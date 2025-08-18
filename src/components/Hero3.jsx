import React, { useEffect } from 'react';
import { Link } from 'react-scroll';

const heroImage = '/images/image4.jpg';

const Hero3 = () => {
  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = heroImage;
    
    // Add preload link for better browser support
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroImage;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return (
    <div 
      className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 px-4 sm:px-6 lg:px-8 py-16 pt-48 sm:pt-40 -mt-20 overflow-visible"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(120, 53, 15, 0.8), rgba(146, 64, 14, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Vintage paper texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYzZWIiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-20"></div>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text Content */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-10 group">
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-amber-50 font-['Playfair_Display'] tracking-normal leading-tight mb-4">
                  <span className="block italic font-light text-amber-100 mb-2">Compose Your Masterpiece</span>
                  <span className="block font-medium text-amber-50">Publish With Distinction</span>
                </h1>
                <div className="w-24 h-1 bg-amber-400/60 mx-auto lg:mx-0 mb-6"></div>
                <p className="text-lg text-amber-100/90 font-light max-w-xl mx-auto lg:mx-0">
                  Share your stories with a community that values literary excellence and thoughtful expression.
                </p>
              </div>
              
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              
              <Link
                to="audiobooks"
                smooth={true}
                duration={500}
                className="px-6 py-2.5 bg-amber-800/80 text-amber-50 rounded-full font-medium hover:bg-amber-700/90 transition-all duration-300 cursor-pointer border border-amber-600/50 hover:border-amber-400/50 tracking-wider text-sm uppercase font-['Playfair_Display'] shadow-sm hover:shadow-md"
              >
                Start Writing
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
                  src={heroImage}
                  alt="Echoes & Frames"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.target.onerror = null; // Prevents infinite loop if the image fails to load
                    e.target.style.display = 'none';
                  }}
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

export default Hero3;