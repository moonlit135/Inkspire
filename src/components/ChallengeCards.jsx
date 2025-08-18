import React from 'react';

const ChallengeCards = () => {
  // Array of placeholder data for the cards
  const challenges = [
    { id: 1, hint: 'mystery1' },
    { id: 2, hint: 'mystery2' }
  ];

  return (
    <div className="bg-[#f8f1e3] py-10 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-bold text-amber-900 font-['Playfair_Display'] relative inline-block">
            <span className="relative z-10">Upcoming Challenges</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-200/70 transform -translate-y-2"></span>
          </h2>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-amber-900/30"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {challenges.map((challenge) => (
            <div 
              key={challenge.id} 
              className="relative group h-[28rem] overflow-visible"
            >
              {/* Vintage paper texture */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlYmQ1YTMiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2Utb3BhY2l0eT0iMC4yIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]"></div>
              
              {/* Card container */}
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-lg border border-amber-200/50 p-8 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:-translate-y-1">
                {/* Vintage corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-400/50 rounded-tl-lg"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400/50 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400/50 rounded-bl-lg"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-400/50 rounded-br-lg"></div>
                
                {/* Lock icon with vintage style */}
                <div className="relative mb-8 group">
                  <div className="absolute -inset-1 bg-amber-200/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative text-5xl text-amber-800/90 mb-2 transform transition-transform duration-300 group-hover:scale-110">
                    🔒
                  </div>
                </div>
                
                {/* Main text with underline effect */}
                <h3 className="text-2xl font-medium text-amber-900 font-['Cormorant_Garamond'] mb-8 pb-2 relative inline-block">
                  <span className="relative">
                    Challenge Revealed Soon
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-500 group-hover:w-full"></span>
                  </span>
                </h3>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Details with vintage styling */}
                <div className="mt-auto w-full space-y-4 text-amber-900/80 text-sm font-['Cormorant_Garamond'] italic">
                  <div className="relative pl-6">
                    <span className="absolute left-0 text-amber-600">✧</span>
                    <p className="border-b border-amber-200 pb-2">Genre Reveal: <span className="font-medium">Coming Soon</span></p>
                  </div>
                  <div className="relative pl-6">
                    <span className="absolute left-0 text-amber-600">✧</span>
                    <p className="border-b border-amber-200 pb-2">Deadline: <span className="font-medium">To Be Announced</span></p>
                  </div>
                  <div className="relative pl-6">
                    <span className="absolute left-0 text-amber-600">✧</span>
                    <p>Prize: <span className="font-medium">Stay Tuned</span></p>
                  </div>
                </div>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl shadow-[0_0_15px_rgba(251,191,36,0)] group-hover:shadow-[0_0_25px_rgba(251,191,36,0.3)] transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengeCards;
