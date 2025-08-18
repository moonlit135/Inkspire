
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

// Themes configuration
const THEMES = {
  amber: {
    bgFrom: 'from-amber-50',
    bgTo: 'to-amber-100',
    text: 'text-amber-900',
    textMuted: 'text-amber-700',
    border: 'border-amber-100',
    hoverBg: 'hover:bg-amber-50',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-700',
    cardBg: 'bg-gradient-to-br from-amber-50 to-amber-100',
    shadow: 'shadow-amber-200'
  },
  blue: {
    bgFrom: 'from-blue-50',
    bgTo: 'to-blue-100',
    text: 'text-blue-900',
    textMuted: 'text-blue-700',
    border: 'border-blue-100',
    hoverBg: 'hover:bg-blue-50',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-700',
    cardBg: 'bg-gradient-to-br from-blue-50 to-blue-100',
    shadow: 'shadow-blue-200'
  },
  emerald: {
    bgFrom: 'from-emerald-50',
    bgTo: 'to-emerald-100',
    text: 'text-emerald-900',
    textMuted: 'text-emerald-700',
    border: 'border-emerald-100',
    hoverBg: 'hover:bg-emerald-50',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-700',
    cardBg: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
    shadow: 'shadow-emerald-200'
  }
};

const TopWeek = ({
  items = [],
  title = "Top 3 of the Week",
  description = "Celebrating the most captivating works of the week",
  onItemClick,
  showApplaud = true,
  renderItem,
  itemKey = "id",
  theme = "amber"
}) => {
  // State and refs
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);
  const [applauseCounts, setApplauseCounts] = useState({});
  
  // Memoized values
  const currentTheme = useMemo(() => THEMES[theme] || THEMES.amber, [theme]);
  const displayedItems = useMemo(() => items.slice(0, 3), [items]);

  // Handle mobile detection and auto-rotation
  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileView = window.innerWidth < 768; // 768px is Tailwind's 'md' breakpoint
      setIsMobile(isMobileView);
      
      // Reset active index when switching between mobile and desktop
      if (isMobile !== isMobileView) {
        setActiveIndex(0);
      }
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isMobile]);

  // Auto-rotate items on mobile
  useEffect(() => {
    if (!isMobile || displayedItems.length <= 1) return;
    
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % displayedItems.length);
    }, 5000); // 15 seconds
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isMobile, displayedItems.length]);

  // Reset timer on user interaction
  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % displayedItems.length);
      }, 5000);
    }
  }, [displayedItems.length]);

  // Handle item click
  const handleItemClick = useCallback((item) => {
    onItemClick?.(item);
  }, [onItemClick]);

  // Handle applaud
  const handleApplaud = useCallback((id, e) => {
    e?.stopPropagation();
    setApplauseCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  }, []);

  // Render navigation dots for mobile
  const renderDots = useCallback(() => (
    <div className="flex justify-center gap-2 mt-4 md:hidden">
      {displayedItems.map((_, index) => (
        <button
          key={index}
          onClick={() => {
            setActiveIndex(index);
            resetTimer();
          }}
          className={`w-2.5 h-2.5 rounded-full transition-all ${
            activeIndex === index 
              ? 'w-6 bg-amber-500' 
              : 'bg-amber-200 hover:bg-amber-300'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  ), [displayedItems.length, activeIndex, resetTimer]);

  // Render item
  const renderItemContent = useCallback((item, index) => {
    const isActive = activeIndex === index;
    if (isMobile && !isActive) return null;

    return (
      <div 
        key={item[itemKey] || index}
        className={`p-4 sm:p-5 md:p-6 flex-1 flex flex-col h-full transition-all duration-300 rounded-xl sm:rounded-2xl overflow-hidden ${
          !isMobile || index === 0 
            ? `${currentTheme.cardBg} shadow-md sm:shadow-lg` 
            : 'bg-white/90 backdrop-blur-sm hover:bg-white/100 hover:shadow-md transition-all duration-300'
        }`}
        onClick={() => handleItemClick(item)}
      >
        <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-lg sm:text-xl z-10 ${
          !isMobile || index === 0 ? `${currentTheme.badgeBg} ${currentTheme.badgeText}` : 'bg-white/80 text-gray-600'
        }`}>
          {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
        </div>
        
        {item.cover && (
          <div className="relative h-40 mb-4 -mx-6 -mt-6 overflow-hidden">
            <img 
              src={item.cover} 
              alt={item.title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = '/images/placeholder.jpg';
                e.target.onerror = null;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        )}
        
        <div className="flex-1">
          <h3 className={`text-base sm:text-lg md:text-xl font-bold ${currentTheme.text} pr-8 sm:pr-10`}>
            {item.title}
          </h3>
          <p className={`${currentTheme.textMuted} text-sm sm:text-base mt-1`}>
            {item.writer && 'by '}{item.writer}
          </p>
          
          {item.excerpt && (
            <p className={`mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base ${currentTheme.text}/80 italic`}>
              "{item.excerpt}"
            </p>
          )}
        </div>
        
        <div className={`mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4 border-t ${currentTheme.border} flex flex-col gap-3`}>
          <div className="flex justify-between items-center">
            {item.date && (
              <span className={`text-xs sm:text-sm ${currentTheme.textMuted}`}>
                {item.date}
              </span>
            )}
            {showApplaud && (
              <button
                onClick={(e) => handleApplaud(item[itemKey], e)}
                className={`flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 bg-white rounded-full ${currentTheme.hoverBg} transition-colors border ${currentTheme.border} text-xs sm:text-sm`}
              >
                <span className="text-base sm:text-lg">👏</span>
                <span className={`font-medium ${currentTheme.text}`}>
                  {applauseCounts[item[itemKey]]?.toLocaleString() || item.applauseCount?.toLocaleString() || '0'}
                </span>
              </button>
            )}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleItemClick(item);
            }}
            className={`w-full py-2 px-4 rounded-lg font-medium ${currentTheme.badgeBg} ${currentTheme.badgeText} hover:opacity-90 transition-opacity text-sm sm:text-base`}
          >
            Read Now
          </button>
        </div>
      </div>
    );
  }, [activeIndex, currentTheme, handleApplaud, handleItemClick, isMobile, itemKey, showApplaud, applauseCounts]);

  if (!items || items.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className={currentTheme.textMuted}>No items to display</p>
      </div>
    );
  }

  return (
    <div 
      className="px-2 sm:px-4 py-6 md:p-8 relative"
      onTouchStart={resetTimer}
      onMouseEnter={resetTimer}
    >
      {(title || description) && (
        <div className="text-center mb-6 sm:mb-8 md:mb-12 px-2">
          {title && <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${currentTheme.text} mb-2`}>{title}</h2>}
          {description && <p className={`${currentTheme.textMuted} text-sm sm:text-base`}>{description}</p>}
        </div>
      )}
      
      <div className="relative min-h-[300px] sm:min-h-[350px] md:min-h-[400px] w-full max-w-6xl mx-auto">
        {isMobile ? (
          // Mobile view - carousel
          <>
            {displayedItems.map((item, index) => (
              <motion.div
                key={item[itemKey] || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  y: 0,
                  scale: 1,
                  zIndex: activeIndex === index ? 10 : 1
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute w-full h-full"
              >
                {renderItem ? renderItem(item, index) : renderItemContent(item, index)}
              </motion.div>
            ))}
            {renderDots()}
          </>
        ) : (
          // Desktop view - 3 cards side by side with 2nd (left), 1st (middle), 3rd (right)
          <div className="relative w-full h-full flex items-start justify-center gap-4 md:gap-6 lg:gap-8">
            {/* 2nd item - Left */}
            {displayedItems[1] && (
              <motion.div
                key={displayedItems[1][itemKey] || 'left'}
                initial={{ opacity: 0, x: -100, y: 20 }}
                animate={{ 
                  opacity: 1,
                  x: 0,
                  y: 20,
                  scale: 0.95,
                  zIndex: 5
                }}
                transition={{ 
                  duration: 0.4,
                  ease: "easeOut"
                }}
                className="w-full md:w-1/3 transition-all duration-300"
              >
                {renderItem ? renderItem(displayedItems[1], 1) : renderItemContent(displayedItems[1], 1)}
              </motion.div>
            )}
            
            {/* 1st item - Middle (main) */}
            {displayedItems[0] && (
              <motion.div
                key={displayedItems[0][itemKey] || 'middle'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  scale: 1.05,
                  zIndex: 10
                }}
                transition={{ 
                  duration: 0.4,
                  ease: "easeOut"
                }}
                className="w-full md:w-1/3 transition-all duration-300"
              >
                {renderItem ? renderItem(displayedItems[0], 0) : renderItemContent(displayedItems[0], 0)}
              </motion.div>
            )}
            
            {/* 3rd item - Right */}
            {displayedItems[2] && (
              <motion.div
                key={displayedItems[2][itemKey] || 'right'}
                initial={{ opacity: 0, x: 100, y: 20 }}
                animate={{ 
                  opacity: 1,
                  x: 0,
                  y: 20,
                  scale: 0.95,
                  zIndex: 5
                }}
                transition={{ 
                  duration: 0.4,
                  ease: "easeOut"
                }}
                className="w-full md:w-1/3 transition-all duration-300"
              >
                {renderItem ? renderItem(displayedItems[2], 2) : renderItemContent(displayedItems[2], 2)}
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopWeek;
