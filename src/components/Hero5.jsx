import React from 'react';
import { Link as ScrollLink } from 'react-scroll';



const Hero5 = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 px-4 sm:px-6 lg:px-8 py-16 pt-48 sm:pt-40 -mt-20 overflow-visible">
      {/* Vintage paper texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYzZWIiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-20"></div>
      <div className="max-w-7xl mx-auto w-full flex justify-center">
        <div className="w-full max-w-4xl text-center">
          {/* Centered Text Content */}
          <div className="mx-auto">
            <div className="relative inline-block mb-10 group">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-50 font-['Playfair_Display'] tracking-wide relative z-10">
                <span className="relative inline-block">
                  <span className="relative z-10">
                    <span className="text-amber-200/90 font-['Cormorant_Garamond'] font-normal italic">Ink Your Imagination</span>
                    
                    
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400/60 via-amber-300/40 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
                </span>
              </h1>
              
              
            </div>
            <p className="text-xl md:text-2xl text-amber-100/90 mb-12 italic font-['Cormorant_Garamond'] tracking-wider relative pl-6 border-l-2 border-amber-400/30 transform transition-all duration-500 hover:border-amber-400/70 hover:pl-8">
            “From short stories to poetry—prove your craft.”
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full px-4">
              <ScrollLink
                to="ongoing-challenge"
                smooth={true}
                duration={800}
                offset={-80}
                spy={true}
                activeClass="active"
                className="w-full sm:w-auto text-center px-4 sm:px-6 py-2.5 bg-amber-800/80 text-amber-50 rounded-full font-medium hover:bg-amber-700/90 transition-all duration-300 cursor-pointer border border-amber-600/50 hover:border-amber-400/50 tracking-wider text-sm sm:text-base uppercase font-['Playfair_Display'] shadow-sm hover:shadow-md whitespace-nowrap"
              >
                Ongoing Competition
              </ScrollLink>
              <ScrollLink
                to="challenge-cards"
                smooth={true}
                duration={500}
                offset={-70}
                className="w-full sm:w-auto text-center px-4 sm:px-6 py-2.5 bg-amber-800/80 text-amber-50 rounded-full font-medium hover:bg-amber-700/90 transition-all duration-300 cursor-pointer border border-amber-600/50 hover:border-amber-400/50 tracking-wider text-sm sm:text-base uppercase font-['Playfair_Display'] shadow-sm hover:shadow-md whitespace-nowrap"
              >
                Upcoming Challenges
              </ScrollLink>
            </div>
          </div>

          
          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-amber-400/30 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute -top-6 -left-6 w-16 h-16 border-2 border-amber-300/20 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Wavy Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-16 -mb-px overflow-hidden">
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className="w-full h-full"
              style={{
                transform: 'rotate(180deg)',
                marginBottom: '-1px'
              }}
            >
              <path 
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                opacity="1" 
                fill="#f8f1e3"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero5;