import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white/15 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="relative inline-block">
            {/* Decorative leaf design */}
            <div className="absolute -inset-4 -z-10">
              <div className="absolute inset-0 bg-[#5d3abf]/10 rounded-full blur-md transform rotate-45 scale-90">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5d3abf]/15 to-transparent rounded-full"></div>
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-[#e9c46a]/20 to-transparent rounded-full"></div>
              </div>
            </div>
            <Link 
              to="/" 
              className="relative text-3xl font-['Mr_De_Haviland'] font-normal text-transparent bg-clip-text bg-gradient-to-r from-white to-[#f0e4ff] cursor-pointer z-10"
              style={{ 
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                transform: 'translateY(2px)',
                letterSpacing: '2px',
                lineHeight: 1
              }}
              onClick={(e) => {
                // Prevent default if already on home page to avoid unnecessary re-renders
                if (location.pathname === '/') {
                  e.preventDefault();
                }
              }}
            >
              MyFictionWorld
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
          <Link 
              to="/" 
              className="text-[#e9c46a] hover:text-white font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/writer" 
              className="text-[#e9c46a] hover:text-white  font-medium transition-colors"
            >
              Writer's Studio
            </Link>
            <Link 
              to="/library" 
              className="text-[#e9c46a] hover:text-white  font-medium transition-colors"
            >
              Library
            </Link>
            <Link 
              to="/echoes" 
              className="text-[#e9c46a] hover:text-white  font-medium transition-colors"
            >
              Echoes & Frames
            </Link>
            <Link 
              to="/showcase" 
              className="text-[#e9c46a] hover:text-white  font-medium transition-colors"
            >
              Showcase & Challenges
            </Link>
          </nav>

          {/* Search and Login */}
          <div className="flex items-center space-x-4">
            <div className="relative" ref={searchRef}>
              <button 
                onClick={handleSearchToggle}
                className="text-[#e9c46a] hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Search"
              >
                <FaSearch className="w-5 h-5" />
              </button>
              
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                  <div className="relative">
                    <input
                      id="search-input"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search stories, poems, authors..."
                      className="w-full py-3 px-4 pr-10 text-gray-800 focus:outline-none"
                    />
                    <button 
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-600"
                      onClick={handleSearchToggle}
                    >
                      <FaTimes />
                    </button>
                  </div>
                  {/* Search results would go here */}
                  {searchQuery && (
                    <div className="max-h-60 overflow-y-auto py-2">
                      <div className="px-4 py-2 text-sm text-gray-500">
                        Search results for "{searchQuery}"
                      </div>
                      {/* Sample search result items */}
                      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <div className="font-medium">Sample Story Title</div>
                        <div className="text-sm text-gray-500">By Author Name</div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <button className="bg-white/20 hover:bg-white/30 text-white px-5 py-2 rounded-full font-medium flex items-center space-x-2 transition-colors">
              <FaUser className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;