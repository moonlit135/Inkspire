import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable TopWeek Component
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of items to display
 * @param {string} [props.title="Top 3 of the Week"] - Section title
 * @param {string} [props.description="Celebrating the most captivating works of the week"] - Section description
 * @param {function} [props.onItemClick] - Callback when an item is clicked
 * @param {boolean} [props.showApplaud=true] - Whether to show the applaud button
 * @param {function} [props.renderItem] - Custom render function for items
 * @param {string} [props.itemKey="id"] - Key to use for React keys
 * @param {string} [props.theme="amber"] - Color theme (amber, blue, emerald, etc.)
 */
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
  // Memoize themes to prevent recreation on every render
  const themes = useMemo(() => ({
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
  }), []);

  // Memoize current theme to prevent recalculation
  const currentTheme = useMemo(() => themes[theme] || themes.amber, [theme, themes]);
  const [applauseCounts, setApplauseCounts] = useState({});

  // Initialize applause counts only once when component mounts
  // or when items change significantly
  // Create a stable reference for item keys
  const itemKeys = useMemo(() => items.map(item => item[itemKey]), [items, itemKey]);

  useEffect(() => {
    // Only update if items have actually changed
    const itemsChanged = JSON.stringify(itemKeys) !== 
                         JSON.stringify(Object.keys(applauseCounts));
    
    if (itemsChanged) {
      const initialCounts = {};
      items.forEach(item => {
        // Only update if we don't already have a count for this item
        if (applauseCounts[item[itemKey]] === undefined) {
          initialCounts[item[itemKey]] = item.applauseCount || 0;
        } else {
          initialCounts[item[itemKey]] = applauseCounts[item[itemKey]];
        }
      });
      
      // Only update state if there are actual changes
      if (JSON.stringify(initialCounts) !== JSON.stringify(applauseCounts)) {
        setApplauseCounts(initialCounts);
      }
    }
  }, [items, itemKey, itemKeys, applauseCounts]);

  const handleApplaud = (id, e) => {
    e?.stopPropagation();
    setApplauseCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  // Memoize click handlers to prevent recreation on every render
  const handleItemClick = useCallback((item) => {
    onItemClick?.(item);
  }, [onItemClick]);

  // Memoize default item renderer to prevent recreation on every render
  const renderDefaultItem = useCallback((item, index) => (
    <div 
      className={`p-6 flex-1 flex flex-col h-full transition-all duration-300 rounded-2xl overflow-hidden ${
        index === 0 
          ? `${currentTheme.cardBg} shadow-lg` 
          : 'bg-white/90 backdrop-blur-sm hover:bg-white/100 hover:shadow-md transition-all duration-300'
      }`}
      onClick={() => handleItemClick(item)}
    >
      <div className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-xl z-10 ${
        index === 0 ? `${currentTheme.badgeBg} ${currentTheme.badgeText}` : 'bg-white/80 text-gray-600'
      }`}>
        {item.medal || '📖'}
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
        <h3 className={`text-xl font-bold ${currentTheme.text} pr-10`}>{item.title}</h3>
        <p className={`${currentTheme.textMuted} mt-1`}>
          {item.writer && 'by '}{item.writer}
        </p>
        
        {item.excerpt && (
          <p className={`mt-4 ${currentTheme.text}/80 italic`}>"{item.excerpt}"</p>
        )}
      </div>
      
      <div className={`mt-6 pt-4 border-t ${currentTheme.border} flex justify-between items-center`}>
        {item.date && (
          <span className={`text-sm ${currentTheme.textMuted}`}>
            {item.date}
          </span>
        )}
        {showApplaud && (
          <button
            onClick={(e) => handleApplaud(item[itemKey], e)}
            className={`flex items-center gap-1 px-3 py-1 bg-white rounded-full ${currentTheme.hoverBg} transition-colors border ${currentTheme.border}`}
          >
            <span className="text-lg">👏</span>
            <span className={`text-sm font-medium ${currentTheme.text}`}>
              {applauseCounts[item[itemKey]]?.toLocaleString() || item.applauseCount?.toLocaleString() || '0'}
            </span>
          </button>
        )}
      </div>
    </div>
  ), [currentTheme, handleApplaud, handleItemClick, showApplaud, itemKey]);

  // Memoize the first 3 items to prevent recalculation on every render
  const displayedItems = useMemo(() => items.slice(0, 3), [items]);

  if (!items || items.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className={currentTheme.textMuted}>No items to display</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8">
      {(title || description) && (
        <div className="text-center mb-8 md:mb-12">
          {title && <h2 className={`text-3xl md:text-4xl font-bold ${currentTheme.text} mb-2`}>{title}</h2>}
          {description && <p className={currentTheme.textMuted}>{description}</p>}
        </div>
      )}
      
      <div className="relative min-h-[400px] md:min-h-[450px] w-full max-w-6xl mx-auto">
        {displayedItems.map((item, index) => (
          <motion.div
            key={item[itemKey] || index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: index === 0 ? 0 : 80,
              x: index === 0 ? '0%' : index === 1 ? '-10%' : '10%',
              scale: index === 0 ? 1.05 : 0.95,
              zIndex: 10 - index
            }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            className={`absolute w-full md:w-1/3 transition-all duration-300 ${
              index === 0 
                ? 'left-1/2 -translate-x-1/2 z-10' 
                : index === 1 
                  ? 'left-0 z-5' 
                  : 'right-0 z-5'
            }`}
          >
            {renderItem ? renderItem(item, index) : renderDefaultItem(item, index)}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopWeek;
