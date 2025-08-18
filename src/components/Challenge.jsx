import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaClock, FaUserFriends, FaPenFancy } from 'react-icons/fa';

const Challenge = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '03',
    hours: '12',
    minutes: '45',
  });

  const users = Array(120).fill(null);

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50/80 to-white/90 overflow-hidden">
      {/* Wave Bottom */}
      <div className="absolute -bottom-4 left-0 w-full h-20 overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 left-0 w-full h-full"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            fill="#f59e0b" 
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            fill="#f59e0b" 
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="#f59e0b" 
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100/80 text-amber-800 text-sm font-medium mb-4">
            <FaPenFancy className="mr-2" />
            Writing Challenges
          </div>
          <h2 className="text-4xl font-bold text-amber-900 mb-3 font-['Playfair_Display']">Join the Challenge</h2>
          <p className="text-lg text-amber-700/90">Push your creativity. Compete, grow, and shine.</p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Coming Challenges Card */}
          <motion.div 
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="relative p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-amber-50 shadow-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 to-white/20" />
            <div className="flex items-center mb-4">
              <FaClock className="text-amber-500 mr-2" />
              <span className="text-sm font-medium text-amber-700">Coming Soon</span>
              <span className="ml-auto text-xs text-amber-500/90">Get ready for the next big thing</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-['Playfair_Display']">Poetry Duel 2025</h3>
            
            <div className="flex justify-center space-x-3 mb-6 group">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-br from-amber-500 to-amber-600 text-white py-3 px-4 rounded-lg min-w-[60px] 
                    group-hover:shadow-lg group-hover:shadow-amber-200/50 transition-all duration-300">
                    {value}
                  </div>
                  <span className="text-xs text-amber-600/80 mt-1 block">{unit.toUpperCase()}</span>
                </div>
              ))}
            </div>
            
            <button 
              disabled
              className="w-full py-3 px-4 bg-amber-100 text-amber-700 rounded-xl font-medium cursor-not-allowed border border-amber-200"
            >
              Get Ready
            </button>
          </motion.div>

          {/* Ongoing Challenge Card */}
          <motion.div 
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="relative p-6 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-white overflow-hidden"
            style={{ 
              boxShadow: '0 10px 30px -5px rgba(245, 158, 11, 0.3)',
            }}
          >
            <div className="absolute top-4 right-4">
              <FaTrophy className="text-amber-300 text-xl" />
            </div>
            <div className="flex items-center mb-4">
              <FaClock className="text-amber-200 mr-2" />
              <span className="text-sm font-medium text-amber-100">Ongoing</span>
              <span className="ml-auto text-xs text-amber-100/90">Your time to shine is now</span>
            </div>
            <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">Story Sprint Marathon</h3>
            <p className="text-white/95 mb-6">Write 500 words in 24 hours. Compete with others!</p>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex -space-x-2">
                {users.slice(0, 5).map((_, i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full bg-amber-400 border-2 border-white"
                    style={{ zIndex: 5 - i }}
                  />
                ))}
                {users.length > 5 && (
                  <div className="w-8 h-8 rounded-full bg-amber-700 border-2 border-white flex items-center justify-center text-xs font-bold">
                    +{users.length - 5}
                  </div>
                )}
              </div>
              <div className="text-sm text-white/95">
                <FaUserFriends className="inline mr-1" /> {users.length} joined
              </div>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 bg-white text-amber-600 font-semibold rounded-xl shadow-md"
            >
              Join Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;