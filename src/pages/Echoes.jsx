import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero1 from '../components/Hero1';
import Audiobook from '../components/Audiobook';
import Podcast from '../components/Podcast';
import Vlog from '../components/Vlog';

const Echoes = () => {
  const [activeTab, setActiveTab] = useState('podcast');
  
  const renderContent = () => {
    switch(activeTab) {
      case 'audiobook':
        return <Audiobook />;
      case 'podcast':
        return <Podcast />;
      case 'vlog':
      default:
        return <Vlog />;
    }
  };
  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow">
        <Hero1 />
        
        {/* Tabs Banner */}
        <div className="bg-[#f5e9d9] py-4 sm:py-6 rounded-lg mx-2 sm:mx-4 -mt-4 sm:-mt-6 mb-4 sm:mb-6 relative z-10 overflow-hidden">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="relative
              flex overflow-x-auto pb-2 sm:pb-0
              scrollbar-hide -mx-2 sm:mx-0
              snap-x snap-mandatory
              scroll-smooth
              [&::-webkit-scrollbar]:hidden
              [&>*]:snap-center
            ">
              <div className="flex space-x-2 sm:space-x-4 px-2 sm:px-0 mx-auto">
                {[
                  { id: 'audiobook', label: 'Audiobooks' },
                  { id: 'podcast', label: 'Podcasts' },
                  { id: 'vlog', label: 'Vlogs' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      whitespace-nowrap px-4 py-2 text-sm sm:text-base md:text-lg
                      font-medium rounded-full transition-all duration-200
                      ${activeTab === tab.id 
                        ? 'bg-amber-600 text-white shadow-md' 
                        : 'text-amber-800 hover:bg-amber-100/80'}
                      min-w-[120px] sm:min-w-[140px] text-center
                      active:scale-95 transform transition-transform
                    `}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Description Card */}
        <div className="container mx-auto px-3 sm:px-4 -mt-8 sm:-mt-10 mb-4 sm:mb-6 transform transition-all duration-300 hover:scale-[1.01] relative z-20">
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl shadow-lg p-3 sm:p-4 max-w-2xl mx-auto text-center border border-amber-200/50">
            <div className="relative">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-800 px-2">
                {activeTab === 'podcast' && 'Listen to voices that inspire'}
                {activeTab === 'vlog' && 'Stories in motion'}
                {activeTab === 'audiobook' && 'Every story deserves to be heard'}
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto mt-2 mb-2 sm:mb-3 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8">
          {renderContent()}
        </div>
        
        {/* Wave Pattern Above Footer */}
        <div className="relative w-full overflow-hidden -mb-1">
          <svg 
            viewBox="0 0 1200 120" 
            className="w-full h-12 sm:h-16 md:h-24 lg:h-32"
            preserveAspectRatio="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              fill="#f5f5f4" 
              fillOpacity="0.95"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              transition={{
                duration: 1.2,
                ease: 'easeInOut',
              }}
            />
            <motion.path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              fill="#f5f5f4" 
              fillOpacity="0.8"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              transition={{
                duration: 1.4,
                ease: 'easeInOut',
                delay: 0.1
              }}
            />
            <motion.path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              fill="#f5f5f4"
              fillOpacity="0.7"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              transition={{
                duration: 1.6,
                ease: 'easeInOut',
                delay: 0.2
              }}
            />
          </svg>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Echoes;