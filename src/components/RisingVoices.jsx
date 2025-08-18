import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * Reusable RisingVoices component
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of items to display
 * @param {string} [props.title='Rising Voices'] - Section title
 * @param {string} [props.subtitle='New writers gaining notice in our community'] - Section subtitle
 * @param {string} [props.theme='amber'] - Color theme (amber, blue, emerald)
 * @param {function} [props.renderItem] - Custom render function for items
 * @param {string} [props.badgeText='🌟 Rising Star'] - Badge text to display on items
 * @param {string} [props.itemKey='id'] - Key to use for React keys
 */
const RisingVoices = ({
  items = [],
  title = 'Rising Voices',
  subtitle = 'New writers gaining notice in our community',
  theme = 'amber',
  renderItem,
  badgeText = '🌟 Rising Star',
  itemKey = 'id'
}) => {
  // Theme configuration
  const themes = {
    amber: {
      bg: 'bg-amber-50',
      text: 'text-amber-900',
      textMuted: 'text-amber-700',
      cardBg: 'bg-white',
      border: 'border-amber-200',
      badgeBg: 'bg-gradient-to-r from-amber-400 to-amber-500',
      badgeText: 'text-white',
      button: 'text-amber-600 hover:text-amber-800',
      glow: 'shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]'
    },
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-900',
      textMuted: 'text-blue-700',
      cardBg: 'bg-white',
      border: 'border-blue-200',
      badgeBg: 'bg-gradient-to-r from-blue-400 to-blue-500',
      badgeText: 'text-white',
      button: 'text-blue-600 hover:text-blue-800',
      glow: 'shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]'
    },
    emerald: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-900',
      textMuted: 'text-emerald-700',
      cardBg: 'bg-white',
      border: 'border-emerald-200',
      badgeBg: 'bg-gradient-to-r from-emerald-400 to-emerald-500',
      badgeText: 'text-white',
      button: 'text-emerald-600 hover:text-emerald-800',
      glow: 'shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]'
    }
  };

  const currentTheme = themes[theme] || themes.amber;

  // Default item renderer
  const defaultRenderItem = (item, index) => (
    <motion.div
      key={item[itemKey]}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group h-full"
    >
      <div className={`${currentTheme.cardBg} rounded-2xl p-6 h-full flex flex-col transition-all duration-300 ${currentTheme.glow} border ${currentTheme.border} hover:-translate-y-1`}>
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="relative mb-4">
            <div className="relative group">
              <img 
                src={item.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(item.name || 'U') + '&background=random'}
                alt={item.name || 'Writer'}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name || 'U')}&background=random`;
                }}
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"></div>
            </div>
            
            {/* Badge */}
            {badgeText && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <span className={`${currentTheme.badgeBg} ${currentTheme.badgeText} text-xs font-semibold px-3 py-1 rounded-full shadow-md whitespace-nowrap`}>
                  {badgeText}
                </span>
              </div>
            )}
          </div>
          
          {/* Writer Info */}
          <div className="mt-6">
            {item.name && (
              <h3 className={`font-bold text-lg ${currentTheme.text} mb-1`}>
                {item.name}
              </h3>
            )}
            {item.role && (
              <p className="text-sm text-gray-500 mb-4">{item.role}</p>
            )}
          </div>
          
          {/* Excerpt */}
          {(item.excerpt || item.content) && (
            <div className="mt-2 flex-1 w-full">
              <p className={`text-sm ${currentTheme.textMuted} italic line-clamp-3`}>
                "{item.excerpt || item.content}"
              </p>
            </div>
          )}
        </div>
        
        {/* Footer */}
        {item.footer && (
          <div className="mt-4 pt-3 border-t border-opacity-20 border-gray-300 text-center">
            <p className="text-xs text-gray-500">{item.footer}</p>
          </div>
        )}
      </div>
    </motion.div>
  );

  if (!items || items.length === 0) {
    return (
      <div className="py-12 px-4 text-center">
        <p className="text-gray-500">No items to display</p>
      </div>
    );
  }

  return (
    <div className={`py-12 px-4 ${currentTheme.bg}`}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className={`text-4xl font-bold ${currentTheme.text} mb-2`}>{title}</h2>}
            {subtitle && <p className={currentTheme.textMuted}>{subtitle}</p>}
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => 
            renderItem ? (
              renderItem(item, index, currentTheme)
            ) : (
              defaultRenderItem(item, index)
            )
          )}
        </div>
      </div>
    </div>
  );
};

RisingVoices.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  theme: PropTypes.oneOf(['amber', 'blue', 'emerald']),
  renderItem: PropTypes.func,
  badgeText: PropTypes.string,
  itemKey: PropTypes.string
};

export default RisingVoices;
