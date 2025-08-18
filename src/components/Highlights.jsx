import React, { useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaHeart, FaComment, FaBookOpen, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Mock data
const topReads = [
  {
    id: 1,
    title: 'Whispers of the Forgotten',
    author: 'Sarah Chen',
    reads: '1.2k',
    likes: '856',
    cover: '/images/cover1.jpg',
    genre: 'Fantasy'
  },
  {
    id: 2,
    title: 'Midnight in Paris',
    author: 'James Wilson',
    reads: '2.1k',
    likes: '1.4k',
    cover: '/images/cover2.jpg',
    genre: 'Mystery'
  },
  {
    id: 3,
    title: 'The Last Horizon',
    author: 'Maria Garcia',
    reads: '1.8k',
    likes: '1.1k',
    cover: '/images/cover3.jpg',
    genre: 'Sci-Fi'
  }
];

const newWriters = [
  {
    id: 1,
    name: 'Alex Rivera',
    genre: 'Sci-Fi & Fantasy',
    work: 'The Last Starlight',
    avatar: '/images/avatar1.jpg'
  },
  {
    id: 2,
    name: 'Priya Patel',
    genre: 'Literary Fiction',
    work: 'Silent Echoes',
    avatar: '/images/avatar2.jpg'
  },
  {
    id: 3,
    name: 'Kwame Osei',
    genre: 'Mystery & Thriller',
    work: 'Shadows in the Alley',
    avatar: '/images/avatar3.jpg'
  }
];

const readersPick = [
  {
    id: 1,
    title: 'The Silent Echo',
    excerpt: 'In a world where memories can be bought and sold, one woman discovers the price of forgetting...',
    likes: '2.3k',
    comments: '421',
    cover: '/images/cover4.jpg'
  },
  {
    id: 2,
    title: 'Beneath the Surface',
    excerpt: 'The ocean hides more secrets than any of us could ever imagine...',
    likes: '1.9k',
    comments: '312',
    cover: '/images/cover5.jpg'
  },
  {
    id: 3,
    title: 'The Last Ember',
    excerpt: 'In a dying world, the last spark of magic could be humanity\'s only hope...',
    likes: '3.1k',
    comments: '587',
    cover: '/images/cover6.jpg'
  }
];

// Reusable Components
const HighlightCard = ({ children, className = '', delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-amber-100/50 ${className}`}
  >
    {children}
  </motion.div>
);

const ScrollButton = ({ direction, onClick }) => (
  <motion.button 
    onClick={onClick}
    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,1)' }}
    whileTap={{ scale: 0.95 }}
    className="absolute top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-amber-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10 transition-all backdrop-blur-sm border border-amber-100"
    aria-label={direction === 'prev' ? 'Previous' : 'Next'}
  >
    {direction === 'prev' ? <FaChevronLeft className="text-lg" /> : <FaChevronRight className="text-lg" />}
  </motion.button>
);

const SectionHeader = ({ title, onViewAll, className = '' }) => (
  <div className={`flex items-center justify-between mb-8 ${className}`}>
    <motion.h3 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent font-['Playfair_Display'] relative inline-block"
    >
      {title}
      <motion.span 
        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-200"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.h3>
    <motion.button 
      onClick={onViewAll}
      whileHover={{ x: 3 }}
      className="text-amber-700 hover:text-amber-600 transition-colors font-medium flex items-center group text-sm md:text-base"
    >
      View All
      <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
    </motion.button>
  </div>
);

const Highlights = () => {
  const scrollContainer = (direction, id) => {
    const container = document.getElementById(id);
    const scrollAmount = direction === 'prev' ? -320 : 320;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleViewAll = (section) => {
    console.log(`View all ${section}`);
    // Implement navigation or modal to view all items
  };
  
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-5 px-4 md:px-8 bg-gradient-to-b from-amber-50 to-amber-100/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-300/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20 relative"
        >
          <span className="text-sm font-medium text-amber-600/80 tracking-wider uppercase block mb-3">Discover & Explore</span>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 font-['Playfair_Display'] relative inline-block">
            <span className="relative z-10">
              Curated Highlights
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400/60 via-amber-300/40 to-transparent transform -skew-y-1"></span>
            </span>
          </h2>
          <p className="text-amber-700/80 max-w-2xl mx-auto text-lg">Handpicked content tailored to your reading preferences</p>
        </motion.div>

        {/* Top Reads Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 relative"
        >
          <SectionHeader 
            title="Top Reads Today" 
            onViewAll={() => handleViewAll('top-reads')}
            className="px-2"
          />
          
          <div className="relative">
            <ScrollButton direction="prev" onClick={() => scrollContainer('prev', 'top-reads')} />
            <div 
              id="top-reads"
              className="flex justify-center gap-8 pb-10 scrollbar-hide scroll-smooth snap-x snap-mandatory px-4 -mx-4 overflow-x-auto"
            >
              {topReads.map((item, index) => (
                <motion.div 
                  key={item.id} 
                  variants={itemVariants}
                  className="flex-none w-80 md:w-96 snap-center mx-auto"
                >
                  <HighlightCard 
                    className="group h-full flex flex-col border border-amber-100 overflow-hidden"
                    delay={index * 0.1}
                  >
                    <div className="relative h-64 md:h-72 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200">
                        <div 
                          className="absolute inset-0 bg-cover bg-center opacity-20" 
                          style={{ backgroundImage: `url(${item.cover})` }}
                        ></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h4 className="text-white font-bold text-xl group-hover:text-amber-300 transition-colors line-clamp-1 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xl text-amber-100/90 text-sm font-medium">{item.author}</p>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center">
                          <span className="relative flex h-2 w-2 mr-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300"></span>
                          </span>
                          Trending
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button className="bg-white text-amber-700 hover:bg-amber-50 px-6 py-2.5 rounded-full font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center">
                          Read Now
                          <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                      <div className="flex items-center text-sm text-amber-700/80">
                        <span className="flex items-center mr-5">
                          <FaBookOpen className="mr-2 text-amber-500" /> 
                          <span className="font-medium">{item.reads} reads</span>
                        </span>
                        <span className="flex items-center">
                          <FaHeart className="mr-2 text-red-400" /> 
                          <span className="font-medium">{item.likes} likes</span>
                        </span>
                      </div>
                      <div className="mt-4 pt-4 border-t border-amber-50">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                            #{item.genre}
                          </span>
                          <button className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center group">
                            Save for later
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </HighlightCard>
                </motion.div>
              ))}
            </div>
            <ScrollButton direction="next" onClick={() => scrollContainer('next', 'top-reads')} />
          </div>
        </motion.div>

        {/* New Writers Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 relative"
        >
          <SectionHeader 
            title="Emerging Voices" 
            onViewAll={() => handleViewAll('new-writers')}
            className="px-2"
          />
          
          <div className="relative">
            <ScrollButton direction="prev" onClick={() => scrollContainer('prev', 'new-writers')} />
            <div 
              id="new-writers"
              className="flex justify-center gap-8 pb-10 scrollbar-hide scroll-smooth snap-x snap-mandatory px-4 -mx-4 overflow-x-auto"
            >
              {newWriters.map((writer, index) => (
                <motion.div 
                  key={writer.id} 
                  variants={itemVariants}
                  className="flex-none w-72 md:w-80 snap-center mx-auto"
                >
                  <HighlightCard 
                    className="p-6 h-full flex flex-col items-center p-6 bg-gradient-to-b from-amber-50 to-white"
                    delay={index * 0.1}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full opacity-70 blur transition duration-300 group-hover:opacity-100 group-hover:duration-200"></div>
                      <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 overflow-hidden border-4 border-white shadow-lg">
                        <div className="w-full h-full flex items-center justify-center text-4xl text-amber-700 font-bold">
                          {writer.name.charAt(0)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="font-bold text-xl text-amber-900 font-['Playfair_Display'] mb-1">{writer.name}</h4>
                      <span className="inline-block text-xs font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-3">
                        {writer.genre}
                      </span>
                      <p className="text-xl text-sm text-amber-800/80 font-medium mb-4 line-clamp-2 min-h-[2.5rem]">
                        {writer.work}
                      </p>
                      <div className="relative inline-flex items-center group">
                        <span className="relative z-10 px-4 py-2 text-sm font-medium text-amber-700 bg-white border border-amber-200 rounded-full shadow-sm hover:bg-amber-50 transition-all duration-200 flex items-center">
                          View Profile
                          <svg className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                        <span className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full opacity-0 group-hover:opacity-30 blur transition duration-300 group-hover:duration-200"></span>
                      </div>
                    </div>
                    
                    <div className="mt-5 pt-4 border-t border-amber-100 w-full text-center">
                      <span className="inline-flex items-center text-xs font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
                        <span className="relative flex h-2 w-2 mr-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Rising Voice
                      </span>
                    </div>
                  </HighlightCard>
                </motion.div>
              ))}
            </div>
            <ScrollButton direction="next" onClick={() => scrollContainer('next', 'new-writers')} />
          </div>
        </motion.div>

        {/* Reader's Pick Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 relative"
        >
          <SectionHeader 
            title="Reader's Choice" 
            onViewAll={() => handleViewAll('readers-pick')}
            className="px-2"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 lg:gap-10 justify-items-center max-w-6xl mx-auto">
            {readersPick.map((item, index) => (
              <motion.div 
                key={item.id} 
                variants={itemVariants}
                className="col-span-1 w-full max-w-md"
              >
                <HighlightCard 
                  className="h-full group overflow-hidden"
                  delay={index * 0.1}
                >
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                      style={{ backgroundImage: `url(${item.cover})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-2.5 py-1 text-xs font-medium text-amber-700 bg-amber-100/80 backdrop-blur-sm rounded-full">
                          #{index + 1} Pick
                        </span>
                        <span className="px-2.5 py-1 text-xs font-medium text-blue-700 bg-blue-100/80 backdrop-blur-sm rounded-full flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Top Rated
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70"></div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <button className="w-full bg-white text-amber-700 hover:bg-amber-50 px-4 py-2.5 rounded-lg font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center justify-center">
                        Read Full Story
                        <svg className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-5 bg-white">
                    <h4 className="font-bold text-xl text-amber-900 mb-3 leading-tight line-clamp-2 group-hover:text-amber-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xl text-sm text-amber-800/80 mb-5 line-clamp-2 min-h-[2.5rem]">
                      {item.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-amber-50">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center text-xs font-medium text-amber-600">
                          <FaHeart className="mr-1.5 text-red-400" />
                          {item.likes}
                        </span>
                        <span className="flex items-center text-xs font-medium text-amber-600">
                          <FaComment className="mr-1.5 text-blue-400" />
                          {item.comments} comments
                        </span>
                      </div>
                      
                      <button className="text-xs font-medium text-amber-700 hover:text-amber-800 flex items-center group">
                        Save
                        <svg className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </HighlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Add smooth scroll behavior for the entire page
const HighlightsWithSmoothScroll = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return <Highlights />;
};

export default HighlightsWithSmoothScroll;
