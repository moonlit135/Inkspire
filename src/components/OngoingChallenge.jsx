import React, { useState, useEffect } from 'react';

const OngoingChallenge = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 5,
    minutes: 0,
    seconds: 0
  });

  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newTime = { ...prevTime };
        
        if (newTime.seconds > 0) newTime.seconds--;
        else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) newTime.minutes--;
          else {
            newTime.minutes = 59;
            if (newTime.hours > 0) newTime.hours--;
            else if (newTime.days > 0) {
              newTime.days--;
              newTime.hours = 23;
            }
          }
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-20 pb-12 px-4 sm:px-6 relative overflow-hidden bg-[#3a3226] min-h-screen z-10">
      {/* Textured overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiNhYTk4N2MiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2Utb3BhY2l0eT0iMC4xNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="w-full max-w-6xl mx-auto relative z-10 px-4 sm:px-6 -mt-16">
        {/* Main Card Container */}
        <div className="bg-gradient-to-br from-amber-900/40 via-amber-900/20 to-amber-800/10 backdrop-blur-sm rounded-lg border border-amber-800/30 shadow-2xl overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-amber-900/50 to-amber-800/30 border-b border-amber-800/30 p-6">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-100 text-center font-['Playfair_Display'] tracking-wide">
              The Challenge Awaits
              <span className="block text-2xl mt-2 text-amber-200/90 font-medium font-['Cormorant_Garamond'] italic">
                Pen Your Masterpiece
              </span>
            </h1>
            <div className="w-24 h-0.5 bg-amber-600/50 mx-auto my-4"></div>
            <p className="text-lg text-amber-100/85 text-center max-w-2xl mx-auto font-['Cormorant_Garamond'] italic">
              Where words weave magic and stories take flight. Join fellow wordsmiths in this month's literary adventure.
            </p>
          </div>
          
          {/* Card Body */}
          <div className="p-6 md:p-8">

        {/* Live Challenge Card */}
        <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/20 backdrop-blur-sm rounded border border-amber-800/30 p-8 max-w-4xl mx-auto transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <span className="inline-block px-4 py-1 bg-amber-900/40 text-amber-200 text-sm font-medium tracking-wider rounded-sm border border-amber-700/40">
                    LIVE CHALLENGE
                  </span>
                  <div className="ml-3 h-px bg-amber-700/40 flex-grow"></div>
                </div>
                <h2 className="text-2xl font-bold text-amber-100 mt-2 font-['Playfair_Display'] tracking-wide">
                  <span className="text-amber-300/90 font-medium text-lg block mb-1 font-['Cormorant_Garamond'] italic">This Month's Theme:</span>
                  Whispers of the Unknown
                </h2>
              </div>
              
              <div className="space-y-5 mt-6">
                <div className="flex items-center text-amber-100 bg-amber-900/20 p-3 rounded border border-amber-800/30">
                  <span className="text-2xl mr-4 text-amber-300">⏳</span>
                  <div>
                    <p className="text-xs text-amber-300/80 font-medium tracking-wider mb-1">TIME REMAINING</p>
                    <p className="font-mono text-xl font-medium text-amber-100">
                      {timeLeft.days} Days • {timeLeft.hours} Hours • {timeLeft.minutes} Min
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center text-green-100 bg-amber-900/20 p-3 rounded border border-amber-800/30">
                  <span className="text-2xl mr-4 text-amber-300">📖</span>
                  <div>
                    <p className="text-xs text-amber-300/80 font-medium tracking-wider mb-1">PARTICIPANTS</p>
                    <p className="font-medium text-amber-100">257 Writers Have Joined</p>
                  </div>
                </div>
                
                <div className="flex items-start text-amber-100 bg-amber-900/20 p-3 rounded border border-amber-800/30">
                  <span className="text-2xl mr-4 text-amber-300">🏆</span>
                  <div>
                    <p className="text-xs text-amber-300/80 font-medium tracking-wider mb-1">YOUR REWARD</p>
                    <p className="font-medium text-amber-100">Featured Publication + Exclusive Author Badge</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-0">
              <div className="w-40 h-52 bg-gradient-to-br from-amber-900/20 to-amber-800/30 rounded-sm border border-amber-700/30 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-5xl mb-3 opacity-90">📜</span>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-700/40 to-transparent my-3"></div>
                <p className="text-amber-200/80 text-sm mt-2 font-['Cormorant_Garamond'] italic">
                  "Where words fail, stories speak..."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Participation Flow */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-['Playfair_Display'] text-amber-100 mb-3">How It Works</h3>
            <div className="w-16 h-0.5 bg-amber-600/50 mx-auto mb-6"></div>
            <p className="text-amber-200/80 max-w-2xl mx-auto font-['Cormorant_Garamond'] italic">
              Three simple steps to join our literary journey and showcase your talent to the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 relative">
            <div className="absolute left-1/2 top-1/2 h-3/4 w-0.5 bg-gradient-to-b from-transparent via-amber-800/40 to-transparent -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
            
            {/* Step 1 */}
            <div className="relative bg-amber-900/30 backdrop-blur-sm p-8 rounded-sm border border-amber-800/30 hover:border-amber-600/50 transition-all duration-300 group">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-amber-800/80 rounded-full flex items-center justify-center text-amber-100 text-lg font-medium border-2 border-amber-700/50 shadow-lg">
                1
              </div>
              <div className="text-5xl mb-5 text-center text-amber-300/80">✍️</div>
              <h3 className="text-xl font-medium text-amber-100 mb-3 text-center font-['Playfair_Display']">Craft Your Tale</h3>
              <p className="text-amber-200/80 text-center font-['Cormorant_Garamond']">
                Let your imagination flow and create a story or poem inspired by our monthly theme.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="relative bg-amber-900/30 backdrop-blur-sm p-8 rounded-sm border border-amber-800/30 hover:border-amber-600/50 transition-all duration-300 group">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-amber-800/80 rounded-full flex items-center justify-center text-amber-100 text-lg font-medium border-2 border-amber-700/50 shadow-lg">
                2
              </div>
              <div className="text-5xl mb-5 text-center text-amber-300/80">⏳</div>
              <h3 className="text-xl font-medium text-amber-100 mb-3 text-center font-['Playfair_Display']">Submit Before Dawn</h3>
              <p className="text-amber-200/80 text-center font-['Cormorant_Garamond']">
                Share your masterpiece with our community before the deadline passes.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="relative bg-amber-900/30 backdrop-blur-sm p-8 rounded-sm border border-amber-800/30 hover:border-amber-600/50 transition-all duration-300 group">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-amber-800/80 rounded-full flex items-center justify-center text-amber-100 text-lg font-medium border-2 border-amber-700/50 shadow-lg">
                3
              </div>
              <div className="text-5xl mb-5 text-center text-amber-300/80">🌟</div>
              <h3 className="text-xl font-medium text-amber-100 mb-3 text-center font-['Playfair_Display']">Earn Your Laurels</h3>
              <p className="text-amber-200/80 text-center font-['Cormorant_Garamond']">
                Receive feedback, votes, and the chance to be featured in our hall of fame.
              </p>
            </div>
          </div>
          
              {/* Call to Action */}
              <div className="text-center mt-12 pt-8 border-t border-amber-800/30">
                <div className="relative inline-block">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-4xl">✨</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-amber-100 mb-3 font-['Playfair_Display'] tracking-wide">
                    The Page Awaits Your Words
                  </h3>
                </div>
                <p className="text-amber-200/80 max-w-2xl mx-auto mb-8 font-['Cormorant_Garamond'] text-lg italic">
                  Every great story begins with a single word. Will yours be next?
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="px-10 py-3.5 bg-gradient-to-r from-amber-700 to-amber-800 text-amber-50 font-medium rounded-sm text-lg tracking-wider hover:shadow-lg hover:shadow-amber-900/30 transform hover:scale-105 transition-all duration-300 border border-amber-600/40 shadow-inner hover:from-amber-600 hover:to-amber-700 flex items-center justify-center mx-auto group">
                    Begin Your Journey
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card Footer */}
          <div className="bg-gradient-to-r from-amber-900/40 to-amber-800/30 border-t border-amber-800/30 p-4 text-center">
            <p className="text-amber-200/60 text-sm font-['Cormorant_Garamond'] italic">
              Join before the final chapter closes...
            </p>
          </div>
        </div>
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-amber-800/20 blur-xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-amber-700/20 blur-xl animate-float animation-delay-2000"></div>
    </div>
  );
};

export default OngoingChallenge;
