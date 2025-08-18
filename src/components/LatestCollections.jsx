import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

/**
 * Reusable LatestCollections component
 * @param {Object} props - Component props
 * @param {Array} props.collections - Array of collection items to display
 * @param {string} [props.title='Latest Collections'] - Section title
 * @param {string} [props.theme='amber'] - Color theme (amber, blue, emerald)
 * @param {number} [props.itemsPerPage=3] - Number of items to show per page
 * @param {function} [props.renderItem] - Custom render function for items
 * @param {string} [props.itemKey='id'] - Key to use for React keys
 */
const LatestCollections = ({
  collections = [],
  title = 'Latest Collections',
  theme = 'amber',
  itemsPerPage = 3,
  renderItem,
  itemKey = 'id'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Theme configuration
  const themes = {
    amber: {
      text: 'text-amber-700',
      button: 'text-amber-600 hover:text-amber-800',
      bg: 'from-white to-amber-50',
    },
    blue: {
      text: 'text-blue-700',
      button: 'text-blue-600 hover:text-blue-800',
      bg: 'from-white to-blue-50',
    },
    emerald: {
      text: 'text-emerald-700',
      button: 'text-emerald-600 hover:text-emerald-800',
      bg: 'from-white to-emerald-50',
    }
  };
  
  const currentTheme = themes[theme] || themes.amber;
  
  // Show only first 6 collections by default
  const displayedCollections = collections.slice(0, 6);
  const itemWidth = 100 / 3; // Always show 3 items at a time
  const gap = 1.5; // gap-6 = 1.5rem = 24px

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= displayedCollections.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? displayedCollections.length - 3 : prevIndex - 1
    );
  };

  // Default item renderer
  const defaultRenderItem = (item) => (
    <div key={item[itemKey]} className="w-full">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div className="relative pb-2/3 flex-shrink-0">
          <img
            src={item.cover || 'https://via.placeholder.com/300x200?text=No+Cover'}
            alt={item.title || 'Read'}
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-bold text-lg">{item.title || 'Untitled Collection'}</h3>
            {item.itemCount !== undefined && (
              <p className="text-amber-200 text-sm">{item.itemCount} items</p>
            )}
          </div>
        </div>
        <div className="p-4 flex-1 flex flex-col">
          {item.description && (
            <p className="text-gray-600 mb-4 flex-1">{item.description}</p>
          )}
          <div className="flex items-center justify-between mt-auto">
            <div>
              <h4 className="font-medium text-gray-900">{item.title || 'Untitled'}</h4>
              {item.author && (
                <p className="text-sm text-gray-500">By {item.author}</p>
              )}
            </div>
            <button className={`text-sm font-medium ${currentTheme.button} px-3 py-1 rounded-md shadow-md hover:shadow-lg transition-shadow`}>
              Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (displayedCollections.length === 0) {
    return (
      <div className="py-12 text-center text-gray-500">
        No collections to display
      </div>
    );
  }

  return (
    <div className={`py-16 bg-gradient-to-b ${currentTheme.bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-2xl font-bold ${currentTheme.text}`}>{title}</h2>
          {displayedCollections.length > itemsPerPage && (
            <div className="flex space-x-2">
              <button 
                onClick={prevSlide}
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-transform hover:scale-110"
                aria-label="Previous items"
              >
                <FaChevronLeft className={`${currentTheme.button}`} size={16} />
              </button>
              <button 
                onClick={nextSlide}
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-transform hover:scale-110"
                aria-label="Next items"
              >
                <FaChevronRight className={`${currentTheme.button}`} size={16} />
              </button>
            </div>
          )}
        </div>

        <div className="relative overflow-hidden">
          <div className="w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / 3)}% + ${currentIndex * gap * 0.5}rem))`,
                gap: `${gap}rem`,
                padding: `0 ${gap/2}rem`
              }}
            >
              {displayedCollections.map((item, index) => (
                <div 
                  key={item[itemKey] || index} 
                  className="flex-shrink-0"
                  style={{ 
                    width: `calc(${100/3}% - ${gap * 2/3}rem)`,
                    minWidth: 0
                  }}
                >
                  {renderItem ? renderItem(item) : defaultRenderItem(item)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LatestCollections.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  theme: PropTypes.oneOf(['amber', 'blue', 'emerald']),
  itemsPerPage: PropTypes.number,
  renderItem: PropTypes.func,
  itemKey: PropTypes.string
};

export default LatestCollections;
