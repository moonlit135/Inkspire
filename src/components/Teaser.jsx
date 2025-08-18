import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaBookOpen, FaStar, FaPenFancy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Teaser = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-amber-50 to-white overflow-hidden">
      {/* Wave Bottom */}
      <div className="absolute -bottom-1 left-0 w-full h-24">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            fill="#f59e0b" 
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".15" 
            fill="#f59e0b" 
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            opacity=".1" 
            fill="#f59e0b" 
          />
        </svg>
      </div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-amber-200/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-300/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100/80 text-amber-800 text-sm font-medium mb-4"
            >
              <FaPenFancy className="mr-2" />
              Start Your Story
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight font-['Playfair_Display']"
            >
              Step Into the <span className="text-amber-600">Writers' Studio</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-amber-700/90 leading-relaxed"
            >
              Write poems, short stories, or even full novels. Share your voice, inspire others, and build your creative journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 pt-2"
            >
              <button 
                onClick={() => navigate('/writer')}
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Writing
                  <FaRocket className="ml-3 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              <p className="text-sm text-amber-600/80 text-center">No pressure, just your imagination.</p>
            </motion.div>

            {/* Gamification Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6"
            >
              <div className="flex items-center justify-center space-x-8">
                {[
                  { icon: <FaBookOpen className="text-xl" />, label: 'Stories', color: 'bg-amber-100 text-amber-600' },
                  { icon: '🌱', label: 'Growth', color: 'bg-green-100 text-green-600' },
                  { icon: <FaStar className="text-xl" />, label: 'Achieve', color: 'bg-purple-100 text-purple-600' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="text-center cursor-default"
                  >
                    <div className={`w-12 h-12 mx-auto ${item.color} rounded-2xl flex items-center justify-center text-xl mb-2 shadow-sm`}>
                      {item.icon}
                    </div>
                    <span className="text-xs font-medium text-amber-700">{item.label}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-center text-amber-600/80 mt-3">Earn badges as you write, grow, and share.</p>
            </motion.div>
          </div>

          {/* Right Column - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 z-10"
              >
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center text-3xl text-amber-600">✍️</div>
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 -left-8 z-10"
              >
                <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center text-2xl text-purple-600">📚</div>
              </motion.div>
              
              {/* Main Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 backdrop-blur-sm p-1 rounded-3xl shadow-2xl border border-amber-100/50 overflow-hidden"
              >
                <div className="h-80 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-200/20 rounded-full -ml-20 -mb-20"></div>
                  
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-amber-100 rounded-2xl flex items-center justify-center text-4xl mb-6 mx-auto shadow-inner">
                      <FaBookOpen className="text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-amber-900 mb-3">Your Creative Space</h3>
                    <p className="text-amber-700/90 mb-6">Where every word counts and every story matters</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-300 mx-auto mb-6 rounded-full"></div>
                    <div className="flex justify-center space-x-3">
                      {['📝', '✨', '🎯'].map((emoji, i) => (
                        <motion.span 
                          key={i}
                          className="text-2xl opacity-80 hover:opacity-100 transition-opacity"
                          whileHover={{ y: -5, scale: 1.2 }}
                        >
                          {emoji}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Teaser;