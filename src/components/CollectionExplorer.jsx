import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const defaultEasterEggQuotes = [
  "Every story is a journey. Enjoy the ride.",
  "The right book can change everything.",
  "In the world of words, you're never alone.",
  "Turn the page, discover magic.",
  "Books are the quietest and most constant of friends.",
  "Reading gives us someplace to go when we have to stay where we are.",
  "The more that you read, the more things you will know."
];

/**
 * Reusable CollectionExplorer component
 * @param {Object} props - Component props
 * @param {Array} props.collections - Array of collection items to display
 * @param {string} [props.title='Explore Collections'] - Section title
 * @param {number} [props.initialVisible=9] - Initial number of items to show (should be a multiple of 3 for grid)
 * @param {number} [props.loadMoreCount=9] - Number of additional items to load on 'Load More'
 * @param {Array} [props.customQuotes] - Custom array of easter egg quotes
 * @param {function} [props.onItemClick] - Callback when an item is clicked
 * @param {string} [props.theme='amber'] - Color theme (amber, blue, emerald)
 * @param {boolean} [props.showLoadMore=true] - Whether to show the Load More button
 */
const CollectionExplorer = ({
  collections = [],
  title = 'Explore Collections',
  initialVisible = 9,
  loadMoreCount = 9,
  customQuotes = [],
  onItemClick,
  theme = 'amber',
  showLoadMore = true
}) => {
  const [visibleCount, setVisibleCount] = useState(initialVisible);
  const [activePreview, setActivePreview] = useState(null);
  const [showQuote, setShowQuote] = useState(null);
  
  // Combine default and custom quotes
  const easterEggQuotes = [...defaultEasterEggQuotes, ...customQuotes];
  
  // Get collections for display based on visibleCount
  const displayedCollections = collections.slice(0, visibleCount);
  
  // Theme configuration
  const themes = {
    amber: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      button: 'bg-amber-100 hover:bg-amber-200 text-amber-800',
      border: 'border-amber-200'
    },
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      button: 'bg-blue-100 hover:bg-blue-200 text-blue-800',
      border: 'border-blue-200'
    },
    emerald: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      button: 'bg-emerald-100 hover:bg-emerald-200 text-emerald-800',
      border: 'border-emerald-200'
    }
  };
  
  const currentTheme = themes[theme] || themes.amber;

  // Show random easter egg quote
  const showRandomQuote = () => {
    if (Math.random() > 0.7) { // 30% chance to show quote
      const randomIndex = Math.floor(Math.random() * easterEggQuotes.length);
      setShowQuote(easterEggQuotes[randomIndex]);
      setTimeout(() => setShowQuote(null), 3000);
    }
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + loadMoreCount, collections.length));
    showRandomQuote();  
  };
  
  const handleViewLess = () => {
    setVisibleCount(initialVisible);
  };

  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    } else {
      setActivePreview(item);
    }
  };
  
  const handleClosePreview = () => {
    setActivePreview(null);
  };

  return (
    <div className={`py-12 ${currentTheme.bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold mb-8 text-center ${currentTheme.text}`}>
          {title}
        </h2>
        
        {/* Easter Egg Quote */}
        <AnimatePresence>
          {showQuote && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`text-center mb-8 italic ${currentTheme.text} opacity-80`}
            >
              "{showQuote}"
            </motion.div>
          )}
        </AnimatePresence>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCollections.map((collection, index) => (
            <motion.div
              key={collection.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-100"
              onClick={() => handleItemClick(collection)}
            >
              <div className="h-48 bg-gray-200 relative">
                <img
                  src={collection.cover || 'https://via.placeholder.com/400x200?text=No+Cover'}
                  alt={collection.title || 'Collection'}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x200?text=No+Image';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-xl">
                    {collection.title || 'Untitled Collection'}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 line-clamp-2">
                  {collection.description || 'No description available.'}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {collection.author || 'Unknown Author'}
                  </span>
                  <button className="text-sm font-medium text-amber-600 hover:underline">
                    Read
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More/Less Buttons */}
        <div className="mt-10 text-center space-x-4">
          {showLoadMore && visibleCount < collections.length && (
            <button
              onClick={handleLoadMore}
              className={`${currentTheme.button} font-medium py-2 px-6 rounded-full transition-colors duration-300`}
            >
              View More
            </button>
          )}
          {showLoadMore && visibleCount > initialVisible && (
            <button
              onClick={handleViewLess}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-full transition-colors duration-300"
            >
              View Less
            </button>
          )}
        </div>

        {/* Preview Modal */}
        <AnimatePresence>
          {activePreview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={handleClosePreview}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="h-64 bg-gray-200 relative">
                  <img
                    src={activePreview.cover || 'https://via.placeholder.com/800x400?text=No+Cover'}
                    alt={activePreview.title || 'Collection'}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-2xl font-bold text-white">
                      {activePreview.title || 'Untitled Collection'}
                    </h2>
                    <p className="text-amber-200 mt-1">
                      {activePreview.author || 'Unknown Author'}
                    </p>
                  </div>
                  <button
                    onClick={handleClosePreview}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 mb-6">
                      {activePreview.description || 'No description available.'}
                    </p>
                    {activePreview.itemCount && (
                      <p className="text-sm text-gray-500">
                        {activePreview.itemCount} items in this collection
                      </p>
                    )}
                  </div>
                  <div className="mt-8 flex justify-end space-x-3">
                    <button
                      onClick={handleClosePreview}
                      className={`${currentTheme.button} font-medium py-2 px-6 rounded-full transition-colors duration-300`}
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        // Handle view collection action
                        handleClosePreview();
                      }}
                      className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
                    >
                      Read Now
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

CollectionExplorer.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      author: PropTypes.string,
      cover: PropTypes.string,
      description: PropTypes.string,
      itemCount: PropTypes.number,
    })
  ).isRequired,
  title: PropTypes.string,
  initialVisible: PropTypes.number,
  loadMoreCount: PropTypes.number,
  customQuotes: PropTypes.arrayOf(PropTypes.string),
  onItemClick: PropTypes.func,
  theme: PropTypes.oneOf(['amber', 'blue', 'emerald']),
  showLoadMore: PropTypes.bool
};

export default CollectionExplorer;
